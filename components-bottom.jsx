/* CartPinger — Bottom sections: Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer */

const Icon3 = window.WCTop?.Icon;

/* ---------------- Comparison ---------------- */
const CMP_ROWS = [
  { f: "Precio",
    wc: { v: "Gratis · Pro €49", tip: "Free para siempre con funciones core. Pro €49 pago único: secuencias, cupones dinámicos, CSV y soporte prioritario." },
    rt: { v: "$14/mes",  tip: "≈ €156/año recurrente." },
    ai: { v: "$25/mes",  tip: "≈ €280/año recurrente, plan estándar." },
    nf: { v: "Gratis",   tip: "Plan limitado con marca Notiqoo en mensajes." },
    np: { v: "$39/mes",  tip: "≈ €436/año plan Pro." },
  },
  { f: "Carrito abandonado WhatsApp",
    wc: { yes: true, tier: "free", tip: "Detección via WP-Cron 1h tras abandono. Template aprobada por Meta." },
    rt: { yes: true, tip: "Feature core de Retainful." },
    ai: { yes: true, tip: "Soporte para flows de carrito." },
    nf: { v: "Limitado", tip: "Sólo 1 mensaje en plan free." },
    np: { yes: true },
  },
  { f: "Templates WhatsApp (4 idiomas)",
    wc: { v: "en_US · es_ES · es_MX · pt_BR", tier: "free", tip: "Templates aprobadas por Meta en inglés, español (ES y MX) y portugués BR." },
    rt: { v: "EN",       tip: "Templates principalmente en inglés." },
    ai: { v: "EN, HI",   tip: "Foco India + inglés." },
    nf: { v: "Limitado", tip: "1–2 templates genéricas." },
    np: { v: "EN, HI" },
  },
  { f: "GDPR opt-in nativo en checkout",
    wc: { yes: true, tier: "free", tip: "Checkbox inyectado en WooCommerce checkout. Revocación inmediata en DB." },
    rt: { v: "Parcial", tip: "Depende de plugins de privacidad externos." },
    ai: { no: true },
    nf: { no: true },
    np: { v: "Parcial" },
  },
  { f: "Logs de entrega webhook",
    wc: { yes: true, tier: "free", tip: "Webhook Meta validado con HMAC-SHA256. Estados delivered/read/failed por wamid." },
    rt: { v: "Básico" },
    ai: { yes: true },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Wizard onboarding Meta",
    wc: { yes: true, tier: "free", tip: "Documentación detallada en cartpinger.com/docs + soporte directo." },
    rt: { v: "Básico", tip: "Docs escritos, sin vídeo guiado." },
    ai: { yes: true },
    nf: { no: true },
    np: { v: "Básico" },
  },
  { f: "Calculadora costes integrada",
    wc: { yes: true, tier: "free", tip: "Estimas tu factura Meta antes de enviar." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Open source MIT",
    wc: { yes: true, tier: "free", tip: "Repo público desde día 1, código auditable, forkeable." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Tu propio número (BYO-WABA)",
    wc: { yes: true, tier: "free", tip: "Conectas tu propio Meta WABA. Tu marca, tu data." },
    rt: { yes: true }, ai: { yes: true }, nf: { yes: true }, np: { yes: true },
  },
  { f: "Secuencia multi-mensaje (+24h con cupón · +48h)",
    wc: { yes: true, tier: "pro", tip: "Flujo automático: mensaje inicial 1h + recordatorio 24h con cupón dinámico + recordatorio final 48h." },
    rt: { yes: true },
    ai: { yes: true },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Cupones dinámicos automáticos",
    wc: { yes: true, tier: "pro", tip: "Cupón 10% descuento, un solo uso, validez 48h. Generado y adjuntado automáticamente al mensaje +24h." },
    rt: { yes: true },
    ai: { v: "Parcial" },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Exportación CSV",
    wc: { yes: true, tier: "pro", tip: "Export completo de recuperaciones: email, carrito, token, estado, timestamp." },
    rt: { yes: true },
    ai: { no: true },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Soporte",
    wc: { v: "Issues · Email prioritario Pro", tip: "GitHub issues públicos en Free. Email prioritario incluido en Pro." },
    rt: { v: "Email" },
    ai: { v: "Email · chat" },
    nf: { v: "Email" },
    np: { v: "Email" },
  },
];

function TierBadge({ tier }) {
  if (tier === "free") return <span className="tier-badge tier-free">Free</span>;
  if (tier === "pro")  return <span className="tier-badge tier-pro">Pro</span>;
  return null;
}

function Cell({ data, highlight }) {
  if (!data) return <td className={highlight ? "wcol" : ""}>—</td>;
  const inner = data.yes && !data.v
    ? <span className="cell yes"><Icon3.Check width="14" height="14"/><TierBadge tier={data.tier}/>{data.tip && <span className="tip">{data.tip}</span>}</span>
    : data.no
    ? <span className="cell no"><Icon3.X width="14" height="14"/></span>
    : <span className="cell">{data.v}<TierBadge tier={data.tier}/>{data.tip && <span className="tip">{data.tip}</span>}</span>;
  return <td className={highlight ? "wcol" : ""}>{inner}</td>;
}

function Comparison() {
  return (
    <section className="section" id="comparativa">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Comparativa honesta. Sin trampas de marketing.</h2>
          <p className="lede">Si un competidor tiene una feature, la marcamos. Si nosotros no la tenemos, no la inventamos. Hover sobre cualquier celda para detalle.</p>
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
          <h2 className="h2">Empieza gratis. Actualiza cuando quieras.</h2>
          <p className="lede">Free para siempre con recuperación de carrito completa. Pro €49 pago único para secuencias avanzadas y cupones automáticos.</p>
        </div>

        <div className="pricing-grid reveal" data-delay="60">

          {/* Free tier */}
          <div className="surface price-card">
            <div className="top">
              <span className="badge">
                <span className="dot" style={{ background: "var(--mint)" }}/>
                Disponible Q3 2026
              </span>
            </div>
            <div className="price-num" style={{ fontSize: 40 }}>Gratis</div>
            <div className="price-sub">para siempre · open source MIT</div>

            <ul className="price-list">
              <li><Icon3.Check className="ch" width="16" height="16"/> Recuperación de carrito completa (1 mensaje · 1h)</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Multi-idioma: en_US · es_ES · es_MX · pt_BR</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Dashboard KPIs (enviados · recuperados · conversión)</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> GDPR opt-in nativo en checkout</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Widget flotante de WhatsApp</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Repo público MIT — código auditable</li>
            </ul>

            <div style={{ marginTop: 8 }}>
              <WaitlistForm cta="Solicitar acceso Beta"/>
              <p className="micro" style={{ marginTop: 10 }}>
                Sin tarjeta. Sin compromiso. Te aviso cuando esté disponible.
              </p>
            </div>
          </div>

          {/* Pro tier */}
          <div className="surface price-card founder">
            <div className="top">
              <span className="badge">
                <span className="dot" style={{ background: "var(--cyan)" }}/>
                Disponible Q3 2026
              </span>
              <span className="chip chip-pro">Pro</span>
            </div>
            <div className="price-num">€49</div>
            <div className="price-sub">pago único · sin renovación</div>

            <ul className="price-list">
              <li><Icon3.Check className="ch" width="16" height="16"/> Todo lo de Free</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> <b style={{color:"var(--text)"}}>Secuencia multi-mensaje: +24h con cupón · +48h recordatorio</b></li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Cupones dinámicos automáticos (10% · 1 uso · 48h validez)</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Exportación CSV de todas las recuperaciones</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Soporte prioritario por email</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Updates garantizados 1 año</li>
            </ul>

            <div style={{ marginTop: 8 }}>
              <WaitlistForm cta="Solicitar acceso Beta Pro"/>
              <p className="micro" style={{ marginTop: 10 }}>
                Plazas limitadas a las primeras 50 tiendas. Pago único al lanzar — no antes.
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
      "Repo público en GitHub",
      "Arquitectura PSR-4 definida",
      "PHPUnit + PHPStan lvl 8 en verde",
      "DB schema + migrations",
      "GDPR opt-in en checkout",
      "Token de recuperación seguro",
      "Webhook HMAC-SHA256",
      "Dashboard React (3 KPIs)",
      "Widget WhatsApp flotante",
    ]},
    { key: "prog", label: "In Progress", items: [
      "Beta Cerrada — primeras 50 tiendas",
      "Documentación de onboarding Meta",
      "Envío a revisión en WordPress.org",
    ]},
    { key: "next", label: "Next", items: [
      "Templates en ES, PT-BR, FR, IT",
      "Flujo multi-mensaje (recordatorio +24h)",
      "Cupones automáticos con expiración",
      "Notificaciones de pedido (confirmación, envío)",
    ]},
    { key: "fut", label: "Future", items: [
      "OTP login vía WhatsApp",
      "Integración con WooCommerce Blocks",
      "Export CSV de logs",
      "Multi-site WordPress",
    ]},
  ];
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Roadmap abierto. Construido en público.</h2>
          <p className="lede">Cada ítem refleja el estado real del repo. Sin promesas vaporware.</p>
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
        <a href="https://github.com/tfreire988/whatscom" target="_blank" rel="noopener" className="rm-link">Ver repositorio en GitHub <Icon3.ArrowRight width="15" height="15"/></a>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "¿Cuándo está disponible?",
    a: "Lanzamiento público Q3 2026. No hay pre-órdenes ni lista de espera de pago: cuando esté listo, lo anuncio aquí y por email a quien se haya suscrito. Si quieres aviso, suscríbete arriba." },
  { q: "¿Tengo que pagar a Meta por enviar WhatsApps?",
    a: "No para empezar. Meta regala 1.000 conversaciones mensuales 100% gratis a cada cuenta Business. Para la inmensa mayoría de tiendas pequeñas y medianas, usar CartPinger tendrá un coste de 0€ al mes en la API de Meta." },
  { q: "¿Solo envía un mensaje de recuperación o puedo configurar una secuencia?",
    a: "Free: un único mensaje 1 hora después del abandono — la franja de mayor conversión. Pro: secuencia completa de tres mensajes — inicial (1h), recordatorio con cupón dinámico del 10% (+24h) y recordatorio final (+48h)." },
  { q: "¿Qué pasa si Meta no me aprueba como Business?",
    a: "El 95% de tiendas legítimas son aprobadas. Si tu tienda es legal y operativa, no debería haber problema. Te guío en cada paso con documentación detallada en GitHub. Si hay un problema, me escribes directamente." },
  { q: "¿Y si no llego a tiempo para mi campaña actual?",
    a: "Lanzamiento público Q3 2026. Si necesitas solución ahora mismo (mayo–junio 2026), todavía no es para ti. La transparencia del estado está en el roadmap público y en GitHub." },
  { q: "¿Cuánto pago a Meta por mensaje?",
    a: "0€ a nosotros por mensajes. A Meta pagas según su pricing oficial. En España, un mensaje de carrito abandonado (categoría marketing) cuesta aproximadamente €0,08. Los primeros 1.000 mensajes al mes son gratis." },
  { q: "¿Es open source de verdad?",
    a: "Sí, MIT License. El código es libre y público desde día 1 — puedes descargarlo, auditarlo y usarlo sin pagar nada. El plan Pro (€49 pago único) no es por la licencia del código, sino por las funciones avanzadas: secuencia multi-mensaje, cupones dinámicos, CSV y soporte prioritario." },
  { q: "¿El plugin almacena datos de clientes en sus servidores?",
    a: "No. CartPinger no tiene servidores propios. Corre íntegramente en tu WordPress. Los datos de tus clientes (teléfono, carrito, token de recuperación) se almacenan en tu base de datos MySQL local. Nosotros solo proveemos el código." },
  { q: "¿Funciona con block-based checkout?",
    a: "Sí. La integración GDPR usa la API WooCommerce Additional Checkout Fields, compatible con WooCommerce Blocks desde WooCommerce 9.0+." },
  { q: "¿Me vais a llenar el email de marketing?",
    a: "No. Te escribo una sola vez: cuando CartPinger esté disponible. Sin newsletter, sin drip, sin upsells. Puedes darte de baja con un click en cualquier momento." },
];

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">Preguntas honestas.</h2>
          <p className="lede">Las objeciones que recibo más a menudo, respondidas sin rodeos.</p>
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
        <h2 className="h1 reveal">Empieza gratis. Actualiza cuando quieras.</h2>
        <p className="lede reveal" data-delay="100">Free para siempre con recuperación completa. Pro €49 pago único para secuencias y cupones automáticos. Disponible Q3 2026.</p>
        <div className="reveal" data-delay="200" style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          <WaitlistForm size="lg" cta="Apuntarme a la Beta"/>
        </div>
        <div className="micro-row reveal" data-delay="400">
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Free para siempre · sin tarjeta</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Pro €49 pago único · sin SaaS</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Un solo email cuando lance</span>
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
            <div>Plugin de WooCommerce para WhatsApp Cloud API. Recupera carritos abandonados. Pago único, sin SaaS.</div>
          </div>
          <div className="foot-col">
            <h5>Producto</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#precio">Precio</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="https://github.com/tfreire988/whatscom" target="_blank" rel="noopener">GitHub <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
              <li><a href="https://github.com/tfreire988/whatscom/releases" target="_blank" rel="noopener">Changelog <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="https://github.com/tfreire988/cartpinger-web/blob/main/documentacion.md" target="_blank" rel="noopener">Documentación <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
              <li><a href="mailto:info@cartpinger.com">Soporte</a></li>
              <li><a href="#tech">Arquitectura</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="/privacy.html">Privacidad</a></li>
              <li><a href="/terms.html">Términos de uso</a></li>
              <li><a href="/terms.html#7-responsabilidad-del-titular-de-la-tienda-dpa--rgpd">RGPD / DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="copy">© 2026 CartPinger. Todos los derechos reservados.</div>
          <div className="made">
            <a href="/privacy.html">Privacidad</a> · <a href="/terms.html">Términos</a> · <a href="mailto:info@cartpinger.com">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.WCBot = { Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer };
