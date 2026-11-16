import React, { useEffect, useRef, useState } from "react";
import UnicornScene from "unicornstudio-react";

/* ---------------- Background ---------------- */
function Background() {
  return (
    <div
      className="sinera-background-component fixed top-0 w-full h-screen"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
      }}
    >
      <div className="top-0 w-full absolute h-full" style={{ zIndex: -10 }}>
        <div className="absolute w-full h-full left-0 top-0" style={{ zIndex: -10 }}>
          <UnicornScene projectId="ZHhDKfVqqu8PKOSMwfuA" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}

function GridOverlay() {
  return (
    <div className="grid-overlay">
      <div className="grid-inner">
        <div className="grid-line-v"></div>
        <div className="grid-line-v hidden md:block"></div>
        <div className="grid-line-v hidden lg:block"></div>
        <div className="grid-line-v"></div>
      </div>
    </div>
  );
}

/* ---------------- Navigation ---------------- */
function Nav() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 anim-in-01">
      <div className="border-subtle flex bg-black/90 w-full max-w-4xl border p-2 shadow-2xl backdrop-blur-xl gap-1 items-center justify-between">
        <a
          href="#"
          className="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-geist"
        >
          bohn digital
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#strategy"
            className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist"
          >
            SEO
          </a>
          <a
            href="#workflows"
            className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist"
          >
            GSO
          </a>
        </div>

        <div className="md:text-2xl uppercase flex gap-2 text-xl font-light text-white tracking-tighter font-space-grotesk px-6 items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
          bohn digital
        </div>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#results"
            className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist"
          >
            Web Dev
          </a>
        </div>

        <a
          href="#contact"
          className="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
        >
          <span className="relative z-10 font-geist">Book Call</span>
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Counter ---------------- */
function Counter({ target, prefix = "", suffix = "", start }) {
  const [val, setVal] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();
    let raf;
    const update = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      const num = (target * ease).toFixed(target % 1 === 0 ? 0 : 1);
      setVal(prefix + num + suffix);
      if (p < 1) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [start, target, prefix, suffix]);

  return <span>{val}</span>;
}

/* ---------------- Hero ---------------- */
function Hero() {
  const triggerRef = useRef(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCounting(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
      <div className="container mx-auto px-4 relative max-w-7xl">
        <div className="flex flex-col text-center mb-24 relative items-center justify-center">
          {/* Version Tag */}
          <div className="absolute -left-4 md:left-20 top-0 flex-col gap-2 opacity-30 hidden lg:flex anim-in-05">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">
              Adelaide
            </span>
            <div className="w-px h-12 bg-gradient-to-b to-transparent from-purple-500/50"></div>
          </div>

          <div className="flex flex-col z-10 w-full items-center justify-center">
            <h1 className="uppercase leading-[0.85] flex flex-wrap justify-center gap-x-4 md:text-9xl md:gap-x-8 text-6xl font-semibold text-white tracking-tighter mt-8 mb-0">
              <span className="anim-in-02 tracking-tighter font-space-grotesk font-light">
                Bohn
              </span>
              <span className="text-gradient anim-in-03 font-light tracking-tighter font-space-grotesk text-glow">
                digital
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:mt-12 md:mb-12 z-10 w-full mt-10 mb-8 gap-6 items-center justify-center">
            {/* Status Button with Border Beam */}
            <div className="anim-in-05 beam-group my-8 relative group">
              <div className="beam-border"></div>
              <div className="border-subtle flex group-hover:bg-[#0f0716] group-hover:border-purple-500/30 transition-all md:h-16 bg-[#080808] h-12 z-10 border rounded-full m-[1px] pr-6 pl-3 relative gap-4 items-center">
                <div className="md:w-10 md:h-10 overflow-hidden flex border border-purple-500/30 text-white bg-purple-900/20 w-8 h-8 rounded-full relative items-center justify-center">
                  <iconify-icon
                    icon="solar:server-square-bold-duotone"
                    class="text-lg text-purple-300"
                  ></iconify-icon>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-purple-400/80 font-geist">
                    System_Status
                  </span>
                  <span className="text-xs md:text-sm leading-none text-white font-geist">
                    Operational
                  </span>
                </div>
              </div>
            </div>

            <h2 className="anim-in-04 text-lg text-neutral-400 tracking-tight font-space-grotesk md:text-3xl">
              SEO, GSO &amp; Web Development
            </h2>
          </div>

          <div className="leading-relaxed anim-in-06 md:text-2xl text-xs text-neutral-500 font-space-grotesk text-center max-w-lg">
            We craft search-optimised, AI-ready websites — combining technical
            SEO, Generative Search Optimisation, and bespoke web development to
            grow ambitious brands.
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={triggerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto anim-in-02"
        >
          {/* Card 1 */}
          <div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:glow-purple transition-all duration-300">
            <div className="absolute top-4 right-4 text-xs text-white/20 font-geist">01</div>
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="solar:graph-up-bold-duotone"
                class="text-2xl text-purple-400"
              ></iconify-icon>
              <div className="px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] uppercase tracking-wider font-geist shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                Live
              </div>
            </div>
            <div>
              <div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
                <Counter target={400} prefix="+" suffix="%" start={counting} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">
                Organic Traffic
              </h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 hover:glow-purple transition-all duration-300">
            <div className="absolute top-4 right-4 text-xs text-white/20 font-geist">02</div>
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="solar:code-circle-bold-duotone"
                class="text-2xl text-neutral-300"
              ></iconify-icon>
            </div>
            <div>
              <div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
                <Counter target={99} suffix="%" start={counting} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">
                AI Citation Rate
              </h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 hover:glow-purple transition-all duration-300">
            <div className="absolute top-4 right-4 text-xs text-white/20 font-geist">03</div>
            <div className="flex justify-between items-start">
              <iconify-icon
                icon="solar:rocket-bold-duotone"
                class="text-2xl text-neutral-300"
              ></iconify-icon>
            </div>
            <div>
              <div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
                <Counter target={10} suffix="x" start={counting} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">
                ROI Improvement
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Scroll Reveal Text ---------------- */
function ScrollReveal() {
  return (
    <section className="border-y border-subtle overflow-hidden bg-black pt-32 pb-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center leading-tight">
          <h2 className="text-3xl md:text-5xl tracking-tight uppercase leading-[1.3] font-semibold text-white">
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Search Visibility.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Workflows ---------------- */
const STEPS = [
  {
    id: "1",
    label: "01 / Technical SEO",
    sub: "Building a crawlable, indexable foundation.",
    num: "01",
    title: "Technical SEO Audit & Architecture",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    icon: "solar:server-path-bold-duotone",
    status: "ANALYSING INFRASTRUCTURE...",
    statusColor: "text-purple-400",
    mobileStatus: "SYSTEM CHECK...",
    mobileColor: "text-green-400",
    body: "Before code touches screen, we map your search ecosystem. We analyse site structure, keyword gaps, and competitor velocity to build a blueprint for organic and AI-driven visibility.",
    list: [
      { t: "Site Architecture Mapping", c: "text-purple-500", big: true },
      { t: "Keyword & Competitor Analysis", c: "text-green-500" },
      { t: "Core Web Vitals Audit", c: "text-green-500" },
    ],
  },
  {
    id: "2",
    label: "02 / Web Development",
    sub: "Pixel-perfect, high-speed execution.",
    num: "02",
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    icon: "solar:code-square-bold-duotone",
    status: "COMPILING ASSETS...",
    statusColor: "text-blue-400",
    mobileStatus: "COMPILING ASSETS...",
    mobileColor: "text-blue-400",
    body: "We don't use templates. We engineer bespoke, SEO-first web applications using modern frameworks (Next.js, React) ensuring lightning-fast load times and impeccable mobile performance.",
    list: [
      { t: "Modern Tech Stack (Next.js/React)", c: "text-blue-500" },
      { t: "Core Web Vitals Optimisation", c: "text-blue-500" },
      { t: "Schema & Structured Data", c: "text-blue-500" },
    ],
  },
  {
    id: "3",
    label: "03 / GSO & Growth",
    sub: "Ranking in Google & AI answer engines.",
    num: "03",
    title: "GSO & Revenue Growth",
    img: "https://images.unsplash.com/photo-1642132652859-3ef5a2255094?q=80&w=1600&auto=format&fit=crop",
    icon: "solar:chart-square-bold-duotone",
    status: "GROWTH DETECTED",
    statusColor: "text-green-400",
    mobileStatus: "GROWTH COMPLETE",
    mobileColor: "text-purple-400",
    body: "A beautiful site is useless if no one finds it. We deploy advanced SEO and Generative Search Optimisation strategies so you rank on Google and get cited by AI answer engines like ChatGPT and Gemini.",
    list: [
      { t: "Keyword Domination", c: "text-purple-500" },
      { t: "Generative Search Optimisation", c: "text-purple-500" },
      { t: "Conversion Rate Optimisation", c: "text-purple-500" },
    ],
  },
];

function Workflows() {
  const [active, setActive] = useState("1");
  const stepRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-step"));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="workflows" className="z-10 border-subtle bg-black border-b relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Left */}
          <div className="lg:w-1/2 lg:h-screen sticky top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 lg:border-r lg:border-subtle">
            <h2 className="text-5xl md:text-6xl uppercase mb-8 text-white tracking-tighter font-space-grotesk font-light">
              Search
              <br />
              <span className="text-neutral-600">Protocol</span>
            </h2>

            {/* Steps Navigation */}
            <div className="space-y-6 relative mb-12 hidden lg:block">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className="group cursor-pointer flex items-center gap-6"
                >
                  <div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
                    <div
                      className={`step-indicator-fill absolute top-0 left-0 w-full h-full ${
                        active === s.id ? "active" : ""
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">
                      {s.label}
                    </h3>
                    <p
                      className={`step-text text-sm font-geist ${
                        active === s.id ? "active" : ""
                      }`}
                    >
                      {s.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Visual Display */}
            <div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm hidden lg:block">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={`workflow-img absolute inset-0 flex items-center justify-center bg-black ${
                    active === s.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${s.img})` }}
                  ></div>
                  <div className="relative z-10 text-center">
                    <iconify-icon icon={s.icon} class="text-4xl text-white mb-2"></iconify-icon>
                    <div className={`text-xs font-mono ${s.statusColor}`}>{s.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Right */}
          <div className="lg:w-1/2">
            <div className="h-[20vh] hidden lg:block"></div>

            {STEPS.map((s, idx) => (
              <div
                key={s.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                data-step={s.id}
                className={`min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 ${
                  idx < STEPS.length - 1 || true ? "border-b border-subtle" : ""
                }`}
              >
                <span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">
                  {s.num}
                </span>
                <h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">
                  {s.title}
                </h3>

                {/* Mobile Image */}
                <div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${s.img})` }}
                    ></div>
                    <div className="relative z-10 text-center">
                      <iconify-icon icon={s.icon} class="text-4xl text-white mb-2"></iconify-icon>
                      <div className={`text-xs font-mono ${s.mobileColor}`}>{s.mobileStatus}</div>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 leading-relaxed mb-8 font-geist">{s.body}</p>
                <ul className="space-y-4 font-geist text-sm text-neutral-300">
                  {s.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <iconify-icon
                        icon="solar:check-circle-bold-duotone"
                        class={`${item.c} ${item.big ? "text-lg" : ""}`}
                      ></iconify-icon>
                      {item.t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Results ---------------- */
function Results() {
  return (
    <section
      id="results"
      className="bg-black text-white pt-24 pb-12 border-t border-subtle relative z-10"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-subtle">
          <div>
            <h2 className="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-space-grotesk font-light">
              Case Studies
            </h2>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-geist">
              / Client Success / Metrics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20 items-stretch">
          {/* Col 1 */}
          <div className="flex flex-col gap-1 h-full">
            <MosaicCard
              tag="RESPONSIVE"
              title="Mobile First"
              img="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop"
              full
            />
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-1 h-full aspect-[9/16] md:aspect-auto">
            <MosaicItem
              tag="CODE"
              title="Clean Syntax"
              img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1600&auto=format&fit=crop"
            />
            <MosaicItem
              tag="SYSTEMS"
              title="Search Architecture"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
            />
            <MosaicItem
              tag="ANALYTICS"
              title="Rank Insights"
              img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
            />
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-1 h-full">
            <MosaicCard
              tag="APP"
              title="Web Apps"
              img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MosaicCard({ tag, title, img }) {
  return (
    <div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
      <div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">
        {tag}
      </div>
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500"
        alt={title}
      />
      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

function MosaicItem({ tag, title, img }) {
  return (
    <div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
      <div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">
        {tag}
      </div>
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500"
        alt={title}
      />
      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  {
    quote:
      '"Bohn Digital re-engineered our web presence. Our page speeds are instant, and we\'ve doubled our organic traffic within 6 months."',
    icon: "simple-icons:atlassian",
    name: "James Cooper",
    role: "CTO, TechFlow AU",
  },
  {
    quote:
      '"The precision in their SEO and GSO strategy is unlike anything we\'ve seen. We now get cited by AI search and reduced ad spend by 40%."',
    icon: "simple-icons:shopify",
    name: "Sarah Mitchell",
    role: "Founder, E-Com Luxe",
  },
  {
    quote:
      '"Their custom web development gave us a platform that actually converts. The ROI was evident within the first 14 days of launch."',
    icon: "simple-icons:stripe",
    name: "Elena R.",
    role: "Director, FinTech SA",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0 hover:border-purple-500/30 transition-colors">
      <p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">{t.quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <iconify-icon icon={t.icon} class="text-2xl text-white"></iconify-icon>
        </div>
        <div>
          <div className="text-xs text-white uppercase font-bold font-geist">{t.name}</div>
          <div className="text-[10px] text-neutral-500 uppercase font-geist">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="border-subtle overflow-hidden z-10 border-t pt-24 pb-24 relative">
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <h2 className="text-3xl md:text-5xl uppercase text-center text-white tracking-tighter font-space-grotesk font-light">
          Partner <span className="text-neutral-600">Feedback</span>
        </h2>
      </div>

      <div className="marquee-container w-full relative overflow-hidden py-10">
        <div className="flex w-[200%] marquee-content">
          <div className="flex w-1/2 justify-around gap-6 px-4">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
          <div className="flex w-1/2 justify-around gap-6 px-4">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button className="w-2 h-2 bg-white rounded-full"></button>
        <button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
        <button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="border-subtle bg-center z-10 border-t pt-32 pb-32 relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="md:text-8xl uppercase text-5xl font-light text-white tracking-tighter font-space-grotesk mix-blend-plus-lighter mb-8">
          Ready to <span className="text-neutral-600">Scale?</span>
        </h2>
        <p className="text-xl text-neutral-400 font-geist mix-blend-plus-lighter max-w-xl mx-auto mb-10">
          Partner with a leading SEO, GSO &amp; web development agency built for the AI search era.
        </p>
        <div>
          <a
            href="#contact"
            className="inline-block bg-brand-gradient text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist"
          >
            Start Project
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-subtle bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h3 className="text-3xl uppercase text-white mb-6 tracking-tighter font-space-grotesk font-light">
              Initialise Contact
            </h3>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed font-geist">
              Tell us about your project. Our team of developers and strategists will analyse
              your request and deploy a response within 24 hours.
            </p>
            <div className="space-y-4 font-geist-mono text-sm">
              <div className="flex items-center gap-4 text-neutral-300">
                <iconify-icon icon="solar:letter-bold-duotone" class="text-lg"></iconify-icon>
                <span className="font-geist">hello@searchsalience.au</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <iconify-icon icon="solar:map-point-bold-duotone" class="text-lg"></iconify-icon>
                <span className="font-geist">Adelaide, South Australia</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <input
                  type="text"
                  required
                  id="name"
                  placeholder=" "
                  className="outline-none focus:border-white transition-colors peer placeholder-transparent text-white font-geist-mono bg-transparent w-full border-neutral-800 border-b pt-3 pb-3"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist"
                >
                  Name
                </label>
              </div>
              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist"
                >
                  Email Address
                </label>
              </div>
              <div className="group relative">
                <textarea
                  id="message"
                  rows="3"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-neutral-300 transition-colors pt-4"
              >
                <span className="font-geist">Transmit</span>
                <iconify-icon
                  icon="solar:arrow-right-bold-duotone"
                  class="transform group-hover:translate-x-1 transition-transform"
                ></iconify-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-subtle bg-black pt-12 pb-8 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
            <div className="w-1.5 h-1.5 bg-purple-500"></div>
            SEARCH SALIENCE
          </div>
          <div className="flex gap-8 text-xs font-geist-mono text-neutral-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors font-geist">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors font-geist">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors font-geist">
              System Status
            </a>
          </div>
        </div>

        <div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          <p className="font-geist">
            © 2024 Search Salience Systems. Adelaide, SA. // All Rights Reserved
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-geist">
              <iconify-icon icon="prime:twitter" class="text-sm"></iconify-icon>
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-geist">
              <iconify-icon icon="prime:linkedin" class="text-sm"></iconify-icon>
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-geist">
              <iconify-icon icon="prime:instagram" class="text-sm"></iconify-icon>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div className="text-slate-400 antialiased relative overflow-x-hidden font-geist-mono">
      <Background />
      <GridOverlay />
      <Nav />
      <Hero />
      <ScrollReveal />
      <Workflows />
      <Results />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}