import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Rocket, BarChart3, MessageSquare, DollarSign, Calendar, Zap } from 'lucide-react';

export default function ViralToValueSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEngine, setActiveEngine] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-progression des moteurs
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveEngine((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // 3 moteurs de croissance
  const growthEngines = [
    {
      title: "Croissance Organique",
      status: "Actif",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Base solide avec 120k followers actifs",
      metrics: [
        { label: "Followers actuels", value: "120k" },
        { label: "Croissance mensuelle", value: "+15k" },
        { label: "Taux d'engagement", value: "8.7%" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Amplification Virale",
      status: "En cours",
      icon: <Rocket className="w-6 h-6" />,
      description: "Expansion sur formats courts",
      metrics: [
        { label: "Vues mensuelles", value: "26M" },
        { label: "Croissance reach", value: "+52%" },
        { label: "Potentiel", value: "x3 audience" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Monétisation",
      status: "Lancement",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Objectif 46k€ MRR en 12 mois",
      metrics: [
        { label: "Statut actuel", value: "Pré-lancement" },
        { label: "Target 6 mois", value: "15k€ MRR" },
        { label: "Target 12 mois", value: "46k€ MRR" }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Timeline simplifiée et claire
  const roadmap = [
    {
      phase: "Phase 1",
      period: "Août - Oct 2025",
      title: "Foundation",
      goals: [
        "Consolider base 120k followers",
        "Lancer TikTok & YouTube Shorts",
        "Préparer infrastructure monétisation"
      ],
      metrics: "150k followers | 15M reach/mois"
    },
    {
      phase: "Phase 2", 
      period: "Nov 2025 - Jan 2026",
      title: "Activation",
      goals: [
        "Lancer site web + AdSense",
        "Démarrer newsletter payante",
        "Premiers partenariats brands"
      ],
      metrics: "250k followers | 8k€ MRR"
    },
    {
      phase: "Phase 3",
      period: "Fév - Mai 2026",
      title: "Accélération",
      goals: [
        "Scale contenu viral",
        "YouTube long-form",
        "Deals partenariats majeurs"
      ],
      metrics: "350k followers | 25k€ MRR"
    },
    {
      phase: "Phase 4",
      period: "Juin - Août 2026",
      title: "Consolidation",
      goals: [
        "Optimisation revenus",
        "Automatisation process",
        "Diversification sources"
      ],
      metrics: "450k followers | 46k€ MRR"
    }
  ];

  // Canaux de monétisation
  const revenueStreams = [
    {
      stream: "Publicité Display",
      icon: <BarChart3 className="w-5 h-5" />,
      launch: "T4 2025",
      projection: "8-12k€/mois",
      description: "AdSense + Partenaires directs"
    },
    {
      stream: "Newsletter Premium",
      icon: <MessageSquare className="w-5 h-5" />,
      launch: "T1 2026",
      projection: "15-20k€/mois",
      description: "29€/mois - Target 500 abonnés"
    },
    {
      stream: "Brand Content",
      icon: <Target className="w-5 h-5" />,
      launch: "T4 2025",
      projection: "10-15k€/mois",
      description: "3-4 partenariats/mois"
    },
    {
      stream: "Sponsoring YouTube",
      icon: <Zap className="w-5 h-5" />,
      launch: "T2 2026",
      projection: "8-10k€/mois",
      description: "Long-form + intégrations"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="viral-to-value"
      className="relative min-h-screen py-32 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-6">
            De 120k à 500k followers
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              0€ → 46k€ MRR en 12 mois
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Une stratégie multi-canal précise pour transformer notre audience en business rentable
          </p>
        </motion.div>

        {/* Les 3 Moteurs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthEngines.map((engine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border transition-all duration-500 cursor-pointer group
                  ${activeEngine === index 
                    ? 'border-white/20 scale-105 shadow-2xl' 
                    : 'border-white/[0.05] hover:border-white/10'
                  }`}
                onClick={() => setActiveEngine(index)}
              >
                {/* Status */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    engine.status === 'Actif' 
                      ? 'bg-green-500/20 text-green-400' 
                      : engine.status === 'En cours'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {engine.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${engine.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {engine.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-2xl font-light text-white mb-2">{engine.title}</h4>
                <p className="text-sm text-white/50 mb-6">{engine.description}</p>

                {/* Metrics */}
                <div className="space-y-3">
                  {engine.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                      <span className="text-xs text-white/40">{metric.label}</span>
                      <span className="text-sm text-white/80 font-medium">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Active glow */}
                {activeEngine === index && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            ROADMAP 12 MOIS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] hover:border-white/10 transition-all group"
              >
                {/* Phase indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-purple-400 font-medium">{phase.phase}</span>
                  <Calendar className="w-4 h-4 text-white/20" />
                </div>

                {/* Period */}
                <div className="text-xs text-white/40 mb-2">{phase.period}</div>

                {/* Title */}
                <h4 className="text-xl font-light text-white mb-4">{phase.title}</h4>

                {/* Goals */}
                <ul className="space-y-2 mb-6">
                  {phase.goals.map((goal, i) => (
                    <li key={i} className="text-xs text-white/60 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <p className="text-xs text-blue-400/60">{phase.metrics}</p>
                </div>

                {/* Timeline connector */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            SOURCES DE REVENUS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] hover:border-white/10 transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  {stream.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-light text-white">{stream.stream}</h4>
                    <span className="text-xs text-white/40 px-2 py-1 rounded bg-white/5">{stream.launch}</span>
                  </div>
                  <p className="text-xs text-white/50 mb-2">{stream.description}</p>
                  <div className="text-sm text-green-400/60 font-medium">{stream.projection}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 px-12 py-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
            <h3 className="text-2xl font-light text-white">Prêt à scaler avec nous ?</h3>
            <div className="flex items-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-light text-white mb-2">x4</div>
                <div className="text-xs text-white/50">Croissance audience</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-light text-green-400 mb-2">46k€</div>
                <div className="text-xs text-white/50">MRR en 12 mois</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-light text-white mb-2">4</div>
                <div className="text-xs text-white/50">Sources de revenus</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}