/* CartPinger landing EN — production bundle */
"use strict";

/* ── components-top.en.jsx ── */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CartPinger — Top sections EN: Nav, Hero, Logos, Problem */

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
function WaitlistForm({
  size = "md",
  placeholder = "your@email.com",
  cta = "Notify me at launch",
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
    fetch("/waitlist.php", {
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
    }), /*#__PURE__*/React.createElement("span", null, "You're in. I'll reach out when CartPinger launches. ", /*#__PURE__*/React.createElement("span", {
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
    "aria-label": "Your email",
    required: true,
    style: state === "error" ? {
      color: "var(--coral)"
    } : {}
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary" + (size === "lg" ? " btn-lg btn-glow" : ""),
    disabled: state === "sending"
  }, state === "sending" ? "Sending…" : cta));
}
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/en/",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon.Whatsapp, {
    style: {
      color: "#04220f"
    }
  })), /*#__PURE__*/React.createElement("span", null, "CartPinger")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#producto"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#precio"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#roadmap"
  }, "Roadmap"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom",
    target: "_blank",
    rel: "noopener",
    "aria-label": "GitHub (opens in new tab)",
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
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      sessionStorage.setItem('cp-lang', 'es');
      location.href = '/';
    },
    title: "Espa\xF1ol"
  }, "ES"), /*#__PURE__*/React.createElement("button", {
    className: "active",
    "aria-current": "true"
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    title: "Coming soon"
  }, "PT-BR")), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    className: "btn btn-primary btn-sm"
  }, "Request Beta"))));
}
function HeroTitle() {
  const words = "One WhatsApp. One hour later. Cart recovered.".split(" ");
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
    "aria-label": "CartPinger in action: iPhone showing the WhatsApp recovery message"
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
  }, "Demo Store"), /*#__PURE__*/React.createElement("div", {
    className: "wa-status"
  }, "via WhatsApp Business")), /*#__PURE__*/React.createElement("div", {
    className: "wa-icons",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon.Phone, {
    width: "14",
    height: "14"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wa-thread"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-time-sep"
  }, "1 hour ago \xB7 CartPinger detected the cart"), /*#__PURE__*/React.createElement("span", {
    className: "bubble out"
  }, "Hi Ana! You left items in your cart at Demo Store \uD83D\uDED2", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Your order is still available. Recover it here:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "recovery-link"
  }, "store.demo/?cartpinger_recover=a3f\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, "14:32 \u2713\u2713")), /*#__PURE__*/React.createElement("div", {
    className: "delivery-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-dot delivered"
  }), /*#__PURE__*/React.createElement("span", null, "Delivered \xB7 read 14:33"))), /*#__PURE__*/React.createElement("div", {
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
    "aria-label": "CartPinger Dashboard \u2014 47 carts recovered, \u20AC3,214 revenue, 50% conversion rate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ac-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ac-label"
  }, "Dashboard \xB7 this month"), /*#__PURE__*/React.createElement("span", {
    className: "ac-live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ac-live-dot"
  }), "Live")), /*#__PURE__*/React.createElement("div", {
    className: "ac-num mono"
  }, "\u20AC3,214"), /*#__PURE__*/React.createElement("div", {
    className: "ac-sub"
  }, "recovered revenue"), /*#__PURE__*/React.createElement("div", {
    className: "ac-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Messages sent"), /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "94")), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Carts recovered"), /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "47")), /*#__PURE__*/React.createElement("div", {
    className: "ac-row"
  }, /*#__PURE__*/React.createElement("span", null, "Conversion rate"), /*#__PURE__*/React.createElement("b", {
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
  }), "Core v1.0 \xB7 CI passing \xB7 entering Closed Beta")), /*#__PURE__*/React.createElement(HeroTitle, null), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-sub reveal in",
    "data-delay": "400"
  }, "Every abandoned cart is a customer who almost bought. CartPinger sends them a WhatsApp \u2014from your own number, one hour later\u2014 and brings them back with one tap. No monthly SaaS, no per-sale fees, no data leaving your server."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas reveal in",
    "data-delay": "480",
    id: "waitlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waitlist-row"
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    size: "lg",
    cta: "Request Closed Beta Access"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-microcopy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "warn",
    "aria-hidden": "true"
  }, "\u26A0"), /*#__PURE__*/React.createElement("span", null, "First ", /*#__PURE__*/React.createElement("b", null, "50 stores"), " only. Production engine sealed \u2014 PHPUnit + PHPStan lvl 8 passing.")))), /*#__PURE__*/React.createElement("div", {
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
  }), " GDPR-native at checkout"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " BYO-WABA \xB7 your number"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "tick",
    width: "13",
    height: "13"
  }), " No monthly SaaS")), /*#__PURE__*/React.createElement("div", {
    className: "trust reveal in",
    "data-delay": "640"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/whatscom/actions",
    target: "_blank",
    rel: "noopener",
    className: "ci-badge",
    "aria-label": "CI status on GitHub Actions"
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
  }, "Public repo on GitHub from day 1. PHPStan level 8."))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null), /*#__PURE__*/React.createElement(AdminCard, null))));
}
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
    name: "PHP 8.1+",
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
  }, "Built on"), /*#__PURE__*/React.createElement("div", {
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
  }, "70% of your carts are abandoned. Email only recovers 8%."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "WhatsApp has a 98% open rate. Email sits at 20%. The difference is the channel, not the copy.")), /*#__PURE__*/React.createElement("div", {
    className: "stat-grid"
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: 70,
    text: "of eCommerce carts are abandoned before checkout.",
    source: "Baymard Institute \xB7 2025",
    delay: 80
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: 8,
    text: "average recovery rate with email abandoned cart flows.",
    color: "dim",
    delay: 180
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: 50,
    suffix: "%+",
    color: "mint",
    text: "recovery rate via WhatsApp with approved templates and optimal timing.",
    source: "Retainful \xB7 aggregated data 2,000 stores 2025",
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
  }, /*#__PURE__*/React.createElement("p", null, "\"I had a WooCommerce store. The abandoned cart plugins I tried either charged \u20AC30/month or sent the WhatsApp from a generic number with their own branding. So I built what I actually needed: messages from my own number, no monthly SaaS, with the code auditable on GitHub from day one. That's CartPinger.\""), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", {
    className: "fq-name"
  }, "Founder \xB7 CartPinger")))));
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

/* ── components-mid.en.jsx ── */
/* CartPinger — Middle sections (EN): Steps, Bento, TechSection, Calculator */

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
  }, "Three steps. One-time payment. No SaaS."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Meta Business onboarding is where other plugins leave you stranded. Not here.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface step reveal",
    "data-delay": "100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-no"
  }, "STEP 01"), /*#__PURE__*/React.createElement("h3", null, "Install the plugin"), /*#__PURE__*/React.createElement("div", {
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
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    className: "wp-row active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-name"
  }, "CartPinger"), /*#__PURE__*/React.createElement("div", {
    className: "wp-status"
  }, "Activate \u2192")), /*#__PURE__*/React.createElement("div", {
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
  }, "Active")))), /*#__PURE__*/React.createElement("p", null, "From the official WordPress.org repository. Free. Compatible with any theme."), /*#__PURE__*/React.createElement("div", {
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
  }, "STEP 02 \xB7 KEY DIFFERENTIATOR"), /*#__PURE__*/React.createElement("h3", null, "Connect your WhatsApp Business"), /*#__PURE__*/React.createElement("div", {
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
  })), " Create Meta Business Manager"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon2.Check, {
    width: "7",
    height: "7"
  })), " Link phone number"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step cur"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, "3"), " Verifying business with Meta\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "wz-step pending"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, "4"), " Generate Access Token"))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/cartpinger-web/blob/main/DOCUMENTATION.md",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--mint)",
      textDecoration: "underline"
    }
  }, "Step-by-step documentation on GitHub"), ". Stuck? Direct support."), /*#__PURE__*/React.createElement("div", {
    className: "step-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-wa"
  }, "30 min"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Meta verifies in 1\u20137 days"))), /*#__PURE__*/React.createElement("div", {
    className: "surface step reveal",
    "data-delay": "300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-no"
  }, "STEP 03"), /*#__PURE__*/React.createElement("h3", null, "Enable the flows"), /*#__PURE__*/React.createElement("div", {
    className: "step-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), " Abandoned cart"), /*#__PURE__*/React.createElement("div", {
    className: "tg on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }), " Chat widget"))), /*#__PURE__*/React.createElement("p", null, "Two toggles in your WordPress panel. Live in minutes, no code required."), /*#__PURE__*/React.createElement("div", {
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
  }, "Everything you need to recover carts via WhatsApp."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A native PHP plugin. No paid external dependencies. Auditable code on GitHub from day one.")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("h3", null, "Abandoned cart recovery"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-wa"
  }, "Core")), /*#__PURE__*/React.createElement("div", {
    className: "bento-conv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp mono"
  }, "+1 hour"), /*#__PURE__*/React.createElement("div", {
    className: "conv-bubble"
  }, "Hey Ana! You left items in your cart at Demo Store \uD83D\uDED2", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Your order is still available. Recover it here:", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono,'Geist Mono',monospace)",
      fontSize: 11,
      color: "#67e8f9",
      marginTop: 4
    }
  }, "store.demo/?cartpinger_recover=a3f\u2026"), /*#__PURE__*/React.createElement("span", {
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
  })), "Delivered \xB7 read 14:33"))), /*#__PURE__*/React.createElement("ul", {
    className: "feat-bullets"
  }, /*#__PURE__*/React.createElement("li", null, "WP-Cron detects abandonment 1 hour later \u2014 exact timing, configurable"), /*#__PURE__*/React.createElement("li", null, "64-char recovery token \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "bin2hex(random_bytes(32))"), ", single-use"), /*#__PURE__*/React.createElement("li", null, "Restores the cart with one tap and redirects to checkout"), /*#__PURE__*/React.createElement("li", null, "DB state: ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "pending \u2192 sent \u2192 recovered")))), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-1 reveal",
    "data-delay": "120"
  }, /*#__PURE__*/React.createElement("h3", null, "Floating WhatsApp widget"), /*#__PURE__*/React.createElement("div", {
    className: "widget-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wdg-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wdg-bubble"
  }, "Any questions? Chat with us"), /*#__PURE__*/React.createElement("div", {
    className: "wdg-fab"
  }, /*#__PURE__*/React.createElement(Icon2.Whatsapp, {
    width: "20",
    height: "20",
    style: {
      color: "#04220f"
    }
  })))), /*#__PURE__*/React.createElement("p", null, "Floating chat button on your store. Native JS and CSS \u2014 zero dependencies. Configurable from the CartPinger settings panel.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-6-1 reveal",
    "data-delay": "180"
  }, /*#__PURE__*/React.createElement("h3", null, "Real-time delivery logs"), /*#__PURE__*/React.createElement("div", {
    className: "logs-mock",
    role: "img",
    "aria-label": "CartPinger \u2014 real-time delivery status log via Meta webhook"
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
  }, "FAILED \xB7 retry"))), /*#__PURE__*/React.createElement("p", null, "Webhook validated with HMAC-SHA256 using your ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "app_secret"), ". Each message updates its status by ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12
    }
  }, "wamid"), " directly from Meta Cloud API.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-4-1 reveal",
    "data-delay": "240"
  }, /*#__PURE__*/React.createElement("h3", null, "Recovery dashboard"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Messages sent"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono"
  }, "94")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Carts recovered"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono"
  }, "47")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi-label"
  }, "Conversion rate"), /*#__PURE__*/React.createElement("span", {
    className: "kpi-val mono",
    style: {
      color: "var(--mint)"
    }
  }, "50%"))), /*#__PURE__*/React.createElement("p", null, "Three real KPIs in your WP Admin. Lightweight React SPA mounted in the panel.")), /*#__PURE__*/React.createElement("div", {
    className: "surface b b-4-1 reveal",
    "data-delay": "300"
  }, /*#__PURE__*/React.createElement("h3", null, "Native GDPR opt-in"), /*#__PURE__*/React.createElement("div", {
    className: "gdpr-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gdpr-check"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gdpr-box"
  }, /*#__PURE__*/React.createElement(Icon2.Check, {
    width: "9",
    height: "9"
  })), /*#__PURE__*/React.createElement("span", null, "I agree to receive cart reminders via WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-3)",
      marginTop: 8,
      paddingLeft: 24
    }
  }, "Blocks the order if consent is not given. Immediate revocation in DB.")), /*#__PURE__*/React.createElement("p", null, "Native checkbox injected into the WooCommerce checkout. No additional privacy plugins needed.")), /*#__PURE__*/React.createElement("div", {
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
  }, "\u2605"), " Public day 1")), /*#__PURE__*/React.createElement("div", {
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
  }, "WP_Mock")), /*#__PURE__*/React.createElement("p", null, "Audit the code. Fork it. No lock-in. CI green on GitHub Actions from the first commit.")))));
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
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "tech"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-hed reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Native PHP. Your server, your data."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "CartPinger runs on your WordPress. No server of ours in the middle. Your customers' data never leaves your infrastructure.")), /*#__PURE__*/React.createElement("div", {
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
  }, "PHP 8.1+"), /*#__PURE__*/React.createElement("div", {
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
  return "€" + Math.round(n).toLocaleString("en-US");
}
function fmt(n) {
  return Math.round(n).toLocaleString("en-US");
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
  const wcTotal = 79;
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
  }, "Calculate what you save vs. recurring SaaS."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "You pay \u20AC99 once at launch. Alternatives charge every month. The difference compounds.")), /*#__PURE__*/React.createElement("div", {
    className: "surface calc reveal",
    "data-delay": "80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Orders per month ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, fmt(orders))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "5000",
    step: "50",
    value: orders,
    onChange: e => setOrders(+e.target.value),
    "aria-label": "Orders per month"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "% abandoned carts ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, abandon, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "80",
    step: "1",
    value: abandon,
    onChange: e => setAbandon(+e.target.value),
    "aria-label": "Abandoned cart percentage"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Average order value (AOV) ", /*#__PURE__*/React.createElement("b", {
    className: "mono"
  }, "\u20AC", aov)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "20",
    max: "500",
    step: "5",
    value: aov,
    onChange: e => setAov(+e.target.value),
    "aria-label": "Average order value in euros"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Competitor"), /*#__PURE__*/React.createElement("div", {
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
  }, "\xB7", v.currency, v.monthly, "/mo"))))), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("label", null, "Horizon"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, ["1", "3", "5"].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    className: years === y ? "active" : "",
    onClick: () => setYears(y)
  }, y, " ", y === "1" ? "year" : "years"))))), /*#__PURE__*/React.createElement("div", {
    className: "calc-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "CartPinger Pro \xB7 one-time"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "\u20AC79")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, c.name, " \xB7 ", years, " ", years === "1" ? "year" : "years"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      color: "var(--coral)"
    }
  }, fmtEur(compTotal))), /*#__PURE__*/React.createElement("div", {
    className: "diff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Your savings over ", years, " ", years === "1" ? "year" : "years"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, fmtEur(diff)), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "less with a one-time license")), /*#__PURE__*/React.createElement("div", {
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
  }, "\u20AC79")), /*#__PURE__*/React.createElement("div", {
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
  }, "Estimated recovery year 1: ", /*#__PURE__*/React.createElement("b", null, fmt(recoveredYear), " carts"), /*#__PURE__*/React.createElement("br", null), "Estimated recovered revenue: ", /*#__PURE__*/React.createElement("b", null, fmtEur(revenueRecovered)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-3)",
      marginTop: 6
    }
  }, "Assuming 50% WhatsApp recovery rate \xB7 AOV \u20AC", aov, " \xB7 indicative estimate, not a guarantee.")))))));
}
window.WCMid = {
  Steps,
  Bento,
  TechSection,
  Calculator
};

/* ── components-bottom.en.jsx ── */
/* CartPinger — Bottom sections (EN): Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer */

const Icon3 = window.WCTop?.Icon;

/* ---------------- Comparison ---------------- */
const CMP_ROWS = [{
  f: "Price",
  wc: {
    v: "Free · Pro €79",
    tip: "Free forever up to 50 recoveries/month. Pro €79 one-time: no limit + sequences, dynamic coupons, CSV, priority support."
  },
  rt: {
    v: "$14/mo",
    tip: "≈ €156/year recurring."
  },
  ai: {
    v: "$25/mo",
    tip: "≈ €280/year recurring, standard plan."
  },
  nf: {
    v: "Free",
    tip: "Limited plan with Notiqoo branding in messages."
  },
  np: {
    v: "$39/mo",
    tip: "≈ €436/year Pro plan."
  }
}, {
  f: "Abandoned cart via WhatsApp",
  wc: {
    yes: true,
    tier: "free",
    tip: "WP-Cron detection 1h after abandonment. Meta-approved template."
  },
  rt: {
    yes: true,
    tip: "Core feature of Retainful."
  },
  ai: {
    yes: true,
    tip: "Cart flow support."
  },
  nf: {
    v: "Limited",
    tip: "Only 1 message on free plan."
  },
  np: {
    yes: true
  }
}, {
  f: "WhatsApp templates (4 languages)",
  wc: {
    v: "en_US · es_ES · es_MX · pt_BR",
    tier: "free",
    tip: "Meta-approved templates in English, Spanish (ES & MX), and Portuguese BR."
  },
  rt: {
    v: "EN",
    tip: "Templates mainly in English."
  },
  ai: {
    v: "EN, HI",
    tip: "India + English focus."
  },
  nf: {
    v: "Limited",
    tip: "1–2 generic templates."
  },
  np: {
    v: "EN, HI"
  }
}, {
  f: "Native GDPR opt-in at checkout",
  wc: {
    yes: true,
    tier: "free",
    tip: "Checkbox injected into WooCommerce checkout. Immediate revocation in DB."
  },
  rt: {
    v: "Partial",
    tip: "Depends on external privacy plugins."
  },
  ai: {
    no: true
  },
  nf: {
    no: true
  },
  np: {
    v: "Partial"
  }
}, {
  f: "Webhook delivery logs",
  wc: {
    yes: true,
    tier: "free",
    tip: "Meta webhook validated with HMAC-SHA256. delivered/read/failed states by wamid."
  },
  rt: {
    v: "Basic"
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
  f: "Meta onboarding wizard",
  wc: {
    yes: true,
    tier: "free",
    tip: "Detailed documentation on GitHub + direct support."
  },
  rt: {
    v: "Basic",
    tip: "Written docs, no guided video."
  },
  ai: {
    yes: true
  },
  nf: {
    no: true
  },
  np: {
    v: "Basic"
  }
}, {
  f: "Built-in cost calculator",
  wc: {
    yes: true,
    tier: "free",
    tip: "Estimate your Meta bill before sending."
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
    tip: "Public repo from day 1, auditable and forkable code."
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
  f: "Your own number (BYO-WABA)",
  wc: {
    yes: true,
    tier: "free",
    tip: "Connect your own Meta WABA. Your brand, your data."
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
  f: "Multi-message sequence (+24h with coupon · +48h)",
  wc: {
    yes: true,
    tier: "pro",
    tip: "Automatic flow: initial message (1h) + coupon reminder (24h) + final reminder (48h)."
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
  f: "Automatic dynamic coupons",
  wc: {
    yes: true,
    tier: "pro",
    tip: "10% discount coupon, single-use, 48h validity. Auto-generated and attached to the +24h message."
  },
  rt: {
    yes: true
  },
  ai: {
    v: "Partial"
  },
  nf: {
    no: true
  },
  np: {
    yes: true
  }
}, {
  f: "CSV export",
  wc: {
    yes: true,
    tier: "pro",
    tip: "Full export of recoveries: email, cart, token, status, timestamp."
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
  f: "Support",
  wc: {
    v: "Issues · Priority email Pro",
    tip: "Public GitHub issues on Free. Priority email support included in Pro."
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
  }, "Honest comparison. No marketing tricks."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "If a competitor has a feature, we mark it. If we don't have it, we don't make it up. Hover over any cell for details.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Start free. Upgrade whenever you want."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Free forever up to 50 recoveries/month. Pro \u20AC79 one-time: no limit + advanced sequences and automatic coupons.")), /*#__PURE__*/React.createElement("div", {
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
  }), "Available Q3 2026")), /*#__PURE__*/React.createElement("div", {
    className: "price-num",
    style: {
      fontSize: 40
    }
  }, "Free"), /*#__PURE__*/React.createElement("div", {
    className: "price-sub"
  }, "forever \xB7 up to 50 recoveries/month"), /*#__PURE__*/React.createElement("ul", {
    className: "price-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Cart recovery (1 message \xB7 1h \xB7 up to 50/month)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Multi-language: en_US \xB7 es_ES \xB7 es_MX \xB7 pt_BR"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " KPI dashboard (sent \xB7 recovered \xB7 conversion rate)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Native GDPR opt-in at checkout"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Floating WhatsApp widget"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " MIT public repo \u2014 auditable code")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    cta: "Request Beta Access"
  }), /*#__PURE__*/React.createElement("p", {
    className: "micro",
    style: {
      marginTop: 10
    }
  }, "No card. No commitment. I'll notify you when it's available."))), /*#__PURE__*/React.createElement("div", {
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
  }), "Available Q3 2026"), /*#__PURE__*/React.createElement("span", {
    className: "chip chip-pro"
  }, "Pro")), /*#__PURE__*/React.createElement("div", {
    className: "price-num"
  }, "\u20AC79"), /*#__PURE__*/React.createElement("div", {
    className: "price-sub"
  }, "one-time \xB7 no renewal \xB7 no limit"), /*#__PURE__*/React.createElement("ul", {
    className: "price-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Everything in Free"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text)"
    }
  }, "Multi-message sequence: +24h with coupon \xB7 +48h reminder")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Automatic dynamic coupons (10% \xB7 single-use \xB7 48h validity)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " CSV export of all recoveries"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " Priority email support"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "ch",
    width: "16",
    height: "16"
  }), " 1 year guaranteed updates")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    cta: "Request Beta Pro Access"
  }), /*#__PURE__*/React.createElement("p", {
    className: "micro",
    style: {
      marginTop: 10
    }
  }, "Limited to the first 50 stores. One-time payment at launch \u2014 not before."))))));
}

/* ---------------- Roadmap ---------------- */
function Roadmap() {
  const cols = [{
    key: "done",
    label: "Done",
    items: ["Public repo on GitHub", "PSR-4 architecture defined", "PHPUnit + PHPStan lvl 8 passing", "DB schema + migrations", "GDPR opt-in at checkout", "Secure recovery token", "HMAC-SHA256 webhook", "React dashboard (3 KPIs)", "Floating WhatsApp widget"]
  }, {
    key: "prog",
    label: "In Progress",
    items: ["Closed Beta — first 50 stores", "Meta onboarding documentation", "Submission for review on WordPress.org"]
  }, {
    key: "next",
    label: "Next",
    items: ["Templates in ES, PT-BR, FR, IT", "Multi-message flow (follow-up +24h)", "Automatic coupons with expiry", "Order notifications (confirmation, shipping)"]
  }, {
    key: "fut",
    label: "Future",
    items: ["OTP login via WhatsApp", "WooCommerce Blocks integration", "CSV log export", "WordPress multisite"]
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
  }, "Open roadmap. Built in public."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Every item reflects the real state of the repo. No vaporware promises.")), /*#__PURE__*/React.createElement("div", {
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
  }, "View repository on GitHub ", /*#__PURE__*/React.createElement(Icon3.ArrowRight, {
    width: "15",
    height: "15"
  }))));
}

/* ---------------- FAQ ---------------- */
const FAQS = [{
  q: "When is CartPinger available?",
  a: "Public launch Q3 2026. No pre-orders or paid waitlist — when it's ready, I'll announce it here and by email to subscribers. Want to be notified? Sign up above."
}, {
  q: "Do I have to pay Meta to send WhatsApps?",
  a: "Not to get started. Meta gives every Business account 1,000 free conversations per month. For the vast majority of small and medium stores, using CartPinger will cost €0/month in Meta API fees."
}, {
  q: "Does it only send one recovery message, or can I set up a sequence?",
  a: "Free: a single message 1 hour after abandonment — the highest-conversion window. Pro: a full three-message sequence — initial (1h), coupon reminder with 10% discount (+24h), and final reminder (+48h)."
}, {
  q: "What if Meta doesn't approve my business?",
  a: "95% of legitimate stores are approved. If your store is legal and operational, there shouldn't be a problem. I guide you through every step with detailed documentation on GitHub. If something goes wrong, reach out directly."
}, {
  q: "What if I need it before Q3 2026?",
  a: "Public launch is Q3 2026. If you need a solution right now (May–June 2026), it's not ready for you yet. The real-time status is in the public roadmap and on GitHub."
}, {
  q: "How much does Meta charge per message?",
  a: "€0 to us per message. You pay Meta at their official pricing. In the US, an abandoned cart message (marketing category) costs approximately $0.025. The first 1,000 messages per month are free."
}, {
  q: "Is it really open source?",
  a: "Yes, MIT License. The code is free and public from day 1 — you can download it, audit it, and use it without paying anything. The Pro plan (€79 one-time) is not for the code license — it removes the 50 recoveries/month limit and unlocks advanced features: multi-message sequences, dynamic coupons, CSV export, and priority support."
}, {
  q: "Does the plugin store customer data on its servers?",
  a: "No. CartPinger has no servers of its own. It runs entirely on your WordPress. Your customers' data (phone, cart, recovery token) is stored in your local MySQL database. We only provide the code."
}, {
  q: "Does it work with block-based checkout?",
  a: "Yes. The GDPR integration uses the WooCommerce Additional Checkout Fields API, compatible with WooCommerce Blocks since WooCommerce 9.0+."
}, {
  q: "Will you spam me with marketing emails?",
  a: "No. I'll email you once: when CartPinger is available. No newsletter, no drip campaigns, no upsells. You can unsubscribe with one click at any time."
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
  }, "Honest answers."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "The objections I get most often, answered straight.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Start free. Upgrade whenever you want."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal",
    "data-delay": "100"
  }, "Free forever up to 50 recoveries/month. Pro \u20AC79 one-time: no limit, sequences and automatic coupons. Available Q3 2026."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    "data-delay": "200",
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    size: "lg",
    cta: "Join the Beta"
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
  }), " Free forever \xB7 no card"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "tick",
    width: "13",
    height: "13",
    style: {
      display: "inline",
      verticalAlign: -2
    }
  }), " Pro \u20AC79 one-time \xB7 no SaaS"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon3.Check, {
    className: "tick",
    width: "13",
    height: "13",
    style: {
      display: "inline",
      verticalAlign: -2
    }
  }), " One email when it launches"))));
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
  })), /*#__PURE__*/React.createElement("span", null, "CartPinger")), /*#__PURE__*/React.createElement("div", null, "WooCommerce plugin for WhatsApp Cloud API. Recover abandoned carts. One-time payment, no SaaS.")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Product"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#precio"
  }, "Pricing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
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
  }, /*#__PURE__*/React.createElement("h5", null, "Resources"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/tfreire988/cartpinger-web/blob/main/DOCUMENTATION.md",
    target: "_blank",
    rel: "noopener"
  }, "Documentation ", /*#__PURE__*/React.createElement(Icon3.Ext, {
    width: "10",
    height: "10",
    style: {
      display: "inline",
      verticalAlign: -1,
      marginLeft: 2,
      opacity: 0.6
    }
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@cartpinger.com"
  }, "Support")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#tech"
  }, "Architecture")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Legal"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/privacy.html"
  }, "Privacy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/terms.html"
  }, "Terms of use")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/terms.html#7-responsabilidad-del-titular-de-la-tienda-dpa--rgpd"
  }, "GDPR / DPA"))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, "\xA9 2026 CartPinger. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "made"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/privacy.html"
  }, "Privacy"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "/terms.html"
  }, "Terms"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@cartpinger.com"
  }, "Contact")))));
}
window.WCBot = {
  Comparison,
  Pricing,
  Roadmap,
  FAQ,
  FinalCTA,
  Footer
};

/* ── app.en.jsx ── */
/* CartPinger — App composition + scroll reveals (EN) */

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