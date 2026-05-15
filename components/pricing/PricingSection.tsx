import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { CheckIcon } from "lucide-react";
import { useState, useRef } from "react";

type Plan = "monthly" | "annually";

type PLAN = {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  annuallyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "basic",
    title: "Basic",
    desc: "Get online fast. One digital business card, bilingual, with a custom QR code.",
    monthlyPrice: 480,
    annuallyPrice: 4800,
    buttonText: "Get Started",
    features: [
      "1 digital business card",
      "Bilingual EN + 中",
      "Dark / light theme",
      "Custom QR code",
      "Share link",
      "Community support",
    ],
    link: "#contact",
  },
  {
    id: "standard",
    title: "Standard",
    desc: "For serious exporters. Card, forms, four languages, and quarterly analytics.",
    monthlyPrice: 1280,
    annuallyPrice: 12800,
    badge: "Most Chosen",
    buttonText: "Get Standard",
    features: [
      "1 card + 5 digital forms",
      "Full 4-language support",
      "Dark / light theme",
      "Quarterly analytics",
      "Priority support",
      "Custom QR + share link",
    ],
    link: "#contact",
  },
  {
    id: "premium",
    title: "Premium",
    desc: "The full STEEZ. Unlimited forms, 3D/AR catalogue, dedicated account manager.",
    monthlyPrice: 2880,
    annuallyPrice: 28800,
    buttonText: "Get Premium",
    features: [
      "Card + unlimited forms",
      "3D / AR catalogue",
      "All 4 languages",
      "Monthly analytics review",
      "Visitor geo-tracking",
      "Dedicated account manager",
    ],
    link: "#contact",
  },
];

export default function PricingSection() {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");

  return (
    <section
      id="pricing"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        borderTop: "1px solid var(--hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "var(--space-120) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 6,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>
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
            05 — Packages
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
            Pricing
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
              lineHeight: 1.65,
              color: "inherit",
              opacity: 0.7,
              marginTop: "clamp(16px, 2vw, 24px)",
            }}
          >
            One platform. Three plans. Built for Chinese exporters going global.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: "clamp(24px, 3vw, 36px)",
            }}
          >
            <button 
              onClick={() => setBillPlan("monthly")}
              style={{ 
                background: "transparent", 
                border: "none", 
                cursor: "pointer",
                fontSize: "0.95rem", 
                fontWeight: 500, 
                color: "inherit", 
                opacity: billPlan === "monthly" ? 1 : 0.4, 
                transition: "opacity 0.2s" 
              }}
            >
              Monthly
            </button>
            <div
              onClick={() => setBillPlan((p) => (p === "monthly" ? "annually" : "monthly"))}
              style={{
                position: "relative",
                width: 52,
                height: 28,
                borderRadius: 999,
                background: "var(--card-bg)",
                border: "1px solid var(--hairline-strong)",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: billPlan === "annually" ? "flex-end" : "flex-start",
              }}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "var(--fg)",
                }}
              />
            </div>
            <button 
              onClick={() => setBillPlan("annually")}
              style={{ 
                background: "transparent", 
                border: "none", 
                cursor: "pointer",
                fontSize: "0.95rem", 
                fontWeight: 500, 
                color: "inherit", 
                opacity: billPlan === "annually" ? 1 : 0.4, 
                transition: "opacity 0.2s" 
              }}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 2vw, 24px)",
            alignItems: "stretch",
          }}
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billPlan={billPlan} />
          ))}
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: "var(--space-64)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-24)",
            padding: "var(--space-32)",
            borderRadius: "var(--radius-smallercards)",
            border: "1px solid var(--hairline)",
            background: "var(--card-bg)",
          }}
        >
          {[
            { k: "30-day", v: "Money-back guarantee" },
            { k: "<24h", v: "Avg. response time" },
            { k: "4 langs", v: "EN · 中 · РУ · العربية" },
            { k: "0¥", v: "Setup fee — ever" },
          ].map((t, i) => (
            <div
              key={t.k}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                paddingLeft: i === 0 ? 0 : "clamp(12px, 1.5vw, 20px)",
                borderLeft: i === 0 ? "none" : "1px solid var(--hairline)",
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

function PlanCard({ plan, billPlan }: { plan: PLAN; billPlan: Plan }) {
  const isFeatured = plan.id === "standard";
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        isolation: "isolate",
        borderRadius: "var(--radius-cards)",
        border: isFeatured ? "1px solid #E0A93A" : "1px solid var(--hairline)",
        background: isFeatured ? "rgba(224,169,58,0.07)" : "var(--card-bg)",
        overflow: "visible",
        marginTop: plan.badge ? 14 : 0,
        transition: "background 0.4s ease, border-color 0.4s ease",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}
      {isFeatured && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius-cards)",
            background: "#E0A93A",
            opacity: 0.06,
            filter: "blur(60px)",
            zIndex: -1,
            pointerEvents: "none",
            transform: "translateZ(-1px)"
          }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%) translateZ(20px)",
            background: "#E0A93A",
            color: "#1A1A1A",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "var(--space-4) var(--space-12)",
            borderRadius: "var(--radius-badges)",
            whiteSpace: "nowrap",
          }}
        >
          {plan.badge}
        </div>
      )}

      {/* Top content */}
      <div style={{ padding: "var(--space-36)", paddingBottom: 0, transform: "translateZ(30px)" }}>
        <div
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
            color: "inherit",
            opacity: 0.65,
            letterSpacing: "0.02em",
            marginBottom: 8,
          }}
        >
          {plan.title}
        </div>
        <div style={{ fontWeight: 900, lineHeight: 1, color: "inherit" }}>
          <NumberFlow
            prefix="¥"
            value={billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
            suffix={billPlan === "monthly" ? "/mo" : "/yr"}
            format={{
              style: "decimal",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          />
        </div>

        <div className="overflow-hidden" style={{ height: 32, marginTop: 4 }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={billPlan}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{
                fontSize: "clamp(0.72rem, 0.9vw, 0.82rem)",
                color: "inherit",
                opacity: 0.4,
                margin: 0,
                lineHeight: "32px",
              }}
            >
              {billPlan === "monthly" ? "Billed monthly" : "Billed in one annual payment"}
            </motion.p>
          </AnimatePresence>
        </div>

        <p
          style={{
            fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)",
            color: "inherit",
            opacity: 0.55,
            lineHeight: 1.55,
            marginTop: "clamp(12px, 1.5vw, 16px)",
          }}
        >
          {plan.desc}
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "var(--space-24) var(--space-36)", transform: "translateZ(40px)" }}>
        <a
          href={plan.link}
          style={{
            display: "block",
            textAlign: "center",
            padding: "clamp(10px, 1.4vw, 14px) 0",
            fontWeight: 600,
            fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
            borderRadius: "var(--radius-buttons-lg)",
            background: isFeatured ? "#E0A93A" : "var(--fg)",
            color: isFeatured ? "#1A1A1A" : "var(--bg)",
            transition: "opacity 0.2s ease, background 0.4s ease, color 0.4s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          {plan.buttonText}
        </a>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--hairline)", margin: "0 var(--space-36)" }} />

      {/* Features */}
      <div
        style={{
          padding: "var(--space-28) var(--space-36)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(10px, 1.2vw, 14px)",
          flex: 1,
          transform: "translateZ(20px)"
        }}
      >
        {plan.features.map((feature) => (
          <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CheckIcon
              style={{ color: "#1D9E75", flexShrink: 0, width: 16, height: 16 }}
            />
            <span style={{ fontSize: "clamp(0.8rem, 1.05vw, 0.9rem)", color: "inherit", opacity: 0.8 }}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
