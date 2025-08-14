import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  useSidebar,
} from "@/components/ui/sidebar";
import { CustomSidebarTrigger } from "./CustomSidebarTrigger";

const navigationItems = [
  { 
    title: "Vision", 
    id: "vision",
    subtitle: "Pourquoi nous existons"
  },
  { 
    title: "Écosystème", 
    id: "ecosystem",
    subtitle: "Notre machine créative"
  },
  { 
    title: "Business Model", 
    id: "business",
    subtitle: "5 moteurs de revenus"
  },
  { 
    title: "Roadmap", 
    id: "roadmap",
    subtitle: "4 phases vers le succès"
  },
  { 
    title: "Métriques", 
    id: "metrics",
    subtitle: "Traction & projections"
  },
  { 
    title: "Investir", 
    id: "cta",
    subtitle: "Rejoindre l'aventure"
  },
];

interface AppSidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function AppSidebar({ onNavigate, activeSection }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate(sectionId);
    }
  };

  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // Calculate active section index
  const activeIndex = navigationItems.findIndex(item => isActive(item.id));

  // Version collapsed ultra-minimale
  if (collapsed) {
    return (
      <>
        <CustomSidebarTrigger />
        <Sidebar 
          className="w-[60px] !bg-[#050505] border-r border-white/[0.02] transition-all duration-700"
          style={{ backgroundColor: '#050505' }}
          collapsible="icon"
        >
        {/* Progress bar verticale */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.02]">
          <div 
            className="w-full bg-gradient-to-b from-electric-blue/60 via-electric-cyan/60 to-electric-blue/60 transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        <SidebarContent className="bg-transparent">
          {/* Logo minimal */}
          <div className="h-[60px] flex items-center justify-center border-b border-white/[0.02]">
            <div className="relative">
              <div className="text-sm font-light text-white/20">
                <span className="text-white/40">H</span>
                <span className="text-electric-blue/40">V</span>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <nav className="flex-1 py-8">
            <div className="flex flex-col items-center gap-6">
              {navigationItems.map((item, index) => {
                const isItemActive = isActive(item.id);
                
                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative group cursor-pointer"
                  >
                    {/* Active indicator */}
                    {isItemActive && (
                      <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-[60px] h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
                    )}
                    
                    {/* Dot */}
                    <div className={`
                      w-2 h-2 rounded-full transition-all duration-500
                      ${isItemActive 
                        ? 'bg-electric-blue/60 scale-150' 
                        : hoveredItem === item.id 
                          ? 'bg-white/30 scale-125' 
                          : 'bg-white/10'
                      }
                    `} />
                    
                    {/* Tooltip on hover */}
                    {hoveredItem === item.id && (
                      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#050505]/90 border border-white/10 rounded whitespace-nowrap pointer-events-none z-50">
                        <p className="text-xs text-white/80">{item.title}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Footer - Investment indicator */}
          <div className="h-[60px] flex items-center justify-center border-t border-white/[0.02]">
            <div className="relative">
              <div className="w-2 h-2 bg-electric-blue/30 rounded-full animate-pulse" />
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
      </>
    );
  }

  // Version ouverte
  return (
    <>
      <CustomSidebarTrigger />
      <Sidebar 
        className="w-80 !bg-[#050505]/95 backdrop-blur-md border-r border-white/[0.05] transition-all duration-700"
        style={{ backgroundColor: 'rgba(5, 5, 5, 0.95)' }}
        collapsible="icon"
      >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise-sidebar">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-sidebar)" />
        </svg>
      </div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 10%, rgba(56, 189, 248, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 80% 90%, rgba(125, 211, 252, 0.03) 0%, transparent 40%)
            `
          }}
        />
      </div>

      <SidebarContent className="bg-transparent relative z-10">
        {/* Header */}
        <div className="relative pt-6 pb-8 px-6">
          {/* Scroll progress - more visible */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/[0.05]">
            <div 
              className="h-full bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-blue transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Logo/Brand */}
          <div className="relative">
            <div className="flex items-baseline gap-3 mb-6">
              <h1 className="text-4xl font-light text-white/95">
                HIGH
              </h1>
              <span className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-electric-blue to-electric-cyan">
                VALUE
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
              
              <div className="space-y-2">
                <p className="text-sm font-light text-white/60">
                  Deck Investisseur
                </p>
                <p className="text-xs font-light text-white/40">
                  Bridge · 400k€ · 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Enhanced */}
        <nav className="px-3 pb-8">
          {/* Active indicator background */}
          {activeIndex !== -1 && (
            <div 
              className="absolute left-3 right-3 h-[72px] bg-gradient-to-r from-electric-blue/10 via-electric-blue/5 to-transparent rounded-lg transition-all duration-700"
              style={{ 
                top: `${180 + activeIndex * 76}px`,
              }}
            />
          )}

          <div className="space-y-1 relative">
            {navigationItems.map((item, index) => {
              const isItemActive = isActive(item.id);
              const isHovered = hoveredItem === item.id;
              
              return (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative cursor-pointer"
                >
                  {/* Hover background */}
                  {!isItemActive && isHovered && (
                    <div className="absolute inset-0 bg-white/[0.02] rounded-lg transition-all duration-500" />
                  )}

                  {/* Active indicator line */}
                  {isItemActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-electric-blue to-transparent rounded-r" />
                  )}
                  
                  <div className="relative px-4 py-4 transition-all duration-500">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className={`
                            text-xs font-light transition-all duration-500
                            ${isItemActive ? 'text-electric-blue' : 'text-white/30'}
                          `}>
                            0{index + 1}
                          </span>
                          <h3 className={`
                            text-base font-light tracking-wide transition-all duration-500
                            ${isItemActive ? 'text-white/95' : isHovered ? 'text-white/80' : 'text-white/60'}
                          `}>
                            {item.title}
                          </h3>
                        </div>
                        
                        {/* Progress indicator */}
                        <div className={`
                          w-2 h-2 rounded-full transition-all duration-500
                          ${isItemActive ? 'bg-electric-blue/60' : 'bg-white/10'}
                        `} />
                      </div>
                      
                      <p className={`
                        text-xs font-light pl-8 transition-all duration-500
                        ${isItemActive ? 'text-white/50' : 'text-white/30'}
                      `}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer - Investment CTA */}
        <div className="mt-auto p-6 border-t border-white/[0.05]">
          <div className="space-y-6">
            {/* Live metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-light text-white/40 uppercase tracking-wider">Impressions</p>
                <p className="text-lg font-light text-white/80">10M<span className="text-xs text-white/40">/mois</span></p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-light text-white/40 uppercase tracking-wider">Followers</p>
                <p className="text-lg font-light text-white/80">120K<span className="text-xs text-white/40">+</span></p>
              </div>
            </div>

            {/* Investment CTA - More prominent */}
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-electric-cyan/10 rounded-lg blur-xl group-hover:from-electric-blue/20 group-hover:to-electric-cyan/20 transition-all duration-700" />
              <div className="relative p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-light text-white/60">Bridge</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500/80 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/40">Ouvert</span>
                  </div>
                </div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan mb-3">
                  400k€
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-white/30">Ticket min.</p>
                    <p className="text-white/60">25k€</p>
                  </div>
                  <div>
                    <p className="text-white/30">Closing</p>
                    <p className="text-white/60">Mars 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
    </>
  );
}