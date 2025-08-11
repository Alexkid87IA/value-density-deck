import { useEffect, useRef, useState } from "react";

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [animatedValues, setAnimatedValues] = useState({
    impressions: 0,
    followers: 0,
    members: 0,
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

  // Animate numbers when visible - VRAIS CHIFFRES
  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = {
      impressions: 30, // 30M impressions en 12 mois
      followers: 400, // 400k followers totaux
      members: 700, // 700 membres payants (Skool + Newsletter)
      revenue: 46, // 46k€ MRR
      brands: 24 // 24 collaborations/an
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setAnimatedValues({
        impressions: Math.floor(targets.impressions * easeOutQuad),
        followers: Math.floor(targets.followers * easeOutQuad),
        members: Math.floor(targets.members * easeOutQuad),
        revenue: Math.floor(targets.revenue * easeOutQuad),
        brands: Math.floor(targets.brands * easeOutQuad)
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

  // Metrics data RÉALISTES
  const metrics = [
    {
      kpi: "Impressions / mois",
      current: "10M",
      target: `${animatedValues.impressions}M`,
      rationale: "TikTok, Facebook, Instagram + nouveaux canaux",
      progress: 33,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "Communauté totale",
      current: "120k",
      target: `${animatedValues.followers}k`,
      rationale: "Réactivation Facebook + croissance organique",
      progress: 30,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "Membres payants",
      current: "0",
      currentNote: "(lancement)",
      target: `${animatedValues.members}`,
      targetNote: "(Skool + Newsletter)",
      rationale: "150 Skool × 60€ + 550 Newsletter × 7.90€",
      progress: 0,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "MRR objectif",
      current: "0€",
      target: `${animatedValues.revenue}k€`,
      rationale: "6 sources de revenus diversifiées",
      progress: 0,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "Brand content",
      current: "0",
      target: `${animatedValues.brands}`,
      targetNote: "ops/an",
      rationale: "2-3 par mois × 5-7k€ ticket moyen",
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
              radial-gradient(circle at 20% 40%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, rgba(125, 211, 252, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.02) 0%, transparent 60%)
            `,
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: 'transform 2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>

      {/* Data grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
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
            Traction actuelle & objectifs 12 mois
          </h2>
        </div>

        {/* Metrics table - Enhanced design */}
        <div className={`mb-20 transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="overflow-x-auto -mx-8 px-8">
            <div className="min-w-[768px]">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="col-span-4">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">MÉTRIQUE</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Aujourd'hui</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Objectif 12 mois</h3>
                </div>
                <div className="col-span-4">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Stratégie</h3>
                </div>
              </div>

              {/* Metrics rows */}
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`group grid grid-cols-12 gap-4 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 -mx-4 px-4 rounded-lg ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* KPI name */}
                  <div className="col-span-4">
                    <h4 className="text-base text-white/80 font-light">{metric.kpi}</h4>
                    {/* Progress bar for quantitative metrics */}
                    {!metric.isQualitative && metric.progress > 0 && (
                      <div className="mt-3 h-px bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-2000 ease-out`}
                          style={{ 
                            width: isVisible ? `${metric.progress}%` : '0%',
                            transitionDelay: `${1000 + index * 100}ms`
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Current value */}
                  <div className="col-span-2">
                    <div className="text-lg text-white/60 font-light">{metric.current}</div>
                    {metric.currentNote && (
                      <div className="text-xs text-white/30 mt-1">{metric.currentNote}</div>
                    )}
                  </div>

                  {/* Target value */}
                  <div className="col-span-2">
                    <div className={`text-lg font-light ${
                      metric.isQualitative ? 'text-electric-blue/70' : 'text-transparent bg-clip-text bg-gradient-to-r ' + metric.color
                    }`}>
                      {metric.target}
                    </div>
                    {metric.targetNote && (
                      <div className="text-xs text-white/30 mt-1">{metric.targetNote}</div>
                    )}
                  </div>

                  {/* Rationale */}
                  <div className="col-span-4">
                    <p className="text-sm text-white/40 font-light leading-relaxed">{metric.rationale}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key insights */}
        <div className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div>
            <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">NOS FORCES</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">120k followers engagés</span> avec 4-6% d'engagement : une base solide pour monétiser.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">100% organique</span> : aucun euro dépensé en acquisition, pure création de valeur.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">6 sources de revenus</span> : modèle diversifié et résilient dès le départ.
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
                  <span className="text-lg text-white/90 font-light">24k€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Skool (communauté)</span>
                  <span className="text-lg text-white/90 font-light">9k€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">RS monétisés</span>
                  <span className="text-lg text-white/90 font-light">6k€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Newsletter & Site</span>
                  <span className="text-lg text-white/90 font-light">7k€/mois</span>
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
          <button
            onClick={() => {
              const ctaElement = document.getElementById('cta');
              if (ctaElement) {
                ctaElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-4 text-white/60 hover:text-white/90 transition-all duration-500"
          >
            <span className="text-sm font-light tracking-wider">Investir dans un modèle qui fonctionne</span>
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

      {/* Floating data points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `data-float ${15 + Math.random() * 10}s infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes data-float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}