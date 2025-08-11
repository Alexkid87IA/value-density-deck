import { useEffect, useRef, useState } from "react";

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePhase, setActivePhase] = useState(null);

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

  // Roadmap phases data
  const phases = [
    {
      period: "0-6 mois",
      subtitle: "T4-2025",
      title: "Validation",
      objectives: [
        "Mise en ligne MVP : site, app, première newsletter",
        "Lancement public de HV Agent – bêta",
        "Deux plateaux vidéo opérationnels"
      ],
      audience: {
        newsletter: "3 000 inscrits",
        impressions: "2 M impressions sociales"
      },
      revenue: {
        amount: "120 k €",
        desc: "co-shootings pilotes + premières OP sponsorisées"
      },
      phase: 1
    },
    {
      period: "6-12 mois",
      subtitle: "T1-T2 2026",
      title: "Traction",
      objectives: [
        "Cadence 15 articles Discover/jour",
        "Podcast hebdo + short quotidien",
        "Shop e-commerce « HV-approved » en soft-launch"
      ],
      audience: {
        newsletter: "10 000 inscrits",
        impressions: "10 M impressions sociales",
        readers: "25 k lecteurs mensuels"
      },
      revenue: {
        amount: "400 k €",
        desc: "CA cumulé",
        ebitda: "–220 k €"
      },
      phase: 2
    },
    {
      period: "12-24 mois",
      subtitle: "T3-T4 2026",
      title: "Industrialisation",
      objectives: [
        "HV Agent v2 : routines + coach WhatsApp",
        "1 format premium/mois (masterclass ou docu)"
      ],
      audience: {
        newsletter: "25 000 inscrits",
        impressions: "25 M impressions sociales"
      },
      revenue: {
        amount: "1,2 M €",
        desc: "CA annuel",
        ebitda: "–50 k €"
      },
      phase: 3
    },
    {
      period: "2027",
      subtitle: "",
      title: "Expansion",
      objectives: [
        "API « Constellations » ouverte aux marques",
        "Studios HV Paris + Montréal",
        "Localisation EN / ES des contenus signature"
      ],
      audience: {
        newsletter: "50 000 inscrits",
        impressions: "60 M impressions sociales cumulées"
      },
      revenue: {
        amount: "4 M €",
        desc: "CA annuel",
        ebitda: "+350 k €"
      },
      phase: 4
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="roadmap" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise-roadmap">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-roadmap)" />
        </svg>
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(125, 211, 252, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.02) 0%, transparent 60%)
            `,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Orbital lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
              <stop offset="50%" stopColor="rgba(56, 189, 248, 0.3)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </linearGradient>
          </defs>
          {[...Array(4)].map((_, i) => (
            <ellipse
              key={i}
              cx="50%"
              cy="50%"
              rx={`${30 + i * 15}%`}
              ry={`${20 + i * 10}%`}
              fill="none"
              stroke="url(#orbit-gradient)"
              strokeWidth="0.5"
              style={{
                animation: `rotate ${30 + i * 10}s linear infinite`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-16 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl">
            La trajectoire High Value — quatre orbites, un atterrissage solide
          </h2>
        </div>

        {/* Intro */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Nous avançons par paliers mesurables : <span className="text-white/80">valider le produit</span>, 
            {' '}<span className="text-white/80">construire l'audience</span>, 
            {' '}<span className="text-white/80">industrialiser les revenus</span>, 
            puis <span className="text-white/80">déployer l'international</span>.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className={`relative mb-24 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  activePhase === index ? 'scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setActivePhase(index)}
                onMouseLeave={() => setActivePhase(null)}
                onTouchStart={() => setActivePhase(index)}
                onTouchEnd={() => setActivePhase(null)}
              >
                {/* Phase node - visible on desktop */}
                <div className="hidden lg:block relative mb-8">
                  <div className="w-40 h-40 mx-auto relative">
                    {/* Outer ring */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                      activePhase === index ? 'bg-white/[0.08]' : 'bg-white/[0.03]'
                    }`} />
                    {/* Inner circle */}
                    <div className="absolute inset-4 rounded-full bg-[#050505] flex items-center justify-center">
                      <div className="text-center">
                        {/* Phase number instead of emoji */}
                        <div className="text-3xl font-light text-white/20 mb-1">{phase.phase}</div>
                        <div className="text-sm text-white/60 font-light">{phase.title}</div>
                      </div>
                    </div>
                    {/* Progress indicator */}
                    {index < phases.length - 1 && (
                      <div className="absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Mobile header */}
                <div className="lg:hidden mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Phase indicator for mobile */}
                    <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                      <span className="text-sm font-light text-white/40">{phase.phase}</span>
                    </div>
                    <h3 className="text-2xl text-white/80 font-light">{phase.title}</h3>
                  </div>
                </div>

                {/* Content card */}
                <div className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
                  activePhase === index ? 'bg-white/[0.05]' : 'bg-white/[0.02]'
                }`}>
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-transparent opacity-0 ${
                    activePhase === index ? 'opacity-100' : ''
                  } transition-opacity duration-700`} />
                  
                  <div className="relative p-6">
                    {/* Period */}
                    <div className="mb-4">
                      <div className="text-lg text-white/90 font-light">{phase.period}</div>
                      {phase.subtitle && (
                        <div className="text-xs text-white/40 mt-1">{phase.subtitle}</div>
                      )}
                    </div>

                    {/* Objectives */}
                    <div className="mb-6">
                      <h4 className="text-xs text-white/40 uppercase tracking-wider mb-3">Objectifs</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((obj, i) => (
                          <li key={i} className="text-sm text-white/60 font-light flex items-start">
                            <span className="text-white/20 mr-2">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {/* Audience */}
                      <div>
                        <h4 className="text-xs text-white/40 uppercase tracking-wider mb-2">Audience</h4>
                        <div className="space-y-1">
                          <div className="text-sm text-white/70">{phase.audience.newsletter}</div>
                          <div className="text-xs text-white/50">{phase.audience.impressions}</div>
                          {phase.audience.readers && (
                            <div className="text-xs text-white/50">{phase.audience.readers}</div>
                          )}
                        </div>
                      </div>

                      {/* Revenue */}
                      <div>
                        <h4 className="text-xs text-white/40 uppercase tracking-wider mb-2">Revenus</h4>
                        <div className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 font-light">
                          {phase.revenue.amount}
                        </div>
                        {phase.revenue.ebitda && (
                          <div className={`text-xs mt-1 ${
                            phase.revenue.ebitda.startsWith('+') ? 'text-electric-blue/70' : 'text-white/40'
                          }`}>
                            EBITDA {phase.revenue.ebitda}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Revenue description */}
                    {phase.revenue.desc && (
                      <div className="text-xs text-white/40 font-light pt-4 border-t border-white/10">
                        {phase.revenue.desc}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key points */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Capex maîtrisé</h4>
            <p className="text-sm text-white/40 font-light">
              Les studios sont amortis dès la 1ʳᵉ année grâce aux co-shootings pilotes.
            </p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Croissance audience ≈ croissance CA</h4>
            <p className="text-sm text-white/40 font-light">
              Ratio prudent d'environ 10 € de CA par lecteur régulier et par an.
            </p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Break-even planifié en année 3</h4>
            <p className="text-sm text-white/40 font-light">
              Cible réaliste pour un média-plateforme naissant.
            </p>
          </div>
        </div>

        {/* Financing box */}
        <div className={`relative p-8 rounded-lg bg-white/[0.02] mb-16 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">FINANCEMENT RECHERCHÉ</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 mb-2">
                Bridge SAFE : 1,5 M €
              </div>
              <p className="text-sm text-white/40 font-light">(closing fin 2025)</p>
            </div>
            <div>
              <h4 className="text-sm text-white/60 mb-3">Allocation</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Produit & IA</span>
                  <span className="text-white/60">55 %</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Acquisition audience</span>
                  <span className="text-white/60">30 %</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Équipement studio</span>
                  <span className="text-white/60">15 %</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-white/40 font-light">
              Valorisation cap proposée : <span className="text-white/60">12 M € post-money</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => {
              const metricsElement = document.getElementById('metrics');
              if (metricsElement) {
                metricsElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-4 text-white/60 hover:text-white/90 transition-all duration-500"
          >
            <span className="text-sm font-light tracking-wider">Voir nos métriques clés</span>
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
        {[...Array(30)].map((_, i) => (
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
              animation: `float-orbit ${25 + Math.random() * 15}s infinite`,
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-orbit {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.5);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};