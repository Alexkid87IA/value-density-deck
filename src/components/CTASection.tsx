import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPriority, setHoveredPriority] = useState(null);

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

  // Investment priorities data RÉALISTES
  const priorities = [
    {
      title: "Équipe & Salaires",
      cost: "240k€",
      impact: "7-10 personnes pendant 12 mois",
      icon: "👥",
      category: "team"
    },
    {
      title: "Bureau & Studio",
      cost: "60k€",
      impact: "10 postes + studio vidéo intégré Paris",
      icon: "🏢",
      category: "infra"
    },
    {
      title: "Production contenu",
      cost: "60k€",
      impact: "200+ contenus/mois en qualité premium",
      icon: "🎬",
      category: "content"
    },
    {
      title: "Tech & Outils",
      cost: "20k€",
      impact: "Stack complète : site, CRM, analytics",
      icon: "🛠️",
      category: "tech"
    },
    {
      title: "Marketing & Growth",
      cost: "20k€",
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
      desc: "Brand content dès le mois 1 : 10-15k€/mois garantis"
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
            Nous levons <span className="text-white/80">400k€</span> pour transformer High Value 
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
                400k€
              </div>
              <p className="text-sm text-white/60">Seed • 15-18 mois de runway</p>
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

                <div className="relative grid md:grid-cols-12 gap-6 items-center">
                  {/* Priority title */}
                  <div className="md:col-span-5">
                    <h4 className="text-base md:text-lg text-white/80 font-light leading-tight">
                      {priority.title}
                    </h4>
                  </div>

                  {/* Cost */}
                  <div className="md:col-span-2">
                    <p className="text-lg text-white/90 font-light">{priority.cost}</p>
                  </div>

                  {/* Impact */}
                  <div className="md:col-span-5">
                    <p className="text-sm text-white/60 font-light leading-relaxed">{priority.impact}</p>
                  </div>
                </div>

                {/* Category indicator line */}
                <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-blue/30 to-transparent transform origin-top ${
                  hoveredPriority === index ? 'scale-y-100' : 'scale-y-0'
                } transition-transform duration-700`} />
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 text-right">
            <p className="text-sm text-white/40">Total : <span className="text-white/60">400k€</span></p>
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
            <div className="text-4xl font-light text-white/80 mb-2">6</div>
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
                    <p className="text-2xl text-white/80 font-light">400k€</p>
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
          <div className="relative max-w-3xl mx-auto">
            {/* Quote marks */}
            <div className="absolute -top-6 -left-8 text-6xl text-white/5 font-serif">"</div>
            <div className="absolute -bottom-6 -right-8 text-6xl text-white/5 font-serif rotate-180">"</div>
            
            <p className="text-2xl md:text-3xl text-white/70 font-light leading-relaxed italic">
              Les médias qui survivront sont ceux qui sauront mixer contenus, communauté et revenus diversifiés. 
              C'est exactement ce que nous construisons.
            </p>
            
            <cite className="block mt-6 text-sm text-white/40">
              — Roger, Fondateur High Value
            </cite>
          </div>
        </div>

        {/* CTAs */}
        <div className={`text-center transition-all duration-1200 delay-1100 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            INTÉRESSÉ(E) ?
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <button className="group relative overflow-hidden">
              <div className="relative px-12 py-5">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-electric-cyan/20 rounded transition-all duration-700 group-hover:from-electric-blue/30 group-hover:to-electric-cyan/30" />
                {/* Border */}
                <div className="absolute inset-0 rounded border border-electric-blue/30 group-hover:border-electric-blue/50 transition-colors duration-700" />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-gradient-to-r from-electric-blue/20 to-electric-cyan/20" />
                
                <span className="relative z-10 text-white/90 font-light tracking-wide">
                  Planifier un call
                </span>
              </div>
            </button>

            {/* Secondary CTA */}
            <button className="group relative overflow-hidden">
              <div className="relative px-12 py-5">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/20" />
                <span className="relative z-10 text-white/70 font-light tracking-wide group-hover:text-white/90 transition-colors duration-500">
                  Recevoir le deck complet
                </span>
              </div>
            </button>
          </div>

          <p className="mt-8 text-xs text-white/30">
            Contact : roger@highvalue.fr • +33 6 XX XX XX XX
          </p>
        </div>

        {/* Footer signature */}
        <div className={`text-center mt-32 pt-16 border-t border-white/5 transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-xs text-white/20 font-light tracking-[0.3em]">
            HIGH VALUE · MÉDIA NOUVELLE GÉNÉRATION · 2025
          </div>
        </div>
      </div>

      {/* Orbiting particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.2 + Math.random() * 0.3}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `orbit ${20 + Math.random() * 20}s infinite linear`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}