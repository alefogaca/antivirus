/*
 * Design: Neural Shield — Dark Cybersecurity with Green Matrix Accents
 * Palette: #0A0A0F (bg), #00FF88 (neon), #00D4FF (cyan), #FF4466 (danger)
 * Fonts: JetBrains Mono (display), Space Grotesk (body)
 */

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { IASection } from "@/components/IASection";
import { LimitationsSection } from "@/components/LimitationsSection";
import { LGPDSection } from "@/components/LGPDSection";
import { ScrumSection } from "@/components/ScrumSection";
import { BacklogSection } from "@/components/BacklogSection";
import { KanbanSection } from "@/components/KanbanSection";
import { MetricsSection } from "@/components/MetricsSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <IntroductionSection />
      <IASection />
      <LimitationsSection />
      <LGPDSection />
      <ScrumSection />
      <BacklogSection />
      <KanbanSection />
      <MetricsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
