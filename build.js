/**
 * CartPinger — JSX build script
 * Transpiles the 4 JSX source files → dist/bundle.js
 * Generates dist/index.html that loads the bundle (no Babel CDN, instant load)
 *
 * Usage: npm run build
 */

import { transformSync } from "@babel/core";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dir, "dist");

mkdirSync(DIST, { recursive: true });

const JSX_FILES = [
  "components-top.jsx",
  "components-mid.jsx",
  "components-bottom.jsx",
  "app.jsx",
];

const JSX_FILES_EN = [
  "components-top.en.jsx",
  "components-mid.en.jsx",
  "components-bottom.en.jsx",
  "app.en.jsx",
];

console.log("Building CartPinger landing…\n");

const parts = JSX_FILES.map((file) => {
  const src = readFileSync(path.join(__dir, file), "utf8");
  const { code } = transformSync(src, {
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    filename: file,
    sourceMaps: false,
  });
  console.log(`  ✓ ${file}`);
  return `/* ── ${file} ── */\n${code}`;
});

const bundle =
  `/* CartPinger landing — production bundle */\n"use strict";\n\n` +
  parts.join("\n\n");

writeFileSync(path.join(DIST, "bundle.js"), bundle);
console.log(`\n  bundle.js  (${(bundle.length / 1024).toFixed(1)} KB)`);

// ── English bundle ──
console.log("\nBuilding English landing…\n");
const partsEn = JSX_FILES_EN.map((file) => {
  const src = readFileSync(path.join(__dir, file), "utf8");
  const { code } = transformSync(src, {
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    filename: file,
    sourceMaps: false,
  });
  console.log(`  ✓ ${file}`);
  return `/* ── ${file} ── */\n${code}`;
});
const bundleEn =
  `/* CartPinger landing EN — production bundle */\n"use strict";\n\n` +
  partsEn.join("\n\n");
const DIST_EN = path.join(DIST, "en");
mkdirSync(DIST_EN, { recursive: true });
writeFileSync(path.join(DIST_EN, "bundle.js"), bundleEn);
console.log(`\n  en/bundle.js  (${(bundleEn.length / 1024).toFixed(1)} KB)`);

// Copy static assets to dist/
const STATIC = ["styles.css", "WhatsCom Landing.html", "privacy.html", "terms.html", "sitemap.xml", "robots.txt", "og-image.svg", "logo.png"];
for (const f of STATIC) {
  try {
    const content = readFileSync(path.join(__dir, f));
    writeFileSync(path.join(DIST, f), content);
    if (!["styles.css", "WhatsCom Landing.html"].includes(f)) console.log(`  ${f}`);
  } catch { /* optional */ }
}

// Generate production HTML — replace CDN Babel + JSX tags with compiled bundle
const devHtml = readFileSync(path.join(__dir, "WhatsCom Landing.html"), "utf8");

// Split at the first text/babel script tag to get the "before" portion
const babelTagIndex = devHtml.indexOf('<script type="text/babel"');
const beforeScripts = devHtml.slice(0, babelTagIndex).trimEnd();

// Also remove the Babel standalone script from beforeScripts
const cleanHead = beforeScripts.replace(/<script[^>]*babel\.min\.js[^>]*><\/script>\s*/g, "");

const prodHtml =
  cleanHead +
  `\n\n  <script src="bundle.js"></script>\n</body>\n</html>\n`;

writeFileSync(path.join(DIST, "index.html"), prodHtml);
console.log("  index.html (production)");

// Generate English production HTML
const devHtmlEn = readFileSync(path.join(__dir, "CartPinger EN Landing.html"), "utf8");
const babelTagIndexEn = devHtmlEn.indexOf('<script type="text/babel"');
const beforeScriptsEn = devHtmlEn.slice(0, babelTagIndexEn).trimEnd();
const cleanHeadEn = beforeScriptsEn
  .replace(/<script[^>]*babel\.min\.js[^>]*><\/script>\s*/g, "")
  .replace('href="../styles.css"', 'href="../styles.css"');
const prodHtmlEn =
  cleanHeadEn +
  `\n\n  <script src="bundle.js"></script>\n</body>\n</html>\n`;
writeFileSync(path.join(DIST_EN, "index.html"), prodHtmlEn);
console.log("  en/index.html (production)");

// Copy .htaccess for deployment (waitlist.php not needed — Vercel uses api/waitlist.js)
for (const f of [".htaccess"]) {
  try {
    const content = readFileSync(path.join(__dir, f));
    writeFileSync(path.join(DIST, f), content);
    console.log(`  ${f}`);
  } catch {
    // optional files
  }
}

console.log("\nDone → dist/");
console.log("Deploy the dist/ folder to your server.");
