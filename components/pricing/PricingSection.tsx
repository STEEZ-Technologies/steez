import NumberFlow from "@number-flow/react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { CheckIcon } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/lib/useIsMobile";
import { useI18n } from "@/lib/i18n/useI18n";

export default function PricingSection() {
  const isMobile = useIsMobile();
  const { dict } = useI18n();
  const b = dict.pricingBlock.bundle;
  const addons = dict.pricingBlock.addons;

  return (
    <section
      id="pricing"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        borderTop: "1px solid var(--hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 6,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>
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
            {dict.sections.pricing.eyebrow}
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
            {dict.sections.pricing.title}
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
              lineHeight: 1.65,
              color: "inherit",
              opacity: 0.7,
              marginTop: "clamp(16px, 2vw, 24px)",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            {dict.sections.pricing.sub}
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-20 items-center">
          {/* Main Bundle Card */}
          <BundleCard bundle={b} />

          {/* Add-ons Section */}
          <div className="w-full max-w-5xl">
            <h3 
              style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.05em",
                marginBottom: "24px",
                textAlign: isMobile ? "center" : "left",
                color: "#E0A93A"
              }}
            >
              {dict.pricingBlock.addonsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addons.map((addon, i) => (
                <div 
                  key={i}
                  style={{
                    padding: "24px",
                    borderRadius: "20px",
                    background: "var(--card-bg)",
                    border: "1px solid var(--hairline)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transition: "border-color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#E0A93A"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--hairline)"}
                >
                  <div className="flex justify-between items-center">
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{addon.name}</div>
                    <div style={{ fontWeight: 900, color: "#1D9E75", fontSize: "1rem" }}>{addon.price}</div>
                  </div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {addon.info}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-6 lg:gap-0 rounded-[var(--radius-smallercards)] border border-[var(--hairline)] bg-[var(--card-bg)] overflow-hidden"
          style={{
            marginTop: "clamp(48px, 6vw, 80px)",
          }}
        >
          {[
            { k: "Yearly", v: "Subscription model" },
            { k: "<24h", v: "Avg. response time" },
            { k: "4 langs", v: "EN · 中 · РУ · العربية" },
            { k: "7000¥", v: "Fixed base price" },
          ].map((t, i) => (
            <div
              key={t.k}
              className={i !== 0 ? "lg:border-l lg:border-[var(--hairline)]" : ""}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
                padding: "var(--space-32) var(--space-24)",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  color: "#E0A93A",
                  letterSpacing: "-0.01em",
                }}
              >
                {t.k}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                  fontWeight: 500,
                  color: "inherit",
                  opacity: 0.65,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {t.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BundleCard({ bundle }: { bundle: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) - 0.5;
    const yPct = ((e.clientY - rect.top) / rect.height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        width: "100%",
        maxWidth: "800px",
        borderRadius: "var(--radius-cards)",
        border: "1px solid #E0A93A",
        background: "rgba(224,169,58,0.07)",
        padding: "clamp(32px, 5vw, 64px)",
        position: "relative",
        boxShadow: "0 40px 100px -20px rgba(224, 169, 58, 0.25)",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: -14,
          left: "50%",
          transform: "translateX(-50%) translateZ(20px)",
          background: "#E0A93A",
          color: "#1A1A1A",
          fontSize: "0.75rem",
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "8px 24px",
          borderRadius: "99px",
          whiteSpace: "nowrap",
        }}
      >
        Best Value Bundle
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:items-start" style={{ transform: "translateZ(40px)" }}>
        <div className="flex-1">
          <div style={{ fontStyle: "italic", fontSize: "1.2rem", opacity: 0.6, marginBottom: 8 }}>{bundle.title}</div>
          <div style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", fontWeight: 900, lineHeight: 1, color: "inherit" }}>
            <span style={{ fontSize: "2rem", verticalAlign: "super", marginRight: 4 }}>¥</span>
            {bundle.price}
            <span style={{ fontSize: "1rem", opacity: 0.4, marginLeft: 8 }}>/YR</span>
          </div>
          <p style={{ fontSize: "1.1rem", opacity: 0.6, marginTop: 24, lineHeight: 1.5 }}>
            {bundle.desc}
          </p>
          <div style={{ marginTop: 40 }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "18px 48px",
                background: "#E0A93A",
                color: "#1A1A1A",
                borderRadius: "16px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                fontSize: "1rem"
              }}
            >
              {bundle.button}
            </a>
          </div>
        </div>

        <div style={{ width: 1, background: "var(--hairline-strong)", alignSelf: "stretch" }} className="hidden lg:block" />

        <div className="flex-1">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bundle.features.map((f: string, i: number) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon style={{ color: "#1D9E75", flexShrink: 0, marginTop: 4 }} size={20} />
                <span style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.85 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
