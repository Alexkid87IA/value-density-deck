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

  // Le modèle en cascade adapté - SANS SKOOL
  const cascadeModel = [
    {
      level: 1,
      name: "Reach Total",
      audience: "10.6M comptes touchés",
      volume: "26M vues en 90 jours",
      features: [
        "92% proviennent de non-followers",
        "Découverte via Reels (40%) et Posts (60%)", 
        "Peak : posts à 79k likes",
        "+52% de reach en 30 jours"
      ],
      color: "from-gradient-start to-gradient-end",
      borderGlow: "from-white/40 to-white/20",
      conversion: "→ 3-5% deviennent followers",
      levelNumber: "01"
    },
    {
      level: 2,
      name: "Followers Actifs",
      audience: "120k followers",
      volume: "216k interactions/mois",
      features: [
        "25-44 ans (62%)",
        "France (63%), Belgique, Afrique",
        "96k saves = forte valeur perçue",
        "10% d'engagement moyen"
      ],
      color: "from-electric-blue/40 to-electric-cyan/20",
      borderGlow: "from-electric-blue to-electric-cyan",
      conversion: "→ 8-10% s'inscrivent newsletter",
      levelNumber: "02"
    },
    {
      level: 3,
      name: "Newsletter Premium",
      audience: "10k abonnés cible",
      volume: "The High Value Daily",
      features: [
        "Entrepreneurs & dirigeants PME",
        "Content exclusif quotidien",
        "45% open rate moyen",
        "Version premium 29€/mois"
      ],
      color: "from-electric-purple/40 to-purple-500/20",
      borderGlow: "from-electric-purple to-purple-500",
      conversion: "→ 5-10% deviennent clients",
      levelNumber: "03"
    },
    {
      level: 4,
      name: "Brand Deals & Partenaires",
      audience: "50-100 clients B2B",
      volume: "28k€ MRR brand content",
      features: [
        "Entreprises tech & SaaS",
        "Campagnes 3-15k€",
        "Contrats annuels 150k€",
        "ROI mesuré et garanti"
      ],
      color: "from-gold-400/40 to-gold-600/20",
      borderGlow: "from-gold-400 to-gold-600",
      conversion: "LTV : 5-150k€",
      levelNumber: "04"
    }
  ];

  // Personas basés sur les analytics
  const personas = [
    {
      title: "L'Entrepreneur Aspirant",
      age: "28-35 ans",
      description: "Salarié qui rêve de liberté",
      pain: "Peur de se lancer, manque de méthode",
      content: "Carrousels motivationnels, success stories"
    },
    {
      title: "Le Dirigeant PME",
      age: "35-45 ans", 
      description: "1-20 employés, veut scaler",
      pain: "Croissance stagnante, manque de visibilité",
      content: "LinkedIn posts, études de cas B2B"
    },
    {
      title: "Le Manager en Transition",
      age: "30-40 ans",
      description: "Cadre qui s'ennuie",
      pain: "Plafond de verre, quête de sens",
      content: "Récits signatures, podcasts inspirants"
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
            120k followers,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple">
              4 niveaux de monétisation
            </span>
          </h2>
        </div>

        {/* Intro with modern typography */}
        <div className={`mb-24 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-4xl">
            De la découverte virale aux partenariats premium : 
            <span className="text-white/80 font-normal"> chaque niveau a sa stratégie de conversion</span>.
          </p>
          <p className="text-lg text-white/40 mt-4 max-w-3xl">
            26M de vues en 90 jours. 92% viennent de non-followers. L'opportunité est massive.
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
                        <p className="text-lg text-white/50 mt-1">{level.audience}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${level.borderGlow} bg-opacity-20`}>
                      <span className="text-sm font-medium text-white/80">{level.conversion}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-6">
                    <div className="text-sm text-white/40 uppercase tracking-wider">Volume</div>
                    <div className="text-xl font-light text-white/90">{level.volume}</div>
                  </div>

                  {/* Features - always visible but subtle */}
                  <div className={`pt-6 border-t border-white/10 transition-all duration-500 ${
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

          {/* Total audience value */}
          <div className="mt-16 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                <div className="text-sm text-white/40 uppercase tracking-wider mb-3">Valeur Audience Totale</div>
                <div className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple">
                  10.6M reach/mois
                </div>
                <div className="text-base text-white/60 mt-3">46k€ MRR cible en 12 mois</div>
              </div>
            </div>
          </div>
        </div>

        {/* Personas section */}
        <div className={`mb-24 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">NOS 3 PERSONAS CLÉS</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <div 
                key={index}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] hover:border-white/10 transition-all duration-500"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-light text-white/90 mb-1">{persona.title}</h4>
                    <span className="text-sm text-white/40">{persona.age}</span>
                  </div>
                  
                  <p className="text-sm text-white/60">{persona.description}</p>
                  
                  <div className="pt-4 border-t border-white/[0.05]">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Pain point</div>
                    <p className="text-sm text-white/70">{persona.pain}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Content stratégie</div>
                    <p className="text-sm text-blue-400/60">{persona.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic distribution */}
        <div className={`transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">RÉPARTITION GÉOGRAPHIQUE</h3>
          
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05]">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg text-white/80 mb-6">Top 10 pays</h4>
                <div className="space-y-3">
                  {[
                    { country: "France", percentage: 63.2 },
                    { country: "Belgique", percentage: 8.1 },
                    { country: "Canada", percentage: 5.3 },
                    { country: "Côte d'Ivoire", percentage: 4.7 },
                    { country: "Maroc", percentage: 3.9 },
                    { country: "Algérie", percentage: 3.2 },
                    { country: "Suisse", percentage: 2.8 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-white/60 w-20">{item.country}</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full transition-all duration-1000"
                          style={{ width: `${item.percentage * 1.5}%` }}
                        />
                      </div>
                      <span className="text-sm text-white/80 w-12 text-right">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg text-white/80 mb-4">Insights clés</h4>
                <ul className="space-y-3 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>Forte concentration francophone (75%+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>Diaspora africaine engagée (10%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>Potentiel international sous-exploité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-cyan mt-1">•</span>
                    <span>127 pays touchés = scalabilité globale</span>
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
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer group">
            <span className="text-white/80 group-hover:text-white transition-colors">
              Voir notre stratégie de monétisation
            </span>
            <svg className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}