import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, TrendingUp, DollarSign, Globe, Mail, 
  Play, ArrowRight, CheckCircle, AlertCircle
} from 'lucide-react';

export default function PlaybookSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
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

  // Playbook pillars - SEULEMENT 3 PILIERS
  const playbookPillars = [
    {
      id: 'brand-content',
      title: 'Brand Content Premium',
      revenue: '28k€/mois',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      summary: "4-5 collaborations/mois à 7k€ ticket moyen",
      metrics: {
        reach: '1.6M total',
        ticket: '5-8k€',
        volume: '4-5/mois'
      },
      overview: {
        proposition: "Amplification multi-canal. Un écosystème d'amplification complet.",
        targets: "SaaS B2B, EdTech, FinTech, Agences premium",
        differentiator: "1.6M followers + Site média + Newsletter",
        garanties: "Option pocket 5k€ = 1M de reach garanti sur cœur de cible"
      },
      phases: [
        {
          name: 'Setup (S1-2)',
          tasks: [
            'Créer media kit professionnel',
            'Site deck interactif en ligne',
            'CRM Notion + automation Lemlist',
            'LinkedIn Sales Navigator + bases emails',
            'Mapper 200 prospects qualifiés',
            'Définir process facturation (50% acompte)',
            'Templates contrats avec droits d\'usage'
          ],
          deliverables: ['Media kit pro', 'Pipeline CRM', '200 contacts enrichis', 'Process complet']
        },
        {
          name: 'Prospection (S3-4)',
          tasks: [
            '20 DM LinkedIn/jour avec contenu du jour',
            '30 emails personnalisés via Lemlist',
            'Follow-up J+3, J+7, J+14',
            'Calls de qualification',
            'Négociation et closing'
          ],
          deliverables: ['50 RDV qualifiés', '10 propositions', '4-5 deals signés']
        },
        {
          name: 'Production (M1+)',
          tasks: [
            'Brief client et validation concepts',
            'Production contenus natifs',
            'Cross-posting optimisé',
            'Article SEO dédié sur le site',
            'Reporting ROI détaillé'
          ],
          deliverables: ['4-5 campagnes/mois', 'NPS >8/10', '80% renouvellement']
        }
      ],
      packages: [
        {
          name: 'STARTER',
          price: '3k€',
          includes: ['1 post feed', '3 stories', 'Reporting basique', '1 plateforme', 'Droits d\'usage inclus']
        },
        {
          name: 'AMPLIFICATION',
          price: '7k€',
          includes: ['Carrousel viral', 'Reel natif', '5 stories', 'Cross-posting', 'Article site', 'A/B testing', 'Droits d\'usage inclus']
        },
        {
          name: 'ECOSYSTEM',
          price: '15k€',
          includes: ['Campagne 30j', '5 contenus piliers', 'Interview podcast', 'Newsletter mention', 'Live event', 'ROI complet', 'Droits d\'usage inclus']
        }
      ]
    },
    {
      id: 'newsletter-premium',
      title: 'Newsletter & Site Premium',
      revenue: '10k€/mois',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      summary: "1000 abonnés premium + monétisation site",
      metrics: {
        subscribers: '1000 @ 7.90€',
        site: '300k visiteurs',
        cpm: '4€ moyenne'
      },
      overview: {
        proposition: "La newsletter référence pour entrepreneurs ambitieux",
        targets: "Entrepreneurs, managers, CSP+, 25-45 ans",
        differentiator: "Contenu exclusif + Curation premium + Insights"
      },
      phases: [
        {
          name: 'Setup Newsletter (M1)',
          tasks: [
            'Choix plateforme (Beehiiv/ConvertKit)',
            'Design template premium',
            'Définir ligne éditoriale',
            'Créer 10 lead magnets',
            'Setup automation onboarding',
            'Pricing strategy (7.90€/mois)'
          ],
          deliverables: ['Newsletter ready', 'Funnel complet', '10 lead magnets']
        },
        {
          name: 'Content & Growth (M2+)',
          tasks: [
            'Newsletter 2x/semaine',
            'Articles longs site (SEO)',
            'Guest posts stratégiques',
            'Partenariats cross-promo',
            'Paid acquisition ciblée'
          ],
          deliverables: ['100 abonnés/mois', 'CAC <20€', 'Churn <5%']
        },
        {
          name: 'Monétisation Site',
          tasks: [
            'Google Ad Manager setup',
            'Programmatique premium',
            'Sponsored content',
            'Affiliate stratégique',
            'Paywall intelligent'
          ],
          deliverables: ['2k€/mois pub', 'CPM 4€+', 'UX optimisée']
        }
      ],
      contentPlan: {
        business: ['Stratégies growth', 'Case studies', 'Outils et ressources', 'Interviews CEOs'],
        mental: ['Mindset exercises', 'Routines performance', 'Gestion stress', 'Focus tips'],
        culture: ['Trend analysis', 'Nouveaux usages', 'Tech émergente', 'Societal shifts'],
        story: ['Parcours inspirants', 'Behind the scenes', 'Failures stories', 'Lessons learned']
      }
    },
    {
      id: 'monetization-rs',
      title: 'Monétisation Multi-Canal',
      revenue: '8k€/mois',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      summary: "Optimisation des revenus sur toutes les plateformes",
      metrics: {
        reach: '50M/mois',
        cpm: '0.5-3€',
        platforms: '6 actives'
      },
      overview: {
        proposition: "Transformer chaque vue en revenus across 1.8M followers",
        targets: "TikTok, Instagram, YouTube, Facebook, LinkedIn, X",
        differentiator: "Volume massif + Optimisation CPM + Multi-format"
      },
      platforms: [
        {
          name: 'TikTok',
          revenue: '3k€/mois',
          strategy: ['Creator Fund activation', 'Lives 3x/semaine', 'TikTok Shop affiliate', '30M vues/mois visées'],
          optimization: 'Posts 6h/12h/18h, Trending sounds, Durée 45-59s'
        },
        {
          name: 'Facebook',
          revenue: '3k€/mois',
          strategy: ['In-stream ads éligible France', 'Videos >3min priorité', 'Facebook Stars', 'Creator Bonus'],
          optimization: 'Format 4:5, Cross-post Instagram, Lives réguliers'
        },
        {
          name: 'YouTube',
          revenue: '2k€/mois',
          strategy: ['Partner Program', 'Shorts Fund', 'Super Thanks', 'Memberships'],
          optimization: 'Shorts daily, Long-form weekly, CTR >5%'
        }
      ]
    }
  ];

  const synergyEffects = [
    {
      title: "Funnel de conversion unifié",
      description: "Chaque contenu alimente tous les dispositifs",
      flow: "Content → Site → Newsletter → Brand deals"
    },
    {
      title: "Cross-selling automatique",
      description: "Un client brand découvre la newsletter",
      flow: "Brand client → Newsletter → Retention → Upsell"
    },
    {
      title: "Data intelligence",
      description: "Insights audience pour optimisation continue",
      flow: "Analytics → Segmentation → Personalization → Conversion"
    }
  ];

  const risksMitigation = [
    {
      risk: "Baisse des CPM plateformes",
      mitigation: "Diversification 6 plateformes + Focus brand content premium",
      impact: "Faible - max 15% du CA"
    },
    {
      risk: "Saturation newsletter",
      mitigation: "Contenu ultra-premium + Exclusivité + Guest writers",
      impact: "Moyen - surveillé weekly"
    },
    {
      risk: "Non renouvellement brands",
      mitigation: "ROI tracking + Success stories + Partnerships long terme",
      impact: "Gérable - pipeline constant"
    }
  ];

  const globalMetrics = {
    month1: { revenue: '10k€', focus: 'Brand content + Setup' },
    month3: { revenue: '20k€', focus: '+ Newsletter lancée' },
    month6: { revenue: '30k€', focus: '+ Monétisation RS' },
    month9: { revenue: '40k€', focus: '+ Optimisation' },
    month12: { revenue: '46k€', focus: 'Tous dispositifs actifs' }
  };

  return (
    <section 
      ref={sectionRef}
      id="playbook"
      className="relative min-h-screen py-32 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-6">
            Notre playbook de croissance
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mb-8">
            De 0 à 46k€/mois en 365 actions concrètes. Ce n'est pas un deck théorique. 
            C'est notre manuel d'exécution, testé et optimisé.
          </p>
          
          {/* Global progression */}
          <div className="flex items-center gap-8 p-6 rounded-lg bg-white/[0.02] border border-white/10">
            {Object.entries(globalMetrics).map(([key, value], index) => (
              <div key={key} className="flex-1 text-center">
                <p className="text-xs text-white/40 mb-1">{key.replace('month', 'Mois ')}</p>
                <p className="text-lg text-white/80">{value.revenue}</p>
                <p className="text-xs text-white/50 mt-1">{value.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs - SEULEMENT 3 TABS */}
        <div className="flex gap-4 mb-12 overflow-x-auto">
          {playbookPillars.map((pillar, index) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                activeTab === index 
                  ? 'bg-white/10 text-white border border-white/20' 
                  : 'bg-white/[0.02] text-white/60 border border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">{pillar.title}</p>
                  <p className="text-xs text-white/50">{pillar.revenue}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {playbookPillars[activeTab] && (
            <>
              {/* Overview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg bg-white/[0.02] border border-white/10"
              >
                <h3 className="text-2xl text-white/90 mb-4">{playbookPillars[activeTab].title}</h3>
                <p className="text-white/60 mb-6">{playbookPillars[activeTab].summary}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {Object.entries(playbookPillars[activeTab].metrics).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-lg bg-white/[0.02]">
                      <p className="text-xs text-white/40 mb-1 capitalize">{key}</p>
                      <p className="text-lg text-white/80">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {Object.entries(playbookPillars[activeTab].overview).map(([key, value]) => (
                    <div key={key} className="flex gap-4">
                      <span className="text-xs text-white/40 w-24 capitalize">{key}:</span>
                      <span className="text-sm text-white/70 flex-1">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Phases */}
              {playbookPillars[activeTab].phases && (
                <div className="grid md:grid-cols-3 gap-6">
                  {playbookPillars[activeTab].phases.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-lg bg-white/[0.02] border border-white/10"
                    >
                      <h4 className="text-lg text-white/80 mb-4">{phase.name}</h4>
                      
                      <div className="space-y-3 mb-6">
                        <h5 className="text-xs text-white/40">TASKS</h5>
                        {phase.tasks.map((task, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-xs text-white/60">{task}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <h5 className="text-xs text-white/40 mb-2">DELIVERABLES</h5>
                        {phase.deliverables.map((del, i) => (
                          <p key={i} className="text-xs text-white/50">• {del}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Additional details based on active tab */}
              {activeTab === 0 && playbookPillars[0].packages && (
                <div>
                  <h4 className="text-lg text-white/80 mb-6">Packages & Pricing</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {playbookPillars[0].packages.map((pkg, index) => (
                      <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                        <h5 className="text-lg text-white/80 mb-2">{pkg.name}</h5>
                        <p className="text-2xl text-white/90 mb-4">{pkg.price}</p>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-1" />
                              <span className="text-xs text-white/60">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter specific details */}
              {activeTab === 1 && playbookPillars[1].contentPlan && (
                <div>
                  <h4 className="text-lg text-white/80 mb-6">Plan de contenu éditorial</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(playbookPillars[1].contentPlan).map(([category, items]) => (
                      <div key={category} className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                        <h5 className="text-sm text-white/70 mb-3 capitalize">{category}</h5>
                        <ul className="space-y-1">
                          {items.map((item, i) => (
                            <li key={i} className="text-xs text-white/50">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Platforms specific details */}
              {activeTab === 2 && playbookPillars[2].platforms && (
                <div>
                  <h4 className="text-lg text-white/80 mb-6">Stratégie par plateforme</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {playbookPillars[2].platforms.map((platform, index) => (
                      <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                        <h5 className="text-lg text-white/80 mb-2">{platform.name}</h5>
                        <p className="text-xl text-white/90 mb-4">{platform.revenue}</p>
                        <div className="space-y-2 mb-4">
                          {platform.strategy.map((item, i) => (
                            <p key={i} className="text-xs text-white/60">• {item}</p>
                          ))}
                        </div>
                        <p className="text-xs text-white/40 italic">{platform.optimization}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Synergy Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 mb-16"
        >
          <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">EFFETS DE SYNERGIE</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {synergyEffects.map((effect, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                <h4 className="text-sm text-white/80 mb-2">{effect.title}</h4>
                <p className="text-xs text-white/50 mb-4">{effect.description}</p>
                <p className="text-xs text-white/40 font-mono">{effect.flow}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">GESTION DES RISQUES</h3>
          <div className="space-y-4">
            {risksMitigation.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-4 rounded-lg bg-white/[0.02] border border-white/10">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-sm text-white/80 mb-1">{item.risk}</h4>
                  <p className="text-xs text-white/50 mb-2">{item.mitigation}</p>
                  <span className={`text-xs ${
                    item.impact.includes('Faible') ? 'text-green-400' : 
                    item.impact.includes('Moyen') ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    Impact : {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}