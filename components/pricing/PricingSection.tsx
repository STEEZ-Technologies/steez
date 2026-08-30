import NumberFlow from "@number-flow/react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { CheckIcon } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/lib/useIsMobile";
import { useI18n } from "@/lib/i18n/useI18n";

export default function PricingSection() {
  const isMobile = useIsMobile();
  const { dict } = useI18n();
  const packages = dict.pricingBlock.packages;

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
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {packages.map((pkg: any, i: number) => (
            <PackageCard key={i} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) - 0.5;
    const yPct = ((e.clientY - rect.top) / rect.height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  const isFeatured = pkg.featured;
  
  let tag = "";
  if (index === 0) tag = "Best for First-Time Exhibitors";
  if (index === 2) tag = "Best for Established Brands";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        width: "100%",
        borderRadius: "var(--radius-cards)",
        border: isFeatured ? "1px solid #E0A93A" : "1px solid var(--hairline)",
        background: isFeatured ? "rgba(224,169,58,0.07)" : "var(--card-bg)",
        padding: "clamp(32px, 4vw, 48px)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
    >
      {isFeatured && (
        <div 
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%) translateZ(20px)",
            background: "#E0A93A",
            color: "#1A1A1A",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "8px 24px",
            borderRadius: "99px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      <div style={{ transform: "translateZ(30px)" }}>
        {tag && (
          <div style={{ 
            fontSize: "0.65rem", 
            fontWeight: 700, 
            textTransform: "uppercase", 
            letterSpacing: "0.1em", 
            color: "#E0A93A", 
            marginBottom: 8,
            border: "1px solid rgba(224,169,58,0.3)",
            background: "rgba(224,169,58,0.1)",
            padding: "4px 10px",
            borderRadius: 6,
            display: "inline-block"
          }}>
            {tag}
          </div>
        )}
        <div style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>{pkg.name}</div>
        <p style={{ fontSize: "0.95rem", opacity: 0.6, marginTop: 8, lineHeight: 1.5, minHeight: 45 }}>
          {pkg.desc}
        </p>
      </div>

      <div style={{ transform: "translateZ(20px)", display: "flex", flexDirection: "column", gap: 16, flexGrow: 1 }}>
        {pkg.features.map((f: string, i: number) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <CheckIcon style={{ color: isFeatured ? "#E0A93A" : "#1D9E75", flexShrink: 0, marginTop: 2 }} size={18} />
            <span style={{ fontSize: "0.95rem", fontWeight: 500, opacity: 0.85 }}>{f}</span>
          </div>
        ))}
      </div>

      <div style={{ transform: "translateZ(40px)", marginTop: "auto" }}>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const pkg = index === 0 ? "essential" : index === 1 ? "growth" : "active";
            window.dispatchEvent(new CustomEvent("steez:selectTier", { detail: pkg }));
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "block",
            textAlign: "center",
            padding: "16px 24px",
            background: isFeatured ? "#E0A93A" : "var(--hairline-strong)",
            color: isFeatured ? "#1A1A1A" : "inherit",
            borderRadius: "12px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
            fontSize: "0.9rem",
            transition: "opacity 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          {pkg.button}
        </a>
      </div>
    </motion.div>
  );
}
