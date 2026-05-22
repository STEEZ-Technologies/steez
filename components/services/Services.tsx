"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from "motion/react";
import { InteractivePhone } from "./InteractivePhone";
import { BrowserMockup } from "./BrowserMockup";
import { CatalogueTablet } from "./CatalogueTablet";
import { useIsMobile } from "@/lib/useIsMobile";
import { useHaptic } from "@/lib/useHaptic";
import { useI18n } from "@/lib/i18n/useI18n";

type ServiceKey = "cards" | "profiles" | "catalogues";
const SERVICE_KEYS: ServiceKey[] = ["cards", "profiles", "catalogues"];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { dict } = useI18n();

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
        padding: "clamp(80px, 8vw, 140px) clamp(20px, 4vw, 40px)",
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
          {dict.sections.services.eyebrow}
        </motion.div>
        <motion.h2
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
            opacity: useTransform(smoothProgress, [0.05, 0.15], [0, 1]),
            y: useTransform(smoothProgress, [0.05, 0.15], [40, 0]),
          }}
        >
          {dict.sections.services.title}
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
          {dict.sections.services.sub}
        </motion.p>
      </header>

      <ServiceTabs isMobile={isMobile} />
        </motion.div>
        </motion.section>
        );
        }

function ServiceTabs({ isMobile }: { isMobile: boolean }) {
  const [active, setActive] = useState(0);
  const haptic = useHaptic();
  const { dict } = useI18n();
  const items = SERVICE_KEYS.map((k) => dict.servicesItems[k]);
  const current = items[active];

  const mockupMax = active === 0 ? (isMobile ? 280 : 360) : isMobile ? 480 : 560;
  const PANEL_HEIGHT = isMobile ? 360 : 560;

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label={dict.sections.services.title}
        style={{
          display: "flex",
          gap: 6,
          padding: 4,
          background: "rgba(250,249,245,0.05)",
          border: "1px solid var(--section-hairline)",
          borderRadius: 999,
          marginBottom: "clamp(28px, 4vw, 48px)",
          maxWidth: 720,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {items.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={SERVICE_KEYS[i]}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                if (i !== active) haptic(8);
                setActive(i);
              }}
              style={{
                flex: 1,
                minHeight: 44,
                border: "none",
                cursor: "pointer",
                borderRadius: 999,
                background: isActive ? "#E0A93A" : "transparent",
                color: isActive ? "#1A1A1A" : "inherit",
                fontWeight: 700,
                fontSize: isMobile ? "0.72rem" : "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background 0.2s ease, color 0.2s ease",
                opacity: isActive ? 1 : 0.7,
              }}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Active panel — fixed height to prevent reflow on tab swap */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(0, 1fr)",
          gap: isMobile ? "clamp(20px, 4vw, 32px)" : "clamp(32px, 3.5vw, 56px)",
          alignItems: "center",
          height: isMobile ? "auto" : PANEL_HEIGHT,
          minHeight: PANEL_HEIGHT,
          paddingTop: isMobile ? "clamp(16px, 3vw, 24px)" : "clamp(24px, 3vw, 48px)",
          paddingBottom: isMobile ? "clamp(16px, 3vw, 24px)" : "clamp(24px, 3vw, 48px)",
        }}
      >
        {/* Mockup — fixed-height container, mockup scales-to-fit */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: PANEL_HEIGHT,
            position: "relative",
            order: isMobile ? 0 : active % 2 === 0 ? 0 : 1,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mockup-${active}`}
              initial={{ opacity: 0, y: 16, scale: 0.92, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, scale: 0.92, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "100%",
                maxWidth: mockupMax,
                maxHeight: PANEL_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {active === 0 && <InteractivePhone />}
              {active === 1 && <BrowserMockup />}
              {active === 2 && <CatalogueTablet />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Copy — fixed-height container, content cross-fades */}
        <div
          style={{
            height: isMobile ? "auto" : PANEL_HEIGHT,
            minHeight: isMobile ? 220 : PANEL_HEIGHT,
            position: "relative",
            display: "flex",
            alignItems: "center",
            order: isMobile ? 1 : active % 2 === 0 ? 1 : 0,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${active}`}
              initial={{
                opacity: 0,
                x: isMobile ? 0 : active % 2 === 0 ? 32 : -32,
                y: isMobile ? 12 : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                x: isMobile ? 0 : active % 2 === 0 ? -32 : 32,
                y: isMobile ? -12 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: isMobile ? "center" : "start",
                padding: isMobile ? "0 8px" : 0,
                maxWidth: 560,
                width: "100%",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(0.75rem, 1vw, 0.88rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#E0A93A",
                  marginBottom: "clamp(14px, 1.6vw, 22px)",
                }}
              >
                {current.eyebrow}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: isMobile
                    ? "clamp(2rem, 6.5vw, 2.6rem)"
                    : "clamp(2.6rem, 4.2vw, 3.8rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                  marginBottom: "clamp(14px, 1.6vw, 22px)",
                  color: "inherit",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-stack-sans), sans-serif",
                }}
              >
                {current.title}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: isMobile
                    ? "clamp(1rem, 3.5vw, 1.1rem)"
                    : "clamp(1.1rem, 1.4vw, 1.35rem)",
                  lineHeight: 1.6,
                  color: "inherit",
                  opacity: 0.78,
                  margin: 0,
                }}
              >
                {current.about}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  const { dict } = useI18n();
  const items = SERVICE_KEYS.map((k) => dict.servicesItems[k]);
  const mockups = [<InteractivePhone key="p" />, <BrowserMockup key="b" />, <CatalogueTablet key="c" />];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.45fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "clamp(16px, 1.8vw, 28px)",
        width: "100%",
        maxWidth: 1280,
        margin: "0 auto",
        minHeight: 720,
      }}
    >
      <BentoCard
        service={items[0]}
        mockup={mockups[0]}
        featured
        style={{ gridColumn: "1", gridRow: "span 2" }}
      />
      <BentoCard service={items[1]} mockup={mockups[1]} />
      <BentoCard service={items[2]} mockup={mockups[2]} />
    </div>
  );
}

type Service = { eyebrow: string; title: string; about: string };

function BentoCard({
  service,
  mockup,
  featured = false,
  style = {},
}: {
  service: Service;
  mockup: React.ReactNode;
  featured?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-cards)",
        border: "1px solid var(--section-hairline)",
        background: "var(--section-card-bg)",
        padding: featured ? "clamp(28px, 3vw, 44px)" : "clamp(20px, 2vw, 28px)",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: featured ? 320 : 180,
          marginBottom: featured ? 28 : 18,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: featured ? 320 : 260,
            pointerEvents: "none",
          }}
        >
          {mockup}
        </div>
      </div>

      <div>
        <div
          style={{
            fontWeight: 600,
            fontSize: featured ? "0.82rem" : "0.74rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0A93A",
            marginBottom: 10,
          }}
        >
          {service.eyebrow}
        </div>
        <h3
          style={{
            fontWeight: 800,
            fontSize: featured
              ? "clamp(1.9rem, 2.8vw, 2.6rem)"
              : "clamp(1.2rem, 1.6vw, 1.55rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: featured ? 14 : 10,
            color: "inherit",
            textTransform: "uppercase",
            fontFamily: "var(--font-stack-sans), sans-serif",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontWeight: 300,
            fontSize: featured ? "clamp(1rem, 1.15vw, 1.1rem)" : "0.9rem",
            lineHeight: 1.55,
            color: "inherit",
            opacity: 0.72,
            margin: 0,
          }}
        >
          {service.about}
        </p>
      </div>
    </motion.div>
  );
}

function HorizontalScroller() {
  const { dict } = useI18n();
  const items = SERVICE_KEYS.map((k) => dict.servicesItems[k]);
  const mockups = [<InteractivePhone key="p" />, <BrowserMockup key="b" />, <CatalogueTablet key="c" />];
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const haptic = useHaptic();

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = cardRefs.current.findIndex((el) => el === visible.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { root, threshold: [0.4, 0.6, 0.8] }
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  function scrollTo(i: number) {
    haptic(8);
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto", position: "relative" }}>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "clamp(20px, 2.4vw, 36px)",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          padding: "clamp(16px, 2vw, 28px) clamp(10vw, 12vw, 180px)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        {items.map((service, i) => (
          <motion.div
            key={SERVICE_KEYS[i]}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: "0 0 78%",
              maxWidth: 1080,
              scrollSnapAlign: "center",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "clamp(28px, 3.5vw, 64px)",
              alignItems: "center",
              borderRadius: "var(--radius-cards)",
              border: "1px solid var(--section-hairline)",
              background: "var(--section-card-bg)",
              padding: "clamp(32px, 3.5vw, 56px)",
              minHeight: 480,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: i === 0 ? 320 : 480, pointerEvents: "none" }}>
                {mockups[i]}
              </div>
            </div>
            <div style={{ textAlign: "start", maxWidth: 480 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#E0A93A",
                  marginBottom: 14,
                }}
              >
                {service.eyebrow}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 3.2vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                  color: "inherit",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-stack-sans), sans-serif",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                  lineHeight: 1.6,
                  color: "inherit",
                  opacity: 0.75,
                  margin: 0,
                }}
              >
                {service.about}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: "clamp(24px, 3vw, 36px)",
        }}
      >
        {items.map((_, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              aria-label={`Show service ${i + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => scrollTo(i)}
              style={{
                width: isActive ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: isActive ? "#E0A93A" : "var(--section-hairline)",
                transition: "width 0.25s ease, background 0.25s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function StickyScroll() {
  const { dict } = useI18n();
  const items = SERVICE_KEYS.map((k) => dict.servicesItems[k]);
  const mockups = [<InteractivePhone key="p" />, <BrowserMockup key="b" />, <CatalogueTablet key="c" />];
  const outerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length)));
      setActive((prev) => (prev === idx ? prev : idx));
    });
  }, [scrollYProgress, items.length]);

  const current = items[active];
  const mockup = mockups[active];

  return (
    <div
      ref={outerRef}
      style={{
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        height: `${items.length * 100}vh`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(40px, 5vw, 96px)",
            alignItems: "center",
            width: "100%",
            padding: "clamp(20px, 4vw, 40px)",
          }}
        >
          {/* Copy */}
          <div style={{ textAlign: "start", maxWidth: 540, position: "relative" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#E0A93A",
                marginBottom: 22,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
              <span style={{ width: 36, height: 1, background: "rgba(224,169,58,0.5)" }} />
              <span style={{ opacity: 0.7 }}>{current.eyebrow.replace(/^\d+\s*·\s*/, "")}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                  marginBottom: 22,
                  color: "inherit",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-stack-sans), sans-serif",
                }}
              >
                {current.title}
              </motion.h3>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`body-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(1rem, 1.25vw, 1.18rem)",
                  lineHeight: 1.65,
                  color: "inherit",
                  opacity: 0.75,
                  margin: 0,
                }}
              >
                {current.about}
              </motion.p>
            </AnimatePresence>

            {/* Progress dots */}
            <div style={{ display: "flex", gap: 10, marginTop: 36 }}>
              {items.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === active ? 36 : 10,
                    height: 4,
                    borderRadius: 999,
                    background: i === active ? "#E0A93A" : "var(--section-hairline)",
                    transition: "width 0.4s ease, background 0.4s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 480 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`mockup-${active}`}
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "100%",
                  maxWidth: active === 0 ? 340 : 560,
                  pointerEvents: "none",
                }}
              >
                {mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}