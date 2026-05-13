"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { FadeIn } from "@/components/shared/FadeIn";
import { COPY } from "@/lib/copy";
import { Numbers } from "@/components/numbers/Numbers";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section
      ref={containerRef}
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
        background: "var(--bg)",
        color: "var(--fg)",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          y,
          opacity,
          scale,
          padding: "0 clamp(20px, 4vw, 40px)",
        }}
      >
        <FadeIn delay={0.05} y={20}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              alignSelf: "center",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid var(--hairline-strong)",
              background: "var(--card-bg)",
              fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "inherit",
              marginBottom: "clamp(20px, 2.5vw, 32px)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1D9E75",
                boxShadow: "0 0 0 4px rgba(29,158,117,0.18)",
              }}
            />
            <span>Shenzhen · 思智</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "#E0A93A" }}>Open for 2026</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading"
            style={{
              fontSize: "var(--text-display)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: "var(--leading-display)",
              whiteSpace: "nowrap",
              width: "100%",
              textAlign: "center",
              margin: 0,
              textTransform: "uppercase",
              color: "inherit",
            }}
          >
            {COPY.hero.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p
            style={{
              color: "var(--fg)",
              opacity: 0.7,
              fontWeight: 300,
              textTransform: "lowercase",
              letterSpacing: "0.02em",
              lineHeight: "var(--leading-body-lg)",
              fontSize: "var(--text-body-lg)",
              maxWidth: "clamp(300px, 45vw, 520px)",
              margin: "var(--space-12) auto 0",
            }}
          >
            {COPY.hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <div
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)",
              fontWeight: 300,
              color: "#E0A93A",
              textAlign: "center",
              letterSpacing: "0.04em",
              marginTop: 8,
            }}
          >
            <span className="cn-text" lang="zh">
              思智
            </span>
            <span style={{ margin: "0 0.4em", opacity: 0.5 }}>·</span>
            <span className="cn-text" lang="zh">
              连接全球买家
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <div
            style={{
              marginTop: "clamp(28px, 3.5vw, 44px)",
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { en: "Digital cards", cn: "数字名片" },
              { en: "Buyer forms", cn: "买家表单" },
              { en: "AR catalogues", cn: "AR 目录" },
              { en: "Live analytics", cn: "实时分析" },
            ].map((chip) => (
              <span
                key={chip.en}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid var(--hairline)",
                  background: "var(--card-bg)",
                  fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
                  fontWeight: 500,
                  color: "inherit",
                  letterSpacing: "0.04em",
                }}
              >
                <span>{chip.en}</span>
                <span className="cn-text" lang="zh" style={{ opacity: 0.45 }}>
                  {chip.cn}
                </span>
              </span>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      <div style={{ position: "relative", zIndex: 3 }}>
        <Numbers />
      </div>
    </section>
  );
}
