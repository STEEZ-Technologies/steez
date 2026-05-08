import { FadeIn } from "@/components/shared/FadeIn";

const SERVICES = [
  {
    n: "01",
    icon: "⬡",
    en: "Digital Business Cards",
    cn: "数字名片",
    body: "Scan a QR, open a living portfolio. Your products, certifications, and contact info — beautifully presented in any language, dark or light.",
    features: [
      "Bilingual, dark / light theme",
      "Custom QR + map embed",
      "WeChat & social links",
      "Shareable link + analytics",
    ],
  },
  {
    n: "02",
    icon: "◈",
    en: "Digital Forms",
    cn: "数字表单",
    body: "Interactive RFQs, MOQ checklists, and inquiry flows — replacing static WeChat forms with branded, conditional-logic experiences.",
    features: [
      "Conditional logic fields",
      "MOQ & RFQ templates",
      "WeChat export",
      "Bilingual output",
    ],
  },
  {
    n: "03",
    icon: "◉",
    en: "Digital Catalogues",
    cn: "数字目录",
    body: "3D and AR product views, filterable by spec, with an inline quote builder so buyers can self-serve from scan to quote.",
    features: [
      "3D / AR product views",
      "Spec filtering",
      "Inline quote builder",
      "Multi-language",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="sticky top-0"
      style={{
        background: "#04342C",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        padding: "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px)",
        zIndex: 3,
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
          02 — Services
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
          What We Build
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(16px, 2vw, 24px)",
        }}
      >
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.12} y={30}>
            <div
              className="service-card"
              style={{
                height: "100%",
                background: "#0a211b",
                border: "1px solid rgba(224,169,58,0.15)",
                borderRadius: 24,
                padding: "clamp(24px, 3vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px, 2vw, 24px)",
                position: "relative",
                transition: "border-color 0.25s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "clamp(20px, 2.5vw, 28px)",
                  right: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 800,
                  fontSize: "clamp(0.65rem, 0.85vw, 0.78rem)",
                  color: "rgba(224,169,58,0.5)",
                  letterSpacing: "0.12em",
                }}
              >
                {s.n}
              </div>

              <div
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(224,169,58,0.1)",
                  borderRadius: 10,
                  fontSize: "1.3rem",
                  color: "#E0A93A",
                }}
              >
                {s.icon}
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                    color: "#FAF9F5",
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {s.en}
                </h3>
                <div
                  className="cn-text"
                  lang="zh"
                  style={{
                    color: "#E0A93A",
                    fontSize: "clamp(0.72rem, 1vw, 0.88rem)",
                    marginTop: 5,
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  {s.cn}
                </div>
              </div>

              <p
                style={{
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
                  color: "rgba(250,249,245,0.6)",
                  margin: 0,
                }}
              >
                {s.body}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: "auto",
                  borderTop: "1px solid rgba(224,169,58,0.1)",
                  paddingTop: "clamp(16px, 2vw, 20px)",
                }}
              >
                {s.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      fontSize: "clamp(0.75rem, 1vw, 0.88rem)",
                      color: "rgba(250,249,245,0.55)",
                    }}
                  >
                    <span style={{ color: "#E0A93A", fontWeight: 700, flexShrink: 0 }}>+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
