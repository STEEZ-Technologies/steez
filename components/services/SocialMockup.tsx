"use client";

import { motion } from "motion/react";
import { Iphone } from "@/components/ui/iphone";

const SCREEN_LEFT_PCT = (21.25 / 433) * 100;
const SCREEN_TOP_PCT = (19.25 / 882) * 100;
const SCREEN_WIDTH_PCT = (389.5 / 433) * 100;
const SCREEN_HEIGHT_PCT = (843.5 / 882) * 100;
const SCREEN_RADIUS_H_PCT = (55.75 / 389.5) * 100;
const SCREEN_RADIUS_V_PCT = (55.75 / 843.5) * 100;

export function SocialMockup() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "320px", margin: "0 auto" }}>
      <Iphone
        style={{
          filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.5)) drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: `${SCREEN_LEFT_PCT}%`,
          top: `${SCREEN_TOP_PCT}%`,
          width: `${SCREEN_WIDTH_PCT}%`,
          height: `${SCREEN_HEIGHT_PCT}%`,
          borderRadius: `${SCREEN_RADIUS_H_PCT}% / ${SCREEN_RADIUS_V_PCT}%`,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: "1.6%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "32%",
            aspectRatio: "10 / 3.2",
            background: "#000",
            borderRadius: "999px",
            zIndex: 10,
            boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.04)",
          }}
        />

        <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#050505" }}>
          {/* Header */}
          <div style={{ padding: "36px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#050505" }}>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", letterSpacing: "0.02em" }}>STEEZ_Official</div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 20, height: 20, border: "2px solid #fff", borderRadius: 4, opacity: 0.8 }} />
              <div style={{ width: 20, height: 20, border: "2px solid #fff", borderRadius: 10, opacity: 0.8 }} />
            </div>
          </div>

          {/* Profile Info */}
          <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: 12, background: "#050505" }}>
            <div style={{ width: 64, height: 64, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(45deg, #E0A93A 0%, #D88E22 50%, #B87211 100%)", padding: 3 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", border: "2px solid #050505", background: "#E0A93A" }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", color: "#fff", textAlign: "center" }}>
              <div><div style={{ fontWeight: 700, fontSize: "0.9rem" }}>142</div><div style={{ fontSize: "0.7rem", color: "#888" }}>Posts</div></div>
              <div><div style={{ fontWeight: 700, fontSize: "0.9rem" }}>10.2K</div><div style={{ fontSize: "0.7rem", color: "#888" }}>Followers</div></div>
              <div><div style={{ fontWeight: 700, fontSize: "0.9rem" }}>45</div><div style={{ fontSize: "0.7rem", color: "#888" }}>Following</div></div>
            </div>
          </div>

          <div style={{ padding: "0 16px 16px", color: "#e0e0e0", fontSize: "0.8rem", background: "#050505" }}>
            <div style={{ fontWeight: 600, color: "#fff" }}>STEEZ Exhibition Group</div>
            <div style={{ color: "#aaa", marginTop: 2 }}>Premium Digital Services 🌎</div>
            <a href="#" style={{ color: "#E0A93A", textDecoration: "none", fontWeight: 500, display: "block", marginTop: 4 }}>linktr.ee/steez</a>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#050505" }}>
            <div style={{ flex: 1, padding: "12px 0", borderBottom: "1px solid #fff", display: "flex", justifyContent: "center" }}>
              <div style={{ width: 20, height: 20, border: "2px solid #fff", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 2, padding: 2 }}>
                <div style={{ background: "#fff" }} /><div style={{ background: "#fff" }} /><div style={{ background: "#fff" }} /><div style={{ background: "#fff" }} />
              </div>
            </div>
            <div style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "center", opacity: 0.3 }}>
              <div style={{ width: 20, height: 20, border: "2px solid #fff", borderRadius: 4 }} />
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, flex: 1, background: "#050505" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                style={{
                  aspectRatio: "1",
                  background: i % 2 === 0 ? "#111" : "#1A1A1A",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${135 + i * 20}deg, rgba(224,169,58,0.1), transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
