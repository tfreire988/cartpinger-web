/**
 * CartPinger — Vercel serverless function
 * POST /api/waitlist  (rewrite from /waitlist.php via vercel.json)
 *
 * Stores subscriber in Resend Audience + sends notification email.
 * Required env vars in Vercel dashboard:
 *   RESEND_API_KEY       — crea cuenta en resend.com (gratis)
 *   RESEND_AUDIENCE_ID   — ID del audience donde guardar los contactos
 *   NOTIFY_EMAIL         — tu email donde quieres recibir el aviso
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  // Parse body (Vercel auto-parses JSON if Content-Type is application/json)
  const email = (req.body?.email ?? "").trim().toLowerCase();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(422).json({ ok: false, error: "Email inválido" });
  }

  const key       = process.env.RESEND_API_KEY ?? "";
  const audience  = process.env.RESEND_AUDIENCE_ID ?? "";
  const notifyTo  = process.env.NOTIFY_EMAIL ?? "";

  if (!key) {
    // No Resend key configured — still return ok so the form UX works
    console.warn("[waitlist] RESEND_API_KEY not set");
    return res.status(200).json({ ok: true });
  }

  const headers = {
    "Authorization": `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  // 1. Add to Resend Audience (deduplicates automatically)
  if (audience) {
    try {
      await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, unsubscribed: false }),
      });
    } catch (e) {
      console.error("[waitlist] Resend audience error:", e);
    }
  }

  // 2. Notify owner
  if (notifyTo) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers,
        body: JSON.stringify({
          from: "CartPinger Waitlist <info@cartpinger.com>",
          to: [notifyTo],
          subject: `Nueva suscripción: ${email}`,
          text: `Alguien se ha suscrito al waitlist de CartPinger.\n\nEmail: ${email}\nFecha: ${new Date().toISOString()}\n\nVer todos los contactos → https://resend.com/audiences`,
        }),
      });
    } catch (e) {
      console.error("[waitlist] Resend notify error:", e);
    }
  }

  return res.status(200).json({ ok: true });
}
