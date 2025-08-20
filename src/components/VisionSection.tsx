import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  // Les 3 blocs principaux - SANS SKOOL
  const blocks = [
    {
      title: "Le problème",
      points: [
        "Les médias classiques n'arrivent plus à être rentables.",
        "Les créateurs brûlent leur audience avec trop de sponsors.",
        "Les newsletters restent sur des modèles économiques fragiles."
      ]
    },
    {
      title: "Notre solution",
      points: [
        <><span className="text-white/90 font-normal">Un modèle hybride</span> : 3 sources de revenus équilibrées.</>,
        <><span className="text-white/90 font-normal">Du contenu qui convertit</span> : brand content premium à 7-8k€.</>,
        <><span className="text-white/90 font-normal">Une newsletter premium</span> : 1000 abonnés à 7.90€/mois.</>
      ]
    },
    {
      title: "L'objectif 2025",
      points: [
        <><span className="text-white/90 font-normal">46k€ MRR</span> en 12 mois (réaliste et atteignable).</>,
        <><span className="text-white/90 font-normal">1000 abonnés premium</span> sur 400k followers (0.25% de conversion).</>,
        <><span className="text-white/90 font-normal">Break-even mois 10-12</span> avec 300k€ d'investissement.</>
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
            combine contenus premium, audience engagée et monétisation diversifiée.
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
              <p className="text-sm text-white/50 font-light">Brand content, Newsletter, RS : pas de dépendance unique.</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-2xl mb-4">🚀</div>
              <h4 className="text-base text-white/80 font-normal mb-2">TRACK RECORD</h4>
              <p className="text-sm text-white/50 font-light">Roger : 15 ans d'expérience média, déjà vendu 2 projets.</p>
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
            FEUILLE DE ROUTE
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
            
            <div className="space-y-16">
              {[
                {
                  phase: "Q3 2025",
                  title: "Setup & Launch",
                  points: ["Newsletter premium lancée", "3 premiers brand contents", "Équipe de 7 personnes"]
                },
                {
                  phase: "Q4 2025",
                  title: "Croissance",
                  points: ["500 abonnés newsletter", "5 brand contents/mois", "Monétisation RS active"]
                },
                {
                  phase: "Q1 2026",
                  title: "Break-even",
                  points: ["1000 abonnés", "46k€ MRR atteint", "Rentabilité confirmée"]
                }
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className="flex-1 text-right">
                      {index % 2 === 0 && (
                        <>
                          <h4 className="text-lg text-white/80 mb-2">{milestone.title}</h4>
                          <p className="text-sm text-white/40 mb-3">{milestone.phase}</p>
                          <ul className="text-xs text-white/50 space-y-1">
                            {milestone.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    
                    {/* Center dot */}
                    <div className="relative z-10 w-4 h-4 bg-gradient-to-br from-electric-blue to-electric-cyan rounded-full shadow-lg shadow-electric-blue/50" />
                    
                    <div className="flex-1">
                      {index % 2 !== 0 && (
                        <>
                          <h4 className="text-lg text-white/80 mb-2">{milestone.title}</h4>
                          <p className="text-sm text-white/40 mb-3">{milestone.phase}</p>
                          <ul className="text-xs text-white/50 space-y-1">
                            {milestone.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className={`text-center transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-white/40 max-w-2xl mx-auto">
            Nous avons l'audience, l'expertise et la vision. 
            Il nous manque juste les moyens pour exécuter à grande échelle.
          </p>
        </div>
      </div>
    </section>
  );
}