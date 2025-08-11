import { useEffect, useRef, useState } from "react";

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  // Auto-progression du workflow
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveWorkflow((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Intersection Observer amélioré
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              document.querySelectorAll('.animate-item').forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('visible');
                }, i * 100);
              });
            }, 200);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax mouse effect amélioré
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

  // Production data avec détails complets
  const productionItems = [
    { 
      freq: "15×", 
      type: "Articles Discover", 
      detail: "600-900 mots",
      color: "from-blue-500/20 to-cyan-500/10",
      impact: "Mass traffic",
      fullDetails: {
        objectif: "Génération de trafic massif & monétisation AdSense",
        strategie: "Le TikTok des articles : viraux, accrocheurs, émotionnels",
        production: "45 min/article • IA + rédaction humaine",
        distribution: "Google Discover • Push Chrome • Notifications",
        lifecycle: "J1-J7 : Trafic Discover → J8+ : Optimisation SEO",
        monetisation: "AdSense • Affiliation • Lead capture",
        kpis: "100K vues/article top • CTR 8-12% • RPM 15-25€",
        workflow: "Trending topic → Hook viral → Rédaction IA → Édition humaine → Image HD → Publication → Monitoring"
      }
    },
    { 
      freq: "1×", 
      type: "Récit signature", 
      detail: "1 500 mots",
      color: "from-purple-500/20 to-pink-500/10",
      impact: "Authority content",
      fullDetails: {
        objectif: "Contenus premium haute valeur • Positionnement éditorial",
        equipe: "4 rédacteurs IA spécialisés (Mindset, Business, Culture, Société)",
        format: "Narration immersive • Enquête • Interview • Analyse",
        production: "Recherche IA → Script → Rédaction → Fact-checking",
        visuels: "Midjourney + Creative Commons + Unsplash premium",
        distribution: "Homepage hero • Newsletter VIP • LinkedIn article",
        engagement: "15 min temps de lecture • 70% completion • 5% share rate",
        monetisation: "Sponsored content premium • Product placement"
      }
    },
    { 
      freq: "2×", 
      type: "Carrousels sociaux", 
      detail: "8-20 slides",
      color: "from-orange-500/20 to-red-500/10",
      impact: "3M reach/mois",
      fullDetails: {
        objectif: "Viralité social media • Lead generation ManyChat",
        structure: "Hook → Value bombs → Slide autopromo → CTA ManyChat",
        production: "Idée humaine → Texte IA → Design Canva → Images CC/IA",
        distribution: "Instagram • LinkedIn • Facebook • Pinterest",
        automation: "ManyChat → Content bonus exclusif → Email capture",
        templates: "10 templates Canva optimisés par format",
        performance: "Save rate 12% • Share rate 8% • DM rate 3%",
        conversion: "1K leads/carrousel viral • 40% open rate emails"
      }
    },
    { 
      freq: "2×", 
      type: "Daily LinkedIn", 
      detail: "Matin + Après-midi",
      color: "from-blue-600/20 to-indigo-500/10",
      impact: "B2B authority",
      fullDetails: {
        objectif: "Thought leadership • Personal branding • B2B networking",
        formats: "AM: Review matinale de l'actu • PM: Prise de position",
        tonalite: "Pro mais accessible • Data-driven • Storytelling",
        structure: "Hook controversé → Développement → Stats → Question",
        engagement: "Commentaires experts • Partages C-level • DM qualifiés",
        growth: "+500 followers/mois • 100K impressions/post top",
        monetisation: "Consulting leads • Speaking opportunities",
        best_time: "8h30 & 17h30 (heure Paris)"
      }
    },
    { 
      freq: "1×", 
      type: "Thread X", 
      detail: "Best of carrousel",
      color: "from-gray-500/20 to-slate-500/10",
      impact: "Viral potential",
      fullDetails: {
        objectif: "Adaptation du meilleur carrousel du jour en thread",
        structure: "10-15 tweets • Autopromo tweets 5 & 10 • CTA final",
        strategie: "Repurposing intelligent • A/B test de hooks",
        media: "1 visual par thread • GIFs réactions • Memes",
        engagement: "QRT pour amplification • Spaces pour approfondir",
        growth: "Followers qualifiés • List additions • Topic authority",
        timing: "Peak hours : 9h, 13h, 21h",
        automation: "Typefully scheduling • Analytics tracking"
      }
    },
    { 
      freq: "1×", 
      type: "Journal vidéo", 
      detail: "90 secondes",
      color: "from-red-500/20 to-pink-500/10",
      impact: "85% completion",
      fullDetails: {
        objectif: "Rendez-vous quotidien • Format snackable premium",
        concept: "5 infos essentielles du jour • Rythme ultra-dynamique",
        production: "Script IA → Voix off pro → B-roll (stock + IA) → Motion design",
        montage: "Cuts rapides • Sous-titres burned-in • Sound design",
        distribution: "TikTok • Reels • Shorts • X video • LinkedIn",
        optimisation: "Vertical 9:16 • Hook 3 sec • Pattern interrupt /10 sec",
        performance: "1M views/mois cumulées • 85% retention • 10% share",
        monetisation: "Brand integration • Product placement subtle"
      }
    },
    { 
      freq: "1×", 
      type: "15 min de trajet", 
      detail: "Audio story 7h",
      color: "from-green-500/20 to-emerald-500/10",
      impact: "Drive time hero",
      fullDetails: {
        objectif: "Companion content • Routine matinale • Fidélisation",
        concept: "Histoire incroyable quotidienne pour accompagner le trajet",
        format: "Roger solo • Script IA + incarnation vocale unique",
        production: "Recherche → Script 2000 mots → Recording → Edit léger",
        diffusion: "7h précises • Spotify • Apple • Google Podcasts",
        narration: "Immersif • Cinématique • Cliffhangers • Sound design",
        audience: "25-45 ans urbains • Commuters • Early birds",
        engagement: "90% completion • Habitude quotidienne • Community"
      }
    },
    { 
      freq: "1×/sem", 
      type: "HV Podcast", 
      detail: "45 min premium",
      color: "from-purple-600/20 to-violet-500/10",
      impact: "Deep engagement",
      fullDetails: {
        objectif: "Interviews exclusives • Deep dives • Thought leadership",
        production: "Riverside.fm • Studio pro pour VIP • Montage modéré",
        format: "Intro 2min → Guest intro 3min → Deep dive 35min → Closing 5min",
        invites: "Entrepreneurs • Artistes • Penseurs • Game changers",
        preparation: "Brief 10 questions • Research pack • Tech check",
        distribution: "Podcast platforms • YouTube version • Clips sociaux",
        monetisation: "Sponsors premium • Patreon exclusive • Masterclass upsell",
        community: "Discord VIP • Live chat • After show Spaces"
      }
    },
    { 
      freq: "1×/sem", 
      type: "YouTube HQ", 
      detail: "Production TV",
      color: "from-red-600/20 to-orange-500/10",
      impact: "Premium content",
      fullDetails: {
        objectif: "Contenus longs premium • Multi-format exploitation",
        production: "Qualité broadcast • Multi-cam • Éclairage pro • 4K",
        script: "Structure pour découpage : 1 long = 10 shorts + 1 article",
        segments: "Teaser → Intro → 3-4 chapters → Conclusion → CTA",
        optimisation: "Thumbnails A/B • Chapitres • End screens • Cards",
        repurposing: "Shorts • Reels • Clips LinkedIn • Citations • Article",
        monetisation: "YouTube Partner • Sponsors • Affiliate • Products",
        analytics: "Retention curves • Traffic sources • Click-through rate"
      }
    },
    { 
      freq: "4×/sem", 
      type: "Twitch Live", 
      detail: "Community streams",
      color: "from-purple-500/20 to-pink-500/10",
      impact: "Live engagement",
      fullDetails: {
        objectif: "Communauté live • Réactions à chaud • Behind the scenes",
        formats: "React actu • Q&A • Work sessions • Gaming culture",
        schedule: "Mar/Jeu 20h (public) • Lun/Ven 18h (members only)",
        duree: "2-3h par stream • Segments 30 min",
        interaction: "Chat premium • Polls • Channel points • Sub perks",
        monetisation: "Subs • Bits • Donations • Sponsors stream",
        exclusive: "Sub-only VODs • Discord access • Emotes custom",
        growth: "Raids • Hosts • Collabs • Clips viral TikTok"
      }
    },
    { 
      freq: "1×/mois", 
      type: "Masterclass", 
      detail: "90 min premium",
      color: "from-amber-500/20 to-yellow-500/10",
      impact: "Premium learning",
      fullDetails: {
        objectif: "Formation premium • Monétisation directe • Authority",
        format: "Live interactif 90 min • Q&A 30 min • Networking après",
        access: "Members only (Tier 2+) • Replay 30 jours • Workbook PDF",
        themes: "Growth • IA • Création • Mindset • Business • Innovation",
        production: "Zoom webinar • Slides Pitch • Polls live • Breakout rooms",
        bonus: "Certificate • Resources pack • Discord VIP • 1-on-1 lottery",
        pricing: "Inclus Tier 2 (49€/m) • Guest pass 99€ • Bundle 3 = 249€",
        upsell: "Consulting • Coaching group • Products • Annual membership"
      }
    }
  ];

  // Workflow steps avec animations
  const workflowSteps = [
    { 
      title: "Repérage IA", 
      desc: "Perplexity, Trends, X",
      detail: "Analyse prédictive des tendances émergentes"
    },
    { 
      title: "Brief express", 
      desc: "Angle, sources, hooks",
      detail: "Structuration narrative en 15 minutes"
    },
    { 
      title: "Création assistée", 
      desc: "l'IA accélère, la rédaction imprime le ton",
      detail: "Synergie humain-machine optimale"
    },
    { 
      title: "Studios multimédia", 
      desc: "plateau vidéo, design, mastering",
      detail: "Production broadcast-ready"
    },
    { 
      title: "Diffusion synchronisée", 
      desc: "effet halo garanti",
      detail: "Amplification cross-platform instantanée"
    }
  ];

  // Metrics avec animations
  const metrics = [
    { 
      value: "50", 
      label: "impressions cumulées", 
      suffix: "M",
      growth: "+127%",
      sparkline: [20, 25, 28, 35, 42, 50]
    },
    { 
      value: "100", 
      label: "lecteurs réguliers", 
      suffix: "K",
      growth: "+83%",
      sparkline: [40, 55, 65, 75, 85, 100]
    },
    { 
      value: "60", 
      label: "rétention moyenne", 
      suffix: "%",
      growth: "+22pp",
      sparkline: [38, 42, 48, 52, 56, 60]
    },
    { 
      value: "150", 
      label: "leads qualifiés", 
      suffix: "K",
      growth: "+195%",
      sparkline: [30, 50, 70, 90, 120, 150]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="ecosystem" 
      className="relative min-h-screen py-32 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Dynamic constellation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {isVisible && [...Array(6)].map((_, i) => (
          <g key={i}>
            <circle
              cx={`${20 + i * 15}%`}
              cy={`${30 + Math.sin(i) * 20}%`}
              r="2"
              fill="rgba(255,255,255,0.3)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{animationDelay: `${i * 0.3}s`}}
            />
            {i < 5 && (
              <line
                x1={`${20 + i * 15}%`}
                y1={`${30 + Math.sin(i) * 20}%`}
                x2={`${35 + i * 15}%`}
                y2={`${30 + Math.sin(i + 1) * 20}%`}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                className="animate-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title avec effet de glitch subtil */}
        <div className={`mb-16 animate-item transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white/90 max-w-5xl relative">
            <span className="relative inline-block">
              L'atelier infini : 
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg" />
            </span>{" "}
            <span className="bg-gradient-to-br from-white via-white/90 to-blue-500/70 bg-clip-text text-transparent">
              notre écosystème créatif haute fréquence
            </span>
          </h2>
        </div>

        {/* Intro avec stats live */}
        <div className={`mb-20 animate-item transition-all duration-1200 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/50">Live • 24/7 production</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/50">2.3s avg. response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/50">127 pays touchés</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl">
            Chaque jour, la galaxie High Value s'allume. Nos radars IA captent les tendances, 
            nos plumes les transforment en contenus haute densité, et nos studios donnent chair aux idées.
            <span className="block mt-4 text-white/80 font-normal">
              Résultat : une machine créative qui tourne 24h/24 — jamais la même étoile, toujours de l'impact.
            </span>
          </p>
        </div>

        {/* Production quotidienne - Cards interactives avec modal */}
        <div className={`mb-24 animate-item transition-all duration-1200 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-lg font-light text-white/40 tracking-[0.2em]">PRODUCTION QUOTIDIENNE</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-white/40">Mise à jour en temps réel</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productionItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] transition-all duration-700 hover:scale-[1.02] hover:border-white/[0.1] cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-light bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                          {item.freq}
                        </span>
                        <span className="text-xs text-white/30">/ jour</span>
                      </div>
                      <div className="text-xs text-green-500/60 font-light">{item.impact}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                      <div className="w-1 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  <h4 className="text-base text-white/80 font-normal mb-2 group-hover:text-white transition-colors">
                    {item.type}
                  </h4>
                  <p className="text-sm text-white/40 font-light group-hover:text-white/60 transition-colors">
                    {item.detail}
                  </p>
                  
                  <div className="mt-4 text-xs text-blue-400/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    Cliquer pour détails →
                  </div>
                </div>

                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-white/5 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Workflow - Timeline interactive */}
        <div className={`mb-24 animate-item transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">WORKFLOW EN 5 ÉTAPES</h3>
          
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-12 left-0 right-0 h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 rounded-full"
                style={{ width: `${(activeWorkflow + 1) * 20}%` }}
              />
            </div>
            
            <div className="grid grid-cols-5 gap-6">
              {workflowSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer"
                  onClick={() => setActiveWorkflow(index)}
                >
                  {/* Node */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 mx-auto relative transition-all duration-700 ${
                      activeWorkflow === index ? 'scale-110' : ''
                    }`}>
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                        activeWorkflow === index 
                          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                          : 'bg-white/[0.02] border border-white/[0.05]'
                      }`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-sm font-light transition-colors mb-1 ${
                          activeWorkflow === index ? 'text-blue-400' : 'text-white/40'
                        }`}>
                          STEP
                        </span>
                        <span className={`text-2xl font-light transition-colors ${
                          activeWorkflow === index ? 'text-blue-400' : 'text-white/40'
                        }`}>
                          {index + 1}
                        </span>
                      </div>
                      {/* Pulse effect for active */}
                      {activeWorkflow === index && (
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/20 animate-ping" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className={`text-sm font-medium mb-2 transition-colors ${
                      activeWorkflow === index ? 'text-white' : 'text-white/60'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/40 font-light leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <p className={`text-xs font-light leading-relaxed transition-all duration-500 ${
                      activeWorkflow === index 
                        ? 'text-blue-400/80 opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objectifs 12 mois - Metrics avec graphiques */}
        <div className={`animate-item transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-lg font-light text-white/40 mb-12 tracking-[0.2em]">OBJECTIFS 12 MOIS</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/[0.05] transition-all duration-700 hover:border-white/[0.1] cursor-pointer"
                onMouseEnter={() => setHoveredMetric(index)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                {/* Mini sparkline */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <svg width="40" height="20" className="overflow-visible">
                    <polyline
                      points={metric.sparkline.map((v, i) => `${i * 8},${20 - (v / Math.max(...metric.sparkline)) * 18}`).join(' ')}
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-light transition-all duration-500 ${
                      hoveredMetric === index 
                        ? 'bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                        : 'text-white/80'
                    }`}>
                      {metric.value}
                    </span>
                    <span className="text-2xl text-white/40 font-light">{metric.suffix}</span>
                  </div>
                  <p className="text-sm text-white/50 font-light mb-2">{metric.label}</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M3 7L6 4L9 7" stroke="rgb(34, 197, 94)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                    </svg>
                    <span className="text-xs text-green-500/60">{metric.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA amélioré */}
        <div className={`text-center mt-24 animate-item transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-sm text-white/40 max-w-md">
              Notre infrastructure créative génère <span className="text-white/60 font-medium">2,400 contenus/mois</span> avec 
              un taux d'engagement moyen de <span className="text-white/60 font-medium">8.7%</span>
            </p>
            
            <button
              onClick={() => {
                const businessElement = document.getElementById('business');
                if (businessElement) {
                  businessElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-500"
            >
              <span className="text-sm font-light tracking-wider text-white/70 group-hover:text-white transition-colors">
                Explorer le modèle économique
              </span>
              <svg 
                className="w-4 h-4 transition-all duration-500 group-hover:translate-x-2 text-white/50 group-hover:text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal détails */}
      {expandedCard !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-8"
          onClick={() => setExpandedCard(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-2xl border border-white/10 p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              onClick={() => setExpandedCard(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-light text-white/90">
                    {productionItems[expandedCard].freq}
                  </span>
                  <span className="text-sm text-white/40">/ jour</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-1">
                  {productionItems[expandedCard].type}
                </h3>
                <p className="text-white/60">{productionItems[expandedCard].detail}</p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Detailed info */}
              <div className="space-y-4">
                {Object.entries(productionItems[expandedCard].fullDetails).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <span className="text-xs text-white/40 uppercase tracking-wider">
                        {key.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-white/70 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all">
                  Voir les analytics
                </button>
                <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all">
                  Accéder au template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating particles améliorées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, rgba(59, 130, 246, ${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-advanced ${15 + Math.random() * 15}s infinite`,
              animationDelay: `${i * 0.2}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-advanced {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translate(30px, -30px) scale(1.2);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-20px, 20px) scale(0.8);
            opacity: 0.4;
          }
          75% { 
            transform: translate(40px, 10px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        .animate-item {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .animate-item.visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}