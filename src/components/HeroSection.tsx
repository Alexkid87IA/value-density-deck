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

      {/* Premium gradient mesh background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(125, 211, 252, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.04) 0%, transparent 60%)
            `,
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
            transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: 'transform 1.4s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 
            className={`font-light tracking-tight transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white/95 leading-[0.85]">
              Explore ta
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50">
                galaxie haute valeur
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div 
            className={`mt-12 mb-8 transition-all duration-1200 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              <span className="text-white/90 font-normal">High Value</span> rassemble les meilleurs contenus utiles — et un agent IA personnel — pour propulser ta progression{' '}
              <span className="text-white/50 italic font-light">sans aucun bullshit</span>.
            </p>
          </div>

          {/* Tagline */}
          <div 
            className={`mb-12 transition-all duration-1200 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-3xl">
              Articles, vidéos, podcasts, live : chaque orbite t'apporte un savoir concret. 
              Avec <span className="text-white/60 border-b border-white/20 pb-0.5">HV Agent</span>, tu reçois un plan d'action, 
              une playlist ciblée et un coach WhatsApp pour transformer tes objectifs en résultats tangibles.
            </p>
          </div>

          {/* CTAs */}
          <div 
            className={`flex flex-wrap items-center gap-6 transition-all duration-1200 delay-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <button
              onClick={() => onNavigate('vision')}
              className="group relative overflow-hidden"
            >
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/20" />
                <span className="relative z-10 text-white/90 font-light tracking-wide group-hover:text-white transition-colors duration-500">
                  Découvrir les constellations
                </span>
              </div>
            </button>

            <button 
              className="group relative overflow-hidden"
            >
              <div className="relative px-10 py-4">
                <div className="absolute inset-0 bg-electric-blue/10 backdrop-blur-sm border border-electric-blue/20 rounded transition-all duration-700 group-hover:bg-electric-blue/15 group-hover:border-electric-blue/30" />
                <span className="relative z-10 text-electric-blue/90 font-light tracking-wide group-hover:text-electric-blue transition-colors duration-500">
                  Activer HV Agent
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Bottom bar - Simplified without navigation */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-center">
              {/* Center - Branding only */}
              <div 
                className={`text-center transition-all duration-1200 delay-1200 ease-out ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-xs text-white/20 font-light tracking-[0.3em]">HIGH VALUE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating orbs - ultra subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + i * 0.5}px`,
              height: `${2 + i * 0.5}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.3 - i * 0.05}) 0%, transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${15 + i * 15}%`,
              animation: `float-subtle ${25 + i * 5}s infinite ease-in-out`,
              animationDelay: `${i * 2}s`
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
            transform: translate(20px, -30px) scale(1.1);
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};