import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, TrendingUp, Star } from 'lucide-react';

export default function RoadmapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
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

  // Auto-progression des phases
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Roadmap data SANS SKOOL
  const roadmapPhases = [
    {
      period: "T1 2025",
      subtitle: "Phase 1",
      title: "Foundation",
      objectives: [
        "Newsletter premium lancée (200 abonnés)",
        "2 brand contents signés",
        "Site média en ligne",
        "Équipe de 7 personnes"
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
        "Newsletter : 500 abonnés (+150%)",
        "4-5 brand contents/mois",
        "Optimisation CPM réseaux sociaux"
      ],
      metrics: {
        mrr: "20-25k€",
        costs: "30k€/mois",
        status: "Burn : -5k€/mois"
      },
      milestones: [
        "Premiers sponsors newsletter",
        "Pipeline B2B régulier",
        "Audience multi-plateforme"
      ],
      phase: 2
    },
    {
      period: "T3-T4 2025",
      subtitle: "Phase 3",
      title: "Break-even",
      objectives: [
        "1000 newsletter × 7.90€ = 7.9k€",
        "RS monétisés = 8k€/mois",
        "Brand content = 28k€/mois",
        "Site programmatique = 2.1k€/mois"
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
        "2000+ abonnés newsletter",
        "YouTube 500k vues/mois",
        "International (EN)",
        "10+ brand contents/mois"
      ],
      metrics: {
        mrr: "80-100k€",
        costs: "60k€/mois",
        status: "Marge : +40k€/mois"
      },
      milestones: [
        "Leader du marché",
        "Expansion internationale",
        "Exit possible"
      ],
      phase: 4
    }
  ];

  // Key success factors
  const successFactors = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Exécution rapide",
      description: "3 mois pour valider, 12 pour rentabiliser"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Focus revenus",
      description: "Brand content immédiat + récurrence newsletter"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth organique",
      description: "400k followers visés en 12 mois"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Premium positioning",
      description: "Contenu haute valeur, audience qualifiée"
    }
  ];

  // Investment allocation
  const investmentAllocation = [
    { category: "Équipe", amount: "150k€", percentage: 50, description: "5 → 8 personnes" },
    { category: "Production", amount: "60k€", percentage: 20, description: "Studio, équipement, outils" },
    { category: "Marketing", amount: "60k€", percentage: 20, description: "Acquisition, paid ads, PR" },
    { category: "Tech & Ops", amount: "30k€", percentage: 10, description: "Site, CRM, automation" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="roadmap" 
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            De 0 à 46k€ MRR en 12 mois
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Une roadmap ambitieuse mais réaliste, basée sur nos premiers résultats 
            et notre expertise du marché média.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Progress line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10 transform -translate-y-1/2" />
          <div 
            className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2 transition-all duration-1000"
            style={{ width: `${(activePhase + 1) * 25}%` }}
          />

          {/* Phases */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'}`}
              >
                {/* Connector dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-500 ${
                  index <= activePhase 
                    ? 'bg-gradient-to-br from-blue-400 to-cyan-400 scale-125' 
                    : 'bg-white/20'
                } ${index % 2 === 0 ? 'top-0' : 'bottom-0'}`} />

                {/* Phase card */}
                <div className={`p-6 rounded-xl bg-white/[0.02] border transition-all duration-500 cursor-pointer
                  ${activePhase === index 
                    ? 'border-white/20 bg-white/[0.04]' 
                    : 'border-white/10 hover:border-white/15'
                  } ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}
                  onClick={() => setActivePhase(index)}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <span className="text-xs text-blue-400/60 uppercase tracking-wider">{phase.subtitle}</span>
                    <h3 className="text-xl font-light text-white/90 mt-1">{phase.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{phase.period}</p>
                  </div>

                  {/* Objectives */}
                  <div className="space-y-2 mb-4">
                    {phase.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/40 mt-2" />
                        <p className="text-xs text-white/60 leading-relaxed">{obj}</p>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/40">MRR</span>
                      <span className="text-sm text-white/80">{phase.metrics.mrr}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/40">Status</span>
                      <span className={`text-xs ${
                        phase.metrics.status.includes('Rentable') || phase.metrics.status.includes('Marge')
                          ? 'text-green-400' 
                          : 'text-yellow-400'
                      }`}>
                        {phase.metrics.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Investment allocation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            ALLOCATION DES 300K€
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {investmentAllocation.map((item, index) => (
              <div key={index} className="relative p-6 rounded-lg bg-white/[0.02] border border-white/10">
                <div className="mb-4">
                  <h4 className="text-lg text-white/80 mb-1">{item.category}</h4>
                  <p className="text-2xl font-light text-white/90">{item.amount}</p>
                  <p className="text-xs text-white/40 mt-2">{item.description}</p>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${item.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <p className="text-xs text-white/40 mt-2 text-right">{item.percentage}%</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success factors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em] text-center">
            FACTEURS CLÉS DE SUCCÈS
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {successFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-white/60">
                  {factor.icon}
                </div>
                <h4 className="text-sm text-white/80 mb-2">{factor.title}</h4>
                <p className="text-xs text-white/50">{factor.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-sm text-white/40 mb-8">
            Nous avons prouvé la traction. Maintenant, nous passons à l'échelle.
          </p>
          
          <div className="inline-flex items-center gap-8 p-6 rounded-lg bg-white/[0.02] border border-white/10">
            <div className="text-left">
              <p className="text-xs text-white/40 mb-1">Aujourd'hui</p>
              <p className="text-lg text-white/80">120k followers</p>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="text-left">
              <p className="text-xs text-white/40 mb-1">Objectif 12 mois</p>
              <p className="text-lg text-white/80">46k€ MRR</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}