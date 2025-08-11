import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ViralToValueSection — Version High Value
 * 
 * Du contenu haute densité à la monétisation multi-flux
 */

const steps = [
  {
    key: "attention",
    phase: "Capture",
    title: "Contenu haute densité",
    metrics: {
      main: "2.5M",
      label: "vues mensuelles",
      sub: "120k abonnés actifs"
    },
    desc: "Businesstainment : éducation + divertissement. Chaque contenu apporte une valeur actionnable immédiate.",
    gradient: "from-white/80 via-white/60 to-blue-500/60",
  },
  {
    key: "qualification",
    phase: "Qualification", 
    title: "Onboarding intelligent",
    metrics: {
      main: "2.5k",
      label: "nouveaux utilisateurs/mois",
      sub: "via quiz et lead magnets"
    },
    desc: "HV Agent cartographie les objectifs. Templates, frameworks, accès beta aux nouveaux outils IA.",
    gradient: "from-blue-500/60 via-cyan-500/60 to-cyan-500/60",
  },
  {
    key: "engagement",
    phase: "Activation",
    title: "Accompagnement personnalisé",
    metrics: {
      main: "32%",
      label: "taux d'engagement",
      sub: "Coach WhatsApp actif"
    },
    desc: "L'IA adapte le parcours : routines quotidiennes, contenus sur-mesure, accountability en temps réel.",
    gradient: "from-cyan-500/60 via-teal-500/60 to-emerald-500/60",
  },
  {
    key: "monetization",
    phase: "Monétisation",
    title: "5 flux de revenus",
    metrics: {
      main: "127€",
      label: "revenu moyen/utilisateur",
      sub: "LTV ~1500€"
    },
    desc: "Abonnements premium, API entreprises, formations cohortées, événements, licences de contenu.",
    gradient: "from-emerald-500/60 via-green-500/60 to-green-500/80",
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
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      id="mecanisme" 
      ref={containerRef} 
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      {/* Gradient de fond subtil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white/90 mb-6">
            De l'audience à l'empire
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl">
            Comment on transforme du contenu haute densité en business model résilient. 
            Sans publicité invasive, sans compromis sur la qualité.
          </p>
        </motion.div>

        {/* Le problème qu'on résout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-red-500/10 via-transparent to-transparent border border-red-500/20"
        >
          <h3 className="text-lg font-medium text-red-400 mb-3">Le problème du contenu actuel</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white/60">
            <div>
              <span className="text-3xl font-light text-white/80">98%</span>
              <p className="text-sm mt-1">du contenu est du scroll sans conséquence</p>
            </div>
            <div>
              <span className="text-3xl font-light text-white/80">0€</span>
              <p className="text-sm mt-1">de valeur créée pour l'utilisateur final</p>
            </div>
            <div>
              <span className="text-3xl font-light text-white/80">100%</span>
              <p className="text-sm mt-1">de dépendance aux algorithmes publicitaires</p>
            </div>
          </div>
        </motion.div>

        {/* Notre solution en 4 étapes */}
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
                      bg-gradient-to-br ${activeStep === index ? step.gradient : 'from-white/10 to-white/5'}
                      transition-all duration-500
                    `}>
                      <span className="text-sm font-light text-white/80">
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

          {/* Droite : Les 5 flux de revenus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="sticky top-8">
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">
                Modèle économique diversifié
              </h3>

              {/* Les 5 flux */}
              <div className="space-y-4">
                {[
                  { 
                    name: "Abonnements Premium", 
                    revenue: "45%", 
                    desc: "HV Agent Pro, contenus exclusifs",
                    color: "from-blue-500/40 to-blue-500/20"
                  },
                  { 
                    name: "API Entreprises", 
                    revenue: "25%", 
                    desc: "Agents IA white-label pour marques",
                    color: "from-cyan-500/40 to-cyan-500/20"
                  },
                  { 
                    name: "Formations & Cohorts", 
                    revenue: "15%", 
                    desc: "Programmes intensifs, accompagnement",
                    color: "from-teal-500/40 to-teal-500/20"
                  },
                  { 
                    name: "Events & Masterminds", 
                    revenue: "10%", 
                    desc: "Rencontres premium, networking",
                    color: "from-emerald-500/40 to-emerald-500/20"
                  },
                  { 
                    name: "Licences de contenu", 
                    revenue: "5%", 
                    desc: "Syndication, droits dérivés",
                    color: "from-green-500/40 to-green-500/20"
                  }
                ].map((flux, index) => (
                  <motion.div
                    key={flux.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg bg-white/[0.02] border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-sm font-medium text-white/80">{flux.name}</h4>
                        <p className="text-xs text-white/40 mt-1">{flux.desc}</p>
                      </div>
                      <span className="text-lg font-light text-white/70">{flux.revenue}</span>
                    </div>
                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${flux.color}`}
                        style={{ width: flux.revenue }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total projected */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/60">MRR projeté (12 mois)</span>
                  <span className="text-2xl font-light text-green-400">650k€</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* L'impact High Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-light text-white/80 mb-8 text-center">
            La rupture High Value
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-400 mb-2">100%</div>
              <div className="text-sm text-white/60">Contenu actionnable</div>
              <div className="text-xs text-white/40 mt-1">vs 2% du marché</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-cyan-400 mb-2">IA+H</div>
              <div className="text-sm text-white/60">Humain augmenté</div>
              <div className="text-xs text-white/40 mt-1">pas remplacé</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-400 mb-2">x10</div>
              <div className="text-sm text-white/60">ROI pour l'abonné</div>
              <div className="text-xs text-white/40 mt-1">mesuré et garanti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-green-400 mb-2">∞</div>
              <div className="text-sm text-white/60">Scalabilité</div>
              <div className="text-xs text-white/40 mt-1">via API et licences</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}