import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ViralToValueSection — Version réaliste High Value Media
 * 
 * Comment monétiser intelligemment une audience existante
 */

const steps = [
  {
    key: "audience",
    phase: "Audience existante",
    title: "120k followers actifs",
    metrics: {
      main: "10M",
      label: "impressions/mois",
      sub: "4-6% d'engagement"
    },
    desc: "Une communauté déjà construite sur 5 ans. Pas besoin de partir de zéro, on capitalise sur l'existant.",
    gradient: "from-white/20 via-white/10 to-white/5",
  },
  {
    key: "segmentation",
    phase: "Segmentation",
    title: "3 niveaux d'engagement",
    metrics: {
      main: "3-5%",
      label: "de conversion",
      sub: "vers le payant"
    },
    desc: "Gratuit : contenus sociaux. Premium : newsletter à 7.90€. VIP : communauté Skool à 60€.",
    gradient: "from-blue-500/20 via-blue-500/10 to-blue-500/5",
  },
  {
    key: "monetization",
    phase: "Monétisation",
    title: "6 sources de revenus",
    metrics: {
      main: "24.6k€",
      label: "MRR mois 6",
      sub: "46k€ mois 12"
    },
    desc: "Skool, newsletter, programmatique, réseaux sociaux, brand content, interviews collaboratives.",
    gradient: "from-purple-500/20 via-purple-500/10 to-purple-500/5",
  },
  {
    key: "scaling",
    phase: "Croissance",
    title: "Break-even rapide",
    metrics: {
      main: "10-12",
      label: "mois",
      sub: "pour la rentabilité"
    },
    desc: "Modèle testé et validé. Croissance organique, pas de paid acquisition avant la rentabilité.",
    gradient: "from-green-500/20 via-green-500/10 to-green-500/5",
  },
];

export default function ViralToValueSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-progression des étapes
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      id="mecanisme" 
      ref={containerRef} 
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      {/* Gradient de fond très subtil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.01] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header simple et direct */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white/90 mb-6">
            Monétiser sans compromettre
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl">
            Comment transformer une audience existante en business model diversifié.
            <span className="block mt-2">Sans publicité invasive. Sans paywall agressif.</span>
          </p>
        </motion.div>

        {/* Point de départ réaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-transparent border border-blue-500/20"
        >
          <h3 className="text-lg font-medium text-blue-400 mb-3">Notre point de départ (Septembre 2025)</h3>
          <div className="grid md:grid-cols-4 gap-6 text-white/60">
            <div>
              <span className="text-3xl font-light text-white/80">120k</span>
              <p className="text-sm mt-1">followers actifs</p>
            </div>
            <div>
              <span className="text-3xl font-light text-white/80">10M</span>
              <p className="text-sm mt-1">impressions/mois</p>
            </div>
            <div>
              <span className="text-3xl font-light text-white/80">15 ans</span>
              <p className="text-sm mt-1">d'expérience média</p>
            </div>
            <div>
              <span className="text-3xl font-light text-white/80">0€</span>
              <p className="text-sm mt-1">de revenus actuels</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-white/50">
              <span className="text-white/70">Projection :</span> De 0€ à 46k€ MRR en 12 mois
            </p>
          </div>
        </motion.div>

        {/* Le modèle en 4 étapes */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Gauche : Les étapes */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`
                  relative cursor-pointer transition-all duration-500
                  ${activeStep === index ? 'scale-[1.02]' : 'scale-100 opacity-60 hover:opacity-80'}
                `}
              >
                {/* Ligne de connexion */}
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-8 w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Indicateur de phase */}
                  <div className="flex-shrink-0">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${activeStep === index ? step.gradient : 'from-white/5 to-white/[0.02]'}
                      border ${activeStep === index ? 'border-white/20' : 'border-white/10'}
                      transition-all duration-500
                    `}>
                      <span className="text-2xl font-extralight text-white/60">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {step.phase}
                    </div>
                    <h3 className="text-xl text-white/90 font-light mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    
                    {/* Métriques */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-light text-white/80">
                        {step.metrics.main}
                      </span>
                      <span className="text-sm text-white/40">
                        {step.metrics.label}
                      </span>
                      <span className="text-xs text-white/30">
                        ({step.metrics.sub})
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Droite : Le modèle économique concret */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="sticky top-8">
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">
                Modèle économique validé
              </h3>

              {/* Les 6 sources de revenus */}
              <div className="space-y-3">
                {[
                  { 
                    name: "Communauté Skool", 
                    price: "60€/mois", 
                    target: "50 → 150 membres",
                    revenue: "3k€ → 9k€",
                    color: "from-purple-500/30 to-purple-500/10"
                  },
                  { 
                    name: "Newsletter Premium", 
                    price: "7.90€/mois", 
                    target: "200 → 500 abonnés",
                    revenue: "1.6k€ → 4k€",
                    color: "from-blue-500/30 to-blue-500/10"
                  },
                  { 
                    name: "Brand Content", 
                    price: "5k€/opération", 
                    target: "2 → 4 /mois",
                    revenue: "10k€ → 20k€",
                    color: "from-green-500/30 to-green-500/10"
                  },
                  { 
                    name: "Monétisation RS", 
                    price: "CPM variable", 
                    target: "7M vues",
                    revenue: "3k€ → 6k€",
                    color: "from-cyan-500/30 to-cyan-500/10"
                  },
                  { 
                    name: "Interviews Collab", 
                    price: "3k€/interview", 
                    target: "2 /mois",
                    revenue: "6k€",
                    color: "from-yellow-500/30 to-yellow-500/10"
                  },
                  { 
                    name: "Programmatique", 
                    price: "CPM site", 
                    target: "150k visiteurs",
                    revenue: "1k€",
                    color: "from-gray-500/30 to-gray-500/10"
                  }
                ].map((source, index) => (
                  <motion.div
                    key={source.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg bg-white/[0.02] border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white/80">{source.name}</h4>
                        <p className="text-xs text-white/40 mt-1">{source.price} • {source.target}</p>
                      </div>
                      <span className="text-sm font-light text-white/70 ml-4">{source.revenue}</span>
                    </div>
                    <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${source.color}`}
                        style={{ 
                          width: `${(parseFloat(source.revenue.split('€')[0].replace('k', '')) / 20) * 100}%`,
                          minWidth: '10%'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total projeté */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                <div className="space-y-2">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Projection 12 mois</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-white/60">MRR Mois 6</span>
                    <span className="text-xl font-light text-green-400">24.6k€</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-white/60">MRR Mois 12</span>
                    <span className="text-2xl font-light text-green-400">46k€</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Points clés réalistes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-light text-white/80 mb-8 text-center">
            Un modèle pragmatique et validé
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-400 mb-2">0€</div>
              <div className="text-sm text-white/60">CAC</div>
              <div className="text-xs text-white/40 mt-1">Audience déjà acquise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-purple-400 mb-2">6</div>
              <div className="text-sm text-white/60">Sources de revenus</div>
              <div className="text-xs text-white/40 mt-1">Modèle diversifié</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-green-400 mb-2">10-12</div>
              <div className="text-sm text-white/60">Mois avant break-even</div>
              <div className="text-xs text-white/40 mt-1">Burn maîtrisé</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-cyan-400 mb-2">400k€</div>
              <div className="text-sm text-white/60">Besoin total</div>
              <div className="text-xs text-white/40 mt-1">15-18 mois runway</div>
            </div>
          </div>
        </motion.div>

        {/* CTA simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const businessElement = document.getElementById('business');
              if (businessElement) {
                businessElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <span className="text-white/70 group-hover:text-white/90">Voir le détail du business model</span>
            <svg className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-all duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}