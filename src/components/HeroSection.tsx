import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePos({ x: x - 0.5, y: y - 0.5 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Premium gradient mesh background - plus subtil */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(125, 211, 252, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.02) 0%, transparent 60%)
            `,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="max-w-5xl">
          {/* Phase indicator */}
          <div 
            className={`mb-8 transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
              <span className="text-xs text-white/50 uppercase tracking-wider">Phase test validée • 3 mois</span>
            </div>
          </div>

          {/* Main heading - DIRECT ET IMPACTANT */}
          <h1 
            className={`font-light tracking-tight transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/95 leading-[0.9]">
              120k followers en 3 mois.
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-blue-500/50">
                Prêts pour la suite.
              </span>
            </span>
          </h1>

          {/* Context - L'ÉCOSYSTÈME */}
          <div 
            className={`mt-12 mb-8 transition-all duration-1200 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-4xl">
              <span className="text-white/90">High Value</span> n'est pas un média de plus. 
              C'est un écosystème complet : production vidéo, interviews premium, brand content, 
              formations, conseil et communauté. 
              <span className="block mt-3 text-white/50">
                15 ans d'expérience média. 6 sources de revenus diversifiées. Pas de dépendance à un seul modèle.
              </span>
            </p>
          </div>

          {/* Timeline et proof points */}
          <div 
            className={`mb-12 transition-all duration-1200 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Phase actuelle */}
            <div className="mb-8 p-6 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Mai - Août 2025</div>
                  <div className="text-2xl font-light text-white/80">Phase test</div>
                  <div className="text-sm text-white/50 mt-1">Validation du concept</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Résultats</div>
                  <div className="text-2xl font-light text-white/80">120k followers</div>
                  <div className="text-sm text-white/50 mt-1">10M impressions/mois</div>
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Équipe actuelle</div>
                  <div className="text-2xl font-light text-white/80">5 personnes</div>
                  <div className="text-sm text-white/50 mt-1">Full remote</div>
                </div>
              </div>
            </div>

            {/* Projection */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <span className="text-xs text-white/40 uppercase tracking-wider">Septembre 2025 : Lancement</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Objectifs */}
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Nous levons <span className="text-white/90 font-normal">400k€</span> pour structurer l'écosystème :
              passer à 10 personnes, professionnaliser la production, lancer les 6 verticales de revenus.
              <span className="block mt-2 text-white/40">
                Objectif : 46k€ MRR d'ici septembre 2026. Break-even en 10-12 mois.
              </span>
            </p>
          </div>

          {/* L'écosystème détaillé */}
          <div 
            className={`grid md:grid-cols-5 gap-4 mb-12 transition-all duration-1200 delay-600 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {[
              { name: "Contenu", items: "Site, newsletter, RS" },
              { name: "Production", items: "Vidéos, interviews, podcasts" },
              { name: "Services", items: "Brand content, conseil" },
              { name: "Communauté", items: "Skool, événements" },
              { name: "Formation", items: "Masterclass, coaching" }
            ].map((vertical, index) => (
              <div key={index} className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                <h4 className="text-sm font-medium text-white/70 mb-1">{vertical.name}</h4>
                <p className="text-xs text-white/40">{vertical.items}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div 
            className={`flex flex-wrap items-center gap-6 transition-all duration-1200 delay-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <button
              onClick={() => onNavigate('business')}
              className="group relative overflow-hidden"
            >
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/20" />
                <span className="relative z-10 text-white/90 font-light tracking-wide group-hover:text-white transition-colors duration-500">
                  Découvrir le plan complet
                </span>
              </div>
            </button>

            <button 
              className="group relative overflow-hidden"
              onClick={() => onNavigate('roadmap')}
            >
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-lg transition-all duration-700 group-hover:bg-blue-500/15 group-hover:border-blue-500/30" />
                <span className="relative z-10 text-blue-400/90 font-light tracking-wide group-hover:text-blue-400 transition-colors duration-500">
                  Voir la roadmap 12 mois
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section - Minimaliste */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Left */}
              <div className="text-sm text-white/40">
                <span className="text-white/60">Phase actuelle :</span> Post-test, pré-scaling
              </div>
              
              {/* Center */}
              <div className="text-xs text-white/20 font-light tracking-[0.3em] hidden md:block">
                HIGH VALUE · ÉCOSYSTÈME MÉDIA
              </div>
              
              {/* Right */}
              <div className="text-sm text-white/40">
                <span className="text-white/60">Runway visé :</span> 18 mois
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles - très subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '2px',
              height: '2px',
              background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)`,
              left: `${30 + i * 20}%`,
              top: `${20 + i * 20}%`,
              animation: `float-subtle ${30 + i * 5}s infinite ease-in-out`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-subtle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          33% { 
            transform: translate(15px, -20px) scale(1.1);
          }
          66% { 
            transform: translate(-15px, 15px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}