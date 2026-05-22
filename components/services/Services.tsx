"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from "motion/react";
import { InteractivePhone } from "./InteractivePhone";
import { BrowserMockup } from "./BrowserMockup";
import { CatalogueTablet } from "./CatalogueTablet";
import { useIsMobile } from "@/lib/useIsMobile";
import { useHaptic } from "@/lib/useHaptic";

const AGENCY_SERVICES = [
  {
    eyebrow: "01 · Cards",
    title: "Digital Cards",
    about:
      "Scannable QR-linked profile pages with factory photos, map location, contact info, WeChat & QQ links, service list, about section, and a country-reach infographic. Bilingual EN · 中 · РУ · العربية. Dark / light mode. Share links built in.",
  },
  {
    eyebrow: "02 · Profiles",
    title: "Company Profiles",
    about:
      "Standalone microsites that present your factory, services, production capabilities, location and credentials in one polished page — branded as a profile, not a brochure. Buyers land on a site that closes the deal for you.",
  },
  {
    eyebrow: "03 · Catalogues",
    title: "Product Catalogues",
    about:
      "Interactive product catalogues replacing static PDFs. Optional 3D / AR product views on request, so buyers in Berlin, Riyadh or São Paulo can rotate, scale and inspect your products before they reach out.",
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001
  });

  const animatedScale = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [0.4, 0.94, 0.96, 0.92]);
  const animatedBorderRadius = useTransform(smoothProgress, [0, 0.35], ["160px", "var(--radius-largeelements)"]);
  const contentY = useTransform(smoothProgress, [0, 1], [20, -20]);
  
  // Use static values on mobile to avoid heavy layout repaints
  const scale = isMobile ? 1 : animatedScale;
  const borderRadius = isMobile ? "var(--radius-largeelements)" : animatedBorderRadius;
  
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
        marginTop: isMobile ? "var(--space-16)" : "var(--space-32)",
        marginBottom: isMobile ? "var(--space-16)" : "var(--space-32)",
        padding: "clamp(40px, 5vw, 72px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 30,
        transition: "background 0.4s ease, color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto",
        overflow: "hidden",
        perspective: "1200px"
      }}
    >
      <motion.div style={{ y: isMobile ? 0 : contentY, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <header style={{ textAlign: "center", marginBottom: "clamp(24px, 3vw, 40px)", width: "100%" }}>
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
        <motion.p
          style={{
            marginTop: "clamp(16px, 1.6vw, 24px)",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 300,
            fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
            lineHeight: 1.55,
            color: "inherit",
            opacity: useTransform(smoothProgress, [0.08, 0.18], [0, 0.75]),
            y: useTransform(smoothProgress, [0.08, 0.18], [24, 0]),
          }}
        >
          Three products. One stack. Built for Chinese exporters going global.
        </motion.p>
      </header>

      {isMobile ? (
        <MobileServiceTabs services={AGENCY_SERVICES} />
      ) : (
        <div className="w-full max-w-7xl flex flex-col gap-12 lg:gap-16">
          {AGENCY_SERVICES.map((service, i) => (
            <DesktopServiceRow
              key={service.title}
              service={service}
              index={i}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>
      )}
        </motion.div>
        </motion.section>
        );
        }

type Service = (typeof AGENCY_SERVICES)[number];

function DesktopServiceRow({
  service,
  index: i,
  smoothProgress,
}: {
  service: Service;
  index: number;
  smoothProgress: ReturnType<typeof useSpring>;
}) {
  const start = 0.15 + i * 0.15;
  const textX = useTransform(smoothProgress, [start, start + 0.2], [-60, 0]);
  const figureX = useTransform(smoothProgress, [start + 0.05, start + 0.25], [60, 0]);
  const textOpacity = useTransform(smoothProgress, [start, start + 0.15], [0, 1]);
  const figureOpacity = useTransform(smoothProgress, [start + 0.05, start + 0.2], [0, 1]);
  const figureScale = useTransform(smoothProgress, [start + 0.05, start + 0.25], [0.92, 1]);

  return (
    <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-24">
      <div className="flex w-full lg:w-1/2 lg:flex-1 lg:justify-end">
        <motion.div
          style={{ maxWidth: "460px", opacity: textOpacity, x: textX }}
          className="w-full text-center lg:text-left"
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E0A93A",
              marginBottom: "clamp(12px, 1.4vw, 18px)",
            }}
          >
            {service.eyebrow}
          </div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              color: "inherit",
              textTransform: "uppercase",
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
              lineHeight: 1.6,
              color: "inherit",
              opacity: 0.75,
              margin: 0,
            }}
          >
            {service.about}
          </p>
        </motion.div>
      </div>
      <div className="flex w-full lg:w-1/2 lg:flex-1 justify-center">
        <motion.div
          style={{
            width: "100%",
            maxWidth: i === 0 ? "340px" : "560px",
            opacity: figureOpacity,
            x: figureX,
            scale: figureScale,
          }}
        >
          {i === 0 && <InteractivePhone />}
          {i === 1 && <BrowserMockup />}
          {i === 2 && <CatalogueTablet />}
        </motion.div>
      </div>
    </div>
  );
}

function MobileServiceTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const haptic = useHaptic();
  const current = services[active];

  return (
    <div style={{ width: "100%", maxWidth: 520, margin: "0 auto" }}>
      <div
        role="tablist"
        aria-label="Services"
        style={{
          display: "flex",
          gap: 6,
          padding: 4,
          background: "rgba(250,249,245,0.05)",
          border: "1px solid var(--section-hairline)",
          borderRadius: 999,
          marginBottom: "clamp(24px, 4vw, 36px)",
        }}
      >
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                if (i !== active) haptic(8);
                setActive(i);
              }}
              style={{
                flex: 1,
                minHeight: 40,
                border: "none",
                cursor: "pointer",
                borderRadius: 999,
                background: isActive ? "#E0A93A" : "transparent",
                color: isActive ? "#1A1A1A" : "inherit",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background 0.2s ease, color 0.2s ease",
                opacity: isActive ? 1 : 0.7,
              }}
            >
              {s.title.split(" ").slice(-1)[0]}
            </button>
          );
        })}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "clamp(20px, 3vw, 28px)",
          minHeight: 280,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "100%",
              maxWidth: active === 0 ? 280 : 480,
            }}
          >
            {active === 0 && <InteractivePhone />}
            {active === 1 && <BrowserMockup />}
            {active === 2 && <CatalogueTablet />}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          style={{ textAlign: "center", padding: "0 8px" }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E0A93A",
              marginBottom: 10,
            }}
          >
            {current.eyebrow}
          </div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "0.9rem",
              color: "inherit",
              textTransform: "uppercase",
            }}
          >
            {current.title}
          </h3>
          <p
            style={{
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "inherit",
              opacity: 0.75,
              margin: 0,
            }}
          >
            {current.about}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}