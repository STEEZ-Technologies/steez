"use client";

import { motion } from "motion/react";
import { QrPattern } from "./QrPattern";

export function LanyardVisual() {
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
        justifyContent: "flex-start",
        padding: "0 12px",
      }}
    >
      {/* Cord */}
      <div
        style={{
          width: 180,
          height: 80,
          borderRadius: "100% / 60%",
          borderTop: "2px solid #E0A93A",
          borderLeft: "2px solid #E0A93A",
          borderRight: "2px solid #E0A93A",
          borderBottom: "none",
          opacity: 0.6,
          marginBottom: -10,
        }}
      />

      {/* Clip */}
      <div
        style={{
          width: 14,
          height: 22,
          background: "rgba(250,249,245,0.4)",
          borderRadius: 3,
          marginBottom: 6,
          zIndex: 2,
        }}
      />

      {/* Badge card */}
      <motion.div
        whileHover={{ rotate: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{
          width: "100%",
          maxWidth: 200,
          aspectRatio: "0.66 / 1",
          background: "linear-gradient(160deg, #FAF9F5 0%, #ECEAE0 100%)",
          borderRadius: 14,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          color: "#04342C",
          boxShadow:
            "0 30px 60px -30px rgba(0,0,0,0.6), 0 10px 25px -10px rgba(0,0,0,0.4)",
          position: "relative",
        }}
      >
        {/* Header strip */}
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
          <span style={{ color: "#E0A93A" }}>· 思智</span>
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
          <QrPattern size={120} foreground="#04342C" background="#FAF9F5" />
        </div>

        {/* Name strip */}
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: "0.05em",
              marginBottom: 3,
            }}
          >
            WEI CHEN
          </div>
          <div
            style={{
              fontWeight: 500,
              fontSize: 8,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            Sales Director
          </div>
        </div>
      </motion.div>
    </div>
  );
}
