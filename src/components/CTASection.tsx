import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPriority, setHoveredPriority] = useState<number | null>(null);

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

  // Investment priorities data RÉALISTES - 300k€
  const priorities = [
    {
      title: "Équipe & Salaires",
      cost: "180k€",
      impact: "6-8 personnes pendant 12 mois",
      icon: "👥",
      category: "team"
    },
    {
      title: "Bureau & Studio",
      cost: "45k€",
      impact: "8 postes + studio vidéo intégré Paris",
      icon: "🏢",
      category: "infra"
    },
    {
      title: "Production contenu",
      cost: "45k€",
      impact: "200+ contenus/mois en qualité premium",
      icon: "🎬",
      category: "content"
    },
    {
      title: "Tech & Outils",
      cost: "15k€",
      impact: "Stack complète : site, CRM, analytics",
      icon: "🛠️",
      category: "tech"
    },
    {
      title: "Marketing & Growth",
      cost: "15k€",
      impact: "Tests paid, PR, partenariats",
      icon: "📈",
      category: "growth"
    }
  ];

  const benefits = [
    {
      title: "Traction prouvée",
      desc: "120k followers + 10M impressions/mois = audience validée"
    },
    {
      title: "Cash rapide",
      desc: "Brand content dès le mois 1 : 15-20k€/mois garantis"
    },
    {
      title: "Break-even rapide",
      desc: "Rentabilité en 10-12 mois vs 24-36 mois industrie"
    },
    {
      title: "Exit réaliste",
      desc: "Comparables : 5-10x ARR dans 3-5 ans"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise-cta">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-cta)" />
        </svg>
      </div>

      {/* Gradient mesh - more prominent for CTA */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 30% 80%, rgba(125, 211, 252, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 70% 60%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)
            `,
            transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
            transition: 'transform 1.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90">
            Investir dans le futur des médias
          </h2>
        </div>

        {/* Intro */}
        <div className={`text-center mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl mx-auto">
            Nous levons <span className="text-white/80">300k€</span> pour transformer High Value 
            en premier média rentable nouvelle génération.
            <span className="block mt-4">
              Pas de promesses folles, juste un plan solide avec des chiffres réalistes.
            </span>
          </p>
        </div>

        {/* Investment amount highlight */}
        <div className={`text-center mb-20 transition-all duration-1200 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-electric-cyan/20 blur-xl" />
            <div className="relative px-12 py-8 rounded-lg bg-white/[0.02] border border-white/10">
              <div className="text-5xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan mb-2">
                300k€
              </div>
              <p className="text-sm text-white/60">Seed • 12-15 mois de runway</p>
              <p className="text-xs text-white/40 mt-2">Ticket minimum : 25k€</p>
            </div>
          </div>
        </div>

        {/* Investment priorities */}
        <div className={`mb-20 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            UTILISATION DES FONDS
          </h3>

          {/* Priorities grid */}
          <div className="grid gap-px bg-white/[0.02] rounded-lg overflow-hidden">
            {priorities.map((priority, index) => (
              <div
                key={index}
                className={`group relative bg-[#050505] p-6 md:p-8 transition-all duration-700 cursor-pointer ${
                  hoveredPriority === index ? 'bg-white/[0.02]' : ''
                }`}
                onMouseEnter={() => setHoveredPriority(index)}
                onMouseLeave={() => setHoveredPriority(null)}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-transparent opacity-0 ${
                  hoveredPriority === index ? 'opacity-100' : ''
                } transition-opacity duration-700`} />

                <div className="relative flex items-center gap-8">
                  {/* Icon */}
                  <div className="text-3xl">{priority.icon}</div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-lg text-white/80">{priority.title}</h4>
                      <span className="text-2xl font-light text-white/90">{priority.cost}</span>
                    </div>
                    <p className="text-sm text-white/50">{priority.impact}</p>
                  </div>

                  {/* Progress indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent ${
                    hoveredPriority === index ? 'scale-y-100' : 'scale-y-0'
                  } transition-transform duration-700`} />
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 text-right">
            <p className="text-sm text-white/40">Total : <span className="text-white/60">300k€</span></p>
          </div>
        </div>

        {/* Benefits */}
        <div className={`mb-20 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            POURQUOI INVESTIR MAINTENANT
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="relative p-6 h-full bg-white/[0.02] rounded-lg border border-white/5 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10">
                  {/* Top accent */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <h4 className="text-base text-white/80 font-normal mb-3">{benefit.title}</h4>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traction proof */}
        <div className={`grid md:grid-cols-4 gap-8 mb-20 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center">
            <div className="text-4xl font-light text-white/80 mb-2">120k</div>
            <p className="text-sm text-white/40">followers actifs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-white/80 mb-2">46k€</div>
            <p className="text-sm text-white/40">MRR objectif</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-white/80 mb-2">10-12</div>
            <p className="text-sm text-white/40">mois to break-even</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-white/80 mb-2">3</div>
            <p className="text-sm text-white/40">sources de revenus</p>
          </div>
        </div>

        {/* Terms box */}
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-1200 delay-900 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative p-8 rounded-lg bg-white/[0.02] border border-white/10">
            <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">TERMES DE L'OPÉRATION</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/40 mb-1">Montant recherché</p>
                    <p className="text-2xl text-white/80 font-light">300k€</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-1">Type</p>
                    <p className="text-lg text-white/70">Seed / Equity</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-1">Ticket minimum</p>
                    <p className="text-lg text-white/70">25k€</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/40 mb-1">Valorisation</p>
                    <p className="text-2xl text-white/80 font-light">À discuter</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-1">Closing visé</p>
                    <p className="text-lg text-white/70">Mars 2025</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-1">Lead investor</p>
                    <p className="text-lg text-white/70">En recherche</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next steps */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-4">Prochaines étapes :</p>
              <ol className="space-y-2 text-sm text-white/60">
                <li>1. Call découverte (30 min)</li>
                <li>2. Présentation détaillée + Q&A (1h)</li>
                <li>3. Due diligence (data room prête)</li>
                <li>4. Closing Mars 2025</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`text-center mb-20 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <blockquote className="text-2xl md:text-3xl font-light text-white/60 italic max-w-4xl mx-auto">
            "Les médias traditionnels sont morts. Les créateurs brûlent leur audience. 
            <span className="text-white/80"> Nous construisons la troisième voie.</span>"
          </blockquote>
          <p className="text-sm text-white/40 mt-4">— Roger, CEO High Value</p>
        </div>

        {/* Final CTA */}
        <div className={`text-center transition-all duration-1200 delay-1100 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-white/40 mb-8">
            Rejoignez-nous pour créer le futur des médias.
          </p>
          
          <div className="flex justify-center gap-6">
            <button className="group relative overflow-hidden">
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-lg transition-all duration-700 group-hover:scale-105" />
                <span className="relative z-10 text-black font-medium tracking-wide">
                  Planifier un call
                </span>
              </div>
            </button>
            
            <button className="group relative overflow-hidden">
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/20" />
                <span className="relative z-10 text-white/90 font-light tracking-wide group-hover:text-white transition-colors duration-500">
                  Télécharger le deck
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}