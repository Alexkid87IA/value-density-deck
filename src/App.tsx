// src/App.tsx
import React from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";

// Sections
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import EcosystemSection from "./components/EcosystemSection";
import HighValueSchemaSection from "./components/HighValueSchemaSection"; // ← Ajout de l'import
import ViralToValueSection from "./components/ViralToValueSection";
import BusinessModelSection from "./components/BusinessModelSection";
import MetricsSection from "./components/MetricsSection";
import RoadmapSection from "./components/RoadmapSection";
import CTASection from "./components/CTASection";

export default function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex-1">
          <HeroSection />
          <VisionSection />
          <EcosystemSection />
          <HighValueSchemaSection /> {/* ← Ajout du composant ici */}
          <ViralToValueSection />
          <BusinessModelSection />
          <MetricsSection />
          <RoadmapSection />
          <CTASection />
        </div>
      </div>
    </SidebarProvider>
  );
}