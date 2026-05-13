import { FadeIn } from "@/components/shared/FadeIn";

const STATS = [
  { value: "1,247", accent: "+", label: "Buyer scans activated" },
  { value: "38", accent: "", label: "Countries reached" },
  { value: "90", accent: "", label: "Days to first results" },
  { value: "3", accent: "", label: "Core product lines" },
];

export function Numbers() {
  return (
    <div
      style={{
        width: "100%",
        background: "transparent",
        borderTop: "1px solid var(--hairline)",
        transition: "border-color 0.4s ease",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {STATS.map((s, i) => (
          <FadeIn
            key={s.label}
            delay={i * 0.1}
            y={10}
            style={{
              padding: "clamp(12px, 2vw, 24px) clamp(10px, 1.5vw, 20px)",
              borderRight:
                i < STATS.length - 1
                  ? "1px solid var(--hairline)"
                  : undefined,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                transition: "color 0.4s ease",
              }}
            >
              {s.value}
              {s.accent && (
                <span style={{ color: "#E0A93A" }}>{s.accent}</span>
              )}
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)",
                color: "var(--fg)",
                opacity: 0.5,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                transition: "color 0.4s ease, opacity 0.4s ease",
              }}
            >
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
