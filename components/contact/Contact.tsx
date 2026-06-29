"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { useIsMobile } from "@/lib/useIsMobile";
import { useI18n } from "@/lib/i18n/useI18n";
import { useState, useEffect } from "react";
import { QrPattern } from "@/components/booth/QrPattern";

export function Contact() {
  const isMobile = useIsMobile();
  const { dict } = useI18n();
  const [selectedTier, setSelectedTier] = useState<string>("none");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes("package=essential")) setSelectedTier("essential");
      else if (hash.includes("package=growth")) setSelectedTier("growth");
      else if (hash.includes("package=active")) setSelectedTier("active");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        borderTop: "1px solid var(--hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 7,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <FadeIn
        delay={0}
        y={30}
        style={{ textAlign: "center", marginBottom: "clamp(32px, 4vw, 56px)" }}
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
          {dict.sections.contact.eyebrow}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {dict.sections.contact.title}
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
          gap: "clamp(24px, 4vw, 56px)",
          alignItems: "start",
        }}
      >
        {/* LEFT: Info + Contact Form */}
        <FadeIn delay={0.1} x={-30} y={0} style={{ order: isMobile ? 2 : 1, display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 24px)" }}>
          <div
            style={{
              background: "var(--card-bg, #FFFFFF)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-cards)",
              padding: "var(--card-padding)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-28)",
              transition: "background 0.4s ease",
            }}
          >
            {[
              { label: dict.contactBlock.info.phone, value: dict.contactBlock.values.phone },
              { label: dict.contactBlock.info.email, value: dict.contactBlock.values.email },
              { label: dict.contactBlock.info.hq, value: dict.contactBlock.values.hq },
            ].map((row, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#E0A93A",
                    marginBottom: 4,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    color: "inherit",
                    opacity: 0.8,
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Lead-Capture Form */}
          <div
            style={{
              background: "var(--card-bg, #FFFFFF)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-cards)",
              padding: "var(--card-padding)",
              transition: "background 0.4s ease",
            }}
          >
            <div
              style={{
                fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#E0A93A",
                marginBottom: 20,
              }}
            >
              Drop a Request
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => { e.preventDefault(); alert("Thanks for your request!"); }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input required placeholder="Name" style={{ width: "100%", padding: "12px 16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--hairline)", borderRadius: 8, color: "inherit", fontSize: "0.9rem" }} />
                <input required placeholder="Company" style={{ width: "100%", padding: "12px 16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--hairline)", borderRadius: 8, color: "inherit", fontSize: "0.9rem" }} />
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
                <input required placeholder="Email / WhatsApp / WeChat" style={{ width: "100%", padding: "12px 16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--hairline)", borderRadius: 8, color: "inherit", fontSize: "0.9rem" }} />
                <select 
                  value={selectedTier} 
                  onChange={(e) => setSelectedTier(e.target.value)}
                  style={{ width: "100%", padding: "12px 16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--hairline)", borderRadius: 8, color: "inherit", fontSize: "0.9rem", appearance: "none" }}
                >
                  <option value="none">Interested in...</option>
                  <option value="essential">Essential Tier</option>
                  <option value="growth">Growth Tier</option>
                  <option value="active">Active Tier</option>
                </select>
              </div>

              <textarea required placeholder="How can we help you?" rows={3} style={{ width: "100%", padding: "12px 16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--hairline)", borderRadius: 8, color: "inherit", fontSize: "0.9rem", resize: "none" }} />
              
              <button 
                type="submit" 
                style={{ 
                  marginTop: 8, 
                  padding: "14px 24px", 
                  background: "#E0A93A", 
                  color: "#1A1A1A", 
                  border: "none", 
                  borderRadius: 8, 
                  fontWeight: 800, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em", 
                  cursor: "pointer",
                  fontSize: "0.9rem"
                }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </FadeIn>

        {/* RIGHT: Map (square) + QR code */}
        <FadeIn delay={0.2} x={30} y={0} style={{ minWidth: 0, order: isMobile ? 1 : 2 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {/* Map — square */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "var(--radius-cards)",
                overflow: "hidden",
                border: "1px solid var(--hairline)",
                boxShadow: "0 20px 50px -20px rgba(0,0,0,0.12)",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Shangcheng+District+Hangzhou+Zhejiang+China&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STEEZ office location"
              />
            </div>

            {/* QR code */}
            <div
              style={{
                background: "var(--card-bg, #FFFFFF)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--radius-cards)",
                padding: "var(--card-padding)",
                transition: "background 0.4s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(12px, 1.6vw, 18px)",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#E0A93A",
                    marginBottom: 6,
                  }}
                >
                  {dict.contactBlock.wechat.scanLabel}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-stack-sans), sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "inherit",
                    margin: 0,
                  }}
                >
                  {dict.contactBlock.wechat.title}
                </h3>
              </div>

            <div
              style={{
                padding: "clamp(18px, 2vw, 28px)",
                background: "#FAF9F5",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--radius-smallercards)",
                display: "inline-flex",
                boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18)",
              }}
            >
              <QrPattern
                size={isMobile ? 200 : 240}
                foreground="#04342C"
                background="#FAF9F5"
              />
            </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "1px solid var(--hairline)",
                  background: "rgba(29,158,117,0.08)",
                  color: "inherit",
                  fontFamily: "var(--font-stack-sans), sans-serif",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "#1D9E75",
                    boxShadow: "0 0 0 4px rgba(29,158,117,0.18)",
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.05em" }}>
                  {dict.contactBlock.wechat.handle}
                </span>
                <span className="cn-text" lang="zh" style={{ fontWeight: 300, opacity: 0.6, fontSize: "0.8rem" }}>
                  微信
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.3}
        y={30}
        style={{
          maxWidth: 1100,
          margin: "clamp(32px, 4vw, 56px) auto 0",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {[
            dict.contactBlock.trust.response,
            dict.contactBlock.trust.onboarding,
            dict.contactBlock.trust.languages,
          ].map((b, i) => (
            <div
              key={i}
              style={{
                background: "var(--card-bg, #FFFFFF)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--radius-smallercards)",
                padding: "var(--space-28)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#E0A93A",
                }}
              >
                {b.k}
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  color: "inherit",
                  lineHeight: 1.15,
                }}
              >
                {b.v}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.82rem, 1vw, 0.92rem)",
                  color: "inherit",
                  opacity: 0.6,
                  lineHeight: 1.55,
                  marginTop: 4,
                }}
              >
                {b.d}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
