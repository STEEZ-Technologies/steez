import { FadeIn } from "@/components/shared/FadeIn";
import { COPY } from "@/lib/copy";
import { ProductViewer } from "./ProductViewer";

export function Portfolio() {
  const p = COPY.portfolio;

  return (
    <section
      id="portfolio"
      style={{
        background: "var(--forest-deep)",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        marginTop: "clamp(-56px, -4vw, -40px)",
        padding:
          "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px) clamp(80px, 10vw, 120px)",
        position: "relative",
        zIndex: 6,
      }}
    >
      {/* Heading */}
      <FadeIn
        delay={0}
        y={40}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}
      >
        <h2
          className="hero-heading"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          {p.headingEn}
        </h2>
        <div
          className="cn-text"
          lang="zh"
          style={{
            color: "var(--mint)",
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            marginTop: "clamp(8px, 1vw, 16px)",
            letterSpacing: "0.08em",
          }}
        >
          {p.headingCn}
        </div>
        <p
          style={{
            color: "rgba(232,239,234,0.6)",
            fontSize: "clamp(0.88rem, 1.4vw, 1.15rem)",
            maxWidth: 560,
            margin: "clamp(16px, 2vw, 24px) auto 0",
            lineHeight: 1.65,
            fontWeight: 300,
          }}
        >
          {p.subtitle}
        </p>
      </FadeIn>

      {/* 3D Viewer card */}
      <FadeIn delay={0.15} y={30}>
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            borderRadius: "clamp(20px, 3vw, 32px)",
            overflow: "hidden",
            border: "1px solid rgba(111,201,161,0.2)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(111,201,161,0.06) inset",
          }}
        >
          <ProductViewer />
        </div>
      </FadeIn>

      {/* Stats row */}
      <FadeIn delay={0.25} y={20}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(32px, 8vw, 96px)",
            marginTop: "clamp(52px, 7vw, 88px)",
            flexWrap: "wrap",
          }}
        >
          {p.stats.map((s) => (
            <div key={s.value} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                  fontWeight: 900,
                  color: "var(--mint)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.68rem, 1vw, 0.82rem)",
                  color: "rgba(232,239,234,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  marginTop: 8,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTAs */}
      <FadeIn delay={0.35} y={20}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: "clamp(48px, 6vw, 72px)",
            flexWrap: "wrap",
          }}
        >
          <button className="btn-contact">Get 3D Catalogue</button>
          <button className="btn-ghost">View Live Demo</button>
        </div>
      </FadeIn>
    </section>
  );
}
