/* CartPinger — Bottom sections (EN): Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer */

const Icon3 = window.WCTop?.Icon;

/* ---------------- Comparison ---------------- */
const CMP_ROWS = [
  { f: "Price",
    wc: { v: "€99 lifetime", tip: "One-time payment at launch. Lifetime access, no renewal." },
    rt: { v: "$14/mo",       tip: "≈ €156/year recurring." },
    ai: { v: "$25/mo",       tip: "≈ €280/year recurring, standard plan." },
    nf: { v: "Free",         tip: "Limited plan with Notiqoo branding in messages." },
    np: { v: "$39/mo",       tip: "≈ €436/year Pro plan." },
  },
  { f: "Abandoned cart via WhatsApp",
    wc: { yes: true, tip: "WP-Cron detection 1h after abandonment. Meta-approved template." },
    rt: { yes: true, tip: "Core feature of Retainful." },
    ai: { yes: true, tip: "Cart flow support." },
    nf: { v: "Limited", tip: "Only 1 message on free plan." },
    np: { yes: true },
  },
  { f: "Pre-approved WhatsApp template",
    wc: { v: "EN (en_US)", tip: "abandoned_cart_recovery template approved by Meta. More languages on roadmap." },
    rt: { v: "EN",         tip: "Templates mainly in English." },
    ai: { v: "EN, HI",     tip: "India + English focus." },
    nf: { v: "Limited",    tip: "1–2 generic templates." },
    np: { v: "EN, HI" },
  },
  { f: "Native GDPR opt-in at checkout",
    wc: { yes: true, tip: "Checkbox injected into WooCommerce checkout. Immediate revocation in DB." },
    rt: { v: "Partial", tip: "Depends on external privacy plugins." },
    ai: { no: true },
    nf: { no: true },
    np: { v: "Partial" },
  },
  { f: "Webhook delivery logs",
    wc: { yes: true, tip: "Meta webhook validated with HMAC-SHA256. delivered/read/failed states by wamid." },
    rt: { v: "Basic" },
    ai: { yes: true },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Meta onboarding wizard",
    wc: { v: "✓ guided", yes: true, tip: "Detailed documentation on GitHub + direct support." },
    rt: { v: "Basic",    tip: "Written docs, no guided video." },
    ai: { yes: true },
    nf: { no: true },
    np: { v: "Basic" },
  },
  { f: "Built-in cost calculator",
    wc: { yes: true, tip: "Estimate your Meta bill before sending." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Open source",
    wc: { v: "✓ MIT", yes: true, tip: "Public repo from day 1, auditable and forkable code." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Your own number (BYO-WABA)",
    wc: { yes: true, tip: "Connect your own Meta WABA. Your brand, your data." },
    rt: { yes: true }, ai: { yes: true }, nf: { yes: true }, np: { yes: true },
  },
  { f: "Target markets",
    wc: { v: "LATAM · ES · global", tip: "Spanish support and localized documentation. Global via plugin." },
    rt: { v: "Global" },
    ai: { v: "India · global" },
    nf: { v: "India · global" },
    np: { v: "India · global" },
  },
  { f: "Support",
    wc: { v: "Email · Discord · GitHub", tip: "Private project Discord + public GitHub issues." },
    rt: { v: "Email" },
    ai: { v: "Email · chat" },
    nf: { v: "Email" },
    np: { v: "Email" },
  },
];

function Cell({ data, highlight }) {
  if (!data) return <td className={highlight ? "wcol" : ""}>—</td>;
  const inner = data.yes && !data.v
    ? <span className="cell yes"><Icon3.Check width="14" height="14"/>{data.tip && <span className="tip">{data.tip}</span>}</span>
    : data.no
    ? <span className="cell no"><Icon3.X width="14" height="14"/></span>
    : <span className="cell">{data.v}{data.tip && <span className="tip">{data.tip}</span>}</span>;
  return <td className={highlight ? "wcol" : ""}>{inner}</td>;
}

function Comparison() {
  return (
    <section className="section" id="comparativa">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Honest comparison. No marketing tricks.</h2>
          <p className="lede">If a competitor has a feature, we mark it. If we don't have it, we don't make it up. Hover over any cell for details.</p>
        </div>
        <div className="cmp-wrap reveal" data-delay="100">
          <table className="cmp">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="wcol">CartPinger</th>
                <th>Retainful</th>
                <th>AiSensy</th>
                <th>Notiqoo Free</th>
                <th>Notiqoo Pro</th>
              </tr>
            </thead>
            <tbody>
              {CMP_ROWS.map((r) => (
                <tr key={r.f}>
                  <td>{r.f}</td>
                  <Cell data={r.wc} highlight/>
                  <Cell data={r.rt}/>
                  <Cell data={r.ai}/>
                  <Cell data={r.nf}/>
                  <Cell data={r.np}/>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const WaitlistForm = window.WCTop.WaitlistForm;
  return (
    <section className="section" id="precio">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Closed Beta: €99 once. Then €79/year.</h2>
          <p className="lede">Beta members lock in €99 forever — no renewal. The annual price is for those who join after launch.</p>
        </div>

        <div className="pricing-grid pricing-grid-single">
          <div className="surface price-card founder reveal" data-delay="80">
            <div className="top">
              <span className="badge">
                <span className="dot" style={{ background: "var(--cyan)" }}/>
                Available Q3 2026
              </span>
              <span className="chip">No paid waitlist</span>
            </div>
            <div className="price-num">€99</div>
            <div className="price-sub">one-time · closed beta price</div>
            <div className="price-after-beta">After launch: <b>€79/year</b> · Beta members, price locked forever.</div>

            <ul className="price-list">
              <li><Icon3.Check className="ch" width="16" height="16"/> Full plugin access at launch</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> <b style={{color:"var(--text)"}}>1 year of updates and support included</b></li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Plugin works forever even if you don't renew</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> MIT public repo — auditable code</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> No monthly SaaS, no sales commissions</li>
            </ul>

            <div style={{ marginTop: 8 }}>
              <WaitlistForm cta="Request Closed Beta Access"/>
              <p className="micro" style={{ marginTop: 10 }}>
                Limited to the first 50 stores. I'll email you once: when CartPinger opens the beta and when the lifetime license is available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Roadmap ---------------- */
function Roadmap() {
  const cols = [
    { key: "done", label: "Done", items: [
      "Public repo on GitHub",
      "PSR-4 architecture defined",
      "PHPUnit + PHPStan lvl 8 passing",
      "DB schema + migrations",
      "GDPR opt-in at checkout",
      "Secure recovery token",
      "HMAC-SHA256 webhook",
      "React dashboard (3 KPIs)",
      "Floating WhatsApp widget",
    ]},
    { key: "prog", label: "In Progress", items: [
      "Closed Beta — first 50 stores",
      "Meta onboarding documentation",
      "Submission for review on WordPress.org",
    ]},
    { key: "next", label: "Next", items: [
      "Templates in ES, PT-BR, FR, IT",
      "Multi-message flow (follow-up +24h)",
      "Automatic coupons with expiry",
      "Order notifications (confirmation, shipping)",
    ]},
    { key: "fut", label: "Future", items: [
      "OTP login via WhatsApp",
      "WooCommerce Blocks integration",
      "CSV log export",
      "WordPress multisite",
    ]},
  ];
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Open roadmap. Built in public.</h2>
          <p className="lede">Every item reflects the real state of the repo. No vaporware promises.</p>
        </div>
        <div className="rm-grid reveal" data-delay="80">
          {cols.map((c, i) => (
            <div className={"surface rm-col " + c.key} key={c.key}>
              <h3 className="rm-col-h">
                <span className="ic">{c.key === "done" ? <Icon3.Check width="9" height="9"/> : c.key === "prog" ? "→" : c.key === "next" ? "◎" : "○"}</span>
                {c.label}
              </h3>
              <ul className="rm-list">
                {c.items.map((it) => (
                  <li key={it}>
                    <span className="ic">{c.key === "done" ? <Icon3.Check width="9" height="9"/> : "·"}</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href="https://github.com/tfreire988/whatscom" target="_blank" rel="noopener" className="rm-link">View repository on GitHub <Icon3.ArrowRight width="15" height="15"/></a>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "When is CartPinger available?",
    a: "Public launch Q3 2026. No pre-orders or paid waitlist — when it's ready, I'll announce it here and by email to subscribers. Want to be notified? Sign up above." },
  { q: "Do I have to pay Meta to send WhatsApps?",
    a: "Not to get started. Meta gives every Business account 1,000 free conversations per month. For the vast majority of small and medium stores, using CartPinger will cost €0/month in Meta API fees." },
  { q: "Does it only send one recovery message, or can I set up a sequence?",
    a: "In v1.0: a single WhatsApp message exactly 1 hour after abandonment. This is deliberate — it's the highest-conversion window. Multi-message flows (+24h, +72h with coupon) are on the roadmap for future versions." },
  { q: "What if Meta doesn't approve my business?",
    a: "95% of legitimate stores are approved. If your store is legal and operational, there shouldn't be a problem. I guide you through every step with detailed documentation on GitHub. If something goes wrong, reach out directly." },
  { q: "What if I need it before Q3 2026?",
    a: "Public launch is Q3 2026. If you need a solution right now (May–June 2026), it's not ready for you yet. The real-time status is in the public roadmap and on GitHub." },
  { q: "How much does Meta charge per message?",
    a: "€0 to us per message. You pay Meta at their official pricing. In the US, an abandoned cart message (marketing category) costs approximately $0.025. The first 1,000 messages per month are free." },
  { q: "Is it really open source?",
    a: "Yes, MIT License. The code is free and public from day 1. The €99 is not for the code license — it's for the service: 1 year of updates, compatibility with new WooCommerce versions, Meta template maintenance, and direct support. The plugin keeps working even if you don't renew — you just won't receive future updates." },
  { q: "Does the plugin store customer data on its servers?",
    a: "No. CartPinger has no servers of its own. It runs entirely on your WordPress. Your customers' data (phone, cart, recovery token) is stored in your local MySQL database. We only provide the code." },
  { q: "Does it work with block-based checkout?",
    a: "Yes. The GDPR integration uses the WooCommerce Additional Checkout Fields API, compatible with WooCommerce Blocks since WooCommerce 9.0+." },
  { q: "Will you spam me with marketing emails?",
    a: "No. I'll email you once: when CartPinger is available. No newsletter, no drip campaigns, no upsells. You can unsubscribe with one click at any time." },
];

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Honest answers.</h2>
          <p className="lede">The objections I get most often, answered straight.</p>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details className="faq-item reveal" data-delay={Math.min(i * 50, 300)} key={i}>
              <summary>{f.q}</summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  const WaitlistForm = window.WCTop.WaitlistForm;
  return (
    <section className="final" id="cta">
      <div className="container">
        <h2 className="h1 reveal">Beta: €99 once. Price locked forever.</h2>
        <p className="lede reveal" data-delay="100">After launch it goes up to €79/year. Beta members never pay more. Available Q3 2026.</p>
        <div className="reveal" data-delay="200" style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          <WaitlistForm size="lg" cta="Request Closed Beta Access"/>
        </div>
        <div className="micro-row reveal" data-delay="400">
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> No pre-orders</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> One email when it launches</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Public repo on GitHub</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="brand">
              <span className="brand-mark"><Icon3.Whatsapp style={{ color: "#04220f" }}/></span>
              <span>CartPinger</span>
            </a>
            <div>WooCommerce plugin for WhatsApp Cloud API. Recover abandoned carts. One-time payment, no SaaS.</div>
          </div>
          <div className="foot-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#precio">Pricing</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="https://github.com/tfreire988/whatscom" target="_blank" rel="noopener">GitHub <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
              <li><a href="https://github.com/tfreire988/whatscom/releases" target="_blank" rel="noopener">Changelog <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="https://cartpinger.com/docs" target="_blank" rel="noopener">Documentation <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
              <li><a href="mailto:info@cartpinger.com">Support</a></li>
              <li><a href="#tech">Architecture</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="/privacy.html">Privacy</a></li>
              <li><a href="/terms.html">Terms of use</a></li>
              <li><a href="/terms.html#7-responsabilidad-del-titular-de-la-tienda-dpa--rgpd">GDPR / DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="copy">© 2026 CartPinger. All rights reserved.</div>
          <div className="made">
            <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a> · <a href="mailto:info@cartpinger.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.WCBot = { Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer };
