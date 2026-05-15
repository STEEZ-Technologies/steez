"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback, type CSSProperties } from "react";

const MODELS = [
  {
    file: "/models/water_pump.glb",
    name: "GX-2000 Centrifugal Pump",
    cat: "Industrial · Jiangsu AquaTech",
    spec: "Flow: 2,000 m³/h · Head: 120 m · Power: 185 kW",
  },
  {
    file: "/models/astralux_sewing_machine.glb",
    name: "Astralux Pro Sewing Machine",
    cat: "Textile Manufacturing · Astralux",
    spec: "Speed: 5,000 RPM · Auto-thread · Digital tension control",
  },
  {
    file: "/models/modern_kitchen_tap.glb",
    name: "Modern Kitchen Tap Series",
    cat: "Hardware & Fixtures",
    spec: "360° swivel · Ceramic valve · Chrome / matte finish",
  },
  {
    file: "/models/shower_head.glb",
    name: "Premium Shower Head",
    cat: "Bathroom Hardware",
    spec: "120mm face · 5 spray modes · Anti-lime nozzles",
  },
];

const BG = "#F0EDE4";
const INTERVAL_MS = 4500;

const Scene = dynamic(
  () => import("./ProductScene").then((m) => ({ default: m.ProductScene })),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "rgba(14,45,36,0.35)",
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Loading 3D Model…
        </span>
      </div>
    ),
  },
);

export function ProductViewer() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  const total = MODELS.length;
  const model = MODELS[idx];

  const goTo = useCallback(
    (next: number) => {
      setIdx(next);
      setFadeKey((k) => k + 1);
    },
    [],
  );

  const prev = () => goTo((idx - 1 + total) % total);
  const next = () => goTo((idx + 1) % total);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => goTo((idx + 1) % total), INTERVAL_MS);
    return () => clearInterval(id);
  }, [idx, paused, total, goTo]);

  return (
    <>
      {/* Canvas area */}
      <div
        style={{ position: "relative", height: "clamp(360px, 48vw, 560px)", background: BG }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Live badge */}
        <div style={badgeStyle}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6fc9a1", boxShadow: "0 0 6px #6fc9a1", display: "inline-block" }} />
          3D Preview
        </div>

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 24,
            zIndex: 10,
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            color: "rgba(14,45,36,0.4)",
            textTransform: "uppercase",
            pointerEvents: "none",
            fontWeight: 600,
          }}
        >
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Prev arrow */}
        <button onClick={prev} style={arrowStyle("left")}>&#8592;</button>

        {/* 3D Scene */}
        <div key={fadeKey} style={{ width: "100%", height: "100%", animation: "sceneIn 0.5s ease" }}>
          <Scene modelPath={model.file} />
        </div>

        {/* Next arrow */}
        <button onClick={next} style={arrowStyle("right")}>&#8594;</button>

        {/* Product label — dark gradient on light bg */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(20px, 3vw, 36px)",
            background: "linear-gradient(transparent, rgba(240,237,228,0.97))",
            pointerEvents: "none",
          }}
        >
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.22em", color: "#2e6b53", textTransform: "uppercase", fontWeight: 700 }}>
            {model.cat}
          </div>
          <div style={{ fontSize: "clamp(1rem, 2.2vw, 1.45rem)", fontWeight: 800, color: "#0e2d24", marginTop: 4, letterSpacing: "-0.01em" }}>
            {model.name}
          </div>
          <div style={{ fontSize: "0.78rem", color: "rgba(14,45,36,0.5)", marginTop: 3 }}>
            {model.spec}
          </div>
        </div>
      </div>

      {/* Dot + progress bar nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          padding: "14px 0 6px",
          background: BG,
        }}
      >
        {MODELS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              position: "relative",
              width: i === idx ? 32 : 8,
              height: 8,
              borderRadius: 999,
              background: i === idx ? "#0e2d24" : "rgba(14,45,36,0.18)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
              overflow: "hidden",
            }}
          >
            {i === idx && !paused && (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "#6fc9a1",
                  transformOrigin: "left center",
                  animation: `slideProgress ${INTERVAL_MS}ms linear`,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

const badgeStyle: CSSProperties = {
  position: "absolute",
  top: 18,
  left: 24,
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: "0.68rem",
  letterSpacing: "0.14em",
  color: "#2e6b53",
  textTransform: "uppercase",
  pointerEvents: "none",
  fontWeight: 600,
};

function arrowStyle(side: "left" | "right"): CSSProperties {
  return {
    position: "absolute",
    [side]: 16,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(14,45,36,0.15)",
    color: "#0e2d24",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(8px)",
    transition: "background 0.2s ease",
  };
}
