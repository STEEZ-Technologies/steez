"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { FadeIn } from "@/components/shared/FadeIn";

import { RevealCardContainer, IdentityCardBody } from "@/components/ui/reveal-card";

const AGENCY_SERVICES = [
  {
    title: "Business Cards",
    about: "Digital-first identity systems for global manufacturers. Scan once, connect forever.",
  },
  {
    title: "Digital Forms",
    about: "Smart RFQs and inquiry flows that route buyer data directly to your sales pipeline.",
  },
  {
    title: "Catalogues",
    about: "Immersive 3D and AR showrooms that allow buyers to experience products anywhere.",
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress: topProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(topProgress, [0, 0.5], [0.3, 0.95]);

  return (
    <motion.section
      ref={containerRef}
      id="services"
      style={{
        background: "var(--section-bg)",
        color: "var(--section-fg)",
        borderTop: "1px solid var(--section-hairline)",
        borderRadius: "var(--radius-cards)",
        scale,
        transformOrigin: "top center",
        marginTop: "var(--space-80)",
        marginBottom: "var(--space-80)",
        padding: "var(--space-120) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 3,
        transition: "background 0.4s ease, color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <FadeIn
        delay={0}
        y={40}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)", width: "100%" }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0A93A",
            marginBottom: "clamp(12px, 1.5vw, 20px)",
          }}
        >
          02 — Services
        </div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          What We Build
        </h2>
      </FadeIn>

      {/* THE FIX: Unified wrapper that strictly centers itself */}
      <div className="w-full max-w-7xl flex flex-col gap-24 lg:gap-32">
        {AGENCY_SERVICES.map((service, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div
              key={service.title}
              className={`flex w-full flex-col items-center justify-between gap-12 lg:gap-24 ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text Block */}
              {/* Added dynamic justification so the text "hugs" the middle gap on wide screens */}
              <div className={`flex w-full lg:w-1/2 lg:flex-1 ${isReversed ? "lg:justify-start" : "lg:justify-end"}`}>
                <FadeIn 
                  delay={i * 0.1} 
                  x={isReversed ? 40 : -40} 
                  y={0}
                  className="w-full text-center lg:text-left"
                  style={{ maxWidth: "540px" }}
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
                      margin: 0, // Removed the problematic inline margin
                    }}
                  >
                    {service.about}
                  </p>
                </FadeIn>
              </div>

              {/* Figure Block (Visual Card) */}
              <div className={`flex w-full lg:w-1/2 lg:flex-1 ${isReversed ? "lg:justify-end" : "lg:justify-start"}`}>
                <FadeIn delay={i * 0.12} x={isReversed ? -40 : 40} y={0} style={{ width: '100%', maxWidth: '480px' }}>
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
                </FadeIn>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}