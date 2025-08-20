import { useEffect, useRef, useState } from "react";

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [animatedValues, setAnimatedValues] = useState({
    impressions: 0,
    followers: 0,
    subscribers: 0,
    revenue: 0,
    brands: 0
  });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger number animations
            animateNumbers();
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

  // Animate numbers when visible - VRAIS CHIFFRES AJUSTÉS
  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = {
      impressions: 30, // 30M impressions en 12 mois
      followers: 400, // 400k followers totaux
      subscribers: 1000, // 1000 abonnés newsletter premium
      revenue: 46, // 46k€ MRR
      brands: 36 // 36 collaborations/an (3/mois)
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setAnimatedValues({
        impressions: Math.round(targets.impressions * easeOutQuad),
        followers: Math.round(targets.followers * easeOutQuad),
        subscribers: Math.round(targets.subscribers * easeOutQuad),
        revenue: Math.round(targets.revenue * easeOutQuad),
        brands: Math.round(targets.brands * easeOutQuad)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

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

  // KPIs data - AJUSTÉS SANS SKOOL
  const kpis = [
    {
      kpi: "Impressions totales",
      current: "10M",
      currentNote: "(par mois)",
      target: `${animatedValues.impressions}M`,
      targetNote: "(en 12 mois)",
      rationale: "10M actuels × 3 = objectif réaliste",
      progress: 33,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "Followers totaux",
      current: "120k",
      currentNote: "(Instagram)",
      target: `${animatedValues.followers}k`,
      targetNote: "(multi-plateformes)",
      rationale: "+280k en 12 mois via growth organique",
      progress: 30,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "Abonnés premium",
      current: "0",
      currentNote: "(lancement)",
      target: `${animatedValues.subscribers}`,
      targetNote: "(Newsletter)",
      rationale: "1000 × 7.90€ = 7.9k€ MRR",
      progress: 0,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "MRR objectif",
      current: "0€",
      target: `${animatedValues.revenue}k€`,
      rationale: "3 sources de revenus diversifiées",
      progress: 0,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "Brand content",
      current: "0",
      target: `${animatedValues.brands}`,
      targetNote: "ops/an",
      rationale: "3-4 par mois × 7k€ ticket moyen",
      progress: 0,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "Break-even",
      current: "—",
      target: "Mois 10-12",
      rationale: "Revenus 46k€ vs coûts 35k€",
      progress: 0,
      color: "from-electric-cyan to-electric-blue",
      isQualitative: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="metrics" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <filter id="noise-metrics">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-metrics)" />
        </svg>
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(125, 211, 252, 0.03) 0%, transparent 50%)
            `,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-20 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl">
            Des métriques qui prouvent le modèle
          </h2>
        </div>

        {/* KPIs Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {kpis.map((kpi, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* KPI title */}
              <h3 className="text-sm text-white/40 mb-4 tracking-wide">{kpi.kpi}</h3>
              
              {/* Current vs Target */}
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-2xl font-light text-white/60">{kpi.current}</span>
                  {kpi.currentNote && (
                    <span className="text-xs text-white/30 ml-1">{kpi.currentNote}</span>
                  )}
                </div>
                <div className="text-right">
                  <span className={`text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r ${kpi.color}`}>
                    {kpi.target}
                  </span>
                  {kpi.targetNote && (
                    <span className="text-xs text-white/30 ml-1">{kpi.targetNote}</span>
                  )}
                </div>
              </div>
              
              {/* Progress bar */}
              {!kpi.isQualitative && (
                <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full bg-gradient-to-r ${kpi.color} transition-all duration-1000`}
                    style={{ 
                      width: `${kpi.progress}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              )}
              
              {/* Rationale */}
              <p className="text-xs text-white/40 font-light">{kpi.rationale}</p>
            </div>
          ))}
        </div>

        {/* Comparative analysis */}
        <div className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Why we'll succeed */}
          <div className="relative">
            <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">POURQUOI NOUS RÉUSSIRONS</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">120k followers acquis en 3 mois</span> : preuve de la capacité d'exécution et de la pertinence du contenu.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">10M impressions/mois</span> : audience massive déjà engagée et qualifiée.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">3 sources de revenus</span> : modèle diversifié et résilient dès le départ.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">Équipe expérimentée</span> : Roger a déjà construit et vendu des médias.
                </p>
              </li>
            </ul>
          </div>

          {/* Projections box */}
          <div className="relative">
            <div className="relative p-8 rounded-lg bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">MIX REVENUS À 12 MOIS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Brand content</span>
                  <span className="text-lg text-white/90 font-light">28k€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Newsletter premium</span>
                  <span className="text-lg text-white/90 font-light">10k€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">RS monétisés</span>
                  <span className="text-lg text-white/90 font-light">8k€/mois</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-white/60">MRR total</span>
                  <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan font-light">46k€</span>
                </div>
              </div>
              <p className="text-xs text-white/40 mt-6">Rentabilité : mois 10-12</p>
            </div>
          </div>
        </div>

        {/* Evolution visualization */}
        <div className={`relative h-32 mb-20 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-4">
            <p className="text-sm text-white/40 font-light">Évolution du MRR sur 24 mois</p>
          </div>
          <div className="relative h-20 bg-white/[0.02] rounded-lg overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {[0, 25, 50, 75, 100].map((value, i) => (
                <div key={i} className="text-xs text-white/20">{value}k€</div>
              ))}
            </div>
            {/* Progress bars for different periods */}
            <div className="absolute bottom-0 left-0 h-full flex items-end">
              <div className="w-1/4 h-[25%] bg-gradient-to-t from-electric-blue/30 to-electric-blue/10 border-r border-white/10">
                <div className="text-xs text-white/40 text-center pt-1">M6: 25k€</div>
              </div>
              <div className="w-1/4 h-[46%] bg-gradient-to-t from-electric-blue/40 to-electric-blue/20 border-r border-white/10">
                <div className="text-xs text-white/40 text-center pt-1">M12: 46k€</div>
              </div>
              <div className="w-1/4 h-[70%] bg-gradient-to-t from-electric-cyan/40 to-electric-cyan/20 border-r border-white/10">
                <div className="text-xs text-white/40 text-center pt-1">M18: 70k€</div>
              </div>
              <div className="w-1/4 h-[100%] bg-gradient-to-t from-electric-cyan/50 to-electric-cyan/30">
                <div className="text-xs text-white/40 text-center pt-1">M24: 100k€</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1200 delay-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-sm text-white/40">
            Objectifs conservateurs • Croissance organique • Modèle prouvé
          </p>
        </div>
      </div>
    </section>
  );
}