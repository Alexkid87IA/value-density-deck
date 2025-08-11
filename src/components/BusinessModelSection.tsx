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

  // Revenue motors data RÉALISTES
  const revenueMotors = [
    {
      name: "Brand content & Collabs",
      percentage: 52,
      revenue: "24k€/mois",
      margin: 70,
      details: "2-3 ops/mois × 5-7k€",
      breakdown: [
        { type: "Brand content", count: "2-3/mois", price: "5-7k€", total: "15k€" },
        { type: "Interview collab", count: "2-3/mois", price: "3k€", total: "9k€" }
      ],
      color: "rgba(56, 189, 248, 0.5)"
    },
    {
      name: "Communauté Skool",
      percentage: 20,
      revenue: "9k€/mois",
      margin: 85,
      details: "150 membres × 60€/mois",
      breakdown: [
        { type: "Accès communauté Roger", desc: "Lives hebdo + ressources" },
        { type: "Coaching groupe", desc: "Sessions mensuelles" },
        { type: "Network exclusif", desc: "Mise en relation membres" }
      ],
      color: "rgba(125, 211, 252, 0.5)"
    },
    {
      name: "Monétisation RS",
      percentage: 13,
      revenue: "6k€/mois",
      margin: 95,
      details: "TikTok + Facebook + YouTube",
      breakdown: [
        { type: "Facebook", views: "4M vues", cpm: "0.7€", total: "2.8k€" },
        { type: "TikTok", views: "5M vues", cpm: "0.4€", total: "2k€" },
        { type: "YouTube", views: "200k vues", cpm: "2€", total: "0.4k€" },
        { type: "Sponsors posts", count: "2/mois", total: "0.8k€" }
      ],
      color: "rgba(56, 189, 248, 0.3)"
    },
    {
      name: "Newsletter & Site",
      percentage: 15,
      revenue: "7k€/mois",
      margin: 80,
      details: "Abonnements + programmatique",
      breakdown: [
        { type: "Newsletter premium", count: "500", price: "7.90€", total: "4k€" },
        { type: "Programmatique site", visitors: "250k", cpm: "3€", total: "2.5k€" },
        { type: "Sponsors newsletter", count: "2/mois", total: "0.5k€" }
      ],
      color: "rgba(125, 211, 252, 0.3)"
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
            6 sources de revenus pour 46k€/mois
          </h2>
        </div>

        {/* Intro */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Un modèle <span className="text-white/80">diversifié et réaliste</span> qui ne dépend pas d'une seule source.
            <span className="block mt-4">
              Brand content pour le cash-flow immédiat, communauté pour la récurrence, 
              monétisation des 10M d'impressions existantes.
            </span>
          </p>
        </div>

        {/* Revenue visualization */}
        <div className={`mb-24 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center md:text-left">
            MIX REVENUS À 12 MOIS
          </h3>
          
          <div className="relative">
            {/* Donut chart container */}
            <div className="relative mx-auto mb-12 md:mb-16" style={{ maxWidth: '320px' }}>
              <svg viewBox="0 0 260 260" className="w-full transform -rotate-90">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0.8)" />
                    <stop offset="100%" stopColor="rgba(56, 189, 248, 0.3)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(125, 211, 252, 0.8)" />
                    <stop offset="100%" stopColor="rgba(125, 211, 252, 0.3)" />
                  </linearGradient>
                </defs>
                
                {/* Background circle */}
                <circle
                  cx="130"
                  cy="130"
                  r="100"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="40"
                />
                
                {/* Revenue segments */}
                {donutSegments.map((segment, index) => (
                  <g key={index}>
                    <circle
                      cx="130"
                      cy="130"
                      r={segment.path.radius}
                      fill="none"
                      stroke={index % 2 === 0 ? "url(#gradient1)" : "url(#gradient2)"}
                      strokeWidth="40"
                      strokeDasharray={segment.path.strokeDasharray}
                      strokeDashoffset={segment.path.strokeDashoffset}
                      className={`transition-all duration-700 cursor-pointer ${
                        hoveredMotor === index ? 'opacity-100' : hoveredMotor !== null ? 'opacity-40' : 'opacity-70'
                      }`}
                      filter={hoveredMotor === index ? "url(#glow)" : ""}
                      onMouseEnter={() => setHoveredMotor(index)}
                      onMouseLeave={() => setHoveredMotor(null)}
                      style={{
                        transform: hoveredMotor === index ? 'scale(1.02)' : 'scale(1)',
                        transformOrigin: '130px 130px'
                      }}
                    />
                  </g>
                ))}
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform rotate-90">
                  <div className="text-3xl md:text-4xl font-light text-white/90">46k€</div>
                  <div className="text-xs md:text-sm text-white/40 font-light mt-1 tracking-wider">MRR</div>
                </div>
              </div>
            </div>

            {/* Revenue details */}
            <div className="space-y-4">
              {revenueMotors.map((motor, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg transition-all duration-700 cursor-pointer ${
                    hoveredMotor === index ? 'bg-white/[0.05] scale-[1.01]' : 'bg-white/[0.02]'
                  }`}
                  onMouseEnter={() => setHoveredMotor(index)}
                  onMouseLeave={() => setHoveredMotor(null)}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg text-white/90">{motor.name}</h4>
                        <p className="text-sm text-white/50 mt-1">{motor.details}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-light text-white/80">{motor.percentage}%</div>
                        <div className="text-sm text-white/60">{motor.revenue}</div>
                      </div>
                    </div>
                    
                    {/* Breakdown - shown on hover */}
                    {hoveredMotor === index && motor.breakdown && (
                      <div className="pt-4 border-t border-white/10 animate-fadeIn">
                        <div className="space-y-2">
                          {motor.breakdown.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                              <div className="text-white/50">
                                {item.type}
                                {item.count && <span className="text-white/30"> • {item.count}</span>}
                                {item.price && <span className="text-white/30"> × {item.price}</span>}
                                {item.desc && <span className="text-white/30"> : {item.desc}</span>}
                              </div>
                              <div className="text-white/70">
                                {item.total || item.views || ''}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                          <span className="text-xs text-white/40">Marge</span>
                          <span className="text-sm text-white/70">{motor.margin}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth trajectory */}
        <div className={`mb-24 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">TRAJECTOIRE VERS LA RENTABILITÉ</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="grid grid-cols-3 gap-8">
              {projections.map((proj, index) => (
                <div key={index} className="relative group">
                  {/* Node */}
                  <div className="relative text-center mb-8">
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="absolute inset-0 bg-white/[0.02] rounded-full transition-all duration-700 group-hover:bg-white/[0.05]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg text-white/60 font-light">{proj.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xs text-white/40 mb-1">MRR</div>
                      <div className="text-2xl text-white/90 font-light">{proj.mrr}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-white/40 mb-1">Coûts</div>
                      <div className="text-xl text-white/60 font-light">{proj.costs}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-sm font-light ${
                        proj.status === 'Rentable' || proj.status === 'Profitable' 
                          ? 'text-electric-blue/80' 
                          : 'text-white/50'
                      }`}>
                        {proj.status}
                      </div>
                    </div>
                    <p className="text-xs text-white/40 font-light text-center mt-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unit economics */}
        <div className={`grid md:grid-cols-4 gap-6 mb-20 transition-all duration-1200 delay-800 ease-out ${
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
              <p className="text-sm text-white/50">Brand content dès le mois 1 : 10-15k€/mois garantis.</p>
            </div>
            <div>
              <h4 className="text-base text-white/80 mb-2">Récurrence forte</h4>
              <p className="text-sm text-white/50">Skool + Newsletter = 65% de revenus récurrents.</p>
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
          <button
            onClick={() => {
              const roadmapElement = document.getElementById('roadmap');
              if (roadmapElement) {
                roadmapElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-4 text-white/60 hover:text-white/90 transition-all duration-500"
          >
            <span className="text-sm font-light tracking-wider">Voir notre plan d'exécution</span>
            <svg 
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.1 + Math.random() * 0.2}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${30 + Math.random() * 20}s infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes drift {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) scale(1.5);
            opacity: 0.3;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}