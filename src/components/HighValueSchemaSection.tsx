import { useEffect, useRef, useState } from "react";

export default function HighValueSchemaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuadrant, setActiveQuadrant] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Intersection Observer pour l'apparition
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Les 4 piliers avec objectifs réalistes et cohérents
  const quadrants = [
    {
      id: 'editorial',
      title: 'Cœur éditorial',
      position: 'top-left',
      color: 'from-blue-500 to-cyan-500',
      icon: '✍️',
      points: [
        { 
          main: "Ligne éditoriale ambitieuse", 
          detail: "Mindset, Culture, Business & Innovation",
          metrics: "Objectif : 4 verticales fortes"
        },
        { 
          main: "Tonalité à développer", 
          detail: "incarnée, exigeante, sensorielle",
          metrics: "Cible : NPS > 70"
        },
        { 
          main: "Formats diversifiés", 
          detail: "Articles, audio, vidéo, tribunes",
          metrics: "Vision : 11 formats actifs"
        },
        { 
          main: "Mission claire", 
          detail: "inspirer, transmettre, transformer",
          metrics: "Ambition : Impact maximal"
        }
      ],
      stats: {
        objectif: "300 contenus/mois",
        qualité: "Viser 90%+ de satisfaction",
        portée: "Cible : 2.5M impressions"
      }
    },
    {
      id: 'diffusion',
      title: 'Diffusion & rayonnement',
      position: 'top-right',
      color: 'from-purple-500 to-pink-500',
      icon: '🚀',
      points: [
        { 
          main: "Stratégie multicanale", 
          detail: "site, newsletter, réseaux sociaux",
          metrics: "Plan : 12 canaux actifs"
        },
        { 
          main: "Audiences visées", 
          detail: "25-45 ans, leaders d'opinion",
          metrics: "Objectif : 25K lecteurs"
        },
        { 
          main: "Approche mobile first", 
          detail: "expérience optimisée, rapide",
          metrics: "Cible : 60% trafic mobile"
        },
        { 
          main: "Amplification maximale", 
          detail: "viralité et partage naturel",
          metrics: "Ambition : +15% /mois"
        }
      ],
      stats: {
        expansion: "Viser 12 plateformes",
        international: "Objectif 50+ pays",
        viralité: "20+ contenus viraux/mois"
      }
    },
    {
      id: 'communaute',
      title: 'Communauté & influence',
      position: 'bottom-left',
      color: 'from-green-500 to-emerald-500',
      icon: '🌟',
      points: [
        { 
          main: "Audience engagée", 
          detail: "lecteurs fidèles et ambassadeurs",
          metrics: "Objectif : 85% rétention"
        },
        { 
          main: "Réseau d'excellence", 
          detail: "experts, auteurs, créatifs",
          metrics: "Cible : 100+ contributeurs"
        },
        { 
          main: "Espaces communautaires", 
          detail: "échanges, partage, co-création",
          metrics: "Vision : 5K+ membres actifs"
        }
      ],
      stats: {
        communauté: "Objectif 25K membres",
        événements: "12 masterclass/an",
        engagement: "Viser NPS > 70"
      }
    },
    {
      id: 'economique',
      title: 'Modèle économique',
      position: 'bottom-right',
      color: 'from-orange-500 to-red-500',
      icon: '💎',
      points: [
        { 
          main: "Revenus diversifiés", 
          detail: "publicité, partenariats, premium",
          metrics: "Plan : 5 sources de revenus"
        },
        { 
          main: "Croissance durable", 
          detail: "alignée avec nos valeurs",
          metrics: "Objectifs progressifs"
        },
        { 
          main: "Vision long terme", 
          detail: "média de référence premium",
          metrics: "Ambition 2027 : 4M€ ARR"
        }
      ],
      stats: {
        revenus: "Cible MRR 35K€",
        croissance: "Viser +150% /an",
        rentabilité: "Break-even année 3"
      }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="high-value-schema" 
      className="relative min-h-screen py-32 bg-gradient-to-b from-[#050505] via-[#0a0a0f] to-[#050505] overflow-hidden"
    >
      {/* Fond subtil sans animations agressives */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Grille de fond très subtile */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Titre de la section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            <span className="text-white/40">Notre vision</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              High Value
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            Un écosystème éditorial ambitieux où chaque pilier se renforce mutuellement. 
            Notre feuille de route pour créer un média d'exception à forte valeur ajoutée.
          </p>
        </div>

        {/* Schéma interactif */}
        <div className={`relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="relative mx-auto" style={{ maxWidth: '900px', height: '900px' }}>
            
            {/* Cercle central HIGH VALUE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Anneaux statiques */}
                <div className="absolute inset-0 -inset-20">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-4 rounded-full border border-white/5" />
                  <div className="absolute -inset-8 rounded-full border border-white/5" />
                </div>

                {/* Hub central */}
                <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#0a0a0f] to-[#050505] border border-white/20 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">HIGH</h3>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">VALUE</h3>
                    <div className="mt-2 text-xs text-white/40">Notre ambition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lignes de connexion */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
              </defs>
              {/* Connexions principales */}
              <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.5" />
              <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.5" />
              <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.5" />
              <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.5" />
            </svg>

            {/* Les 4 quadrants */}
            {quadrants.map((quadrant, index) => {
              const positions = {
                'top-left': { top: '0%', left: '0%' },
                'top-right': { top: '0%', right: '0%' },
                'bottom-left': { bottom: '0%', left: '0%' },
                'bottom-right': { bottom: '0%', right: '0%' }
              };
              
              return (
                <div
                  key={quadrant.id}
                  className={`absolute w-80 transition-all duration-500 ${
                    activeQuadrant === index ? 'z-30 scale-105' : 'z-10'
                  }`}
                  style={positions[quadrant.position]}
                  onMouseEnter={() => setActiveQuadrant(index)}
                  onMouseLeave={() => setActiveQuadrant(null)}
                >
                  <div className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                    activeQuadrant === index 
                      ? 'bg-white/[0.08] border-white/30 shadow-xl' 
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                  }`}>
                    {/* Effet de dégradé */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${quadrant.color} opacity-0 transition-opacity duration-300 ${
                      activeQuadrant === index ? 'opacity-10' : ''
                    }`} />

                    {/* En-tête */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{quadrant.icon}</span>
                        <div className={`px-2 py-1 rounded-full text-xs font-light bg-gradient-to-r ${quadrant.color} bg-opacity-20 text-white/60`}>
                          Pilier {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-light text-white/90 leading-tight">
                        {quadrant.title}
                      </h3>
                    </div>

                    {/* Points de contenu */}
                    <div className="relative z-10 space-y-3">
                      {quadrant.points.map((point, i) => (
                        <div 
                          key={i} 
                          className="group/point"
                          onMouseEnter={() => setHoveredPoint(`${index}-${i}`)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <div className="flex items-start gap-2">
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${quadrant.color} mt-2 opacity-60`} />
                            <div className="flex-1">
                              <div className="text-sm text-white/70 font-light">
                                <span className="text-white/80">{point.main}:</span> {point.detail}
                              </div>
                              {hoveredPoint === `${index}-${i}` && point.metrics && (
                                <div className="mt-1 text-xs text-white/40" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                                  {point.metrics}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats (objectifs) */}
                    {activeQuadrant === index && (
                      <div className="relative z-10 mt-4 pt-4 border-t border-white/10" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                        <div className="space-y-1">
                          {Object.entries(quadrant.stats).map(([key, value]) => (
                            <div key={key} className="text-xs flex justify-between">
                              <span className="text-white/40 capitalize">{key}:</span>
                              <span className="text-white/60 font-light">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Indicateur de connexion */}
                    <div className={`absolute ${
                      quadrant.position.includes('top') ? 'bottom-0' : 'top-0'
                    } ${
                      quadrant.position.includes('left') ? 'right-0' : 'left-0'
                    } w-3 h-3 transform translate-x-1/2 translate-y-1/2`}>
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${quadrant.color} opacity-60`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Objectifs clés en bas */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-light text-white/80 mb-2">300</div>
            <div className="text-sm text-white/40">contenus/mois visés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white/80 mb-2">25K+</div>
            <div className="text-sm text-white/40">communauté cible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white/80 mb-2">35K€</div>
            <div className="text-sm text-white/40">MRR objectif année 1</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}