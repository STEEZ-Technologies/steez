"use client";

import { useRef } from "react";
import { Analytics } from "@/components/analytics/Analytics";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import PricingSection from "@/components/pricing/PricingSection";
import { Services } from "@/components/services/Services";
import { Nav } from "@/components/hero/Nav";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        <Hero />

        <Services />
        <Analytics />
        <PricingSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
