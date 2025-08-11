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

  // Revenue motors data
  const revenueMotors = [
    {
      name: "Co-création & co-shooting",
      percentage: 35,
      ticket: "15 k€",
      margin: 55,
      scale: "Studios en propre + workflow IA pour réduire 40 % des coûts",
      color: "rgba(56, 189, 248, 0.5)"
    },
    {
      name: "Contenus sponsorisés",
      percentage: 20,
      ticket: "8 k€",
      margin: 70,
      scale: "Emplacements éditoriaux premium, intégrés sans rupture UX",
      color: "rgba(125, 211, 252, 0.5)"
    },
    {
      name: "Événements & expériences",
      percentage: 15,
      ticket: "120 €",
      margin: 45,
      scale: "Talks, masterclass, enregistrements publics : cross-pollinisation avec la communauté",
      color: "rgba(56, 189, 248, 0.3)"
    },
    {
      name: "E-commerce & affiliation",
      percentage: 18,
      ticket: "25 €",
      margin: 30,
      scale: "Sélection « HV-approved » : objets, livres, routines ; intégration shop-in-content",
      color: "rgba(125, 211, 252, 0.3)"
    },
    {
      name: "Formations premium",
      percentage: 12,
      ticket: "299 €",
      margin: 65,
      scale: "Micro-learning + HV Agent personnalisé + coach WhatsApp",
      color: "rgba(56, 189, 248, 0.2)"
    }
  ];

  // Financial projections
  const projections = [
    { year: "2025", ca: "1,2 M", ebitda: "–0,3 M", desc: "Mise en place studios + build audience" },
    { year: "2026", ca: "4,5 M", ebitda: "+0,35 M", desc: "Traction RS (50 M impr.), 100 k lecteurs/mois" },
    { year: "2027", ca: "10 M", ebitda: "+1,4 M", desc: "API HV Agent B2B + déploiement international" }
  ];

  // Calculate donut chart paths with better spacing
  const createDonutPath = (percentage: number, offset: number) => {
    const radius = 100;
    const strokeWidth = 40; // Increased for better visibility
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
            Cinq moteurs de revenus : un hybride robuste et scalable
          </h2>
        </div>

        {/* Intro */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            High Value n'est pas qu'un média : c'est une plateforme qui monétise{' '}
            <span className="text-white/80">contenus, expertise et communauté</span>.
            <span className="block mt-4">
              Notre modèle hybride s'appuie sur cinq flux de cash-flow déjà balisés dans l'industrie, 
              mais dopés par notre galaxie de formats et par HV Agent.
            </span>
          </p>
        </div>

        {/* Revenue visualization - Enhanced Design */}
        <div className={`mb-24 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center md:text-left">
            RÉPARTITION DES REVENUS
          </h3>
          
          {/* Mobile-first design with donut chart */}
          <div className="relative">
            {/* Donut chart container */}
            <div className="relative mx-auto mb-12 md:mb-16" style={{ maxWidth: '320px' }}>
              <svg viewBox="0 0 260 260" className="w-full transform -rotate-90">
                {/* Outer glow effect */}
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
                
                {/* Revenue segments with enhanced styling */}
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
                      onTouchStart={() => setHoveredMotor(index)}
                      onTouchEnd={() => setHoveredMotor(null)}
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
                  <div className="text-3xl md:text-4xl font-light text-white/90">2026</div>
                  <div className="text-xs md:text-sm text-white/40 font-light mt-1 tracking-wider">CIBLE CA</div>
                </div>
              </div>
            </div>

            {/* Revenue details - Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {revenueMotors.map((motor, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg transition-all duration-700 cursor-pointer ${
                    hoveredMotor === index ? 'bg-white/[0.05] scale-[1.02]' : 'bg-white/[0.02]'
                  }`}
                  onMouseEnter={() => setHoveredMotor(index)}
                  onMouseLeave={() => setHoveredMotor(null)}
                  onTouchStart={() => setHoveredMotor(index)}
                  onTouchEnd={() => setHoveredMotor(null)}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-electric-blue/20' : 'from-electric-cyan/20'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-base md:text-lg text-white/90 font-light leading-tight pr-2">
                        {motor.name}
                      </h4>
                      <span className={`text-3xl md:text-4xl font-light ${
                        hoveredMotor === index ? 'text-white/100' : 'text-white/80'
                      } transition-colors duration-500`}>
                        {motor.percentage}%
                      </span>
                    </div>
                    
                    {/* Metrics */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/40 uppercase tracking-wider">Ticket moyen</span>
                        <span className="text-sm text-white/70 font-light">{motor.ticket}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/40 uppercase tracking-wider">Marge</span>
                        <span className="text-sm text-white/70 font-light">{motor.margin}%</span>
                      </div>
                    </div>
                    
                    {/* Scale description - always visible on mobile, hover on desktop */}
                    <div className={`mt-4 pt-4 border-t border-white/10 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}>
                      <p className="text-xs text-white/50 font-light leading-relaxed">
                        {motor.scale}
                      </p>
                    </div>
                  </div>
                  
                  {/* Accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-electric-blue/50' : 'from-electric-cyan/50'
                  } via-transparent to-transparent transform ${
                    hoveredMotor === index ? 'scale-x-100' : 'scale-x-0'
                  } transition-transform duration-700`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial projections */}
        <div className={`mb-24 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">PROJECTIONS FINANCIÈRES</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="grid grid-cols-3 gap-8">
              {projections.map((proj, index) => (
                <div key={index} className="relative group">
                  {/* Year node */}
                  <div className="relative text-center mb-8">
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="absolute inset-0 bg-white/[0.02] rounded-full transition-all duration-700 group-hover:bg-white/[0.05]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg text-white/60 font-light">{proj.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xs text-white/40 mb-1">CA</div>
                      <div className="text-2xl text-white/90 font-light">{proj.ca}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-white/40 mb-1">EBITDA</div>
                      <div className={`text-xl font-light ${
                        proj.ebitda.startsWith('+') ? 'text-electric-blue/80' : 'text-white/50'
                      }`}>
                        {proj.ebitda}
                      </div>
                    </div>
                    <p className="text-xs text-white/40 font-light text-center leading-relaxed mt-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why investors love this */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Diversification native</h4>
            <p className="text-sm text-white/40 font-light">Aucun levier ne dépasse 35 % du CA.</p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Barrières à l'entrée</h4>
            <p className="text-sm text-white/40 font-light">Studios, workflow IA propriétaire, data d'audience.</p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">LTV ▶ CAC</h4>
            <p className="text-sm text-white/40 font-light">Optimisé par HV Agent qui convertit l'attention en revenu récurrent.</p>
          </div>
        </div>

        {/* North Star Metrics */}
        <div className={`relative p-8 rounded bg-white/[0.02] mb-16 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">NORTH STAR METRICS</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 mb-2">
                650 k€
              </div>
              <p className="text-sm text-white/40 font-light">MRR cible fin 2026</p>
            </div>
            <div>
              <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 mb-2">
                ÷3
              </div>
              <p className="text-sm text-white/40 font-light">Coût d'acquisition réduit</p>
            </div>
            <div>
              <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 mb-2">
                22 min
              </div>
              <p className="text-sm text-white/40 font-light">Temps moyen / jour</p>
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
            <span className="text-sm font-light tracking-wider">Découvrir notre feuille de route</span>
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
      `}</style>
    </section>
  );
};