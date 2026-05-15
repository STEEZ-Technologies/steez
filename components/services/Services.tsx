"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { RevealCardContainer, IdentityCardBody } from "@/components/ui/reveal-card";

const AGENCY_SERVICES = [
  {
    title: "Digital Business Cards",
    about:
      "Scannable QR-linked profile pages with factory photos, map location, contact info, WeChat & QQ links, service list, about section, and a country-reach infographic. Bilingual EN · 中 · РУ · العربية. Dark / light mode. Share links built in.",
  },
  {
    title: "Digital Company Profiles",
    about:
      "Standalone microsites that present your factory, services, production capabilities, location and credentials in one polished page — branded as a profile, not a brochure. Buyers land on a site that closes the deal for you.",
  },
  {
    title: "Digital Catalogues",
    about:
      "Interactive product catalogues replacing static PDFs. Optional 3D / AR product views on request, so buyers in Berlin, Riyadh or São Paulo can rotate, scale and inspect your products before they reach out.",
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // High-performance physics: Responsive but with "expensive" weight
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001
  });

  // INFINITE GROWTH LOGIC: 
  // 1. Starts at 40% scale.
  // 2. Expands to 94% (the "sweet spot") at 0.4 scroll.
  // 3. Continues a "micro-growth" to 96% through the middle to avoid hitting a "wall".
  // 4. Subtle shrink back to 92% as it exits.
  const scale = useTransform(smoothProgress, 
    [0, 0.4, 0.7, 1], 
    [0.4, 0.94, 0.96, 0.92]
  );

  // Unfurl the border radius more aggressively at the start
  const borderRadius = useTransform(
    smoothProgress,
    [0, 0.35],
    ["160px", "var(--radius-largeelements)"]
  );

  // Content Parallax: Moves the inner content slightly slower than the scroll
  const contentY = useTransform(smoothProgress, [0, 1], [50, -50]);
  
  return (
    <motion.section
      ref={containerRef}
      id="services"
      style={{
        background: "var(--section-bg)",
        color: "var(--section-fg)",
        borderTop: "1px solid var(--section-hairline)",
        borderRadius,
        scale,
        transformOrigin: "center center",
        marginTop: "var(--space-80)",
        marginBottom: "var(--space-80)",
        padding: "var(--space-120) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 30,
        transition: "background 0.4s ease, color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1800px", // Prevent it from getting too wide on ultra-wide screens
        margin: "var(--space-80) auto",
        overflow: "hidden",
        perspective: "1200px"
      }}
    >
      <motion.div style={{ y: contentY, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <header style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)", width: "100%" }}>
        <motion.div
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0A93A",
            marginBottom: "clamp(12px, 1.5vw, 20px)",
            opacity: useTransform(smoothProgress, [0, 0.1], [0, 1]),
            y: useTransform(smoothProgress, [0, 0.1], [20, 0]),
          }}
        >
          02 — Services
        </motion.div>
        <motion.h2
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
            opacity: useTransform(smoothProgress, [0.05, 0.15], [0, 1]),
            y: useTransform(smoothProgress, [0.05, 0.15], [40, 0]),
          }}
        >
          What We Build
        </motion.h2>
      </header>

      <div className="w-full max-w-7xl flex flex-col gap-24 lg:gap-32">
        {AGENCY_SERVICES.map((service, i) => {
          const isReversed = i % 2 === 1;
          // Calculate individual trigger points for each item based on its index
          const start = 0.15 + i * 0.15;
          const end = start + 0.25;
          
          return (
            <div
              key={service.title}
              className={`flex w-full flex-col items-center justify-between gap-12 lg:gap-24 ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text Block */}
              <div className={`flex w-full lg:w-1/2 lg:flex-1 ${isReversed ? "lg:justify-start" : "lg:justify-end"}`}>
                <motion.div 
                  style={{ 
                    maxWidth: "540px",
                    opacity: useTransform(smoothProgress, [start, start + 0.15], [0, 1]),
                    x: useTransform(smoothProgress, [start, start + 0.2], [isReversed ? 60 : -60, 0]),
                  }}
                  className="w-full text-center lg:text-left"
                >
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      marginBottom: "1.5rem",
                      color: "inherit",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                      lineHeight: 1.6,
                      color: "inherit",
                      opacity: 0.8,
                      margin: 0,
                    }}
                  >
                    {service.about}
                  </p>
                </motion.div>
              </div>

              {/* Figure Block (Visual Card) */}
              <div className={`flex w-full lg:w-1/2 lg:flex-1 ${isReversed ? "lg:justify-end" : "lg:justify-start"}`}>
                <motion.div 
                   style={{ 
                     width: '100%', 
                     maxWidth: '480px',
                     opacity: useTransform(smoothProgress, [start + 0.05, start + 0.2], [0, 1]),
                     x: useTransform(smoothProgress, [start + 0.05, start + 0.25], [isReversed ? -80 : 80, 0]),
                     scale: useTransform(smoothProgress, [start + 0.05, start + 0.25], [0.85, 1]),
                     rotateY: useTransform(smoothProgress, [start + 0.05, start + 0.25], [isReversed ? 15 : -15, 0]),
                   }}
                >
                  <RevealCardContainer
                    base={
                      <IdentityCardBody
                        fullName={service.title}
                        about={service.about}
                        scheme="plain"
                        displayAvatar={false}
                      />
                    }
                    overlay={
                      <IdentityCardBody
                        fullName={service.title}
                        about={service.about}
                        scheme="accented"
                        displayAvatar={false}
                      />
                    }
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
        </div>
        </motion.div>
        </motion.section>
        );
        }