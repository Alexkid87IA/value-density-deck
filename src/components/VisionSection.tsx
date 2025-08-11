import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Intersection Observer pour les animations au scroll
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

  const blocks = [
    {
      title: "Le problème",
      points: [
        "Les médias dépendent à 90% de la pub programmatique qui s'effondre.",
        "Les créateurs brûlent leur audience avec trop de sponsors.",
        "Les communautés payantes restent des niches sans impact."
      ]
    },
    {
      title: "Notre solution",
      points: [
        <><span className="text-white/90 font-normal">Un modèle hybride</span> : 6 sources de revenus équilibrées.</>,
        <><span className="text-white/90 font-normal">Du contenu qui convertit</span> : brand content premium à 5-7k€.</>,
        <><span className="text-white/90 font-normal">Une communauté qui paie</span> : Skool à 60€/mois avec Roger.</>
      ]
    },
    {
      title: "L'objectif 2025",
      points: [
        <><span className="text-white/90 font-normal">46k€ MRR</span> en 12 mois (réaliste et atteignable).</>,
        <><span className="text-white/90 font-normal">700 membres payants</span> sur 120k followers (0.6% de conversion).</>,
        <><span className="text-white/90 font-normal">Break-even mois 10-12</span> avec 400k€ d'investissement.</>
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="vision" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise-vision">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-vision)" />
        </svg>
      </div>

      {/* Gradient mesh animé */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(125, 211, 252, 0.04) 0%, transparent 50%)
            `,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Titre */}
        <div className={`mb-20 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl">
            Construire le premier média rentable nouvelle génération
          </h2>
        </div>

        {/* Ouverture */}
        <div className={`mb-24 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            High Value n'est pas une énième newsletter. C'est un <span className="text-white/80">écosystème média complet</span> qui 
            combine contenus premium, communauté engagée et monétisation diversifiée.
            <span className="block mt-4 text-white/70">
              Notre ambition : prouver qu'un média peut être rentable sans sacrifier la qualité ni l'éthique.
            </span>
          </p>
        </div>

        {/* Les 3 blocs */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {blocks.map((block, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Ligne d'accent */}
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
              
              <h3 className="text-lg font-light text-white/80 mb-6 tracking-wide">
                {block.title}
              </h3>
              
              <ul className="space-y-4">
                {block.points.map((point, i) => (
                  <li key={i} className="text-sm text-white/40 font-light leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Les différenciateurs */}
        <div className={`mb-24 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            CE QUI NOUS REND UNIQUES
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-2xl mb-4">🎯</div>
              <h4 className="text-base text-white/80 font-normal mb-2">AUDIENCE QUALIFIÉE</h4>
              <p className="text-sm text-white/50 font-light">120k followers avec 4-6% d'engagement. Une base solide pour monétiser.</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-2xl mb-4">💰</div>
              <h4 className="text-base text-white/80 font-normal mb-2">REVENUS DIVERSIFIÉS</h4>
              <p className="text-sm text-white/50 font-light">Brand content, Skool, RS, newsletter : pas de dépendance unique.</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-2xl mb-4">🚀</div>
              <h4 className="text-base text-white/80 font-normal mb-2">TRACK RECORD</h4>
              <p className="text-sm text-white/50 font-light">Roger : 5 ans d'expérience média, déjà vendu 2 projets.</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-2xl mb-4">📊</div>
              <h4 className="text-base text-white/80 font-normal mb-2">RENTABILITÉ RAPIDE</h4>
              <p className="text-sm text-white/50 font-light">Break-even en 10-12 mois grâce au brand content immédiat.</p>
            </div>
          </div>
        </div>

        {/* Benchmarks réalistes */}
        <div className={`relative my-32 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em] text-center">
              BENCHMARKS MARCHÉ
            </h3>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-white/40 mb-2">Brief.me</p>
                <p className="text-lg text-white/70">50k€ MRR</p>
                <p className="text-xs text-white/30">après 3 ans</p>
              </div>
              <div>
                <p className="text-sm text-white/40 mb-2">Titiou Lecoq</p>
                <p className="text-lg text-white/70">15k€ MRR</p>
                <p className="text-xs text-white/30">2k abonnés</p>
              </div>
              <div>
                <p className="text-sm text-white/40 mb-2">High Value</p>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan">46k€ MRR</p>
                <p className="text-xs text-white/30">objectif 12 mois</p>
              </div>
            </div>
          </div>
        </div>

        {/* Execution roadmap simple */}
        <div className={`mb-24 transition-all duration-1200 delay-1100 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            EXÉCUTION EN 3 PHASES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                <span className="text-white/40">1</span>
              </div>
              <h4 className="text-base text-white/70 mb-2">Mois 0-3</h4>
              <p className="text-sm text-white/40">Lancer Skool + Newsletter payante. Premiers brand contents.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                <span className="text-white/40">2</span>
              </div>
              <h4 className="text-base text-white/70 mb-2">Mois 4-9</h4>
              <p className="text-sm text-white/40">Monétiser RS. Scaler le brand content. 25k€ MRR.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                <span className="text-white/40">3</span>
              </div>
              <h4 className="text-base text-white/70 mb-2">Mois 10-12</h4>
              <p className="text-sm text-white/40">Break-even. 46k€ MRR. Prêt pour la série A.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => {
              const ecosystemElement = document.getElementById('ecosystem');
              if (ecosystemElement) {
                ecosystemElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-4 text-white/60 hover:text-white/90 transition-all duration-500"
          >
            <span className="text-sm font-light tracking-wider">Découvrir notre écosystème de production</span>
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

      {/* Visuel galaxie - constellation d'étoiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}