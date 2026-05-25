"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useI18n } from "@/lib/i18n/useI18n";
import { useIsMobile } from "@/lib/useIsMobile";
import { LanyardVisual } from "./LanyardVisual";
import { StandVisual } from "./StandVisual";

export function BoothSection() {
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
    restDelta: 0.001,
  });

  const eyebrowOpacity = useTransform(smoothProgress, [0.05, 0.18], [0, 1]);
  const titleOpacity = useTransform(smoothProgress, [0.08, 0.22], [0, 1]);
  const titleY = useTransform(smoothProgress, [0.08, 0.22], [40, 0]);
  const subOpacity = useTransform(smoothProgress, [0.12, 0.25], [0, 0.75]);
  const subY = useTransform(smoothProgress, [0.12, 0.25], [24, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="booth"
      style={{
        background: "var(--section-bg)",
        color: "var(--section-fg)",
        borderTop: "1px solid var(--section-hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "clamp(80px, 8vw, 140px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 4,
        transition: "background 0.4s ease, color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "clamp(48px, 6vw, 96px)",
          width: "100%",
          maxWidth: 900,
        }}
      >
        <motion.div
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.75rem, 1vw, 0.88rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E0A93A",
            marginBottom: "clamp(14px, 1.6vw, 22px)",
            opacity: eyebrowOpacity,
          }}
        >
          {dict.sections.booth.eyebrow}
        </motion.div>
        <motion.h2
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          {dict.sections.booth.title}
        </motion.h2>
        <motion.p
          style={{
            marginTop: "clamp(18px, 2vw, 28px)",
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 300,
            fontSize: "clamp(1rem, 1.3vw, 1.18rem)",
            lineHeight: 1.6,
            color: "inherit",
            opacity: subOpacity,
            y: subY,
          }}
        >
          {dict.sections.booth.sub}
        </motion.p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(0, 1fr)",
          gap: isMobile ? "clamp(24px, 5vw, 40px)" : "clamp(28px, 3vw, 48px)",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        <BoothCard
          visual={<LanyardVisual />}
          product={dict.boothProducts.lanyard}
          scanLabel={dict.boothProducts.scanLabel}
          smoothProgress={smoothProgress}
          start={0.22}
        />
        <BoothCard
          visual={<StandVisual />}
          product={dict.boothProducts.stand}
          scanLabel={dict.boothProducts.scanLabel}
          smoothProgress={smoothProgress}
          start={0.3}
        />
      </div>
    </motion.section>
  );
}

function BoothCard({
  visual,
  product,
  scanLabel,
  smoothProgress,
  start,
}: {
  visual: React.ReactNode;
  product: { name: string; scanTo: string; body: string };
  scanLabel: string;
  smoothProgress: ReturnType<typeof useSpring>;
  start: number;
}) {
  const opacity = useTransform(smoothProgress, [start, start + 0.15], [0, 1]);
  const y = useTransform(smoothProgress, [start, start + 0.15], [40, 0]);

  return (
    <motion.div
      style={{
        background: "var(--section-card-bg)",
        border: "1px solid var(--section-hairline)",
        borderRadius: "var(--radius-cards)",
        padding: "clamp(28px, 3vw, 48px)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(20px, 2.5vw, 32px)",
        minHeight: 520,
        opacity,
        y,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 260,
        }}
      >
        {visual}
      </div>

      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 700,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#E0A93A",
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(224,169,58,0.3)",
            background: "rgba(224,169,58,0.08)",
            marginBottom: "clamp(14px, 1.6vw, 22px)",
          }}
        >
          <span>{scanLabel}</span>
          <span style={{ opacity: 0.5 }}>→</span>
          <span>{product.scanTo}</span>
        </div>
        <h3
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(12px, 1.4vw, 18px)",
            color: "inherit",
            textTransform: "uppercase",
            fontFamily: "var(--font-stack-sans), sans-serif",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)",
            lineHeight: 1.6,
            color: "inherit",
            opacity: 0.72,
            margin: 0,
          }}
        >
          {product.body}
        </p>
      </div>
    </motion.div>
  );
}
