import { FadeIn } from "@/components/shared/FadeIn";

const PLANS = [
  {
    name: "Basic",
    nameCn: "基础版",
    price: "¥4,800",
    period: "/yr",
    featured: false,
    features: [
      { yes: true, text: "1 digital business card" },
      { yes: true, text: "Bilingual EN + 中" },
      { yes: true, text: "Dark / light theme" },
      { yes: true, text: "Custom QR code" },
      { yes: false, text: "Analytics dashboard" },
      { yes: false, text: "AR catalogue" },
    ],
  },
  {
    name: "Standard",
    nameCn: "标准版",
    price: "¥12,800",
    period: "/yr",
    featured: true,
    badge: "Most chosen",
    features: [
      { yes: true, text: "1 card + 5 forms" },
      { yes: true, text: "Full 4-language support" },
      { yes: true, text: "Dark / light theme" },
      { yes: true, text: "Quarterly analytics" },
      { yes: true, text: "Priority support" },
      { yes: false, text: "AR catalogue" },
    ],
  },
  {
    name: "Premium",
    nameCn: "高级版",
    price: "¥28,800",
    period: "/yr",
    featured: false,
    features: [
      { yes: true, text: "Card + unlimited forms" },
      { yes: true, text: "3D / AR catalogue" },
      { yes: true, text: "All 4 languages" },
      { yes: true, text: "Monthly analytics review" },
      { yes: true, text: "Visitor geo-tracking" },
      { yes: true, text: "Dedicated account manager" },
    ],
  },
];

export function Pricing() {
  return (
    <section
      className="sticky top-0"
      style={{
        background: "#04342C",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        padding: "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px)",
        zIndex: 6,
      }}
    >
      <FadeIn
        delay={0}
        y={40}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}
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
          05 — Packages
        </div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#FAF9F5",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Pricing
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(16px, 2vw, 24px)",
          alignItems: "stretch",
        }}
      >
        {PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1} y={30}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: plan.featured ? "#E0A93A" : "#0a211b",
                border: plan.featured
                  ? "none"
                  : "1px solid rgba(224,169,58,0.2)",
                borderRadius: 24,
                padding: "clamp(24px, 3vw, 40px)",
                color: plan.featured ? "#1A1A1A" : "#FAF9F5",
                position: "relative",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#1A1A1A",
                    color: "#E0A93A",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "5px 16px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: "clamp(20px, 2.5vw, 32px)" }}>
                <div
                  style={{
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    opacity: 0.75,
                    letterSpacing: "0.02em",
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginTop: 6,
                  }}
                >
                  {plan.price}
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                      opacity: 0.6,
                      marginLeft: 4,
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(10px, 1.2vw, 14px)",
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                      fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
                      opacity: f.yes ? 1 : 0.35,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        flexShrink: 0,
                        color: f.yes
                          ? plan.featured
                            ? "#1A1A1A"
                            : "#E0A93A"
                          : "inherit",
                      }}
                    >
                      {f.yes ? "✓" : "–"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: "block",
                  marginTop: "clamp(24px, 3vw, 36px)",
                  padding: "clamp(10px, 1.4vw, 14px) 0",
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  borderRadius: 999,
                  background: plan.featured ? "#1A1A1A" : "#E0A93A",
                  color: plan.featured ? "#FAF9F5" : "#1A1A1A",
                  transition: "opacity 0.2s ease",
                }}
              >
                Get started
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
