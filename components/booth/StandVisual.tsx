"use client";

import { motion } from "motion/react";
import { QrPattern } from "./QrPattern";

export function StandVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 260,
        aspectRatio: "1 / 1.4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 12px",
      }}
    >
      {/* Stand card */}
      <motion.div
        whileHover={{ rotate: 1.5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{
          width: "100%",
          maxWidth: 200,
          aspectRatio: "0.75 / 1",
          background: "linear-gradient(160deg, #FAF9F5 0%, #ECEAE0 100%)",
          borderRadius: 14,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          color: "#04342C",
          boxShadow:
            "0 30px 60px -30px rgba(0,0,0,0.6), 0 10px 25px -10px rgba(0,0,0,0.4)",
          position: "relative",
          transform: "perspective(800px) rotateX(-6deg)",
          transformOrigin: "bottom center",
          marginBottom: 0,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 800,
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>STEEZ</span>
          <span style={{ color: "#E0A93A" }}>CATALOGUE</span>
        </div>

        {/* QR */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QrPattern size={140} foreground="#04342C" background="#FAF9F5" />
        </div>

        {/* Bottom strip */}
        <div
          style={{
            fontWeight: 700,
            fontSize: 9,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.65,
            textAlign: "center",
          }}
        >
          Scan · 扫码 · امسح · Сканировать
        </div>
      </motion.div>

      {/* Base / stand foot */}
      <div
        style={{
          width: 120,
          height: 10,
          marginTop: 4,
          background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)",
          borderRadius: "50%",
          filter: "blur(4px)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
