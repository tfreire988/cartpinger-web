/* CartPinger — Top sections: Nav, Hero, Logos, Problem */

const Icon = {
  Whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.5-1.6-.8-2.3-1.8-.6-.9-.4-.9.2-1.9.1-.2.1-.4 0-.6L9.7 7.7c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.5 3.9 6.1 5.3 2.2.9 3 1 4.1.9 1.3-.2 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.7-.5z"/></svg>
  ),
  Github: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
  ),
  Ext: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5"/></svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12l5 5L20 7"/></svg>
  ),
  X: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  Zap: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  Lock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
  ),
};

/* ---------------- Waitlist form ---------------- */
function WaitlistForm({ size = "md", placeholder = "tu@email.com", cta = "Avísame en el lanzamiento", id }) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setState("error"); return; }
    setState("sending");
    fetch("waitlist.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((data) => { if (data.ok) setState("done"); else setState("error"); })
      .catch(() => setState("error"));
  };
  if (state === "done") {
    return (
      <div className="waitlist success" role="status" aria-live="polite">
        <div className="waitlist-msg">
          <Icon.Check width="16" height="16"/>
          <span>Listo. Te escribo cuando CartPinger esté disponible. <span className="mono" style={{ color: "var(--text-3)" }}>· {email}</span></span>
        </div>
      </div>
    );
  }
  return (
    <form className="waitlist" onSubmit={onSubmit} aria-labelledby={id}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
        aria-label="Tu email"
        required
        style={state === "error" ? { color: "var(--coral)" } : {}}
      />
      <button
        type="submit"
        className={"btn btn-primary" + (size === "lg" ? " btn-lg btn-glow" : "")}
        disabled={state === "sending"}
      >
        {state === "sending" ? "Enviando…" : cta}
      </button>
    </form>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <Icon.Whatsapp style={{ color: "#04220f" }}/>
          </span>
          <span>CartPinger</span>
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#producto">Producto</a>
          <a href="#precio">Precio</a>
          <a href="#roadmap">Roadmap</a>
          <a href="https://github.com/tfreire988/whatscom" target="_blank" rel="noopener" aria-label="GitHub (abre en nueva pestaña)" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            GitHub <Icon.Ext width="11" height="11"/>
          </a>
        </nav>
        <div className="nav-cta">
          <div className="lang" role="group" aria-label="Idioma">
            <button className="active" aria-current="true">ES</button>
            <a href="/en/" className="lang-link">EN</a>
            <button disabled title="Próximamente">PT-BR</button>
          </div>
          <a href="#waitlist" className="btn btn-primary btn-sm">Solicitar Beta</a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function HeroTitle() {
  const words = "Un WhatsApp. Una hora después. El carrito, recuperado.".split(" ");
  return (
    <h1 className="display">
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="word" style={{ animationDelay: `${i * 70 + 160}ms` }}>{w}</span>
          {i < words.length - 1 && <span className="space"> </span>}
        </React.Fragment>
      ))}
    </h1>
  );
}

function PhoneMockup() {
  return (
    <div className="iphone" role="img" aria-label="CartPinger en acción: iPhone mostrando el mensaje de WhatsApp que recupera un carrito abandonado en WooCommerce">
      <div className="iphone-screen">
        <div className="iphone-notch"/>
        <div className="wa-bar">
          <div className="wa-avatar">T</div>
          <div>
            <div className="wa-store">Tienda Demo</div>
            <div className="wa-status">vía WhatsApp Business</div>
          </div>
          <div className="wa-icons" aria-hidden="true">
            <Icon.Phone width="14" height="14"/>
          </div>
        </div>
        <div className="wa-thread">
          {/* Indicador de tiempo: carrito abandonado */}
          <div className="wa-time-sep">Hace 1 hora · CartPinger detectó el carrito</div>

          {/* Mensaje de recuperación (plantilla real de Meta) */}
          <span className="bubble out">
            ¡Hola Ana! Dejaste artículos en tu carrito en Tienda Demo 🛒
            <br/><br/>
            Tu pedido sigue disponible. Recupéralo aquí:
            <br/>
            <span className="recovery-link">tienda.demo/?cartpinger_recover=a3f…</span>
            <span className="time">14:32 ✓✓</span>
          </span>

          {/* Estado de entrega */}
          <div className="delivery-status">
            <span className="ds-dot delivered"/>
            <span>Entregado · leído 14:33</span>
          </div>
        </div>
        <div className="wa-input" aria-hidden="true">
          <div className="field"/>
          <div className="send"><Icon.ArrowRight width="14" height="14"/></div>
        </div>
      </div>
    </div>
  );
}

function AdminCard() {
  return (
    <div className="admin-card" role="img" aria-label="CartPinger Dashboard: estadísticas reales del plugin — 47 carritos recuperados, €3.214 en revenue, tasa de conversión 50%">
      <div className="ac-header">
        <span className="ac-label">Dashboard · este mes</span>
        <span className="ac-live"><span className="ac-live-dot"/>En vivo</span>
      </div>
      <div className="ac-num mono">€3.214</div>
      <div className="ac-sub">revenue recuperado</div>
      <div className="ac-divider"/>
      <div className="ac-row"><span>Mensajes enviados</span><b className="mono">94</b></div>
      <div className="ac-row"><span>Carritos recuperados</span><b className="mono">47</b></div>
      <div className="ac-row">
        <span>Tasa de conversión</span>
        <b className="mono" style={{ color: "var(--mint)" }}>50%</b>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true"/>
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow reveal in">
            <span className="badge">
              <span className="dot"/>
              Core v1.0 · CI verde · entrando en Beta Cerrada
            </span>
          </div>
          <HeroTitle/>
          <p className="lede hero-sub reveal in" data-delay="400">
            Cada carrito abandonado es un cliente que casi compró. CartPinger le escribe por WhatsApp
            —desde tu propio número, una hora después— y le devuelve a tu tienda con un clic.
            Sin SaaS mensual, sin comisiones sobre ventas, sin que tus datos salgan de tu servidor.
          </p>
          <div className="hero-ctas reveal in" data-delay="480" id="waitlist">
            <div className="waitlist-row">
              <WaitlistForm size="lg" cta="Solicitar acceso a la Beta Cerrada"/>
              <div className="hero-microcopy">
                <span className="warn" aria-hidden="true">⚠</span>
                <span>Primeras <b>50 tiendas</b>. Motor de producción sellado — PHPUnit + PHPStan lvl 8 en verde.</span>
              </div>
            </div>
          </div>
          <div className="hero-micro reveal in" data-delay="560">
            <span><Icon.Check className="tick" width="13" height="13"/> Open source MIT</span>
            <span><Icon.Check className="tick" width="13" height="13"/> GDPR-native en checkout</span>
            <span><Icon.Check className="tick" width="13" height="13"/> BYO-WABA · tu número</span>
            <span><Icon.Check className="tick" width="13" height="13"/> Sin SaaS mensual</span>
          </div>
          <div className="trust reveal in" data-delay="640">
            <a href="https://github.com/tfreire988/whatscom/actions" target="_blank" rel="noopener" className="ci-badge" aria-label="Estado CI en GitHub Actions">
              <span className="ci-dot"/>
              <span className="ci-label mono">CI</span>
              <span className="ci-status">passing</span>
            </a>
            <span className="trust-sep" aria-hidden="true"/>
            <div className="trust-text">Repo público en GitHub desde día 1. PHPStan level 8.</div>
          </div>
        </div>

        <div className="hero-right">
          <PhoneMockup/>
          <AdminCard/>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logos strip ---------------- */
function Logos() {
  const items = [
    { name: "WooCommerce",       glyph: "Wc" },
    { name: "WordPress",         glyph: "W" },
    { name: "WhatsApp Business", icon: true },
    { name: "Meta Cloud API",    glyph: "M" },
    { name: "PHP 8.1+",          glyph: "PHP" },
    { name: "Composer",          glyph: "{}" },
  ];
  return (
    <section className="logos">
      <div className="container">
        <div className="logos-label">Construido sobre</div>
        <div className="logos-row">
          {items.map((l) => (
            <span className="logo-item" key={l.name}>
              <span className="lo-mark">
                {l.icon
                  ? <Icon.Whatsapp width="16" height="16"/>
                  : <span className="mono" style={{ fontSize: 12 }}>{l.glyph}</span>
                }
              </span>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Problem (stats) ---------------- */
function useCountUp(target, active, duration = 1100) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return v;
}

function StatCard({ value, suffix = "%", text, source, color, delay = 0 }) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } },
      { threshold: 0.35 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, active);
  const cls = "stat-num mono" + (color === "dim" ? " dim" : color === "mint" ? " mint" : "");
  return (
    <div className="surface stat-card reveal" data-delay={delay} ref={ref}>
      <div className={cls} aria-label={`${value}${suffix}`}>{Math.round(n)}{suffix}</div>
      <div className="stat-text">{text}</div>
      {source && <div className="stat-src">{source}</div>}
    </div>
  );
}

function Problem() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <div className="section-hed reveal">
          <h2 className="h2">El 70% de tus carritos se pierden. El email solo recupera el 8%.</h2>
          <p className="lede">WhatsApp tiene una tasa de apertura del 98%. El email, un 20%. La diferencia está en el canal, no en el copy.</p>
        </div>
        <div className="stat-grid">
          <StatCard value={70} text="de los carritos en eCommerce se abandonan antes de completar el pago." source="Baymard Institute · 2025" delay={80}/>
          <StatCard value={8}  text="tasa media de recuperación con flujos de email de carrito abandonado." color="dim" delay={180}/>
          <StatCard value={50} suffix="%+" color="mint" text="tasa de recuperación vía WhatsApp con plantillas correctas y timing óptimo." source="Retainful · datos agregados 2.000 tiendas 2025" delay={280}/>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Founder Quote ---------------- */
function FounderQuote() {
  return (
    <section className="founder-section reveal">
      <div className="container">
        <blockquote className="founder-quote">
          <p>
            "Tenía una tienda WooCommerce. Los plugins de carrito abandonado que probé o cobraban
            30€/mes o mandaban el WhatsApp desde un número genérico con su marca.
            Decidí construir lo que necesitaba: envío desde mi propio número, sin SaaS mensual,
            con el código auditable en GitHub. Eso es CartPinger."
          </p>
          <footer>
            <span className="fq-name">Telmo Freire</span>
            <span className="fq-role">Fundador · CartPinger</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

window.WCTop = { Nav, Hero, Logos, Problem, FounderQuote, Icon, WaitlistForm };
