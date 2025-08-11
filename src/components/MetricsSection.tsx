import { useEffect, useRef, useState } from "react";

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [animatedValues, setAnimatedValues] = useState({
    impressions: 0,
    followers: 0,
    articles: 0,
    newsletter: 0,
    revenue: 0
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

  // Animate numbers when visible
  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = {
      impressions: 30,
      followers: 300,
      articles: 1865,
      newsletter: 25000,
      revenue: 400
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setAnimatedValues({
        impressions: Math.floor(targets.impressions * easeOutQuad),
        followers: Math.floor(targets.followers * easeOutQuad),
        articles: Math.floor(targets.articles * easeOutQuad),
        newsletter: Math.floor(targets.newsletter * easeOutQuad),
        revenue: Math.floor(targets.revenue * easeOutQuad)
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

  // Metrics data
  const metrics = [
    {
      kpi: "Impressions sociales / mois",
      current: "10 M",
      target: `${animatedValues.impressions} M`,
      rationale: "2 carrousels + 1 short IA/actu par jour ; amplification payante minimale",
      progress: 33,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "Followers cumulés",
      current: "120 k",
      target: `${animatedValues.followers} k`,
      rationale: "Croissance organique moyenne : +5 k/sem, dopée par lives Twitch",
      progress: 40,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "Articles publiés sur le site",
      current: "0",
      currentNote: "(site non lancé)",
      target: `${animatedValues.articles.toLocaleString()}`,
      targetNote: "Discover + longs formats",
      rationale: "Cadence IA : 15 Discover / jour et 1 récit signature / jour",
      progress: 0,
      color: "from-electric-blue to-electric-cyan"
    },
    {
      kpi: "Newsletter",
      current: "0 abonné",
      currentNote: "(ouverte à J+30)",
      target: `${animatedValues.newsletter.toLocaleString()} abonnés`,
      rationale: "Capture via Discover + pop-up soft, contenu weekly haute densité",
      progress: 0,
      color: "from-electric-cyan to-electric-blue"
    },
    {
      kpi: "HV Agent",
      current: "Bêta interne",
      target: "Version 1 live",
      rationale: "Personnalisation basique, sans API externe",
      progress: 25,
      color: "from-electric-blue to-electric-cyan",
      isQualitative: true
    },
    {
      kpi: "CA encaissé",
      current: "0 €",
      target: `${animatedValues.revenue} k €`,
      rationale: "12 co-shootings + 20 OP sponsorisées (pipeline déjà identifié)",
      progress: 0,
      color: "from-electric-cyan to-electric-blue"
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
            Là où nous en sommes (et où nous serons dans 12 mois)
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
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">KPI</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Aujourd'hui</h3>
                  <p className="text-xs text-white/20 mt-1">(lancement social : 5 mai)</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Objectif 12 mois</h3>
                </div>
                <div className="col-span-4">
                  <h3 className="text-xs font-light text-white/40 uppercase tracking-[0.2em]">Pourquoi c'est crédible</h3>
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
                    {!metric.isQualitative && (
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
            <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">LECTURE DES CHIFFRES</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">10 M d'impressions par mois</span> sans budget media prouve que les formats courts sont déjà viraux ; l'objectif est de tripler en diversifiant les canaux.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">Le site démarre avec 100 articles prêts</span> ; l'usine de contenu haute fréquence est opérationnelle dès J1.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">HV Agent</span> sera lancé public à M+6 : nous préférons un produit robuste avant de compter les leads.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-white/20 mr-3 mt-1">•</span>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  <span className="text-white/80">Monétisation</span> volontairement différée : priorité à la construction de communauté pour sécuriser un LTV supérieur au CAC dès la première offre.
                </p>
              </li>
            </ul>
          </div>

          {/* North Star box */}
          <div className="relative">
            <div className="relative p-8 rounded-lg bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">NORTH-STAR 12 MOIS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Impressions sociales</span>
                  <span className="text-lg text-white/90 font-light">30 M / mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Newsletter</span>
                  <span className="text-lg text-white/90 font-light">25 k abonnés • 45% ouverture</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Rétention vidéos +15 min</span>
                  <span className="text-lg text-white/90 font-light">60 %</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-white/60">CA annuel</span>
                  <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan font-light">400 k €</span>
                </div>
              </div>
              <p className="text-xs text-white/40 mt-6">Break-even projeté fin année 3</p>
            </div>
          </div>
        </div>

        {/* Animated progress visualization */}
        <div className={`relative h-32 mb-20 transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-4">
            <p className="text-sm text-white/40 font-light">Progression des impressions sociales</p>
          </div>
          <div className="relative h-20 bg-white/[0.02] rounded-lg overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {[0, 10, 20, 30].map((value, i) => (
                <div key={i} className="text-xs text-white/20">{value}M</div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-full">
              <div 
                className="h-full bg-gradient-to-r from-electric-blue/20 to-electric-cyan/20 transition-all duration-3000 ease-out"
                style={{ 
                  width: isVisible ? '100%' : '33%',
                  transitionDelay: '1500ms'
                }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-cyan to-transparent" />
              </div>
            </div>
            {/* Current indicator */}
            <div 
              className="absolute bottom-0 left-[33%] w-px h-full bg-white/40 transition-opacity duration-1000"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">
                Aujourd'hui
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
            <span className="text-sm font-light tracking-wider">Prêts à rejoindre l'orbite ?</span>
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
};