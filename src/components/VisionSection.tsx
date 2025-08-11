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
      title: "Le constat",
      points: [
        "Saturation d'infos, polarisation idéologique, fatigue cognitive.",
        <>Les publics exigeants réclament du <span className="text-white/90 font-normal">sens</span>, pas du sensationnel.</>,
        "Les investisseurs cherchent des médias résilients, capables de monétiser au-delà de la publicité classique."
      ]
    },
    {
      title: "Notre rupture",
      points: [
        <><span className="text-white/90 font-normal">Businesstainment</span> : le meilleur de l'éducation, du divertissement et de la tech.</>,
        <><span className="text-white/90 font-normal">HV Agent</span> : un assistant IA pré-prompté pour cartographier les objectifs de l'abonné et l'accompagner (routines, contenus, calendrier, coach WhatsApp).</>,
        "Production industrielle de contenus (workflow IA) + traitement éditorial premium (voix forte, charte rigoureuse)."
      ]
    },
    {
      title: "L'ambition",
      points: [
        <><span className="text-white/90 font-normal">Mantra :</span> « Élever l'humain, partout où il se trouve, sans bullshit, sans clivage. »</>,
        "D'ici 2027 : devenir la référence francophone du contenu haute densité ; 1 million d'abonnés, 5 flux de revenus équilibrés.",
        "Ouvrir les API de nos agents IA pour que marques et institutions créent leurs propres constellations au sein de High Value."
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
            Pourquoi la galaxie High Value va redéfinir l'utilité du contenu
          </h2>
        </div>

        {/* Ouverture */}
        <div className={`mb-24 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Nous vivons dans l'ère du scroll sans conséquence : des millions d'heures vues, zéro impact réel. 
            <span className="block mt-4 text-white/70">
              High Value inverse la tendance : chaque orbite de notre galaxie livre un savoir directement applicable, 
              porté par l'IA mais piloté par l'humain.
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

        {/* Citation */}
        <div className={`relative my-32 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            {/* Guillemets */}
            <div className="text-6xl text-white/10 font-serif mb-6">"</div>
            
            <blockquote className="text-2xl md:text-3xl text-white/70 font-light leading-relaxed mb-6 italic">
              Un média n'est puissant que s'il change ceux qui l'écoutent. Le reste n'est que bruit.
            </blockquote>
            
            <cite className="text-sm text-white/40 font-light tracking-wider">
              — Roger Ormières
            </cite>
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
            <span className="text-sm font-light tracking-wider">Suivre notre trajectoire</span>
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
};