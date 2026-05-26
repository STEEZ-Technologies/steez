"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BoothSection } from "@/components/booth/BoothSection";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import HeroGeometric from "@/components/ui/hero-geometric";
import PricingSection from "@/components/pricing/PricingSection";
import { Services } from "@/components/services/Services";
import { Nav } from "@/components/hero/Nav";
import { useI18n } from "@/lib/i18n/useI18n";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const { dict } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const color2 = isDark ? "#000000" : "#F0F9FF";

  return (
    <main ref={containerRef} style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Nav />
        </div>
      </div>

      <div className="wrapper">
        <HeroGeometric
          title1="STEEZ"
          title2={dict.hero.title2}
          description={dict.hero.description}
          color1="#019d86"
          color2={color2}
          speed={1}
        />

        <Services />
        <BoothSection />
        <PricingSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
