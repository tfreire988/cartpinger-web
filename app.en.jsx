/* CartPinger — App composition + scroll reveals (EN) */

function App() {
  const { Nav, Hero, Logos, Problem, FounderQuote } = window.WCTop;
  const { Steps, Bento, TechSection, Calculator } = window.WCMid;
  const { Comparison, Pricing, Roadmap, FAQ, FinalCTA, Footer } = window.WCBot;

  React.useEffect(() => {
    const fire = () => {
      document.querySelectorAll(".hero h1, .iphone, .admin-card").forEach((el) => el.classList.add("go"));
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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Nav/>
      <main>
        <Hero/>
        <Logos/>
        <Problem/>
        <FounderQuote/>
        <Steps/>
        <Bento/>
        <TechSection/>
        <Calculator/>
        <Comparison/>
        <Pricing/>
        <Roadmap/>
        <FAQ/>
        <FinalCTA/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
