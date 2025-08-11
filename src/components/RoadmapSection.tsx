import { useEffect, useRef, useState } from "react";

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePhase, setActivePhase] = useState<number | null>(null);

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

  // Roadmap phases data RÉALISTES
  const phases = [
    {
      period: "T1 2025",
      subtitle: "Phase 1",
      title: "Lancement",
      objectives: [
        "Setup bureau + équipe core (5→7 pers)",
        "Lancer Skool à 60€ (objectif : 50 membres)",
        "Newsletter payante 7.90€ (objectif : 200 abonnés)",
        "2 brand contents/mois à 5k€"
      ],
      metrics: {
        mrr: "8-10k€",
        costs: "25k€/mois",
        status: "Burn : -15k€/mois"
      },
      milestones: [
        "Infrastructure en place",
        "Premiers revenus récurrents",
        "Process de production rodé"
      ],
      phase: 1
    },
    {
      period: "T2 2025",
      subtitle: "Phase 2",
      title: "Accélération",
      objectives: [
        "Monétiser Facebook/TikTok (3-4M vues/mois)",
        "Skool : 100 membres (+100%)",
        "Newsletter : 400 abonnés (+100%)",
        "3-4 brand contents/mois"
      ],
      metrics: {
        mrr: "20-25k€",
        costs: "30k€/mois",
        status: "Burn : -5k€/mois"
      },
      milestones: [
        "Premiers sponsors newsletter",
        "Communauté Skool active",
        "Pipeline B2B régulier"
      ],
      phase: 2
    },
    {
      period: "T3-T4 2025",
      subtitle: "Phase 3",
      title: "Break-even",
      objectives: [
        "150 membres Skool × 60€ = 9k€",
        "500 newsletter × 7.90€ = 4k€",
        "RS monétisés = 6k€/mois",
        "Brand content = 24k€/mois"
      ],
      metrics: {
        mrr: "43-46k€",
        costs: "35k€/mois",
        status: "Rentable : +10k€/mois"
      },
      milestones: [
        "Break-even atteint",
        "Modèle validé",
        "Prêt pour série A"
      ],
      phase: 3
    },
    {
      period: "2026",
      subtitle: "Phase 4",
      title: "Scaling",
      objectives: [
        "300+ membres Skool",
        "1500+ abonnés newsletter",
        "YouTube 500k vues/mois",
        "International (EN)"
      ],
      metrics: {
        mrr: "80-100k€",
        costs: "60k€/mois",
        status: "Profitable : +40k€/mois"
      },
      milestones: [
        "Équipe 15 personnes",
        "Série A : 2-3M€",
        "Expansion Europe"
      ],
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

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-16 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl">
            12 mois pour atteindre la rentabilité
          </h2>
        </div>

        {/* Intro */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Un plan d'exécution <span className="text-white/80">trimestre par trimestre</span> avec des objectifs clairs et atteignables.
            <span className="block mt-4">
              Pas de hockey stick irréaliste, juste une croissance progressive et maîtrisée.
            </span>
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
              >
                {/* Phase node - visible on desktop */}
                <div className="hidden lg:block relative mb-8">
                  <div className="w-32 h-32 mx-auto relative">
                    {/* Outer ring */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                      activePhase === index ? 'bg-white/[0.08]' : 'bg-white/[0.03]'
                    }`} />
                    {/* Inner circle */}
                    <div className="absolute inset-4 rounded-full bg-[#050505] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-light text-white/20 mb-1">T{phase.phase}</div>
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

                    {/* Metrics */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-white/40">MRR</div>
                          <div className="text-lg text-white/80">{phase.metrics.mrr}</div>
                        </div>
                        <div>
                          <div className="text-xs text-white/40">Coûts</div>
                          <div className="text-lg text-white/60">{phase.metrics.costs}</div>
                        </div>
                      </div>
                      <div className={`text-sm ${
                        phase.metrics.status.includes('Rentable') || phase.metrics.status.includes('Profitable')
                          ? 'text-electric-blue/70'
                          : 'text-white/50'
                      }`}>
                        {phase.metrics.status}
                      </div>
                    </div>

                    {/* Milestones on hover */}
                    {activePhase === index && (
                      <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                        <h5 className="text-xs text-white/40 uppercase tracking-wider mb-2">Milestones</h5>
                        <ul className="space-y-1">
                          {phase.milestones.map((milestone, i) => (
                            <li key={i} className="text-xs text-white/50">• {milestone}</li>
                          ))}
                        </ul>
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
            <h4 className="text-base font-normal text-white/80 mb-3">Burn maîtrisé</h4>
            <p className="text-sm text-white/40 font-light">
              -15k€/mois au début, break-even en 10-12 mois.
            </p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Croissance organique</h4>
            <p className="text-sm text-white/40 font-light">
              Pas de paid acquisition avant d'avoir validé le modèle.
            </p>
          </div>
          <div className="group">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:w-24 transition-all duration-700" />
            <h4 className="text-base font-normal text-white/80 mb-3">Milestones clairs</h4>
            <p className="text-sm text-white/40 font-light">
              Des objectifs trimestriels mesurables et atteignables.
            </p>
          </div>
        </div>

        {/* Financing box */}
        <div className={`relative p-8 rounded-lg bg-white/[0.02] mb-16 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">UTILISATION DES FONDS</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-electric-blue/50 mb-2">
                400k€ recherchés
              </div>
              <p className="text-sm text-white/40 font-light">Runway : 15-18 mois</p>
            </div>
            <div>
              <h4 className="text-sm text-white/60 mb-3">Allocation</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Équipe (7-10 pers)</span>
                  <span className="text-white/60">60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Bureau + Studio</span>
                  <span className="text-white/60">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Production contenu</span>
                  <span className="text-white/60">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Marketing & Tech</span>
                  <span className="text-white/60">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-white/40 font-light">
              Prochaine levée : <span className="text-white/60">Série A de 2-3M€ quand MRR &gt; 80k€</span>
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
            <span className="text-sm font-light tracking-wider">Voir nos métriques actuelles</span>
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}