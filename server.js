/**
 * CartPinger — local dev server
 * Serves static files + handles POST /waitlist.php
 * Usage: node server.js  (port 3333)
 */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3333;
const STORE = path.join(__dir, "waitlist.json");
const MAX = 500;

// Files that must never be served over HTTP
const BLOCKED = new Set(["waitlist.json", "server.js", "waitlist.php", ".env"]);

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map(); // ip → { count, resetAt }
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".jsx":  "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".woff2":"font/woff2",
};

function json(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function handleWaitlist(req, res) {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    let email = "";
    try {
      const data = JSON.parse(body);
      email = (data.email ?? "").trim().toLowerCase();
    } catch {
      email = (new URLSearchParams(body).get("email") ?? "").trim().toLowerCase();
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return json(res, 422, { ok: false, error: "Email inválido" });
    }

    // Read existing
    let entries = [];
    if (fs.existsSync(STORE)) {
      const lines = fs.readFileSync(STORE, "utf8").split("\n").filter(Boolean);
      entries = lines.map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
    }

    if (entries.length >= MAX) return json(res, 503, { ok: false, error: "Lista completa" });

    // Idempotent
    if (entries.some((e) => e.email === email)) {
      return json(res, 200, { ok: true, duplicate: true });
    }

    const record = { email, ip: req.socket.remoteAddress, ts: new Date().toISOString() };
    fs.appendFileSync(STORE, JSON.stringify(record) + "\n");

    // Email notification via Resend (optional — set env vars to activate)
    const resendKey = process.env.RESEND_API_KEY ?? "";
    const notifyTo  = process.env.NOTIFY_EMAIL   ?? "";
    if (resendKey && notifyTo) {
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "CartPinger Waitlist <waitlist@cartpinger.com>",
          to: [notifyTo],
          subject: `Nueva suscripción waitlist: ${email}`,
          text: `Alguien se ha suscrito al waitlist de CartPinger.\n\nEmail: ${email}\nFecha: ${record.ts}\n\nTotal: ${entries.length + 1} suscriptores`,
        }),
      }).catch(() => {}); // fire-and-forget, no bloquea la respuesta
    }

    json(res, 200, { ok: true });
  });
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

  if (req.url === "/waitlist.php" && req.method === "POST") {
    const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() ?? req.socket.remoteAddress ?? "";
    if (isRateLimited(ip)) {
      return json(res, 429, { ok: false, error: "Demasiados intentos. Espera unos minutos." });
    }
    return handleWaitlist(req, res);
  }

  // Static file serving
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/" || urlPath === "") urlPath = "/WhatsCom Landing.html";

  const filePath = path.join(__dir, decodeURIComponent(urlPath));
  const baseName = path.basename(filePath);

  // Security: prevent directory traversal and block sensitive files
  if (!filePath.startsWith(__dir) || BLOCKED.has(baseName)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`CartPinger dev server → http://localhost:${PORT}`));
