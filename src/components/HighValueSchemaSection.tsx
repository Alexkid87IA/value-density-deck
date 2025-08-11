import { useEffect, useRef, useState } from "react";

export default function HighValueSchemaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

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

  // Le modèle en cascade amélioré
  const cascadeModel = [
    {
      level: 1,
      name: "Audience Cumulée",
      price: "Gratuit",
      audience: "10-30M impressions",
      revenue: "0€",
      features: [
        "Contenus multi-plateformes",
        "Newsletter hebdo gratuite", 
        "Articles blog en accès libre",
        "Lives publics & stories"
      ],
      color: "from-gradient-start to-gradient-end",
      borderGlow: "from-white/40 to-white/20",
      conversion: "→ 3-5% vers payant",
      levelNumber: "01"
    },
    {
      level: 2,
      name: "Newsletter Premium",
      price: "7.90€/mois",
      audience: "500-700 membres",
      revenue: "4-5.5k€ MRR",
      features: [
        "Newsletter quotidienne exclusive",
        "Archives complètes du site",
        "Contenus sans publicité",
        "Communauté Discord VIP"
      ],
      color: "from-electric-blue/40 to-electric-cyan/20",
      borderGlow: "from-electric-blue to-electric-cyan",
      conversion: "Taux de churn : 5-8%/mois",
      levelNumber: "02"
    },
    {
      level: 3,
      name: "Communauté Skool",
      price: "60€/mois",
      audience: "150-200 membres",
      revenue: "9-12k€ MRR",
      features: [
        "Accès direct à Roger",
        "Lives hebdo exclusifs",
        "Ressources & templates premium",
        "Networking entre membres"
      ],
      color: "from-electric-purple/40 to-purple-500/20",
      borderGlow: "from-electric-purple to-purple-500",
      conversion: "Rétention : 85%+",
      levelNumber: "03"
    },
    {
      level: 4,
      name: "B2B & Marques",
      price: "5-7k€/opération",
      audience: "5-10 clients/mois",
      revenue: "25-50k€/mois",
      features: [
        "Brand content sur-mesure",
        "Interviews collaboratives",
        "Distribution multi-canal",
        "Analytics détaillés"
      ],
      color: "from-gold-400/40 to-gold-600/20",
      borderGlow: "from-gold-400 to-gold-600",
      conversion: "Récurrence : 40%",
      levelNumber: "04"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="high-value-schema" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-electric-purple/5 animate-gradient" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-20 w-[800px] h-[800px] bg-electric-purple/10 rounded-full blur-[150px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title with gradient */}
        <div className={`mb-20 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] text-white/90 max-w-5xl">
            Un modèle simple qui
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple">
              convertit vraiment
            </span>
          </h2>
        </div>

        {/* Intro with modern typography */}
        <div className={`mb-24 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-4xl">
            De l'audience gratuite au client B2B : 
            <span className="text-white/80 font-normal"> chaque niveau a sa logique économique</span>.
          </p>
          <p className="text-lg text-white/40 mt-4 max-w-3xl">
            Pas de promesses folles, juste un funnel qui fonctionne avec des taux de conversion réalistes.
          </p>
        </div>

        {/* Cascade visualization with modern cards */}
        <div className={`mb-24 transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative space-y-6">
            {/* Connection lines */}
            <svg className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2" style={{ zIndex: 0 }}>
              <line
                x1="4"
                y1="0"
                x2="4"
                y2="100%"
                className="stroke-white/10"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>

            {/* Cascade steps */}
            {cascadeModel.map((level, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  hoveredLevel === index ? 'scale-[1.02] z-20' : 'z-10'
                }`}
                style={{
                  width: `${100 - index * 15}%`,
                  marginLeft: `${index * 7.5}%`,
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredLevel(index)}
                onMouseLeave={() => setHoveredLevel(null)}
              >
                {/* Glow effect on hover */}
                {hoveredLevel === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${level.borderGlow} opacity-20 blur-xl rounded-2xl`} />
                )}

                <div className={`relative p-8 rounded-2xl bg-gradient-to-r ${level.color} backdrop-blur-xl border border-white/10 
                  ${hoveredLevel === index ? 'border-white/30 shadow-2xl' : ''}`}>
                  
                  {/* Header with level number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl font-extralight text-white/20">{level.levelNumber}</div>
                      <div>
                        <h3 className="text-2xl font-light text-white/90">{level.name}</h3>
                        <p className="text-lg text-white/50 mt-1">{level.price}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${level.borderGlow} bg-opacity-20`}>
                      <span className="text-sm font-medium text-white/80">{level.conversion}</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="text-sm text-white/40 uppercase tracking-wider">Volume</div>
                      <div className="text-2xl font-light text-white/90">{level.audience}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-white/40 uppercase tracking-wider">Revenus</div>
                      <div className="text-2xl font-light text-white/90">{level.revenue}</div>
                    </div>
                  </div>

                  {/* Features - always visible but subtle */}
                  <div className={`mt-6 pt-6 border-t border-white/10 transition-all duration-500 ${
                    hoveredLevel === index ? 'opacity-100' : 'opacity-60'
                  }`}>
                    <div className="grid md:grid-cols-2 gap-3">
                      {level.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-sm text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total revenue card */}
          <div className="mt-16 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                <div className="text-sm text-white/40 uppercase tracking-wider mb-3">Objectif MRR Total</div>
                <div className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple">
                  46k€/mois
                </div>
                <div className="text-base text-white/60 mt-3">Break-even : mois 10-12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key differentiators with modern cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-24 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {[
            {
              title: "Acquisition organique",
              description: "10-30M impressions = 0€ de CAC. On monétise une audience existante."
            },
            {
              title: "Prix psychologiques",
              description: "7.90€ et 60€ : deux prix ancrés qui convertissent naturellement."
            },
            {
              title: "B2B = cash rapide",
              description: "Brand content dès le mois 1 pour financer la croissance."
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <h4 className="text-xl font-light text-white/90 mb-3">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section with gradient border */}
        <div className={`relative transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple p-[1px] rounded-2xl">
            <div className="h-full w-full bg-[#050505] rounded-2xl" />
          </div>
          
          <div className="relative p-10 rounded-2xl">
            <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan mb-8">
              Avantage compétitif
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg text-white/80 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  Médias classiques
                </h4>
                <ul className="space-y-3 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="text-white/30 mt-1">•</span>
                    <span>90% pub programmatique (CPM en chute)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/30 mt-1">•</span>
                    <span>Paywall unique à 10-20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/30 mt-1">•</span>
                    <span>Pas de communauté monétisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/30 mt-1">•</span>
                    <span>B2B = native advertising basique</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg text-white/80 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan"></span>
                  High Value
                </h4>
                <ul className="space-y-3 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>6 sources de revenus équilibrées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>2 niveaux de prix (7.90€ + 60€)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>Communauté Skool haute valeur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>Brand content premium 5-7k€</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA with hover effect */}
        <div className={`text-center mt-24 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => {
              const businessElement = document.getElementById('business');
              if (businessElement) {
                businessElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center gap-4 px-10 py-5 overflow-hidden rounded-full transition-all duration-500"
          >
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-sm border border-white/10 group-hover:border-transparent rounded-full transition-all duration-500" />
            
            {/* Content */}
            <span className="relative text-lg text-white/70 group-hover:text-white transition-colors duration-500">
              Voir le détail des revenus
            </span>
            <svg className="relative w-5 h-5 text-white/50 group-hover:text-white transition-all duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { transform: translateX(0%) translateY(0%) rotate(0deg) scale(1); }
          25% { transform: translateX(-5%) translateY(10%) rotate(1deg) scale(1.1); }
          50% { transform: translateX(5%) translateY(5%) rotate(-1deg) scale(1); }
          75% { transform: translateX(0%) translateY(-5%) rotate(1deg) scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.08); }
        }
        
        .animate-gradient {
          animation: gradient 20s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}