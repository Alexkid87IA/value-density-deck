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

  // Investment priorities data
  const priorities = [
    {
      title: "Bureaux & Hub créatif – Paris",
      cost: "En cours d'estimation",
      impact: "QG éditorial, salle d'écriture IA, plateau podcast",
      icon: "🏢",
      category: "infrastructure"
    },
    {
      title: "Aménagement des studios vidéo (2 plateaux)",
      cost: "En cours d'estimation",
      impact: "Production premium YouTube + 4 lives Twitch / semaine",
      icon: "🎬",
      category: "production"
    },
    {
      title: "Formats YouTube haute qualité",
      cost: "En cours d'estimation",
      impact: "52 épisodes long-form (1 / semaine) – vecteur d'autorité",
      icon: "📹",
      category: "content"
    },
    {
      title: "Lancement du site (100 articles) + CMS IA",
      cost: "En cours d'estimation",
      impact: "Base SEO & Discover opérationnelle dès J 1",
      icon: "🌐",
      category: "tech"
    },
    {
      title: "Mise en production de HV Agent v1",
      cost: "En cours d'estimation",
      impact: "Assistant personnel + coach WhatsApp (freemium)",
      icon: "🤖",
      category: "ai"
    },
    {
      title: "Marketing & acquisition audience",
      cost: "En cours d'estimation",
      impact: "30 M impressions / mois · 25 k abonnés newsletter",
      icon: "📈",
      category: "growth"
    },
    {
      title: "Fonds de roulement / talents",
      cost: "En cours d'estimation",
      impact: "4 créatifs senior + 2 développeurs IA pour soutenir la cadence",
      icon: "👥",
      category: "team"
    }
  ];

  const benefits = [
    {
      title: "Accès board",
      desc: "échanges mensuels sur les analytics bruts et les sprints produit"
    },
    {
      title: "Fast-lane studios",
      desc: "vos marques ou participations tournent en priorité dans nos plateaux"
    },
    {
      title: "Option \"Constellation\"",
      desc: "droit préférentiel pour créer votre agent IA en marque blanche avec notre API"
    },
    {
      title: "Visibilité native",
      desc: "présence dans nos formats premium, lives et événements : ROI image immédiat"
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

      {/* Radial lines emanating from center */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-5">
          <defs>
            <linearGradient id="radial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
              <stop offset="50%" stopColor="rgba(56, 189, 248, 0.5)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + 50 * Math.cos((i * 30 * Math.PI) / 180)}%`}
              y2={`${50 + 50 * Math.sin((i * 30 * Math.PI) / 180)}%`}
              stroke="url(#radial-gradient)"
              strokeWidth="0.5"
              style={{
                animation: `pulse ${4 + i * 0.2}s infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90">
            Rejoignez l'orbite High Value
          </h2>
        </div>

        {/* Intro */}
        <div className={`text-center mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl mx-auto">
            Nous comptons déjà <span className="text-white/80">10 millions d'impressions sociales par mois</span> avant même l'ouverture du site.
            <span className="block mt-4">
              La centrale de contenus tourne, notre IA sort de bêta et le plan d'expansion est prêt. 
              Il ne manque plus que des partenaires audacieux pour accélérer.
            </span>
          </p>
        </div>

        {/* Investment priorities */}
        <div className={`mb-20 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            CE QUE VOTRE SOUTIEN DÉBLOQUERA
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
                onTouchStart={() => setHoveredPriority(index)}
                onTouchEnd={() => setHoveredPriority(null)}
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

                  {/* Cost estimation */}
                  <div className="md:col-span-3">
                    <p className="text-sm text-white/40 font-light italic">{priority.cost}</p>
                  </div>

                  {/* Impact */}
                  <div className="md:col-span-4">
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
        </div>

        {/* Benefits */}
        <div className={`mb-20 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            POURQUOI EMBARQUER AVEC NOUS ?
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
                  <p className="text-sm text-white/50 font-light leading-relaxed">— {benefit.desc}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className={`text-center mb-20 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative max-w-3xl mx-auto">
            {/* Quote marks */}
            <div className="absolute -top-6 -left-8 text-6xl text-white/5 font-serif">"</div>
            <div className="absolute -bottom-6 -right-8 text-6xl text-white/5 font-serif rotate-180">"</div>
            
            <p className="text-2xl md:text-3xl text-white/70 font-light leading-relaxed italic">
              Miser sur High Value, c'est parier sur la densité : moins de bruit, plus d'impact, et une audience qui reste.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className={`text-center transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            PASSONS À L'ACTION
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
                
                <span className="relative z-10 text-white/90 font-light tracking-wide flex items-center gap-3">
                  <span className="text-2xl font-light">1</span>
                  <span>Réserver un appel découverte (30 min)</span>
                </span>
              </div>
            </button>

            {/* Secondary CTA */}
            <button className="group relative overflow-hidden">
              <div className="relative px-12 py-5">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/20" />
                <span className="relative z-10 text-white/70 font-light tracking-wide flex items-center gap-3 group-hover:text-white/90 transition-colors duration-500">
                  <span className="text-2xl font-light">2</span>
                  <span>Recevoir notre deck détaillé</span>
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer signature */}
        <div className={`text-center mt-32 pt-16 border-t border-white/5 transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-xs text-white/20 font-light tracking-[0.3em]">
            HIGH VALUE · MÉDIA & IA POUR ESPRITS EXIGEANTS
          </div>
        </div>
      </div>

      {/* Orbiting particles - more prominent for CTA */}
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
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.05;
          }
          50% { 
            opacity: 0.1;
          }
        }
        
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
};