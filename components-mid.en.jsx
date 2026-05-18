/* CartPinger — Middle sections (EN): Steps, Bento, TechSection, Calculator */

const Icon2 = window.WCTop?.Icon;

/* ---------------- Steps ---------------- */
function Steps() {
  return (
    <section className="section" id="producto">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Three steps. One-time payment. No SaaS.</h2>
          <p className="lede">Meta Business onboarding is where other plugins leave you stranded. Not here.</p>
        </div>
        <div className="steps">
          <div className="surface step reveal" data-delay="100">
            <div className="step-no">STEP 01</div>
            <h3>Install the plugin</h3>
            <div className="step-visual">
              <div className="wp-mock">
                <div className="wp-row">
                  <div className="wp-dot" style={{ background: "#21759b" }}/>
                  <div className="wp-name">WooCommerce</div>
                  <div className="wp-status">Active</div>
                </div>
                <div className="wp-row active">
                  <div className="wp-dot"/>
                  <div className="wp-name">CartPinger</div>
                  <div className="wp-status">Activate →</div>
                </div>
                <div className="wp-row">
                  <div className="wp-dot" style={{ background: "#7c3aed" }}/>
                  <div className="wp-name">Yoast SEO</div>
                  <div className="wp-status">Active</div>
                </div>
              </div>
            </div>
            <p>From the official WordPress.org repository. Free. Compatible with any theme.</p>
            <div className="step-foot"><span className="chip">5 min</span></div>
          </div>

          <div className="surface step featured reveal" data-delay="200">
            <div className="step-no" style={{ color: "var(--wa)" }}>STEP 02 · KEY DIFFERENTIATOR</div>
            <h3>Connect your WhatsApp Business</h3>
            <div className="step-visual">
              <div className="wz">
                <div className="wz-bar">
                  <span className="done"/><span className="done"/><span className="cur"/><span/><span/>
                </div>
                <div className="wz-step"><span className="ic"><Icon2.Check width="7" height="7"/></span> Create Meta Business Manager</div>
                <div className="wz-step"><span className="ic"><Icon2.Check width="7" height="7"/></span> Link phone number</div>
                <div className="wz-step cur"><span className="ic">3</span> Verifying business with Meta…</div>
                <div className="wz-step pending"><span className="ic">4</span> Generate Access Token</div>
              </div>
            </div>
            <p><a href="https://github.com/tfreire988/cartpinger-web/blob/main/DOCUMENTATION.md" target="_blank" rel="noopener" style={{ color: "var(--mint)", textDecoration: "underline" }}>Step-by-step documentation on GitHub</a>. Stuck? Direct support.</p>
            <div className="step-foot">
              <span className="chip chip-wa">30 min</span>
              <span className="chip">Meta verifies in 1–7 days</span>
            </div>
          </div>

          <div className="surface step reveal" data-delay="300">
            <div className="step-no">STEP 03</div>
            <h3>Enable the flows</h3>
            <div className="step-visual">
              <div className="toggles">
                <div className="tg on"><span className="sw"/> Abandoned cart</div>
                <div className="tg on"><span className="sw"/> Chat widget</div>
              </div>
            </div>
            <p>Two toggles in your WordPress panel. Live in minutes, no code required.</p>
            <div className="step-foot"><span className="chip">5 min</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Bento ---------------- */
function Bento() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Everything you need to recover carts via WhatsApp.</h2>
          <p className="lede">A native PHP plugin. No paid external dependencies. Auditable code on GitHub from day one.</p>
        </div>
        <div className="bento">

          {/* 1. Cart recovery — big */}
          <div className="surface b b-6-2 reveal" data-delay="60">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h3>Abandoned cart recovery</h3>
              <span className="chip chip-wa">Core</span>
            </div>
            <div className="bento-conv">
              <div className="conv-row">
                <span className="stamp mono">+1 hour</span>
                <div className="conv-bubble">
                  Hey Ana! You left items in your cart at Demo Store 🛒
                  <br/><br/>
                  Your order is still available. Recover it here:
                  <span style={{ display: "block", fontFamily: "var(--font-mono,'Geist Mono',monospace)", fontSize: 11, color: "#67e8f9", marginTop: 4 }}>store.demo/?cartpinger_recover=a3f…</span>
                  <span className="time">14:32 ✓✓</span>
                </div>
              </div>
              <div className="conv-row" style={{ alignSelf: "flex-end", width: "100%", justifyContent: "flex-end" }}>
                <span style={{ fontSize: 11, color: "var(--text-3)", display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--cyan)" }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Delivered · read 14:33
                </span>
              </div>
            </div>
            <ul className="feat-bullets">
              <li>WP-Cron detects abandonment 1 hour later — exact timing, configurable</li>
              <li>64-char recovery token — <span className="mono" style={{ fontSize: 12 }}>bin2hex(random_bytes(32))</span>, single-use</li>
              <li>Restores the cart with one tap and redirects to checkout</li>
              <li>DB state: <span className="mono" style={{ fontSize: 12 }}>pending → sent → recovered</span></li>
            </ul>
          </div>

          {/* 2. Floating widget */}
          <div className="surface b b-6-1 reveal" data-delay="120">
            <h3>Floating WhatsApp widget</h3>
            <div className="widget-mock">
              <div className="wdg-preview">
                <div className="wdg-bubble">Any questions? Chat with us</div>
                <div className="wdg-fab">
                  <Icon2.Whatsapp width="20" height="20" style={{ color: "#04220f" }}/>
                </div>
              </div>
            </div>
            <p>Floating chat button on your store. Native JS and CSS — zero dependencies. Configurable from the CartPinger settings panel.</p>
          </div>

          {/* 3. Delivery logs via webhook */}
          <div className="surface b b-6-1 reveal" data-delay="180">
            <h3>Real-time delivery logs</h3>
            <div className="logs-mock" role="img" aria-label="CartPinger — real-time delivery status log via Meta webhook">
              <div className="log-row"><span className="log-stamp mono">14:32:08</span><span className="log-id mono">wamid_4827</span><span className="log-stat ok">DELIVERED</span></div>
              <div className="log-row"><span className="log-stamp mono">14:32:14</span><span className="log-id mono">wamid_4827</span><span className="log-stat read">READ</span></div>
              <div className="log-row"><span className="log-stamp mono">14:34:02</span><span className="log-id mono">wamid_4828</span><span className="log-stat ok">DELIVERED</span></div>
              <div className="log-row"><span className="log-stamp mono">14:35:47</span><span className="log-id mono">wamid_4829</span><span className="log-stat fail">FAILED · retry</span></div>
            </div>
            <p>Webhook validated with HMAC-SHA256 using your <span className="mono" style={{ fontSize: 12 }}>app_secret</span>. Each message updates its status by <span className="mono" style={{ fontSize: 12 }}>wamid</span> directly from Meta Cloud API.</p>
          </div>

          {/* 4. Dashboard KPIs */}
          <div className="surface b b-4-1 reveal" data-delay="240">
            <h3>Recovery dashboard</h3>
            <div className="kpi-mock">
              <div className="kpi-row">
                <span className="kpi-label">Messages sent</span>
                <span className="kpi-val mono">94</span>
              </div>
              <div className="kpi-row">
                <span className="kpi-label">Carts recovered</span>
                <span className="kpi-val mono">47</span>
              </div>
              <div className="kpi-row">
                <span className="kpi-label">Conversion rate</span>
                <span className="kpi-val mono" style={{ color: "var(--mint)" }}>50%</span>
              </div>
            </div>
            <p>Three real KPIs in your WP Admin. Lightweight React SPA mounted in the panel.</p>
          </div>

          {/* 5. GDPR */}
          <div className="surface b b-4-1 reveal" data-delay="300">
            <h3>Native GDPR opt-in</h3>
            <div className="gdpr-mock">
              <div className="gdpr-check">
                <div className="gdpr-box"><Icon2.Check width="9" height="9"/></div>
                <span>I agree to receive cart reminders via WhatsApp</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 8, paddingLeft: 24 }}>Blocks the order if consent is not given. Immediate revocation in DB.</div>
            </div>
            <p>Native checkbox injected into the WooCommerce checkout. No additional privacy plugins needed.</p>
          </div>

          {/* 6. Open source */}
          <div className="surface b b-4-1 reveal" data-delay="360">
            <h3>Open source MIT</h3>
            <div className="os-mock">
              <Icon2.Github width="18" height="18"/>
              <span className="mono">MIT License</span>
              <span style={{ marginLeft: "auto" }} className="mono"><span className="star">★</span> Public day 1</span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
              <span className="chip chip-mint">PHPStan lvl 8</span>
              <span className="chip">PHPUnit</span>
              <span className="chip">WP_Mock</span>
            </div>
            <p>Audit the code. Fork it. No lock-in. CI green on GitHub Actions from the first commit.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- TechSection ---------------- */
function TechSection() {
  const payload = `{
  "messaging_product": "whatsapp",
  "to": "+14155552671",
  "type": "template",
  "template": {
    "name": "abandoned_cart_recovery",
    "language": { "code": "en_US" },
    "components": [{
      "type": "body",
      "parameters": [
        { "type": "text", "text": "Ana" },
        { "type": "text",
          "text": "https://store.com/?cartpinger_recover=a3f…" }
      ]
    }]
  }
}`;

  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Native PHP. Your server, your data.</h2>
          <p className="lede">CartPinger runs on your WordPress. No server of ours in the middle. Your customers' data never leaves your infrastructure.</p>
        </div>
        <div className="tech-grid reveal" data-delay="80">

          <div className="terminal">
            <div className="term-bar">
              <span className="term-dot" style={{ background: "#ff5f57" }}/>
              <span className="term-dot" style={{ background: "#febc2e" }}/>
              <span className="term-dot" style={{ background: "#28c840" }}/>
              <span className="term-title mono">bash — WP-CLI</span>
            </div>
            <div className="term-body">
              <div className="term-line"><span className="term-prompt">$</span> wp plugin install cartpinger --activate</div>
              <div className="term-line dim">Downloading installation package…</div>
              <div className="term-line dim">Installing the plugin…</div>
              <div className="term-line ok">Plugin installed successfully.</div>
              <div className="term-line ok">Plugin 'cartpinger' activated.</div>
              <div className="term-line"><span className="term-prompt">$</span> wp cartpinger status</div>
              <div className="term-line dim">DB tables: <span style={{ color: "var(--mint)" }}>✓ cartpinger_recoveries</span></div>
              <div className="term-line dim">DB tables: <span style={{ color: "var(--mint)" }}>✓ cartpinger_messages_log</span></div>
              <div className="term-line ok">CartPinger v1.0 ready.</div>
              <div className="term-line"><span className="term-prompt">$</span> <span className="term-cursor"/></div>
            </div>
          </div>

          <div className="tech-payload">
            <div className="payload-label mono">POST graph.facebook.com/v19.0/&#123;phone_id&#125;/messages</div>
            <div className="payload-body">
              <pre className="mono">{payload}</pre>
            </div>
          </div>

          <div className="tech-stack-cards">
            <div className="surface ts-card">
              <div className="ts-label">Runtime</div>
              <div className="ts-val mono">PHP 8.1+</div>
              <div className="ts-sub">typed props · enums · PSR-4</div>
            </div>
            <div className="surface ts-card">
              <div className="ts-label">CMS</div>
              <div className="ts-val mono">WordPress 6.2+</div>
              <div className="ts-sub">WP-Cron · REST API · hooks</div>
            </div>
            <div className="surface ts-card">
              <div className="ts-label">eCommerce</div>
              <div className="ts-val mono">WooCommerce 7+</div>
              <div className="ts-sub">checkout · cart · session</div>
            </div>
            <div className="surface ts-card">
              <div className="ts-label">Quality</div>
              <div className="ts-val mono">PHPStan lvl 8</div>
              <div className="ts-sub">PHPUnit · WP_Mock · phpcs</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- Calculator ---------------- */
const COMPETITORS = {
  retainful: { name: "Retainful", monthly: 14, currency: "$" },
  aisensy:   { name: "AiSensy",   monthly: 25, currency: "$" },
  notiqoo:   { name: "Notiqoo",   monthly: 39, currency: "$" },
};
const HORIZONS = { 1: 12, 3: 36, 5: 60 };

function fmtEur(n) { return "€" + Math.round(n).toLocaleString("en-US"); }
function fmt(n) { return Math.round(n).toLocaleString("en-US"); }

function Calculator() {
  const [orders, setOrders] = React.useState(500);
  const [abandon, setAbandon] = React.useState(70);
  const [aov, setAov] = React.useState(60);
  const [competitor, setCompetitor] = React.useState("aisensy");
  const [years, setYears] = React.useState("3");

  const c = COMPETITORS[competitor];
  const months = HORIZONS[years];
  const compTotal = c.monthly * months * 0.93;
  const wcTotal = 79;
  const diff = compTotal - wcTotal;

  const abandoned = orders * (abandon / 100);
  const recovered = abandoned * 0.5;
  const recoveredYear = recovered * 12;
  const revenueRecovered = recoveredYear * aov;

  const max = Math.max(wcTotal, compTotal);
  const wcW = (wcTotal / max) * 100;
  const cW  = (compTotal / max) * 100;

  return (
    <section className="section" id="precio-calc">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Calculate what you save vs. recurring SaaS.</h2>
          <p className="lede">You pay €99 once at launch. Alternatives charge every month. The difference compounds.</p>
        </div>

        <div className="surface calc reveal" data-delay="80">
          <div className="calc-grid">
            <div>
              <div className="input-group">
                <label>Orders per month <b className="mono">{fmt(orders)}</b></label>
                <input type="range" min="50" max="5000" step="50" value={orders} onChange={(e) => setOrders(+e.target.value)} aria-label="Orders per month"/>
              </div>
              <div className="input-group">
                <label>% abandoned carts <b className="mono">{abandon}%</b></label>
                <input type="range" min="50" max="80" step="1" value={abandon} onChange={(e) => setAbandon(+e.target.value)} aria-label="Abandoned cart percentage"/>
              </div>
              <div className="input-group">
                <label>Average order value (AOV) <b className="mono">€{aov}</b></label>
                <input type="range" min="20" max="500" step="5" value={aov} onChange={(e) => setAov(+e.target.value)} aria-label="Average order value in euros"/>
              </div>
              <div className="input-group">
                <label>Competitor</label>
                <div className="seg" role="tablist">
                  {Object.entries(COMPETITORS).map(([k, v]) => (
                    <button key={k} className={competitor === k ? "active" : ""} onClick={() => setCompetitor(k)} role="tab" aria-selected={competitor === k}>
                      {v.name} <span className="mono" style={{ opacity: 0.6 }}>·{v.currency}{v.monthly}/mo</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="input-group">
                <label>Horizon</label>
                <div className="seg">
                  {["1", "3", "5"].map((y) => (
                    <button key={y} className={years === y ? "active" : ""} onClick={() => setYears(y)}>
                      {y} {y === "1" ? "year" : "years"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="calc-out">
              <div className="out-row">
                <span className="l">CartPinger Pro · one-time</span>
                <span className="v">€79</span>
              </div>
              <div className="out-row">
                <span className="l">{c.name} · {years} {years === "1" ? "year" : "years"}</span>
                <span className="v" style={{ color: "var(--coral)" }}>{fmtEur(compTotal)}</span>
              </div>

              <div className="diff">
                <div className="l">Your savings over {years} {years === "1" ? "year" : "years"}</div>
                <div className="v">{fmtEur(diff)}</div>
                <div className="sub">less with a one-time license</div>
              </div>

              <div className="calc-bars">
                <div className="bar wa">
                  <div className="label">CartPinger Pro</div>
                  <div className="track"><div className="fill" style={{ width: wcW + "%" }}/></div>
                  <div className="val">€79</div>
                </div>
                <div className="bar comp">
                  <div className="label">{c.name}</div>
                  <div className="track"><div className="fill" style={{ width: cW + "%" }}/></div>
                  <div className="val">{fmtEur(compTotal)}</div>
                </div>
              </div>

              <div className="calc-meta">
                Estimated recovery year 1: <b>{fmt(recoveredYear)} carts</b><br/>
                Estimated recovered revenue: <b>{fmtEur(revenueRecovered)}</b>
                <div style={{ fontSize: 11.5, color: "var(--text-3)", marginTop: 6 }}>
                  Assuming 50% WhatsApp recovery rate · AOV €{aov} · indicative estimate, not a guarantee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.WCMid = { Steps, Bento, TechSection, Calculator };
