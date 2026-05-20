/* CartPinger landing — production bundle */
"use strict";

/* ── components-top.jsx ── */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CartPinger — Top sections: Nav, Hero, Logos, Problem */

const Icon = {
  Whatsapp: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.9-.5-1.6-.8-2.3-1.8-.6-.9-.4-.9.2-1.9.1-.2.1-.4 0-.6L9.7 7.7c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.5 3.9 6.1 5.3 2.2.9 3 1 4.1.9 1.3-.2 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.7-.5z"
  })),
  Github: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"
  })),
  Ext: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M14 4h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4l-9 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5"
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6l6 6-6 6"
  })),
  Check: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  })),
  X: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  Phone: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"
  })),
  Shield: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  Clock: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })),
  Zap: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  })),
  Lock: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0110 0v4"
  }))
};

/* ---------------- Waitlist form ---------------- */
function WaitlistForm({
  size = "md",
  placeholder = "tu@email.com",
  cta = "Avísame en el lanzamiento",
  id
}) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle");
  const onSubmit = e => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sending");
    fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    }).then(r => r.json()).then(data => {
      if (data.ok) setState("done");else setState("error");
    }).catch(() => setState("error"));
  };
  if (state === "done") {
    return /*#__PURE__*/React.createElement("div", {
      className: "waitlist success",
      role: "status",
      "aria-live": "polite"
    }, /*#__PURE__*/React.createElement("div", {
      className: "waitlist-msg"
    }, /*#__PURE__*/React.createElement(Icon.Check, {
      width: "16",
      height: "16"
    }), /*#__PURE__*/React.createElement("span", null, "Listo. Te escribo cuando CartPinger est\xE9 disponible. ", /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: "var(--text-3)"
      }
    }, "\xB7 ", email))));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "waitlist",
    onSubmit: onSubmit,
    "aria-labelledby": id
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: placeholder,
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (state === "error") setState("idle");
    },
    "aria-label": "Tu email",
    required: true,
    style: state === "error" ? {
      color: "var(--coral)"
    } : {}
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary" + (size === "lg" ? " btn-lg btn-glow" : ""),
    disabled: state === "sending"
  }, state === "sending" ? "Enviando…" : cta));
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = e => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  const close = () => setMenuOpen(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand",
    onClick: close
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon.Whatsapp, {
    style: {
      color: "#04220f"
    }
  })), /*#__PURE__*/React.createElement("span", null, "CartPinger")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Principal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#producto"
  }, "Producto"), /*#__PURE__*/React.createElement("a", {
    href: "#precio"
  }, "Precio"), /*#__PURE__*/React.createElement("a", {
    href: "#roadmap"
  }, "Roadmap"), /*#__PURE__*/React.createElement("a", {
    href: "/docs/setup/"
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom",
    target: "_blank",
    rel: "noopener",
    "aria-label": "GitHub (abre en nueva pesta\xF1a)",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, "GitHub ", /*#__PURE__*/React.createElement(Icon.Ext, {
    width: "11",
    height: "11"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang",
    role: "group",
    "aria-label": "Idioma"
  }, /*#__PURE__*/React.createElement("button", {
    className: "active",
    "aria-current": "true"
  }, "ES"), /*#__PURE__*/React.createElement("a", {
    href: "/en/",
    className: "lang-link",
    onClick: () => sessionStorage.setItem('cp-lang', 'en')
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    title: "Pr\xF3ximamente"
  }, "PT-BR")), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    className: "btn btn-primary btn-sm nav-cta-btn"
  }, "Solicitar Beta"), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": menuOpen ? "Cerrar menú" : "Abrir menú",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "burger-icon" + (menuOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))), /*#__PURE__*/React.createElement("div", {
    className: "nav-drawer" + (menuOpen ? " open" : ""),
    role: "dialog",
    "aria-label": "Men\xFA m\xF3vil",
    "aria-hidden": !menuOpen
  }, /*#__PURE__*/React.createElement("nav", {
    className: "drawer-links",
    "aria-label": "M\xF3vil"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#producto",
    onClick: close
  }, "Producto"), /*#__PURE__*/React.createElement("a", {
    href: "#precio",
    onClick: close
  }, "Precio"), /*#__PURE__*/React.createElement("a", {
    href: "#roadmap",
    onClick: close
  }, "Roadmap"), /*#__PURE__*/React.createElement("a", {
    href: "/docs/setup/",
    onClick: close
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "/pricing/",
    onClick: close
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom",
    target: "_blank",
    rel: "noopener",
    onClick: close
  }, "GitHub \u2197"), /*#__PURE__*/React.createElement("div", {
    className: "drawer-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    className: "btn btn-primary",
    onClick: close,
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Solicitar Beta"), /*#__PURE__*/React.createElement("div", {
    className: "drawer-lang"
  }, /*#__PURE__*/React.createElement("button", {
    className: "active",
    "aria-current": "true"
  }, "ES"), /*#__PURE__*/React.createElement("a", {
    href: "/en/",
    onClick: () => sessionStorage.setItem('cp-lang', 'en')
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    title: "Pr\xF3ximamente"
  }, "PT-BR")))), /*#__PURE__*/React.createElement("div", {
    className: "nav-backdrop" + (menuOpen ? " open" : ""),
    onClick: close,
    "aria-hidden": "true"
  }));
}

/* ---------------- Hero ---------------- */
function HeroTitle() {
  const words = "Un WhatsApp. Una hora después. El carrito, recuperado.".split(" ");
  return /*#__PURE__*/React.createElement("h1", {
    className: "display"
  }, words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      animationDelay: `${i * 70 + 160}ms`
    }
  }, w), i < words.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "space"
  }, " "))));
}
function PhoneMockup() {
  return /*#__PURE__*/React.createElement("div", {
    className: "iphone",
    role: "img",
    "aria-label": "CartPinger en acci\xF3n: iPhone mostrando el mensaje de WhatsApp que recupera un carrito abandonado en WooCommerce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iphone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iphone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wa-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-avatar"
  }, "T"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wa-store"
  }, "Tienda Demo"), /*#__PURE__*/React.createElement("div", {
    className: "wa-status"
  }, "v\xEDa WhatsApp Business")), /*#__PURE__*/React.createElement("div", {
    className: "wa-icons",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon.Phone, {
    width: "14",
    height: "14"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wa-thread"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-time-sep"
  }, "Hace 1 hora \xB7 CartPinger detect\xF3 el carrito"), /*#__PURE__*/React.createElement("span", {
    className: "bubble out"
  }, "\xA1Hola Ana! Dejaste art\xEDculos en tu carrito en Tienda Demo \uD83D\uDED2", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Tu pedido sigue disponible. Recup\xE9ralo aqu\xED:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "recovery-link"
  }, "tienda.demo/?cartpinger_recover=a3f\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, "14:32 \u2713\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "delivery-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-dot delivered"
  }), /*#__PURE__*/React.createElement("span", null, "Entregado \xB7 le\xEDdo 14:33"))), /*#__PURE__*/React.createElement("div", {
    className: "wa-input",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }), /*#__PURE__*/React.createElement("div", {
    className: "send"
  }, /*#__PURE__*/React.createElement(Icon.ArrowRight, {
    width: "14",
    height: "14"
  })))));
}
function AdminCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "admin-card",
    role: "img",
    "aria-label": "CartPinger Dashboard: estad\xEDsticas reales del plugin \u2014 47 carritos recuperados, \u20AC3.214 en revenue, tasa de conversi\xF3n 50%"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ac-label"
  }, "Dashboard \xB7 este mes"), /*#__PURE__*/React.createElement("span", {
    className: "ac-live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ac-live-dot"
  }), "En vivo")), /*#__PURE__*/React.createElement("div", {
    className: "ac-num mono"
  }, "\u20AC3.214"), /*#__PURE__*/React.createElement("div", {
    className: "ac-sub"
  }, "revenue recuperado"), /*#__PURE__*/React.createElement("div", {
    className: "ac-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Mensajes enviados"), /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "94")), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Carritos recuperados"), /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "47")), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Tasa de conversi\xF3n"), /*#__PURE__*/React.createElement("b", {
    className: "mono",
    style: {
      color: "var(--mint)"
    }
  }, "50%")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-mesh",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow reveal in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Core v1.0 \xB7 CI verde \xB7 entrando en Beta Cerrada")), /*#__PURE__*/React.createElement(HeroTitle, null), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-sub reveal in",
    "data-delay": "400"
  }, "Cada carrito abandonado es un cliente que casi compr\xF3. CartPinger le escribe por WhatsApp \u2014desde tu propio n\xFAmero, una hora despu\xE9s\u2014 y le devuelve a tu tienda con un clic. Sin SaaS mensual, sin comisiones sobre ventas, sin que tus datos salgan de tu servidor."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas reveal in",
    "data-delay": "480",
    id: "waitlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waitlist-row"
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    size: "lg",
    cta: "Solicitar acceso a la Beta Cerrada"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-microcopy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "warn",
    "aria-hidden": "true"
  }, "\u26A0"), /*#__PURE__*/React.createElement("span", null, "Primeras ", /*#__PURE__*/React.createElement("b", null, "50 tiendas"), ". Motor de producci\xF3n sellado \u2014 PHPUnit + PHPStan lvl 8 en verde.")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-micro reveal in",
    "data-delay": "560"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " Open source MIT"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " GDPR-native en checkout"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " BYO-WABA \xB7 tu n\xFAmero"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " Sin SaaS mensual")), /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    "data-delay": "600",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/docs/setup/",
    className: "video-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "video-icon",
    "aria-hidden": "true"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", null, "Mira el setup completo en v\xEDdeo \xB7 ", /*#__PURE__*/React.createElement("b", null, "15 min")))), /*#__PURE__*/React.createElement("div", {
    className: "trust reveal in",
    "data-delay": "640"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom/actions",
    target: "_blank",
    rel: "noopener",
    className: "ci-badge",
    "aria-label": "Estado CI en GitHub Actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ci-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ci-label mono"
  }, "CI"), /*#__PURE__*/React.createElement("span", {
    className: "ci-status"
  }, "passing")), /*#__PURE__*/React.createElement("span", {
    className: "trust-sep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "trust-text"
  }, "Repo p\xFAblico en GitHub desde d\xEDa 1. PHPStan level 8."))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null), /*#__PURE__*/React.createElement(AdminCard, null))));
}

/* ---------------- Logos strip ---------------- */
function Logos() {
  const items = [{
    name: "WooCommerce",
    glyph: "Wc"
  }, {
    name: "WordPress",
    glyph: "W"
  }, {
    name: "WhatsApp Business",
    icon: true
  }, {
    name: "Meta Cloud API",
    glyph: "M"
  }, {
    name: "PHP 8.2+",
    glyph: "PHP"
  }, {
    name: "Composer",
    glyph: "{}"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "logos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logos-label"
  }, "Construido sobre"), /*#__PURE__*/React.createElement("div", {
    className: "logos-row"
  }, items.map(l => /*#__PURE__*/React.createElement("span", {
    className: "logo-item",
    key: l.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "lo-mark"
  }, l.icon ? /*#__PURE__*/React.createElement(Icon.Whatsapp, {
    width: "16",
    height: "16"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, l.glyph)), l.name)))));
}

/* ---------------- Problem (stats) ---------------- */
function useCountUp(target, active, duration = 1100) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = t => {
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
function StatCard({
  value,
  suffix = "%",
  text,
  source,
  color,
  delay = 0
}) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setActive(true);
        io.disconnect();
      }
    }, {
      threshold: 0.35
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, active);
  const cls = "stat-num mono" + (color === "dim" ? " dim" : color === "mint" ? " mint" : "");
  return /*#__PURE__*/React.createElement("div", {
    className: "surface stat-card reveal",
    "data-delay": delay,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    "aria-label": `${value}${suffix}`
  }, Math.round(n), suffix), /*#__PURE__*/React.createElement("div", {
    className: "stat-text"
  }, text), source && /*#__PURE__*/React.createElement("div", {
    className: "stat-src"
  }, source));
}
function Problem() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "problema"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "El 70% de tus carritos se pierden. El email solo recupera el 8%."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "WhatsApp tiene una tasa de apertura del 98%. El email, un 20%. La diferencia est\xE1 en el canal, no en el copy.")), /*#__PURE__*/React.createElement("div", {
    className: "stat-grid"
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: 70,
    text: "de los carritos en eCommerce se abandonan antes de completar el pago.",
    source: "Baymard Institute \xB7 2025",
    delay: 80
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: 8,
    text: "tasa media de recuperaci\xF3n con flujos de email de carrito abandonado.",
    color: "dim",
    delay: 180
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: 50,
    suffix: "%+",
    color: "mint",
    text: "tasa de recuperaci\xF3n v\xEDa WhatsApp con plantillas correctas y timing \xF3ptimo.",
    source: "Retainful \xB7 datos agregados 2.000 tiendas 2025",
    delay: 280
  }))));
}

/* ---------------- Founder Quote ---------------- */
function FounderQuote() {
  return /*#__PURE__*/React.createElement("section", {
    className: "founder-section reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "founder-quote"
  }, /*#__PURE__*/React.createElement("p", null, "\"Ten\xEDa una tienda WooCommerce. Los plugins de carrito abandonado que prob\xE9 o cobraban 30\u20AC/mes o mandaban el WhatsApp desde un n\xFAmero gen\xE9rico con su marca. Decid\xED construir lo que necesitaba: env\xEDo desde mi propio n\xFAmero, sin SaaS mensual, con el c\xF3digo auditable en GitHub. Eso es CartPinger.\""), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", {
    className: "fq-name"
  }, "Fundador \xB7 CartPinger")))));
}
window.WCTop = {
  Nav,
  Hero,
  Logos,
  Problem,
  FounderQuote,
  Icon,
  WaitlistForm
};

/* ── components-mid.jsx ── */
/* CartPinger — Middle sections: Steps, Bento, TechSection, Calculator */

const Icon2 = window.WCTop?.Icon;

/* ---------------- Steps ---------------- */
function Steps() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "producto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Tres pasos. Sin sorpresas."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "El onboarding de Meta Business es donde otros plugins te abandonan. Aqu\xED no. ", /*#__PURE__*/React.createElement("a", {
    href: "/docs/setup/",
    className: "inline-video-link"
  }, "\u25B6 Mira el setup completo en v\xEDdeo (15 min)"))), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface step reveal",
    "data-delay": "100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-no"
  }, "PASO 01"), /*#__PURE__*/React.createElement("h3", null, "Instalas el plugin"), /*#__PURE__*/React.createElement("div", {
    className: "step-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dot",
    style: {
      background: "#21759b"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-name"
  }, "WooCommerce"), /*#__PURE__*/React.createElement("div", {
    className: "wp-status"
  }, "Activo")), /*#__PURE__*/React.createElement("div", {
    className: "wp-row active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-name"
  }, "CartPinger"), /*#__PURE__*/React.createElement("div", {
    className: "wp-status"
  }, "Activar \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "wp-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dot",
    style: {
      background: "#7c3aed"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-name"
  }, "Yoast SEO"), /*#__PURE__*/React.createElement("div", {
    className: "wp-status"
  }, "Activo")))), /*#__PURE__*/React.createElement("p", null, "Desde el repositorio oficial de WordPress.org. Gratis. Compatible con cualquier tema."), /*#__PURE__*/React.createElement("div", {
    className: "step-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "5 min"))), /*#__PURE__*/React.createElement("div", {
    className: "surface step featured reveal",
    "data-delay": "200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-no",
    style: {
      color: "var(--wa)"
    }
  }, "PASO 02 \xB7 DIFERENCIADOR"), /*#__PURE__*/React.createElement("h3", null, "Conectas tu WhatsApp Business"), /*#__PURE__*/React.createElement("div", {
    className: "step-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wz-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "done"
  }), /*#__PURE__*/React.createElement("span", {
    className: "done"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cur"
  }), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "wz-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon2.Check, {
    width: "7",
    height: "7"
  })), " Crear Meta Business Manager"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon2.Check, {
    width: "7",
    height: "7"
  })), " Vincular n\xFAmero de tel\xE9fono"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step cur"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, "3"), " Verificando empresa con Meta\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step pending"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, "4"), " Generar Access Token"))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/cartpinger-web/blob/main/documentacion.md",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--mint)",
      textDecoration: "underline"
    }
  }, "Documentaci\xF3n paso a paso en GitHub"), ". Si te atascas, soporte directo."), /*#__PURE__*/React.createElement("div", {
    className: "step-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-wa"
  }, "30 min"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Meta verifica en 1\u20137 d\xEDas"))), /*#__PURE__*/React.createElement("div", {
    className: "surface step reveal",
    "data-delay": "300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-no"
  }, "PASO 03"), /*#__PURE__*/React.createElement("h3", null, "Activas los flujos"), /*#__PURE__*/React.createElement("div", {
    className: "step-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), " Carrito abandonado"), /*#__PURE__*/React.createElement("div", {
    className: "tg on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), " Notificaciones de pedido"), /*#__PURE__*/React.createElement("div", {
    className: "tg on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), " Widget de chat"))), /*#__PURE__*/React.createElement("p", null, "Dos toggles en el panel de WordPress. Activo en minutos, sin tocar c\xF3digo."), /*#__PURE__*/React.createElement("div", {
    className: "step-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "5 min"))))));
}

/* ---------------- Bento ---------------- */
function Bento() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Todo lo que necesitas para recuperar carritos en WhatsApp."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Un plugin PHP nativo. Sin dependencias externas de pago. C\xF3digo auditable en GitHub desde el primer d\xEDa.")), /*#__PURE__*/React.createElement("div", {
    className: "bento"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-2 reveal",
    "data-delay": "60"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Recuperaci\xF3n de carrito abandonado"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-wa"
  }, "Core")), /*#__PURE__*/React.createElement("div", {
    className: "bento-conv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp mono"
  }, "+1 hora"), /*#__PURE__*/React.createElement("div", {
    className: "conv-bubble"
  }, "\xA1Hola Ana! Dejaste art\xEDculos en tu carrito en Tienda Demo \uD83D\uDED2", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Tu pedido sigue disponible. Recup\xE9ralo aqu\xED:", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono,'Geist Mono',monospace)",
      fontSize: 11,
      color: "#67e8f9",
      marginTop: 4
    }
  }, "tienda.demo/?cartpinger_recover=a3f\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, "14:32 \u2713\u2713"))), /*#__PURE__*/React.createElement("div", {
    className: "conv-row",
    style: {
      alignSelf: "flex-end",
      width: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-3)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      color: "var(--cyan)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })), "Entregado \xB7 le\xEDdo 14:33"))), /*#__PURE__*/React.createElement("ul", {
    className: "feat-bullets"
  }, /*#__PURE__*/React.createElement("li", null, "WP-Cron detecta el abandono 1 hora despu\xE9s \u2014 timing exacto, configurable"), /*#__PURE__*/React.createElement("li", null, "Token de recuperaci\xF3n 64 chars \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "bin2hex(random_bytes(32))"), ", de un solo uso"), /*#__PURE__*/React.createElement("li", null, "Restaura el carrito con un clic y redirige al checkout"), /*#__PURE__*/React.createElement("li", null, "Estado en DB: ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "pending \u2192 sent \u2192 recovered")))), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-1 reveal",
    "data-delay": "120"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Notificaciones de pedido"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-wa"
  }, "Core")), /*#__PURE__*/React.createElement("div", {
    className: "bento-conv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp mono"
  }, "Pedido #1042"), /*#__PURE__*/React.createElement("div", {
    className: "conv-bubble"
  }, "\u2705 \xA1Tu pedido ha sido confirmado!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Total: ", /*#__PURE__*/React.createElement("b", null, "\u20AC127,50"), " \xB7 Env\xEDo estimado: 2\u20133 d\xEDas h\xE1biles.", /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, "10:14 \u2713\u2713")))), /*#__PURE__*/React.createElement("p", null, "Env\xEDa un WhatsApp autom\xE1tico al confirmar el pedido. El cliente recibe el total, los productos y el tiempo de env\xEDo estimado. Sin plugins adicionales.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-1 reveal",
    "data-delay": "120"
  }, /*#__PURE__*/React.createElement("h3", null, "Widget WhatsApp flotante"), /*#__PURE__*/React.createElement("div", {
    className: "widget-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wdg-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wdg-bubble"
  }, "\xBFTienes alguna duda? Escr\xEDbenos"), /*#__PURE__*/React.createElement("div", {
    className: "wdg-fab"
  }, /*#__PURE__*/React.createElement(Icon2.Whatsapp, {
    width: "20",
    height: "20",
    style: {
      color: "#04220f"
    }
  })))), /*#__PURE__*/React.createElement("p", null, "Bot\xF3n de chat flotante en tu tienda. JS y CSS nativos \u2014 cero dependencias. Configurable desde el panel de ajustes de CartPinger.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-1 reveal",
    "data-delay": "180"
  }, /*#__PURE__*/React.createElement("h3", null, "Logs de entrega en tiempo real"), /*#__PURE__*/React.createElement("div", {
    className: "logs-mock",
    role: "img",
    "aria-label": "CartPinger \u2014 registro en tiempo real del estado de entrega de mensajes via webhook Meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "log-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "log-stamp mono"
  }, "14:32:08"), /*#__PURE__*/React.createElement("span", {
    className: "log-id mono"
  }, "wamid_4827"), /*#__PURE__*/React.createElement("span", {
    className: "log-stat ok"
  }, "DELIVERED")), /*#__PURE__*/React.createElement("div", {
    className: "log-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "log-stamp mono"
  }, "14:32:14"), /*#__PURE__*/React.createElement("span", {
    className: "log-id mono"
  }, "wamid_4827"), /*#__PURE__*/React.createElement("span", {
    className: "log-stat read"
  }, "READ")), /*#__PURE__*/React.createElement("div", {
    className: "log-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "log-stamp mono"
  }, "14:34:02"), /*#__PURE__*/React.createElement("span", {
    className: "log-id mono"
  }, "wamid_4828"), /*#__PURE__*/React.createElement("span", {
    className: "log-stat ok"
  }, "DELIVERED")), /*#__PURE__*/React.createElement("div", {
    className: "log-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "log-stamp mono"
  }, "14:35:47"), /*#__PURE__*/React.createElement("span", {
    className: "log-id mono"
  }, "wamid_4829"), /*#__PURE__*/React.createElement("span", {
    className: "log-stat fail"
  }, "FAILED \xB7 retry"))), /*#__PURE__*/React.createElement("p", null, "Webhook validado con HMAC-SHA256 usando tu ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "app_secret"), ". Cada mensaje actualiza su estado por ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "wamid"), " directamente desde Meta Cloud API.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-4-1 reveal",
    "data-delay": "240"
  }, /*#__PURE__*/React.createElement("h3", null, "Dashboard de recovery"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Mensajes enviados"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono"
  }, "94")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Carritos recuperados"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono"
  }, "47")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Tasa de conversi\xF3n"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono",
    style: {
      color: "var(--mint)"
    }
  }, "50%"))), /*#__PURE__*/React.createElement("p", null, "Tres KPIs reales en tu WP Admin. React SPA ligero montado en el panel.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-4-1 reveal",
    "data-delay": "300"
  }, /*#__PURE__*/React.createElement("h3", null, "GDPR opt-in nativo"), /*#__PURE__*/React.createElement("div", {
    className: "gdpr-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gdpr-check"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gdpr-box"
  }, /*#__PURE__*/React.createElement(Icon2.Check, {
    width: "9",
    height: "9"
  })), /*#__PURE__*/React.createElement("span", null, "Acepto recibir recordatorios de carrito v\xEDa WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-3)",
      marginTop: 8,
      paddingLeft: 24
    }
  }, "Bloquea el pedido si no hay consentimiento pendiente. Revocaci\xF3n inmediata en DB.")), /*#__PURE__*/React.createElement("p", null, "Checkbox nativo inyectado en el checkout de WooCommerce. Sin plugins adicionales de privacidad.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-4-1 reveal",
    "data-delay": "360"
  }, /*#__PURE__*/React.createElement("h3", null, "Open source MIT"), /*#__PURE__*/React.createElement("div", {
    className: "os-mock"
  }, /*#__PURE__*/React.createElement(Icon2.Github, {
    width: "18",
    height: "18"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "MIT License"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    },
    className: "mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605"), " P\xFAblico d\xEDa 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-mint"
  }, "PHPStan lvl 8"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "PHPUnit"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "WP_Mock")), /*#__PURE__*/React.createElement("p", null, "Audita el c\xF3digo. Fork\xE9alo. Sin lock-in. CI verde en GitHub Actions desde el primer commit.")))));
}

/* ---------------- TechSection ---------------- */
function TechSection() {
  const payload = `{
  "messaging_product": "whatsapp",
  "to": "+34612345678",
  "type": "template",
  "template": {
    "name": "abandoned_cart_recovery",
    "language": { "code": "en_US" },
    "components": [{
      "type": "body",
      "parameters": [
        { "type": "text", "text": "Ana" },
        { "type": "text",
          "text": "https://tienda.com/?cartpinger_recover=a3f…" }
      ]
    }]
  }
}`;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "tech"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "PHP nativo. Tu servidor, tu data."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "CartPinger corre en tu WordPress. Ning\xFAn servidor nuestro en el medio. Los datos de tus clientes no salen de tu infraestructura.")), /*#__PURE__*/React.createElement("div", {
    className: "tech-grid reveal",
    "data-delay": "80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-dot",
    style: {
      background: "#ff5f57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "term-dot",
    style: {
      background: "#febc2e"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "term-dot",
    style: {
      background: "#28c840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "term-title mono"
  }, "bash \u2014 WP-CLI")), /*#__PURE__*/React.createElement("div", {
    className: "term-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-prompt"
  }, "$"), " wp plugin install cartpinger --activate"), /*#__PURE__*/React.createElement("div", {
    className: "term-line dim"
  }, "Downloading installation package\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "term-line dim"
  }, "Installing the plugin\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "term-line ok"
  }, "Plugin installed successfully."), /*#__PURE__*/React.createElement("div", {
    className: "term-line ok"
  }, "Plugin 'cartpinger' activated."), /*#__PURE__*/React.createElement("div", {
    className: "term-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-prompt"
  }, "$"), " wp cartpinger status"), /*#__PURE__*/React.createElement("div", {
    className: "term-line dim"
  }, "DB tables: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mint)"
    }
  }, "\u2713 cartpinger_recoveries")), /*#__PURE__*/React.createElement("div", {
    className: "term-line dim"
  }, "DB tables: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mint)"
    }
  }, "\u2713 cartpinger_messages_log")), /*#__PURE__*/React.createElement("div", {
    className: "term-line ok"
  }, "CartPinger v1.0 ready."), /*#__PURE__*/React.createElement("div", {
    className: "term-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-prompt"
  }, "$"), " ", /*#__PURE__*/React.createElement("span", {
    className: "term-cursor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tech-payload"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payload-label mono"
  }, "POST graph.facebook.com/v19.0/{phone_id}/messages"), /*#__PURE__*/React.createElement("div", {
    className: "payload-body"
  }, /*#__PURE__*/React.createElement("pre", {
    className: "mono"
  }, payload))), /*#__PURE__*/React.createElement("div", {
    className: "tech-stack-cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface ts-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-label"
  }, "Runtime"), /*#__PURE__*/React.createElement("div", {
    className: "ts-val mono"
  }, "PHP 8.2+"), /*#__PURE__*/React.createElement("div", {
    className: "ts-sub"
  }, "typed props \xB7 enums \xB7 PSR-4")), /*#__PURE__*/React.createElement("div", {
    className: "surface ts-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-label"
  }, "CMS"), /*#__PURE__*/React.createElement("div", {
    className: "ts-val mono"
  }, "WordPress 6.2+"), /*#__PURE__*/React.createElement("div", {
    className: "ts-sub"
  }, "WP-Cron \xB7 REST API \xB7 hooks")), /*#__PURE__*/React.createElement("div", {
    className: "surface ts-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-label"
  }, "eCommerce"), /*#__PURE__*/React.createElement("div", {
    className: "ts-val mono"
  }, "WooCommerce 7+"), /*#__PURE__*/React.createElement("div", {
    className: "ts-sub"
  }, "checkout \xB7 cart \xB7 session")), /*#__PURE__*/React.createElement("div", {
    className: "surface ts-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-label"
  }, "Quality"), /*#__PURE__*/React.createElement("div", {
    className: "ts-val mono"
  }, "PHPStan lvl 8"), /*#__PURE__*/React.createElement("div", {
    className: "ts-sub"
  }, "PHPUnit \xB7 WP_Mock \xB7 phpcs"))))));
}

/* ---------------- Calculator ---------------- */
const COMPETITORS = {
  retainful: {
    name: "Retainful",
    monthly: 14,
    currency: "$"
  },
  aisensy: {
    name: "AiSensy",
    monthly: 25,
    currency: "$"
  },
  notiqoo: {
    name: "Notiqoo",
    monthly: 39,
    currency: "$"
  }
};
const HORIZONS = {
  1: 12,
  3: 36,
  5: 60
};
function fmtEur(n) {
  return "€" + Math.round(n).toLocaleString("es-ES");
}
function fmt(n) {
  return Math.round(n).toLocaleString("es-ES");
}
function Calculator() {
  const [orders, setOrders] = React.useState(500);
  const [abandon, setAbandon] = React.useState(70);
  const [aov, setAov] = React.useState(60);
  const [competitor, setCompetitor] = React.useState("aisensy");
  const [years, setYears] = React.useState("3");
  const c = COMPETITORS[competitor];
  const months = HORIZONS[years];
  const compTotal = c.monthly * months * 0.93;
  const wcTotal = 99 * parseInt(years);
  const diff = compTotal - wcTotal;
  const abandoned = orders * (abandon / 100);
  const recovered = abandoned * 0.5;
  const recoveredYear = recovered * 12;
  const revenueRecovered = recoveredYear * aov;
  const max = Math.max(wcTotal, compTotal);
  const wcW = wcTotal / max * 100;
  const cW = compTotal / max * 100;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "precio-calc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Calcula lo que ahorras vs SaaS recurrente."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "\u20AC99/a\xF1o o \u20AC14/mes. Las alternativas cobran 2\u20135\xD7 m\xE1s. La diferencia compone.")), /*#__PURE__*/React.createElement("div", {
    className: "surface calc reveal",
    "data-delay": "80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Pedidos al mes ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, fmt(orders))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "5000",
    step: "50",
    value: orders,
    onChange: e => setOrders(+e.target.value),
    "aria-label": "Pedidos al mes"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "% carritos abandonados ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, abandon, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "80",
    step: "1",
    value: abandon,
    onChange: e => setAbandon(+e.target.value),
    "aria-label": "Porcentaje de carritos abandonados"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Ticket medio (AOV) ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "\u20AC", aov)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "20",
    max: "500",
    step: "5",
    value: aov,
    onChange: e => setAov(+e.target.value),
    "aria-label": "Ticket medio en euros"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Competidor"), /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, Object.entries(COMPETITORS).map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: competitor === k ? "active" : "",
    onClick: () => setCompetitor(k),
    role: "tab",
    "aria-selected": competitor === k
  }, v.name, " ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      opacity: 0.6
    }
  }, "\xB7", v.currency, v.monthly, "/mes"))))), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Horizonte"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, ["1", "3", "5"].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    className: years === y ? "active" : "",
    onClick: () => setYears(y)
  }, y, " ", y === "1" ? "año" : "años"))))), /*#__PURE__*/React.createElement("div", {
    className: "calc-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "CartPinger Pro \xB7 \u20AC99/a\xF1o"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, fmtEur(wcTotal))), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, c.name, " \xB7 ", years, " ", years === "1" ? "año" : "años"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      color: "var(--coral)"
    }
  }, fmtEur(compTotal))), /*#__PURE__*/React.createElement("div", {
    className: "diff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Tu diferencia a ", years, " ", years === "1" ? "año" : "años"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, fmtEur(diff)), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "menos eligiendo CartPinger anual")), /*#__PURE__*/React.createElement("div", {
    className: "calc-bars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar wa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "CartPinger Pro"), /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: wcW + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, fmtEur(wcTotal))), /*#__PURE__*/React.createElement("div", {
    className: "bar comp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: cW + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, fmtEur(compTotal)))), /*#__PURE__*/React.createElement("div", {
    className: "calc-meta"
  }, "Recovery estimado a\xF1o 1: ", /*#__PURE__*/React.createElement("b", null, fmt(recoveredYear), " carritos"), /*#__PURE__*/React.createElement("br", null), "Revenue recuperado estimado: ", /*#__PURE__*/React.createElement("b", null, fmtEur(revenueRecovered)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-3)",
      marginTop: 6
    }
  }, "Asumiendo 50% recovery WhatsApp \xB7 AOV \u20AC", aov, " \xB7 c\xE1lculo orientativo, no garant\xEDa.")))))));
}
window.WCMid = {
  Steps,
  Bento,
  TechSection,
  Calculator
};

/* ── components-bottom.jsx ── */
/* CartPinger — Bottom sections: Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer */

const Icon3 = window.WCTop?.Icon;

/* ---------------- Comparison ---------------- */
const CMP_ROWS = [{
  f: "Precio",
  wc: {
    v: "Gratis · Pro desde €8,25/mes",
    tip: "Free para siempre hasta 50 recuperaciones/mes. Pro €14/mes o €99/año (~€8,25/mes): sin límite + secuencias, cupones dinámicos, CSV y soporte prioritario."
  },
  rt: {
    v: "$14/mes",
    tip: "≈ €156/año recurrente."
  },
  ai: {
    v: "$25/mes",
    tip: "≈ €280/año recurrente, plan estándar."
  },
  nf: {
    v: "Gratis",
    tip: "Plan limitado con marca Notiqoo en mensajes."
  },
  np: {
    v: "$39/mes",
    tip: "≈ €436/año plan Pro."
  }
}, {
  f: "Carrito abandonado WhatsApp",
  wc: {
    yes: true,
    tier: "free",
    tip: "Detección via WP-Cron 1h tras abandono. Template aprobada por Meta."
  },
  rt: {
    yes: true,
    tip: "Feature core de Retainful."
  },
  ai: {
    yes: true,
    tip: "Soporte para flows de carrito."
  },
  nf: {
    v: "Limitado",
    tip: "Sólo 1 mensaje en plan free."
  },
  np: {
    yes: true
  }
}, {
  f: "Templates WhatsApp (4 idiomas)",
  wc: {
    v: "en_US · es_ES · es_MX · pt_BR",
    tier: "free",
    tip: "Templates aprobadas por Meta en inglés, español (ES y MX) y portugués BR."
  },
  rt: {
    v: "EN",
    tip: "Templates principalmente en inglés."
  },
  ai: {
    v: "EN, HI",
    tip: "Foco India + inglés."
  },
  nf: {
    v: "Limitado",
    tip: "1–2 templates genéricas."
  },
  np: {
    v: "EN, HI"
  }
}, {
  f: "GDPR opt-in nativo en checkout",
  wc: {
    yes: true,
    tier: "free",
    tip: "Checkbox inyectado en WooCommerce checkout. Revocación inmediata en DB."
  },
  rt: {
    v: "Parcial",
    tip: "Depende de plugins de privacidad externos."
  },
  ai: {
    no: true
  },
  nf: {
    no: true
  },
  np: {
    v: "Parcial"
  }
}, {
  f: "Logs de entrega webhook",
  wc: {
    yes: true,
    tier: "free",
    tip: "Webhook Meta validado con HMAC-SHA256. Estados delivered/read/failed por wamid."
  },
  rt: {
    v: "Básico"
  },
  ai: {
    yes: true
  },
  nf: {
    no: true
  },
  np: {
    yes: true
  }
}, {
  f: "Wizard onboarding Meta",
  wc: {
    yes: true,
    tier: "free",
    tip: "Documentación detallada en GitHub + soporte directo."
  },
  rt: {
    v: "Básico",
    tip: "Docs escritos, sin vídeo guiado."
  },
  ai: {
    yes: true
  },
  nf: {
    no: true
  },
  np: {
    v: "Básico"
  }
}, {
  f: "Calculadora costes integrada",
  wc: {
    yes: true,
    tier: "free",
    tip: "Estimas tu factura Meta antes de enviar."
  },
  rt: {
    no: true
  },
  ai: {
    no: true
  },
  nf: {
    no: true
  },
  np: {
    no: true
  }
}, {
  f: "Open source MIT",
  wc: {
    yes: true,
    tier: "free",
    tip: "Repo público desde día 1, código auditable, forkeable."
  },
  rt: {
    no: true
  },
  ai: {
    no: true
  },
  nf: {
    no: true
  },
  np: {
    no: true
  }
}, {
  f: "Tu propio número (BYO-WABA)",
  wc: {
    yes: true,
    tier: "free",
    tip: "Conectas tu propio Meta WABA. Tu marca, tu data."
  },
  rt: {
    yes: true
  },
  ai: {
    yes: true
  },
  nf: {
    yes: true
  },
  np: {
    yes: true
  }
}, {
  f: "Secuencia multi-mensaje (+24h con cupón · +48h)",
  wc: {
    yes: true,
    tier: "pro",
    tip: "Flujo automático: mensaje inicial 1h + recordatorio 24h con cupón dinámico + recordatorio final 48h."
  },
  rt: {
    yes: true
  },
  ai: {
    yes: true
  },
  nf: {
    no: true
  },
  np: {
    yes: true
  }
}, {
  f: "Cupones dinámicos automáticos",
  wc: {
    yes: true,
    tier: "pro",
    tip: "Cupón 10% descuento, un solo uso, validez 48h. Generado y adjuntado automáticamente al mensaje +24h."
  },
  rt: {
    yes: true
  },
  ai: {
    v: "Parcial"
  },
  nf: {
    no: true
  },
  np: {
    yes: true
  }
}, {
  f: "Exportación CSV",
  wc: {
    yes: true,
    tier: "pro",
    tip: "Export completo de recuperaciones: email, carrito, token, estado, timestamp."
  },
  rt: {
    yes: true
  },
  ai: {
    no: true
  },
  nf: {
    no: true
  },
  np: {
    yes: true
  }
}, {
  f: "Soporte",
  wc: {
    v: "Issues · Email prioritario Pro",
    tip: "GitHub issues públicos en Free. Email prioritario incluido en Pro."
  },
  rt: {
    v: "Email"
  },
  ai: {
    v: "Email · chat"
  },
  nf: {
    v: "Email"
  },
  np: {
    v: "Email"
  }
}];
function TierBadge({
  tier
}) {
  if (tier === "free") return /*#__PURE__*/React.createElement("span", {
    className: "tier-badge tier-free"
  }, "Free");
  if (tier === "pro") return /*#__PURE__*/React.createElement("span", {
    className: "tier-badge tier-pro"
  }, "Pro");
  return null;
}
function Cell({
  data,
  highlight
}) {
  if (!data) return /*#__PURE__*/React.createElement("td", {
    className: highlight ? "wcol" : ""
  }, "\u2014");
  const inner = data.yes && !data.v ? /*#__PURE__*/React.createElement("span", {
    className: "cell yes"
  }, /*#__PURE__*/React.createElement(Icon3.Check, {
    width: "14",
    height: "14"
  }), /*#__PURE__*/React.createElement(TierBadge, {
    tier: data.tier
  }), data.tip && /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, data.tip)) : data.no ? /*#__PURE__*/React.createElement("span", {
    className: "cell no"
  }, /*#__PURE__*/React.createElement(Icon3.X, {
    width: "14",
    height: "14"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "cell"
  }, data.v, /*#__PURE__*/React.createElement(TierBadge, {
    tier: data.tier
  }), data.tip && /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, data.tip));
  return /*#__PURE__*/React.createElement("td", {
    className: highlight ? "wcol" : ""
  }, inner);
}
function Comparison() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "comparativa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Comparativa honesta. Sin trampas de marketing."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Si un competidor tiene una feature, la marcamos. Si nosotros no la tenemos, no la inventamos. Hover sobre cualquier celda para detalle.")), /*#__PURE__*/React.createElement("div", {
    className: "cmp-wrap reveal",
    "data-delay": "100"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Feature"), /*#__PURE__*/React.createElement("th", {
    className: "wcol"
  }, "CartPinger"), /*#__PURE__*/React.createElement("th", null, "Retainful"), /*#__PURE__*/React.createElement("th", null, "AiSensy"), /*#__PURE__*/React.createElement("th", null, "Notiqoo Free"), /*#__PURE__*/React.createElement("th", null, "Notiqoo Pro"))), /*#__PURE__*/React.createElement("tbody", null, CMP_ROWS.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.f
  }, /*#__PURE__*/React.createElement("td", null, r.f), /*#__PURE__*/React.createElement(Cell, {
    data: r.wc,
    highlight: true
  }), /*#__PURE__*/React.createElement(Cell, {
    data: r.rt
  }), /*#__PURE__*/React.createElement(Cell, {
    data: r.ai
  }), /*#__PURE__*/React.createElement(Cell, {
    data: r.nf
  }), /*#__PURE__*/React.createElement(Cell, {
    data: r.np
  }))))))));
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const WaitlistForm = window.WCTop.WaitlistForm;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "precio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Empieza gratis. Actualiza cuando quieras."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Free para siempre hasta 50 recuperaciones/mes. Pro desde \u20AC8,25/mes (anual) o \u20AC14/mes: sin l\xEDmite + secuencias avanzadas y cupones autom\xE1ticos.")), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid reveal",
    "data-delay": "60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface price-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--mint)"
    }
  }), "Disponible Q3 2026")), /*#__PURE__*/React.createElement("div", {
    className: "price-num",
    style: {
      fontSize: 40
    }
  }, "Gratis"), /*#__PURE__*/React.createElement("div", {
    className: "price-sub"
  }, "para siempre \xB7 hasta 50 recuperaciones/mes"), /*#__PURE__*/React.createElement("ul", {
    className: "price-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Recuperaci\xF3n de carrito (1 mensaje \xB7 1h \xB7 hasta 50/mes)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Multi-idioma: en_US \xB7 es_ES \xB7 es_MX \xB7 pt_BR"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Dashboard KPIs (enviados \xB7 recuperados \xB7 conversi\xF3n)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " GDPR opt-in nativo en checkout"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Widget flotante de WhatsApp"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Repo p\xFAblico MIT \u2014 c\xF3digo auditable")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    cta: "Solicitar acceso Beta"
  }), /*#__PURE__*/React.createElement("p", {
    className: "micro",
    style: {
      marginTop: 10
    }
  }, "Sin tarjeta. Sin compromiso. Te aviso cuando est\xE9 disponible."))), /*#__PURE__*/React.createElement("div", {
    className: "surface price-card founder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--cyan)"
    }
  }), "Disponible Q3 2026"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-pro"
  }, "Pro")), /*#__PURE__*/React.createElement("div", {
    className: "price-num"
  }, "\u20AC99", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      opacity: .7
    }
  }, "/a\xF1o")), /*#__PURE__*/React.createElement("div", {
    className: "price-sub"
  }, "o \u20AC14/mes \xB7 sin permanencia \xB7 sin l\xEDmite"), /*#__PURE__*/React.createElement("ul", {
    className: "price-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Todo lo de Free"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text)"
    }
  }, "Secuencia multi-mensaje: +24h con cup\xF3n \xB7 +48h recordatorio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Cupones din\xE1micos autom\xE1ticos (10% \xB7 1 uso \xB7 48h validez)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Exportaci\xF3n CSV de todas las recuperaciones"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Soporte prioritario por email"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Updates incluidos mientras est\xE9 activa")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    cta: "Solicitar acceso Beta Pro"
  }), /*#__PURE__*/React.createElement("p", {
    className: "micro",
    style: {
      marginTop: 10
    }
  }, "Plazas limitadas a las primeras 50 tiendas. Precio congelado para early access."))))));
}

/* ---------------- Roadmap ---------------- */
function Roadmap() {
  const cols = [{
    key: "done",
    label: "Done",
    items: ["Repo público en GitHub", "Arquitectura PSR-4 definida", "PHPUnit + PHPStan lvl 8 en verde", "DB schema + migrations", "GDPR opt-in en checkout", "Token de recuperación seguro", "Webhook HMAC-SHA256", "Dashboard React (3 KPIs)", "Widget WhatsApp flotante"]
  }, {
    key: "prog",
    label: "In Progress",
    items: ["Beta Cerrada — primeras 50 tiendas", "Documentación de onboarding Meta", "Envío a revisión en WordPress.org"]
  }, {
    key: "next",
    label: "Next",
    items: ["Templates en ES, PT-BR, FR, IT", "Flujo multi-mensaje (recordatorio +24h)", "Cupones automáticos con expiración", "Notificaciones de pedido (confirmación, envío)"]
  }, {
    key: "fut",
    label: "Future",
    items: ["OTP login vía WhatsApp", "Integración con WooCommerce Blocks", "Export CSV de logs", "Multi-site WordPress"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "roadmap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Roadmap abierto. Construido en p\xFAblico."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Cada \xEDtem refleja el estado real del repo. Sin promesas vaporware.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-grid reveal",
    "data-delay": "80"
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "surface rm-col " + c.key,
    key: c.key
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rm-col-h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, c.key === "done" ? /*#__PURE__*/React.createElement(Icon3.Check, {
    width: "9",
    height: "9"
  }) : c.key === "prog" ? "→" : c.key === "next" ? "◎" : "○"), c.label), /*#__PURE__*/React.createElement("ul", {
    className: "rm-list"
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, c.key === "done" ? /*#__PURE__*/React.createElement(Icon3.Check, {
    width: "9",
    height: "9"
  }) : "·"), it)))))), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom",
    target: "_blank",
    rel: "noopener",
    className: "rm-link"
  }, "Ver repositorio en GitHub ", /*#__PURE__*/React.createElement(Icon3.ArrowRight, {
    width: "15",
    height: "15"
  }))));
}

/* ---------------- FAQ ---------------- */
const FAQS = [{
  q: "¿Cuándo está disponible?",
  a: "Lanzamiento público Q3 2026. No hay pre-órdenes ni lista de espera de pago: cuando esté listo, lo anuncio aquí y por email a quien se haya suscrito. Si quieres aviso, suscríbete arriba."
}, {
  q: "¿Tengo que pagar a Meta por enviar WhatsApps?",
  a: "No para empezar. Meta regala 1.000 conversaciones mensuales 100% gratis a cada cuenta Business. Para la inmensa mayoría de tiendas pequeñas y medianas, usar CartPinger tendrá un coste de 0€ al mes en la API de Meta."
}, {
  q: "¿Solo envía un mensaje de recuperación o puedo configurar una secuencia?",
  a: "Free: un único mensaje 1 hora después del abandono — la franja de mayor conversión. Pro: secuencia completa de tres mensajes — inicial (1h), recordatorio con cupón dinámico del 10% (+24h) y recordatorio final (+48h)."
}, {
  q: "¿Qué pasa si Meta no me aprueba como Business?",
  a: "El 95% de tiendas legítimas son aprobadas. Si tu tienda es legal y operativa, no debería haber problema. Te guío en cada paso con documentación detallada en GitHub. Si hay un problema, me escribes directamente."
}, {
  q: "¿Y si no llego a tiempo para mi campaña actual?",
  a: "Lanzamiento público Q3 2026. Si necesitas solución ahora mismo (mayo–junio 2026), todavía no es para ti. La transparencia del estado está en el roadmap público y en GitHub."
}, {
  q: "¿Cuánto pago a Meta por mensaje?",
  a: "0€ a nosotros por mensajes. A Meta pagas según su pricing oficial. En España, un mensaje de carrito abandonado (categoría marketing) cuesta aproximadamente €0,08. Los primeros 1.000 mensajes al mes son gratis."
}, {
  q: "¿Es open source de verdad?",
  a: "Sí, MIT License. El código es libre y público desde día 1 — puedes descargarlo, auditarlo y usarlo sin pagar nada. El plan Pro (€14/mes o €99/año) no es por la licencia del código, sino por quitar el límite mensual de 50 recuperaciones y añadir funciones avanzadas: secuencia multi-mensaje, cupones dinámicos, CSV y soporte prioritario."
}, {
  q: "¿El plugin almacena datos de clientes en sus servidores?",
  a: "No. CartPinger no tiene servidores propios. Corre íntegramente en tu WordPress. Los datos de tus clientes (teléfono, carrito, token de recuperación) se almacenan en tu base de datos MySQL local. Nosotros solo proveemos el código."
}, {
  q: "¿Funciona con block-based checkout?",
  a: "Sí. La integración GDPR usa la API WooCommerce Additional Checkout Fields, compatible con WooCommerce Blocks desde WooCommerce 9.0+."
}, {
  q: "¿Funciona en hosting compartido?",
  a: "Sí, siempre que el servidor tenga PHP 8.2+ y WP-Cron activo. La mayoría de hostings compartidos modernos (SiteGround, Hostinger, Raiola, etc.) cumplen estos requisitos. Si tu hosting desactiva WP-Cron por defecto, puedes configurarlo vía cron real del sistema — la documentación incluye las instrucciones."
}, {
  q: "¿Me vais a llenar el email de marketing?",
  a: "No. Te escribo una sola vez: cuando CartPinger esté disponible. Sin newsletter, sin drip, sin upsells. Puedes darte de baja con un click en cualquier momento."
}];
function FAQ() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Preguntas honestas."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Las objeciones que recibo m\xE1s a menudo, respondidas sin rodeos.")), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement("details", {
    className: "faq-item reveal",
    "data-delay": Math.min(i * 50, 300),
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, f.q), /*#__PURE__*/React.createElement("div", {
    className: "a"
  }, f.a))))));
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  const WaitlistForm = window.WCTop.WaitlistForm;
  return /*#__PURE__*/React.createElement("section", {
    className: "final",
    id: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1 reveal"
  }, "Empieza gratis. Actualiza cuando quieras."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal",
    "data-delay": "100"
  }, "Free para siempre hasta 50 recuperaciones/mes. Pro \u20AC14/mes o \u20AC99/a\xF1o: sin l\xEDmite, secuencias y cupones autom\xE1ticos. Disponible Q3 2026."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "200",
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    size: "lg",
    cta: "Apuntarme a la Beta"
  })), /*#__PURE__*/React.createElement("div", {
    className: "micro-row reveal",
    "data-delay": "400"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "tick",
    width: "13",
    height: "13",
    style: {
      display: "inline",
      verticalAlign: -2
    }
  }), " Free para siempre \xB7 sin tarjeta"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "tick",
    width: "13",
    height: "13",
    style: {
      display: "inline",
      verticalAlign: -2
    }
  }), " Pro \u20AC14/mes o \u20AC99/a\xF1o \xB7 cancela cuando quieras"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "tick",
    width: "13",
    height: "13",
    style: {
      display: "inline",
      verticalAlign: -2
    }
  }), " Un solo email cuando lance"))));
}

/* ---------------- Footer ---------------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement(Icon3.Whatsapp, {
    style: {
      color: "#04220f"
    }
  })), /*#__PURE__*/React.createElement("span", null, "CartPinger")), /*#__PURE__*/React.createElement("div", null, "Plugin de WooCommerce para WhatsApp Cloud API. Recupera carritos abandonados. Tu propio n\xFAmero, tu propia data.")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Producto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#precio"
  }, "Precio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#roadmap"
  }, "Roadmap")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom",
    target: "_blank",
    rel: "noopener"
  }, "GitHub ", /*#__PURE__*/React.createElement(Icon3.Ext, {
    width: "10",
    height: "10",
    style: {
      display: "inline",
      verticalAlign: -1,
      marginLeft: 2,
      opacity: 0.6
    }
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom/releases",
    target: "_blank",
    rel: "noopener"
  }, "Changelog ", /*#__PURE__*/React.createElement(Icon3.Ext, {
    width: "10",
    height: "10",
    style: {
      display: "inline",
      verticalAlign: -1,
      marginLeft: 2,
      opacity: 0.6
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Recursos"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/docs/setup/"
  }, "Gu\xEDa de instalaci\xF3n")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/docs/templates/"
  }, "Plantillas de mensajes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/docs/faq/"
  }, "FAQ t\xE9cnica")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@cartpinger.com"
  }, "Soporte")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Legal"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/privacy.html"
  }, "Privacidad")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/terms.html"
  }, "T\xE9rminos de uso")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/terms.html#7-responsabilidad-del-titular-de-la-tienda-dpa--rgpd"
  }, "RGPD / DPA"))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, "\xA9 2026 CartPinger. Todos los derechos reservados."), /*#__PURE__*/React.createElement("div", {
    className: "made"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/privacy.html"
  }, "Privacidad"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "/terms.html"
  }, "T\xE9rminos"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@cartpinger.com"
  }, "Contacto")))));
}
window.WCBot = {
  Comparison,
  Pricing,
  Roadmap,
  FAQ,
  FinalCTA,
  Footer
};

/* ── app.jsx ── */
/* CartPinger — App composition + scroll reveals */

function App() {
  const {
    Nav,
    Hero,
    Logos,
    Problem,
    FounderQuote
  } = window.WCTop;
  const {
    Steps,
    Bento,
    TechSection,
    Calculator
  } = window.WCMid;
  const {
    Comparison,
    Pricing,
    Roadmap,
    FAQ,
    FinalCTA,
    Footer
  } = window.WCBot;
  React.useEffect(() => {
    const fire = () => {
      document.querySelectorAll(".hero h1, .iphone, .admin-card").forEach(el => el.classList.add("go"));
    };
    if (document.visibilityState === "visible") {
      requestAnimationFrame(fire);
    } else {
      const onVis = () => {
        if (document.visibilityState === "visible") {
          fire();
          document.removeEventListener("visibilitychange", onVis);
        }
      };
      document.addEventListener("visibilitychange", onVis);
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Logos, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(FounderQuote, null), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(Bento, null), /*#__PURE__*/React.createElement(TechSection, null), /*#__PURE__*/React.createElement(Calculator, null), /*#__PURE__*/React.createElement(Comparison, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Roadmap, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(FinalCTA, null)), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));