// src/pages/index.tsx (ou app/page.tsx selon ton setup)
import { useState, useEffect, Suspense, lazy } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Chargement direct (léger / critique au above-the-fold)
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";

// Lazy (sections plus lourdes)
const EcosystemSection = lazy(() => import("@/components/EcosystemSection"));
const HighValueSchemaSection = lazy(() => import("@/components/HighValueSchemaSection"));
const BusinessModelSection = lazy(() => import("@/components/BusinessModelSection"));
const PlaybookSection = lazy(() => import("@/components/PlaybookSection"));
const ViralToValueSection = lazy(() => import("@/components/ViralToValueSection"));
const MetricsSection = lazy(() => import("@/components/MetricsSection"));
const RoadmapSection = lazy(() => import("@/components/RoadmapSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  // Libellés → IDs du DOM
  const scrollToSection = (sectionName: string) => {
    const key = sectionName.toLowerCase().trim();

    const map: Record<string, string> = {
      hero: "hero",
      accueil: "hero",

      vision: "vision",

      "écosystème": "écosystème",
      ecosystem: "écosystème",

      schema: "high-value-schema",
      "schéma": "high-value-schema",
      "high value": "high-value-schema",
      "high-value": "high-value-schema",
      "high-value schema": "high-value-schema",

      business: "business-model",
      "business model": "business-model",

      playbook: "playbook",
      "plan d'exécution": "playbook",
      execution: "playbook",

      // Mécanisme Viral → Value
      mecanisme: "viral-to-value",
      "mécanisme": "viral-to-value",
      mechanism: "viral-to-value",
      "viral to value": "viral-to-value",

      kpis: "métriques",
      métriques: "métriques",
      metrics: "métriques",

      roadmap: "roadmap",

      impact: "investir",
      investir: "investir",
    };

    const id = map[key] || key;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll spy
  useEffect(() => {
    // Liste ordonnée pour que l'élément visible le plus "haut" prenne la priorité
    const ids = [
      "hero",
      "vision",
      "écosystème",
      "high-value-schema",
      "business-model",
      "playbook",
      "viral-to-value",
      "métriques",
      "roadmap",
      "investir",
    ];

    const onScroll = () => {
      const y = 200; // offset pour le haut de l'écran
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <AppSidebar onNavigate={scrollToSection} activeSection={activeSection} />

        {/* Zone principale */}
        <div className="flex-1 relative">
          {/* Trigger sidebar */}
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger className="w-8 h-8 bg-dark-900/80 hover:bg-dark-800/80 border border-dark-700/50 text-electric-blue/60 hover:text-electric-blue backdrop-blur-sm rounded-md transition-all duration-300" />
          </div>

          {/* Contenu */}
          <main className="relative">
            {/* HERO */}
            <section id="hero">
              <HeroSection onNavigate={scrollToSection} />
            </section>

            {/* VISION */}
            <section id="vision">
              <VisionSection />
            </section>

            {/* ÉCOSYSTÈME */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement de l'écosystème…</div>}>
              <section id="écosystème">
                <EcosystemSection />
              </section>
            </Suspense>

            {/* SCHÉMA HIGH VALUE */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement du schéma High Value…</div>}>
              <section id="high-value-schema">
                <HighValueSchemaSection />
              </section>
            </Suspense>

            {/* BUSINESS MODEL (remonté) */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement du modèle économique…</div>}>
              <section id="business-model">
                <BusinessModelSection />
              </section>
            </Suspense>

            {/* PLAYBOOK - Plan d'exécution détaillé */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement du playbook…</div>}>
              <section id="playbook">
                <PlaybookSection />
              </section>
            </Suspense>

            {/* VIRAL TO VALUE */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement du mécanisme de croissance…</div>}>
              <section id="viral-to-value">
                <ViralToValueSection />
              </section>
            </Suspense>

            {/* MÉTRIQUES (remonté) */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement des métriques…</div>}>
              <section id="métriques">
                <MetricsSection />
              </section>
            </Suspense>

            {/* ROADMAP */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement de la roadmap…</div>}>
              <section id="roadmap">
                <RoadmapSection />
              </section>
            </Suspense>

            {/* CTA / INVESTIR */}
            <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Chargement…</div>}>
              <section id="investir">
                <CTASection />
              </section>
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;