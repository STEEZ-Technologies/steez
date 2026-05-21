"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "motion/react";

const BAR_DATA = [
  { month: "Jan", value: 52 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 84 },
  { month: "Apr", value: 74 },
  { month: "May", value: 96 },
  { month: "Jun", value: 100 },
];

const METRICS = [
  { label: "Total Scans", value: "1,247" },
  { label: "Countries", value: "38" },
  { label: "Avg. Session", value: "3m 42s" },
];

const REGIONS = [
  { label: "Middle East", pct: 38 },
  { label: "Russia", pct: 24 },
  { label: "Europe", pct: 18 },
  { label: "North America", pct: 12 },
  { label: "South America", pct: 8 },
];

const FEATURES = [
  { title: "Real-time scans", desc: "See every QR open within seconds, with device & locale fingerprinting." },
  { title: "Heat-map regions", desc: "Drill into city-level demand and spot emerging buyer hubs early." },
  { title: "Funnel exports", desc: "Push scan → form → reply data straight to your CRM via webhook." },
];

export function Analytics() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const textOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);
  const textX = useTransform(smoothProgress, [0.1, 0.3], [-60, 0]);
  
  const cardOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const cardY = useTransform(smoothProgress, [0.2, 0.45], [100, 0]);
  const cardScale = useTransform(smoothProgress, [0.2, 0.45], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        borderTop: "1px solid var(--hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 4,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        <motion.div style={{ opacity: textOpacity, x: textX }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E0A93A",
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}
          >
            03 — Data &amp; Analytics
          </div>
          <h2
            style={{
              fontFamily: "var(--font-stack-sans), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.6vw, 3.8rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "inherit",
              textTransform: "uppercase",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Buyer Intelligence
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
              lineHeight: 1.65,
              color: "inherit",
              opacity: 0.7,
              marginTop: "clamp(24px, 3vw, 40px)",
              maxWidth: 480,
            }}
          >
            Every scan, dwell-time, and region tracked. Your STEEZ dashboard
            shows exactly who opened your card, how long they spent, and where
            in the world they are — so you know which markets are heating up
            before your competitors do.
          </p>

          <div
            style={{
              marginTop: "clamp(32px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 2vw, 24px)",
              maxWidth: 480,
            }}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  paddingTop: "clamp(14px, 1.5vw, 18px)",
                  borderTop: "1px solid var(--hairline)",
                  opacity: useTransform(smoothProgress, [0.3 + i * 0.05, 0.4 + i * 0.05], [0, 1]),
                  y: useTransform(smoothProgress, [0.3 + i * 0.05, 0.4 + i * 0.05], [20, 0]),
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "var(--radius-buttons)",
                    background: "rgba(224,169,58,0.15)",
                    color: "#E0A93A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  +
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                      color: "inherit",
                      marginBottom: 4,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(0.82rem, 1vw, 0.92rem)",
                      color: "inherit",
                      opacity: 0.6,
                      lineHeight: 1.55,
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}>
          <div
            style={{
              background: "var(--card-bg, rgba(250,249,245,0.05))",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-cards)",
              padding: "var(--space-32)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-28)",
              transition: "background 0.4s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "clamp(12px, 1.4vw, 18px)",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "inherit",
                  opacity: 0.55,
                }}
              >
                STEEZ Dashboard · Aurora Home
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#1D9E75",
                    boxShadow: "0 0 0 4px rgba(29,158,117,0.18)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(0.62rem, 0.85vw, 0.74rem)",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#1D9E75",
                  }}
                >
                  Live
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "var(--icon-bg, rgba(250,249,245,0.07))",
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--radius-inputs)",
                    padding: "clamp(10px,1.5vw,16px)",
                    transition: "background 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
                      color: "inherit",
                      lineHeight: 1.1,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                      color: "inherit",
                      opacity: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: 4,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                  color: "inherit",
                  opacity: 0.45,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                Buyer Scans by Month
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
                {BAR_DATA.map((d) => (
                  <div
                    key={d.month}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <motion.div
                      style={{
                        width: "100%",
                        height: useTransform(smoothProgress, [0.3, 0.5], ["0%", `${d.value}%`]),
                        background: "#E0A93A",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: "inherit",
                        opacity: 0.4,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {d.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                  color: "inherit",
                  opacity: 0.45,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                }}
              >
                Buyers by Region
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {REGIONS.map((r) => (
                  <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 110,
                        fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
                        color: "inherit",
                        opacity: 0.65,
                        flexShrink: 0,
                      }}
                    >
                      {r.label}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        background: "var(--hairline)",
                        borderRadius: 999,
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        style={{
                          width: useTransform(smoothProgress, [0.35, 0.55], ["0%", `${r.pct}%`]),
                          height: "100%",
                          background: "#E0A93A",
                          borderRadius: 999,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: 34,
                        textAlign: "right",
                        fontSize: "clamp(0.68rem, 0.9vw, 0.78rem)",
                        color: "inherit",
                        opacity: 0.5,
                        flexShrink: 0,
                      }}
                    >
                      {r.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

