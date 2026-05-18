/* CartPinger — Bottom sections: Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer */

const Icon3 = window.WCTop?.Icon;

/* ---------------- Comparison ---------------- */
const CMP_ROWS = [
  { f: "Precio",
    wc: { v: "€99 lifetime", tip: "Pago único al lanzar. Acceso de por vida, sin renovación." },
    rt: { v: "$14/mes",      tip: "≈ €156/año recurrente." },
    ai: { v: "$25/mes",      tip: "≈ €280/año recurrente, plan estándar." },
    nf: { v: "Gratis",       tip: "Plan limitado con marca Notiqoo en mensajes." },
    np: { v: "$39/mes",      tip: "≈ €436/año plan Pro." },
  },
  { f: "Carrito abandonado WhatsApp",
    wc: { yes: true, tip: "Detección via WP-Cron 1h tras abandono. Template aprobada por Meta." },
    rt: { yes: true, tip: "Feature core de Retainful." },
    ai: { yes: true, tip: "Soporte para flows de carrito." },
    nf: { v: "Limitado", tip: "Sólo 1 mensaje en plan free." },
    np: { yes: true },
  },
  { f: "Template WhatsApp pre-aprobada",
    wc: { v: "EN (en_US)", tip: "Template abandoned_cart_recovery aprobada por Meta. Más idiomas en roadmap." },
    rt: { v: "EN",        tip: "Templates principalmente en inglés." },
    ai: { v: "EN, HI",    tip: "Foco India + inglés." },
    nf: { v: "Limitado",  tip: "1–2 templates genéricas." },
    np: { v: "EN, HI" },
  },
  { f: "GDPR opt-in nativo en checkout",
    wc: { yes: true, tip: "Checkbox inyectado en WooCommerce checkout. Revocación inmediata en DB." },
    rt: { v: "Parcial", tip: "Depende de plugins de privacidad externos." },
    ai: { no: true },
    nf: { no: true },
    np: { v: "Parcial" },
  },
  { f: "Logs de entrega webhook",
    wc: { yes: true, tip: "Webhook Meta validado con HMAC-SHA256. Estados delivered/read/failed por wamid." },
    rt: { v: "Básico" },
    ai: { yes: true },
    nf: { no: true },
    np: { yes: true },
  },
  { f: "Wizard onboarding Meta",
    wc: { v: "✓ guiado", yes: true, tip: "Documentación detallada en GitHub + soporte directo." },
    rt: { v: "Básico",   tip: "Docs escritos, sin vídeo guiado." },
    ai: { yes: true },
    nf: { no: true },
    np: { v: "Básico" },
  },
  { f: "Calculadora costes integrada",
    wc: { yes: true, tip: "Estimas tu factura Meta antes de enviar." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Open source",
    wc: { v: "✓ MIT", yes: true, tip: "Repo público desde día 1, código auditable, forkeable." },
    rt: { no: true }, ai: { no: true }, nf: { no: true }, np: { no: true },
  },
  { f: "Tu propio número (BYO-WABA)",
    wc: { yes: true, tip: "Conectas tu propio Meta WABA. Tu marca, tu data." },
    rt: { yes: true }, ai: { yes: true }, nf: { yes: true }, np: { yes: true },
  },
  { f: "Mercados foco",
    wc: { v: "LATAM · ES · global", tip: "Soporte en español y documentación localizada. Global vía plugin." },
    rt: { v: "Global" },
    ai: { v: "India · global" },
    nf: { v: "India · global" },
    np: { v: "India · global" },
  },
  { f: "Soporte",
    wc: { v: "Email · Discord · GitHub", tip: "Discord privado del proyecto + GitHub issues públicos." },
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
          <h2 className="h2">Beta Cerrada: €99 una vez. Después, €79/año.</h2>
          <p className="lede">Quienes entren en beta se quedan en €99 para siempre — sin renovación. El precio anual es para quien llegue después del lanzamiento.</p>
        </div>

        <div className="pricing-grid pricing-grid-single">
          <div className="surface price-card founder reveal" data-delay="80">
            <div className="top">
              <span className="badge">
                <span className="dot" style={{ background: "var(--cyan)" }}/>
                Disponible Q3 2026
              </span>
              <span className="chip">Sin lista de espera de pago</span>
            </div>
            <div className="price-num">€99</div>
            <div className="price-sub">pago único · precio de beta cerrada</div>
            <div className="price-after-beta">Después del lanzamiento: <b>€79/año</b> · Quien entre en beta, precio congelado.</div>

            <ul className="price-list">
              <li><Icon3.Check className="ch" width="16" height="16"/> Acceso completo al plugin al lanzar</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> <b style={{color:"var(--text)"}}>1 año de actualizaciones y soporte incluidos</b></li>
              <li><Icon3.Check className="ch" width="16" height="16"/> El plugin funciona para siempre aunque no renueves</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Repo público MIT — código auditable</li>
              <li><Icon3.Check className="ch" width="16" height="16"/> Sin SaaS mensual, sin comisiones sobre ventas</li>
            </ul>

            <div style={{ marginTop: 8 }}>
              <WaitlistForm cta="Solicitar acceso a la Beta Cerrada"/>
              <p className="micro" style={{ marginTop: 10 }}>
                Plazas limitadas a las primeras 50 tiendas. Te escribo una sola vez: cuando CartPinger abra la beta y cuando la licencia lifetime esté disponible.
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
    a: "En v1.0: un único mensaje WhatsApp exactamente 1 hora después del abandono. Es deliberado — es la franja de mayor conversión. Los flujos multi-mensaje (+24h, +72h con cupón) están en el roadmap para versiones posteriores." },
  { q: "¿Qué pasa si Meta no me aprueba como Business?",
    a: "El 95% de tiendas legítimas son aprobadas. Si tu tienda es legal y operativa, no debería haber problema. Te guío en cada paso con documentación detallada en GitHub. Si hay un problema, me escribes directamente." },
  { q: "¿Y si no llego a tiempo para mi campaña actual?",
    a: "Lanzamiento público Q3 2026. Si necesitas solución ahora mismo (mayo–junio 2026), todavía no es para ti. La transparencia del estado está en el roadmap público y en GitHub." },
  { q: "¿Cuánto pago a Meta por mensaje?",
    a: "0€ a nosotros por mensajes. A Meta pagas según su pricing oficial. En España, un mensaje de carrito abandonado (categoría marketing) cuesta aproximadamente €0,08. Los primeros 1.000 mensajes al mes son gratis." },
  { q: "¿Es open source de verdad?",
    a: "Sí, MIT License. El código es libre y público desde día 1. Los €99 no son por la licencia del código, sino por el servicio: 1 año de actualizaciones, compatibilidad con nuevas versiones de WooCommerce, mantenimiento de la template Meta y soporte directo. El plugin seguirá funcionando aunque no renueves — simplemente no recibirás actualizaciones futuras." },
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
        <h2 className="h1 reveal">Beta: €99 una vez. Precio congelado para siempre.</h2>
        <p className="lede reveal" data-delay="100">Después del lanzamiento sube a €79/año. Los de beta no pagan más nunca. Disponible Q3 2026.</p>
        <div className="reveal" data-delay="200" style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          <WaitlistForm size="lg" cta="Solicitar acceso a la Beta Cerrada"/>
        </div>
        <div className="micro-row reveal" data-delay="400">
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Sin pre-órdenes</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Un solo email cuando lance</span>
          <span><Icon3.Check className="tick" width="13" height="13" style={{ display: "inline", verticalAlign: -2 }}/> Repo público en GitHub</span>
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
              <li><a href="https://github.com/tfreire988/whatscom#readme" target="_blank" rel="noopener">Documentación <Icon3.Ext width="10" height="10" style={{ display: "inline", verticalAlign: -1, marginLeft: 2, opacity: 0.6 }}/></a></li>
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
