import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Rocket, BarChart3, MessageSquare } from 'lucide-react';

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

  const growthEngines = [
    {
      title: "Moteur Organique",
      status: "Actif",
      icon: <TrendingUp className="w-6 h-6" />,
      platforms: ["Instagram", "LinkedIn", "X"],
      metrics: {
        current: "120k followers",
        growth: "+15k/mois",
        engagement: "8.7%"
      },
      description: "Notre base solide : contenus quotidiens multi-formats",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Moteur Viral",
      status: "En cours",
      icon: <Rocket className="w-6 h-6" />,
      platforms: ["TikTok", "YouTube Shorts", "Reels"],
      metrics: {
        current: "26M vues/90j",
        growth: "+52% reach",
        potential: "x3 audience"
      },
      description: "L'accélérateur : formats courts ultra-viraux",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Moteur Communautaire",
      status: "À venir",
      icon: <MessageSquare className="w-6 h-6" />,
      platforms: ["WhatsApp", "Telegram", "Newsletter"],
      metrics: {
        target: "10k membres",
        conversion: "15% followers",
        ltv: "x5 vs social"
      },
      description: "La fidélisation : groupes VIP et contenus exclusifs",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const milestones = [
    { 
      date: "Aujourd'hui", 
      followers: "120k", 
      reach: "10M/mois",
      channels: 3,
      highlight: "Base Instagram solide"
    },
    { 
      date: "+6 mois", 
      followers: "250k", 
      reach: "25M/mois",
      channels: 5,
      highlight: "TikTok + YouTube actifs"
    },
    { 
      date: "+12 mois", 
      followers: "400k", 
      reach: "40M/mois",
      channels: 7,
      highlight: "Newsletter + Communautés"
    },
    { 
      date: "+18 mois", 
      followers: "500k", 
      reach: "50M/mois",
      channels: 8,
      highlight: "Écosystème complet"
    }
  ];

  const performanceMetrics = [
    {
      format: "Carrousels Instagram",
      record: "79k likes",
      rate: "12% save rate",
      impact: "Lead magnets stars"
    },
    {
      format: "Articles Discover",
      record: "100k vues",
      rate: "8% CTR",
      impact: "SEO + AdSense"
    },
    {
      format: "Reels & Shorts",
      record: "3M vues",
      rate: "85% completion",
      impact: "Viralité maximale"
    },
    {
      format: "LinkedIn Posts",
      record: "+500 followers/mois",
      rate: "5% engagement",
      impact: "Autorité B2B"
    }
  ];

  const upcomingChannels = [
    {
      channel: "Site High Value",
      launch: "T4 2025",
      target: "100k visiteurs/mois",
      strategy: "SEO + Content hub"
    },
    {
      channel: "Newsletter Premium",
      launch: "T4 2025",
      target: "10k abonnés en 6 mois",
      strategy: "Conversion 8% followers"
    },
    {
      channel: "WhatsApp/Telegram",
      launch: "T1 2026",
      target: "1000 VIP members",
      strategy: "Groupes exclusifs"
    },
    {
      channel: "YouTube Long-form",
      launch: "T1 2026",
      target: "100k subs année 1",
      strategy: "Podcasts + Documentaires"
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
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-6">
            Du viral à la valeur : 
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              notre machine de croissance
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl">
            Comment transformer 120k followers en 500k en 18 mois, avec une stratégie multi-canal 
            qui génère 50M d'impressions mensuelles.
          </p>
        </motion.div>

        {/* Les 3 moteurs de croissance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            3 MOTEURS DE CROISSANCE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthEngines.map((engine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border transition-all duration-500 cursor-pointer
                  ${activeEngine === index 
                    ? 'border-white/20 scale-105' 
                    : 'border-white/[0.05] hover:border-white/10'
                  }`}
                onClick={() => setActiveEngine(index)}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    engine.status === 'Actif' 
                      ? 'bg-green-500/20 text-green-400' 
                      : engine.status === 'En cours'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {engine.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${engine.color} p-2.5 mb-6`}>
                  <div className="text-white">
                    {engine.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-light text-white mb-3">{engine.title}</h4>
                <p className="text-sm text-white/50 mb-4">{engine.description}</p>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {engine.platforms.map((platform, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-white/60"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  {Object.entries(engine.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-xs text-white/40 capitalize">{key}:</span>
                      <span className="text-sm text-white/70">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Active indicator */}
                {activeEngine === index && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline de croissance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            TRAJECTORY 120K → 500K
          </h3>
          
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/[0.05] -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Node */}
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 animate-ping" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="text-sm text-white/40 mb-2">{milestone.date}</div>
                    <div className="text-3xl font-light text-white mb-1">{milestone.followers}</div>
                    <div className="text-xs text-white/50 mb-2">{milestone.reach} reach</div>
                    <div className="text-xs text-blue-400/60">{milestone.channels} canaux actifs</div>
                    <div className="mt-3 text-xs text-white/40 italic">{milestone.highlight}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Formats qui performent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            FORMATS QUI CARTONNENT
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] hover:border-white/10 transition-all"
              >
                <h4 className="text-sm font-medium text-white/80 mb-3">{metric.format}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span className="text-xl font-light text-white">{metric.record}</span>
                  </div>
                  <div className="text-sm text-white/50">{metric.rate}</div>
                  <div className="pt-2 border-t border-white/[0.05]">
                    <span className="text-xs text-blue-400/60">{metric.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Canaux à venir */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">
            EXPANSION MULTI-CANAL
          </h3>
          
          <div className="space-y-4">
            {upcomingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-6 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-all"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-light text-white mb-1">{channel.channel}</h4>
                  <p className="text-sm text-white/50">{channel.strategy}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/70">{channel.launch}</div>
                  <div className="text-xs text-purple-400/60">{channel.target}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Synergie finale */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05]">
            <Users className="w-12 h-12 text-purple-400" />
            <div>
              <h3 className="text-2xl font-light text-white mb-2">
                1 contenu = 10 formats = 100x impact
              </h3>
              <p className="text-white/50 max-w-2xl">
                Notre machine transforme chaque idée en cascade de contenus optimisés par plateforme. 
                300 créations mensuelles génèrent 10M d'impressions grâce à cette approche systémique.
              </p>
            </div>
            
            {/* Key metrics */}
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-light text-white">300</div>
                <div className="text-xs text-white/40">contenus/mois</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">8</div>
                <div className="text-xs text-white/40">plateformes</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">50M</div>
                <div className="text-xs text-white/40">reach visé</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}