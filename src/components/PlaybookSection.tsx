import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, DollarSign, Mail, ChevronRight, Check, 
  Download, Play, BarChart3, Zap, Globe, MessageSquare,
  TrendingUp, FileText, Rocket, Calendar
} from 'lucide-react';

export default function PlaybookSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeDetailLevel, setActiveDetailLevel] = useState(1);
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

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const playbookPillars = [
    {
      id: 'brand-content',
      title: 'Brand Content 360°',
      revenue: '24k€/mois',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      summary: "L'écosystème complet d'amplification pour les marques",
      metrics: {
        deals: '3-4/mois',
        price: '5-15k€/deal',
        margin: '70%'
      },
      overview: {
        proposition: "Pas juste des posts. Un écosystème d'amplification complet.",
        targets: "SaaS B2B, EdTech, FinTech, Agences premium",
        differentiator: "1.6M followers + Site média + Newsletter + Communauté",
        garanties: "Option pocket 5k€ = 1M de reach garanti sur cœur de cible"
      },
      phases: [
        {
          name: 'Setup (S1-2)',
          tasks: [
            'Créer media kit sur Bolt.new',
            'Site deck interactif en ligne',
            'CRM Notion + automation Lemlist',
            'LinkedIn Sales Navigator + bases emails',
            'Mapper 180 prospects qualifiés',
            'Définir process facturation (50% acompte)',
            'Templates contrats avec droits d\'usage'
          ],
          deliverables: ['Media kit pro', 'Pipeline CRM', '180 contacts enrichis', 'Process complet']
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
          deliverables: ['50 RDV qualifiés', '10 propositions', '3 deals signés']
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
          deliverables: ['3-4 campagnes/mois', 'NPS >8/10', '80% renouvellement']
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
        },
        {
          name: 'PARTNERSHIP ANNUEL',
          price: '150k€',
          includes: ['12 campagnes Ecosystem', 'Ambassadeur High Value', 'Co-création produit', 'Rubrique dédiée site', 'Data temps réel', 'Exclusivité sectorielle', 'Tous droits inclus']
        }
      ],
      scripts: {
        linkedin: "Bonjour [Prénom], j'ai vu votre post sur [sujet] - super insight ! Vous avez déjà exploré l'influence marketing auprès de 1.6M d'entrepreneurs ? On vient d'aider [Similar] à générer 250k€ de pipeline. 15min cette semaine ?",
        email: "Objet: Toucher 1.6M d'entrepreneurs qualifiés\n\n[Prénom], votre solution [Product] est parfaite pour notre audience. Nos 4 verticales éditoriales (Business, Mental, Culture, Story) nous permettent d'engager en profondeur. Case study en PJ. On échange ?",
        pocket_sponso: "Pour garantir 1M de reach sur votre cœur de cible, nous proposons un pocket sponsoring à 5k€. Sans cette option, performance organique uniquement, sans garantie de reach."
      },
      kpis: {
        reach: "Minimum 500k comptes touchés par campagne",
        engagement: "Taux d'engagement >4%",
        ctr: "CTR vers site client >2%",
        conversions: "Tracking complet avec pixel client"
      },
      process: {
        facturation: "50% à la signature, 50% à la livraison",
        droits: "Usage illimité des contenus pour le client",
        reporting: "Dashboard live + rapport final J+30",
        revision: "2 tours de modifications inclus"
      }
    },
    {
      id: 'skool-community',
      title: 'Skool Academy',
      revenue: '9k€/mois',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      summary: "Communauté premium et formation continue",
      metrics: {
        members: '150 @ 60€',
        ltv: '12 mois avg',
        churn: '<5%/mois'
      },
      overview: {
        proposition: "High Value Academy - Les 4 piliers du succès entrepreneurial",
        targets: "Entrepreneurs 25-45 ans, CSP+, mindset growth",
        differentiator: "Contenu exclusif + Lives Roger + Communauté active"
      },
      phases: [
        {
          name: 'Infrastructure (M-2)',
          tasks: [
            'Setup Skool avec 7 channels',
            'Gamification complète',
            'Créer 20 modules vidéo',
            'Onboarding automation',
            'Pricing strategy'
          ],
          deliverables: ['Plateforme ready', '20h de contenu', 'Funnel complet']
        },
        {
          name: 'Beta Test (M-1)',
          tasks: [
            'Recruter 30 beta testeurs',
            'Daily check-ins',
            'Itérer sur feedback',
            'Affiner le programme',
            'Préparer le launch'
          ],
          deliverables: ['Product-market fit', 'Testimonials', 'Launch plan']
        },
        {
          name: 'Launch & Scale (M1+)',
          tasks: [
            'Campaign launch 7 jours',
            'Lives hebdo (Lun/Mer/Ven)',
            'Animation quotidienne',
            'Challenges mensuels',
            'Success stories'
          ],
          deliverables: ['50 membres M1', '+25/mois après', 'NPS >9/10']
        }
      ],
      curriculum: [
        {
          pillar: 'BUSINESS MASTERY',
          modules: ['De l\'idée au premier million', 'Pricing psychologique', 'Automatisation business', 'Exit strategy']
        },
        {
          pillar: 'MENTAL FITNESS',
          modules: ['Détruire l\'imposteur', 'Morning routine millionnaire', 'Focus & productivité', 'Gestion du stress']
        },
        {
          pillar: 'CULTURE & TRENDS',
          modules: ['Décoder les tendances', 'Personal branding', 'Créativité systémique', 'Innovation mindset']
        },
        {
          pillar: 'STORY & IMPACT',
          modules: ['Storytelling puissant', 'Construire son narrative', 'Leadership authentique', 'Créer un mouvement']
        }
      ],
      retention: {
        garantie: "30 jours satisfait ou remboursé",
        bonus_inscription: ['Template Notion Business', '1 call 1-on-1 avec Roger', 'Accès groupe Mastermind'],
        challenges_mensuels: ['30 jours pour lancer', '30 jours 10k€', '30 jours viral'],
        rewards: ['Top contributor = coaching gratuit', 'Membre du mois = shoutout', 'Success story = interview podcast']
      }
    },
    {
      id: 'monetization-rs',
      title: 'Monétisation Multi-Canal',
      revenue: '6k€/mois',
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
          revenue: '2k€/mois',
          strategy: ['Creator Fund activation', 'Lives 3x/semaine', 'TikTok Shop affiliate', '30M vues/mois visées'],
          optimization: 'Posts 6h/12h/18h, Trending sounds, Durée 45-59s'
        },
        {
          name: 'Facebook',
          revenue: '2k€/mois',
          strategy: ['In-stream ads éligible France', 'Videos >3min priorité', 'Facebook Stars', 'Creator Bonus'],
          optimization: 'Format 4:5, Cross-post Instagram, Lives réguliers'
        },
        {
          name: 'Instagram',
          revenue: '0.5k€/mois',
          strategy: ['Pas de Play Bonus en France', 'Focus engagement', 'Redirection vers offres', 'User-generated content'],
          optimization: 'Stories 15/jour, Grid 3-3-3, Peak hours posting'
        },
        {
          name: 'YouTube',
          revenue: '1.5k€/mois',
          strategy: ['AdSense optimisé', 'Shorts Fund', 'Memberships 4.99€', 'Super Chat/Thanks'],
          optimization: 'Videos >8min, 3 Shorts daily, CTR >10%'
        },
        {
          name: 'Autres plateformes',
          revenue: '0.5k€/mois',
          strategy: ['Facebook Creator', 'LinkedIn Newsletter', 'X Ad Revenue', 'Pinterest beta'],
          optimization: 'Cross-posting intelligent, Automation Buffer'
        }
      ],
      contentStrategy: {
        monday: { vertical: 'Business', format: 'Long-form + Shorts', cta: 'Newsletter' },
        tuesday: { vertical: 'Mental', format: 'Live + Stories', cta: 'Skool' },
        wednesday: { vertical: 'Culture', format: 'Trend analysis', cta: 'Site article' },
        thursday: { vertical: 'Story', format: 'Behind scenes', cta: 'Podcast' },
        friday: { vertical: 'Mix', format: 'Best of week', cta: 'Multi' }
      }
    },
    {
      id: 'newsletter-site',
      title: 'Newsletter & Site Premium',
      revenue: '7k€/mois',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      summary: "Média digital et monétisation programmatique",
      metrics: {
        subscribers: '10k visés',
        visitors: '500k/mois',
        rpm: '3-5€'
      },
      overview: {
        proposition: "Le Financial Times des entrepreneurs francophones",
        targets: "Décideurs, entrepreneurs, CSP+, early adopters",
        differentiator: "4 verticales éditoriales + Paywall + Programmatique"
      },
      technical: {
        stack: ['Next.js + Vercel', 'Beehiiv Growth', 'Stripe Paywall', 'Google Ad Manager', 'Prebid.js'],
        seo: ['50 mots-clés cibles', '4 pillar pages/mois', 'Schema markup', 'Core Web Vitals >90'],
        monetization: ['Subscriptions 7.90€', 'Display ads GAM', 'Native Taboola', 'Affiliate 5%', 'Sponsored content']
      },
      newsletterStructure: {
        daily: [
          { section: 'Hook du jour', words: 50 },
          { section: 'Business insight', words: 200 },
          { section: 'Mental tip', words: 150 },
          { section: 'Culture trend', words: 150 },
          { section: 'Story inspirante', words: 100 },
          { section: 'CTA Premium', words: 50 }
        ],
        growth: 'Instagram swipe-ups, Lead magnets, Exit popups, Referral program',
        acquisition_payante: 'Facebook Ads (CAC cible 15€), Google Ads brand, Taboola native',
        partenaires: 'Morning, Time to Sign Off, Snowball pour cross-promo'
      },
      contentPlan: {
        business: ['Stratégies growth', 'Case studies', 'Outils et ressources', 'Interviews CEOs'],
        mental: ['Mindset exercises', 'Routines performance', 'Gestion stress', 'Focus tips'],
        culture: ['Trend analysis', 'Nouveaux usages', 'Tech émergente', 'Societal shifts'],
        story: ['Parcours inspirants', 'Behind the scenes', 'Failures stories', 'Lessons learned']
      },
      siteArchitecture: {
        pages: [
          '/business → Articles entrepreneuriat',
          '/mental → Contenus mindset',
          '/culture → Analyses tendances',
          '/story → Récits inspirants',
          '/academy → Gateway Skool',
          '/partners → Media kit brands'
        ],
        features: ['Paywall intelligent', 'Recommendations AI', 'Save for later', 'Dark mode', 'PWA mobile']
      }
    }
  ];

  const synergyEffects = [
    {
      title: "Funnel de conversion unifié",
      description: "Chaque contenu alimente tous les dispositifs",
      flow: "Content → Site → Newsletter → Skool → Brand deals"
    },
    {
      title: "Cross-selling automatique",
      description: "Un client brand devient membre Skool",
      flow: "Brand client → Success story → Community → Retention"
    },
    {
      title: "Data intelligence",
      description: "Insights audience pour optimisation continue",
      flow: "Analytics → Segmentation → Personalization → Conversion"
    },
    {
      title: "Network effects",
      description: "Plus de membres = Plus de valeur",
      flow: "Members → Content → Reach → New members"
    }
  ];

  const risksMitigation = [
    {
      risk: "Baisse des CPM plateformes",
      mitigation: "Diversification 6 plateformes + Focus brand content premium",
      impact: "Faible - max 20% du CA"
    },
    {
      risk: "Churn élevé Skool",
      mitigation: "Garantie 30j + Challenges + Rewards + Content exclusif continu",
      impact: "Moyen - surveillé weekly"
    },
    {
      risk: "Non renouvellement brands",
      mitigation: "ROI tracking + Success stories + Upsell partnership annuel",
      impact: "Gérable - pipeline constant"
    },
    {
      risk: "Saturation audience",
      mitigation: "Expansion internationale + Nouvelles verticales + B2B focus",
      impact: "Long terme only"
    }
  ];

  const techStack = {
    creation: ['Figma', 'Canva Pro', 'CapCut', 'Adobe Suite', 'Notion AI'],
    analytics: ['Google Analytics 4', 'Meta Business Suite', 'TikTok Analytics', 'Hotjar', 'Databox'],
    automation: ['Zapier', 'Make.com', 'Buffer', 'Later', 'Lemlist'],
    crm: ['Notion CRM custom', 'Calendly', 'Stripe', 'HelloSign', 'Slack'],
    site: ['Next.js', 'Vercel', 'Beehiiv', 'Google Ad Manager', 'Cloudflare']
  };

  const globalMetrics = {
    month1: { revenue: '15k€', focus: 'Brand content + Setup' },
    month3: { revenue: '25k€', focus: '+ Monétisation optimisée' },
    month6: { revenue: '35k€', focus: '+ Skool 100 membres' },
    month9: { revenue: '42k€', focus: '+ Newsletter 5k subs' },
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

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
          
          {/* Quick stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-white/70">4 dispositifs synchronisés</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-white/70">1.6M followers activés</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-white/70">ROI prouvé</span>
            </div>
          </div>
        </motion.div>

        {/* Global timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05]">
            <h3 className="text-sm font-light text-white/40 mb-6 tracking-[0.2em]">ROADMAP REVENUS</h3>
            <div className="flex justify-between items-end">
              {Object.entries(globalMetrics).map(([key, data], index) => (
                <div key={key} className="text-center">
                  <div className="text-xs text-white/40 mb-2 capitalize">{key.replace('month', 'Mois ')}</div>
                  <div className="text-2xl font-light text-white/90 mb-1">{data.revenue}</div>
                  <div className="text-xs text-white/50 max-w-[100px]">{data.focus}</div>
                  
                  {/* Progress bar */}
                  <div className="mt-4 h-24 w-2 mx-auto bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${(index + 1) * 20}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="w-full bg-gradient-to-t from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {playbookPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white/10 border-white/20'
                    : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${pillar.color} bg-opacity-20`}>
                    {pillar.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-light text-white/90">{pillar.title}</div>
                    <div className="text-sm text-white/50">{pillar.revenue}</div>
                  </div>
                </div>
                
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                )}
              </button>
            ))}
          </div>

          {/* Detail level selector */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm text-white/40">Niveau de détail :</span>
            <div className="flex gap-2">
              {[1, 2, 3].map(level => (
                <button
                  key={level}
                  onClick={() => setActiveDetailLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeDetailLevel === level
                      ? 'bg-white/10 text-white'
                      : 'bg-white/[0.02] text-white/50 hover:bg-white/[0.05]'
                  }`}
                >
                  {level === 1 ? 'Vue d\'ensemble' : level === 2 ? 'Plan d\'action' : 'Exécution détaillée'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active pillar content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Pillar header */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-light text-white mb-2">
                  {playbookPillars[activeTab].title}
                </h3>
                <p className="text-white/60">
                  {playbookPillars[activeTab].summary}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-light text-white/90">
                  {playbookPillars[activeTab].revenue}
                </div>
                <div className="text-sm text-white/40">objectif 12 mois</div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(playbookPillars[activeTab].metrics).map(([key, value]) => (
                <div key={key} className="p-4 rounded-lg bg-white/[0.02]">
                  <div className="text-xs text-white/40 mb-1 capitalize">{key}</div>
                  <div className="text-lg text-white/80">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 1: Overview */}
          {activeDetailLevel >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-light text-white/40 tracking-[0.2em]">VUE D'ENSEMBLE</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(playbookPillars[activeTab].overview).map(([key, value]) => (
                  <div key={key} className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <h5 className="text-sm text-white/40 mb-2 capitalize">{key}</h5>
                    <p className="text-white/70">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Level 2: Action Plan */}
          {activeDetailLevel >= 2 && playbookPillars[activeTab].phases && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-light text-white/40 tracking-[0.2em]">PLAN D'ACTION</h4>
              
              <div className="space-y-4">
                {playbookPillars[activeTab].phases.map((phase, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                  >
                    <button
                      onClick={() => toggleExpanded(`phase-${index}`)}
                      className="w-full flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <span className="text-white/60">{index + 1}</span>
                        </div>
                        <h5 className="text-lg text-white/80">{phase.name}</h5>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-white/40 transition-transform ${
                        expandedItems.has(`phase-${index}`) ? 'rotate-90' : ''
                      }`} />
                    </button>

                    {expandedItems.has(`phase-${index}`) && (
                      <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="text-sm text-white/40 mb-3">Tâches</h6>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-400 mt-0.5" />
                                <span className="text-sm text-white/70">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-sm text-white/40 mb-3">Livrables</h6>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                                <span className="text-sm text-white/70">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Level 3: Detailed Execution */}
          {activeDetailLevel >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-light text-white/40 tracking-[0.2em]">EXÉCUTION DÉTAILLÉE</h4>
              
              {/* Brand Content specific details */}
              {activeTab === 0 && (
                <>
                  {/* Packages */}
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">PACKAGES & PRICING</h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {playbookPillars[0].packages?.map((pkg, index) => (
                        <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <h6 className="text-lg text-white/80 mb-2">{pkg.name}</h6>
                          <div className="text-2xl text-white/90 mb-4">{pkg.price}</div>
                          <ul className="space-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="text-sm text-white/60">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scripts */}
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">SCRIPTS & TEMPLATES</h5>
                    <div className="space-y-4">
                      {Object.entries(playbookPillars[0].scripts || {}).map(([key, script]) => (
                        <div key={key} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-white/60 capitalize">{key.replace('_', ' ')} Template</span>
                            <button className="text-xs text-blue-400 hover:text-blue-300">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                          <pre className="text-sm text-white/70 whitespace-pre-wrap font-mono">
                            {script}
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KPIs & Process */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm text-white/40 mb-4">KPIs GARANTIS</h5>
                      <div className="space-y-3">
                        {Object.entries(playbookPillars[0].kpis || {}).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                            <span className="text-sm text-white/60 capitalize">{key}</span>
                            <span className="text-sm text-white/80">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm text-white/40 mb-4">PROCESS COMMERCIAL</h5>
                      <div className="space-y-3">
                        {Object.entries(playbookPillars[0].process || {}).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                            <span className="text-sm text-white/60 capitalize">{key}</span>
                            <span className="text-sm text-white/80">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Skool specific details */}
              {activeTab === 1 && (
                <>
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">CURRICULUM COMPLET</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      {playbookPillars[1].curriculum?.map((pillar, index) => (
                        <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <h6 className="text-lg text-white/80 mb-4">{pillar.pillar}</h6>
                          <ul className="space-y-2">
                            {pillar.modules.map((module, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Play className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-white/70">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Retention Strategy */}
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">STRATÉGIE DE RÉTENTION</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <h6 className="text-sm text-white/60 mb-3">Garanties & Bonus</h6>
                        <p className="text-sm text-white/80 mb-3">{playbookPillars[1].retention?.garantie}</p>
                        <ul className="space-y-2">
                          {playbookPillars[1].retention?.bonus_inscription.map((bonus, i) => (
                            <li key={i} className="text-sm text-white/70">• {bonus}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <h6 className="text-sm text-white/60 mb-3">Challenges & Rewards</h6>
                        <div className="mb-4">
                          <p className="text-xs text-white/40 mb-2">Challenges mensuels</p>
                          {playbookPillars[1].retention?.challenges_mensuels.map((challenge, i) => (
                            <span key={i} className="text-xs text-white/60 block">• {challenge}</span>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs text-white/40 mb-2">Système de rewards</p>
                          {playbookPillars[1].retention?.rewards.map((reward, i) => (
                            <span key={i} className="text-xs text-white/60 block">• {reward}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Monetization specific details */}
              {activeTab === 2 && (
                <>
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">STRATÉGIE PAR PLATEFORME</h5>
                    <div className="space-y-4">
                      {playbookPillars[2].platforms?.map((platform, index) => (
                        <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h6 className="text-lg text-white/80">{platform.name}</h6>
                              <p className="text-sm text-white/50 mt-1">{platform.optimization}</p>
                              {platform.cpm_reel && (
                                <p className="text-xs text-blue-400 mt-2">CPM : {platform.cpm_reel}</p>
                              )}
                            </div>
                            <div className="text-xl text-white/90">{platform.revenue}</div>
                          </div>
                          <ul className="space-y-2">
                            {platform.strategy.map((item, i) => (
                              <li key={i} className="text-sm text-white/60">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm text-white/40 mb-4">CALENDRIER ÉDITORIAL</h5>
                    <div className="grid grid-cols-5 gap-4">
                      {Object.entries(playbookPillars[2].contentStrategy || {}).map(([day, content]) => (
                        <div key={day} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-xs text-white/40 mb-2 capitalize">{day}</div>
                          <div className="text-sm text-white/80 mb-1">{content.vertical}</div>
                          <div className="text-xs text-white/50">{content.format}</div>
                          <div className="text-xs text-blue-400 mt-2">→ {content.cta}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Newsletter & Site specific details */}
              {activeTab === 3 && (
                <>
                  <div>
                    <h5 className="text-sm text-white/40 mb-4">STACK TECHNIQUE</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(playbookPillars[3].technical || {}).map(([key, items]) => (
                        <div key={key} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <h6 className="text-sm text-white/60 mb-3 capitalize">{key}</h6>
                          <ul className="space-y-2">
                            {items.map((item: string, i: number) => (
                              <li key={i} className="text-sm text-white/70">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm text-white/40 mb-4">ARCHITECTURE SITE</h5>
                    <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h6 className="text-sm text-white/60 mb-3">Pages</h6>
                          <ul className="space-y-2">
                            {playbookPillars[3].siteArchitecture?.pages.map((page: string, i: number) => (
                              <li key={i} className="text-sm text-white/70 font-mono">{page}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-sm text-white/60 mb-3">Features</h6>
                          <ul className="space-y-2">
                            {playbookPillars[3].siteArchitecture?.features.map((feature: string, i: number) => (
                              <li key={i} className="text-sm text-white/70">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm text-white/40 mb-4">PLAN DE CONTENU PAR VERTICALE</h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(playbookPillars[3].contentPlan || {}).map(([vertical, topics]) => (
                        <div key={vertical} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <h6 className="text-sm text-white/80 mb-3 capitalize">{vertical}</h6>
                          <ul className="space-y-1">
                            {(topics as string[]).map((topic: string, i: number) => (
                              <li key={i} className="text-xs text-white/60">• {topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Synergy section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">L'EFFET ÉCOSYSTÈME</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {synergyEffects.map((effect, index) => (
              <div key={index} className="p-6 rounded-lg bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05]">
                <h4 className="text-white/80 mb-2">{effect.title}</h4>
                <p className="text-sm text-white/50 mb-4">{effect.description}</p>
                <div className="flex items-center gap-2 text-xs text-blue-400">
                  {effect.flow.split(' → ').map((step, i) => (
                    <React.Fragment key={i}>
                      <span>{step}</span>
                      {i < effect.flow.split(' → ').length - 1 && <ChevronRight className="w-3 h-3" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risks & Mitigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-16"
        >
          <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">RISQUES & MITIGATION</h3>
          
          <div className="space-y-4">
            {risksMitigation.map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-white/80">{item.risk}</h4>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    item.impact.includes('Faible') ? 'bg-green-500/20 text-green-400' :
                    item.impact.includes('Moyen') ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm text-white/60">{item.mitigation}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-lg font-light text-white/40 mb-8 tracking-[0.2em]">TECH STACK COMPLET</h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(techStack).map(([category, tools]) => (
              <div key={category} className="p-6 rounded-lg bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05]">
                <h4 className="text-sm text-white/60 mb-4 capitalize">{category}</h4>
                <ul className="space-y-2">
                  {tools.map((tool, i) => (
                    <li key={i} className="text-sm text-white/70">• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05]">
            <Rocket className="w-12 h-12 text-purple-400" />
            <div>
              <h3 className="text-2xl font-light text-white mb-2">
                365 actions. 12 mois. 46k€/mois.
              </h3>
              <p className="text-white/50 max-w-2xl">
                Ce playbook n'est pas théorique. C'est exactement ce que nous allons exécuter. 
                Chaque action est planifiée, budgétée, assignée. La machine est prête à démarrer.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Télécharger le playbook complet
              </button>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-blue-500/30 transition-all">
                Voir la simulation financière
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}