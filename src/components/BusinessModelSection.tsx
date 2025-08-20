import { useEffect, useRef, useState } from "react";

export default function BusinessModelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredMotor, setHoveredMotor] = useState(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Revenue motors data RÉALISTES - SANS SKOOL
  const revenueMotors = [
    {
      name: "Brand content & Collabs",
      percentage: 61,
      revenue: "28k€/mois",
      margin: 70,
      details: "4-5 ops/mois × 5-7k€",
      breakdown: [
        { type: "Brand content", count: "3-4/mois", price: "5-7k€", total: "20k€" },
        { type: "Interview collab", count: "2-3/mois", price: "3k€", total: "8k€" }
      ],
      color: "rgba(56, 189, 248, 0.5)"
    },
    {
      name: "Newsletter & Site Premium",
      percentage: 22,
      revenue: "10k€/mois",
      margin: 80,
      details: "1000 abonnés × 7.90€ + pub",
      breakdown: [
        { type: "Newsletter premium", count: "1000", price: "7.90€", total: "7.9k€" },
        { type: "Programmatique site", visitors: "300k", cpm: "4€", total: "1.5k€" },
        { type: "Sponsors newsletter", count: "2/mois", total: "0.6k€" }
      ],
      color: "rgba(125, 211, 252, 0.5)"
    },
    {
      name: "Monétisation RS",
      percentage: 17,
      revenue: "8k€/mois",
      margin: 95,
      details: "TikTok + Facebook + YouTube",
      breakdown: [
        { type: "Facebook", views: "5M vues", cpm: "0.8€", total: "4k€" },
        { type: "TikTok", views: "6M vues", cpm: "0.5€", total: "3k€" },
        { type: "YouTube", views: "300k vues", cpm: "2.5€", total: "0.75k€" },
        { type: "Sponsors posts", count: "1/mois", total: "0.25k€" }
      ],
      color: "rgba(56, 189, 248, 0.3)"
    }
  ];

  // Calculate donut chart paths
  const createDonutPath = (percentage: number, offset: number) => {
    const radius = 100;
    const strokeWidth = 40;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -offset * circumference / 100;

    return {
      radius: normalizedRadius,
      circumference,
      strokeDasharray,
      strokeDashoffset
    };
  };

  let cumulativePercentage = 0;
  const donutSegments = revenueMotors.map(motor => {
    const path = createDonutPath(motor.percentage, cumulativePercentage);
    cumulativePercentage += motor.percentage;
    return { ...motor, path };
  });

  // Financial projections RÉALISTES
  const projections = [
    { 
      period: "Mois 6", 
      mrr: "25k€",
      costs: "30k€",
      status: "Investissement",
      desc: "Construction audience payante" 
    },
    { 
      period: "Mois 12", 
      mrr: "46k€",
      costs: "35k€",
      status: "Rentable",
      desc: "Break-even atteint" 
    },
    { 
      period: "Mois 24", 
      mrr: "100k€",
      costs: "60k€",
      status: "Profitable",
      desc: "Scaling & international" 
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="business" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise-business">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-business)" />
        </svg>
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 40%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 75% 60%, rgba(125, 211, 252, 0.03) 0%, transparent 50%)
            `,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-16 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl">
            3 sources de revenus pour 46k€/mois
          </h2>
        </div>

        {/* Intro */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Un modèle <span className="text-white/80">diversifié et réaliste</span> qui ne dépend pas d'une seule source.
            <span className="block mt-4">
              Brand content pour le cash-flow immédiat, newsletter premium pour la récurrence, 
              monétisation optimisée des 10M d'impressions existantes.
            </span>
          </p>
        </div>

        {/* Revenue visualization */}
        <div className={`mb-24 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Donut chart */}
            <div className="relative">
              <svg width="300" height="300" viewBox="0 0 220 220" className="mx-auto">
                {donutSegments.map((segment, index) => (
                  <circle
                    key={index}
                    cx="110"
                    cy="110"
                    r={segment.path.radius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="40"
                    strokeDasharray={segment.path.strokeDasharray}
                    strokeDashoffset={segment.path.strokeDashoffset}
                    transform="rotate(-90 110 110)"
                    className="transition-all duration-700"
                    style={{
                      filter: hoveredMotor === index ? 'brightness(1.3)' : 'brightness(1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredMotor(index)}
                    onMouseLeave={() => setHoveredMotor(null)}
                  />
                ))}
                {/* Center text */}
                <text x="110" y="105" textAnchor="middle" className="fill-white/90 text-3xl font-light">
                  46k€
                </text>
                <text x="110" y="125" textAnchor="middle" className="fill-white/50 text-sm">
                  /mois
                </text>
              </svg>
              
              {/* Legend */}
              <div className="mt-8 space-y-3">
                {revenueMotors.map((motor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
                    onMouseEnter={() => setHoveredMotor(index)}
                    onMouseLeave={() => setHoveredMotor(null)}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: motor.color }}
                      />
                      <span className="text-sm text-white/70">{motor.name}</span>
                    </div>
                    <span className="text-sm text-white/90 font-light">{motor.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details panel */}
            <div className="space-y-6">
              {revenueMotors.map((motor, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg bg-white/[0.02] border transition-all duration-500 ${
                    hoveredMotor === index 
                      ? 'border-white/20 bg-white/[0.04]' 
                      : 'border-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg text-white/80">{motor.name}</h3>
                    <span className="text-xs text-white/40 px-2 py-1 rounded bg-white/5">
                      Marge {motor.margin}%
                    </span>
                  </div>
                  <p className="text-sm text-white/50 mb-4">{motor.details}</p>
                  <div className="space-y-2">
                    {motor.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-white/40">
                          {item.type} {item.count && `(${item.count})`}
                        </span>
                        <span className="text-white/60">{item.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial projections */}
        <div className={`mb-16 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-sm font-light text-white/40 mb-8 tracking-[0.2em]">PROJECTIONS FINANCIÈRES</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projections.map((proj, index) => (
              <div 
                key={index}
                className="relative p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="text-sm text-white/40 mb-2">{proj.period}</div>
                <div className="text-3xl font-light text-white/90 mb-1">{proj.mrr}</div>
                <div className="text-sm text-white/50 mb-3">MRR</div>
                <div className="flex justify-between text-xs text-white/40">
                  <span>Coûts: {proj.costs}</span>
                  <span className={`${
                    proj.status === 'Rentable' || proj.status === 'Profitable' 
                      ? 'text-green-400' 
                      : 'text-yellow-400'
                  }`}>
                    {proj.status}
                  </span>
                </div>
                <p className="text-xs text-white/30 mt-2">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <div className="text-2xl font-light text-white/80 mb-2">25€</div>
            <div className="text-sm text-white/40">CAC moyen</div>
            <div className="text-xs text-white/30 mt-1">organique + paid</div>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <div className="text-2xl font-light text-white/80 mb-2">65€</div>
            <div className="text-sm text-white/40">ARPU annuel</div>
            <div className="text-xs text-white/30 mt-1">tous segments</div>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <div className="text-2xl font-light text-white/80 mb-2">x2.6</div>
            <div className="text-sm text-white/40">LTV/CAC</div>
            <div className="text-xs text-white/30 mt-1">sain et viable</div>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <div className="text-2xl font-light text-white/80 mb-2">75%</div>
            <div className="text-sm text-white/40">Marge brute</div>
            <div className="text-xs text-white/30 mt-1">moyenne pondérée</div>
          </div>
        </div>

        {/* Investment highlights */}
        <div className={`relative p-8 rounded bg-white/[0.02] mb-16 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">POURQUOI CE MODÈLE FONCTIONNE</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-base text-white/80 mb-2">Cash immédiat</h4>
              <p className="text-sm text-white/50">Brand content dès le mois 1 : 15-20k€/mois garantis.</p>
            </div>
            <div>
              <h4 className="text-base text-white/80 mb-2">Récurrence forte</h4>
              <p className="text-sm text-white/50">Newsletter premium = revenus prévisibles et croissants.</p>
            </div>
            <div>
              <h4 className="text-base text-white/80 mb-2">Coûts maîtrisés</h4>
              <p className="text-sm text-white/50">Production optimisée, équipe lean, marges élevées.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-white/40 mb-4">
            Modèle validé sur 3 mois • Premiers revenus générés • Prêt à scaler
          </p>
        </div>
      </div>
    </section>
  );
}