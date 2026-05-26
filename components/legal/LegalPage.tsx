import { Footer } from "@/components/footer/Footer";
import { Nav } from "@/components/hero/Nav";

type Section = { heading: string; body: string };

type Props = {
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
};

export function LegalPage({ title, updated, intro, sections }: Props) {
  return (
    <main style={{ position: "relative", background: "var(--bg)", color: "var(--fg)" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Nav />
        </div>
      </div>

      <article
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding:
            "clamp(120px, 14vw, 180px) clamp(20px, 4vw, 40px) clamp(64px, 8vw, 120px)",
          fontFamily: "var(--font-stack-text), sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#E0A93A",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Legal · STEEZ
        </div>

        <h1
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            fontWeight: 800,
            margin: "0 0 12px",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            fontSize: "0.85rem",
            opacity: 0.55,
            marginBottom: 40,
            letterSpacing: "0.05em",
          }}
        >
          Last updated · {updated}
        </div>

        {intro && (
          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
              lineHeight: 1.7,
              opacity: 0.82,
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            {intro}
          </p>
        )}

        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: "var(--font-stack-sans), sans-serif",
                fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {s.heading}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                opacity: 0.78,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
              }}
            >
              {s.body}
            </p>
          </section>
        ))}

        <div
          style={{
            marginTop: 64,
            padding: "20px 24px",
            border: "1px solid var(--hairline)",
            borderRadius: "var(--radius-smallercards)",
            fontSize: "0.9rem",
            opacity: 0.7,
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6, color: "#E0A93A", letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.7rem" }}>
            Contact · Legal
          </div>
          STEEZ Digital · Hangzhou, Zhejiang, China · legal@steez.digital
        </div>
      </article>

      <Footer />
    </main>
  );
}
