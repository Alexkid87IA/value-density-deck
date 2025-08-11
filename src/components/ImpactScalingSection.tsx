import { useEffect, useRef, useState } from "react";

/**
 * ImpactScalingSection — Preview component
 *
 * Goal: Show an investor-facing "what your money unlocks" story with an AB toggle
 * (With Funding vs. Base Case), fund allocation, and clear KPIs.
 *
 * Styling: Tailwind, matches your existing aesthetic (dark bg, electric accents,
 * subtle noise + gradients, smooth motion). Pure SVG/CSS (no external chart libs).
 */

export default function ImpactScalingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scenario, setScenario] = useState<"base" | "plus">("plus"); // default to "with funding"

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: x - 0.5, y: y - 0.5 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scenarios (editable numbers)
  const data = {
    base: {
      label: "Sans financement",
      capex: 0,
      mrr12: 180, // k€ MRR @12m
      users: 60_000,
      cac: 14, // €
      payback: 7, // months
      runway: 9, // months
      impressions: 18, // M / month @12m
    },
    plus: {
      label: "+500 k€ maintenant",
      capex: 500,
      mrr12: 650, // k€ MRR @12m
      users: 250_000,
      cac: 9,
      payback: 4,
      runway: 18,
      impressions: 30,
    },
  } as const;

  const current = data[scenario];

  // Fund allocation (only relevant for "+500k€" scenario, but shown in both for context)
  const allocation = [
    { label: "Produit & IA (HV Agent, API)", value: 55 },
    { label: "Acquisition audience", value: 30 },
    { label: "Studios & équipements", value: 15 },
  ];

  // Tiny helper for number formatting
  const k = (n: number) => n.toLocaleString("fr-FR");

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative min-h-screen py-28 md:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise layer */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise-impact">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-impact)" />
        </svg>
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at 25% 25%, rgba(56,189,248,0.08) 0%, transparent 40%),
                         radial-gradient(circle at 75% 75%, rgba(125,211,252,0.06) 0%, transparent 45%),
                         radial-gradient(circle at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 60%)`,
            transform: `translate(${mousePos.x * 28}px, ${mousePos.y * 28}px)`,
            transition: "transform 1.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div
          className={`mb-10 md:mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white/90">
            Impact & scaling plan
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl font-light text-lg md:text-xl">
            Ce que votre financement <span className="text-white/80">débloque</span> dans les 12 prochains mois —
            comparé au scénario de base.
          </p>
        </div>

        {/* Scenario Toggle */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex rounded-lg border border-white/10 p-1 bg-white/[0.04] backdrop-blur-sm">
            <button
              onClick={() => setScenario("base")}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                scenario === "base"
                  ? "bg-black/40 text-white/90"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              Sans financement
            </button>
            <button
              onClick={() => setScenario("plus")}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                scenario === "plus"
                  ? "bg-black/40 text-white/90"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              +500 k€ maintenant
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { label: "MRR à 12 mois", value: `${current.mrr12} k€` },
            { label: "Utilisateurs actifs", value: `${k(current.users)}` },
            { label: "CAC", value: `${current.cac} €` },
            { label: "Payback", value: `${current.payback} mois` },
            { label: "Runway", value: `${current.runway} mois` },
          ].map((kpi, i) => (
            <div
              key={i}
              className="relative p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                {kpi.label}
              </div>
              <div className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[rgba(56,189,248,0.6)]">
                {kpi.value}
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side bars: Impressions growth */}
        <div className="mb-16">
          <h3 className="text-sm font-light text-white/40 mb-4 tracking-[0.2em]">
            IMPRESSIONS SOCIALES / MOIS (HORIZON 12 MOIS)
          </h3>
          <div className="relative h-28 bg-white/[0.02] rounded-lg overflow-hidden">
            {/* grid labels */}
            <div className="absolute inset-0 flex items-center justify-between px-4 text-xs text-white/20">
              {[0, 10, 20, 30, 40].map((t) => (
                <span key={t}>{t}M</span>
              ))}
            </div>
            {/* base bar */}
            <div className="absolute inset-y-0 left-0">
              <div
                className="h-1/2 mt-7 rounded-r-lg bg-gradient-to-r from-white/20 to-white/10"
                style={{ width: `${(data.base.impressions / 40) * 100}%` }}
                title={`${data.base.impressions}M sans financement`}
              />
            </div>
            {/* plus bar */}
            <div className="absolute bottom-0 left-0">
              <div
                className="h-1/2 mb-7 rounded-r-lg bg-gradient-to-r from-[rgba(56,189,248,0.3)] to-[rgba(125,211,252,0.3)]"
                style={{ width: `${(data.plus.impressions / 40) * 100}%` }}
                title={`${data.plus.impressions}M avec +500k€`}
              />
            </div>
            {/* indicator line at current scenario */}
            <div
              className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
              style={{
                left: `${(current.impressions / 40) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 text-xs text-white/40">
            <span className="inline-flex items-center gap-2 mr-4">
              <span className="inline-block w-3 h-2 rounded-sm bg-white/20" />
              Base
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-3 h-2 rounded-sm bg-[rgba(56,189,248,0.35)]" />
              +500k€
            </span>
          </div>
        </div>

        {/* Allocation of funds */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-sm font-light text-white/40 mb-4 tracking-[0.2em]">
              ALLOCATION DES FONDS (+500 K€)
            </h3>
            <div className="space-y-4">
              {allocation.map((a, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm text-white/60 mb-1">
                    <span>{a.label}</span>
                    <span className="text-white/50">{a.value}%</span>
                  </div>
                  <div className="h-2 bg-white/[0.06] rounded">
                    <div
                      className="h-2 rounded bg-gradient-to-r from-[rgba(56,189,248,0.35)] to-[rgba(125,211,252,0.35)]"
                      style={{ width: `${a.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">
              Hypothèse: déblocage immédiat sur 12 mois, milestones trimestrielles.
            </p>
          </div>

          {/* Mini outcome table */}
          <div>
            <h3 className="text-sm font-light text-white/40 mb-4 tracking-[0.2em]">
              RÉSULTATS ATTENDUS À 12 MOIS
            </h3>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.03] text-white/60">
                  <tr>
                    <th className="text-left py-3 px-4 font-light">KPI</th>
                    <th className="text-left py-3 px-4 font-light">Base</th>
                    <th className="text-left py-3 px-4 font-light">+500k€</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-t border-white/5">
                    <td className="py-3 px-4">MRR</td>
                    <td className="py-3 px-4">{data.base.mrr12} k€</td>
                    <td className="py-3 px-4">{data.plus.mrr12} k€</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="py-3 px-4">Utilisateurs actifs</td>
                    <td className="py-3 px-4">{k(data.base.users)}</td>
                    <td className="py-3 px-4">{k(data.plus.users)}</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="py-3 px-4">CAC</td>
                    <td className="py-3 px-4">{data.base.cac} €</td>
                    <td className="py-3 px-4">{data.plus.cac} €</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="py-3 px-4">Payback</td>
                    <td className="py-3 px-4">{data.base.payback} mois</td>
                    <td className="py-3 px-4">{data.plus.payback} mois</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="py-3 px-4">Runway</td>
                    <td className="py-3 px-4">{data.base.runway} mois</td>
                    <td className="py-3 px-4">{data.plus.runway} mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Confidence + governance perks */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              t: "Traction immédiate",
              d: "Pipeline d'OP et co-shootings déjà identifié, HV Agent prêt à industrialiser l'onboarding.",
            },
            {
              t: "Avantage défendable",
              d: "Studios + workflow IA propriétaire + data d'audience = barrière à l'entrée réelle.",
            },
            {
              t: "Gouvernance & transparence",
              d: "Reporting mensuel des analytics, board pack trimestriel, milestones publiques.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
              <h4 className="text-white/80 text-base font-normal mb-2">{b.t}</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button className="group relative overflow-hidden">
            <div className="relative px-12 py-5">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(56,189,248,0.18)] to-[rgba(125,211,252,0.18)] rounded border border-white/10 group-hover:border-white/20 transition-all duration-700" />
              <span className="relative z-10 text-white/90 font-light tracking-wide flex items-center gap-3">
                <span className="text-2xl font-light">→</span>
                <span>Accélérer avec +500 k€ : recevoir le board pack</span>
              </span>
            </div>
          </button>
          <p className="mt-3 text-xs text-white/40">Deck détaillé, projections financières, assumptions et risques inclus.</p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.15 + Math.random() * 0.25}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-orbit ${22 + Math.random() * 16}s infinite`,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-orbit {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.4); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
