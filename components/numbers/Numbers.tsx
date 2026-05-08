import { FadeIn } from "@/components/shared/FadeIn";

const STATS = [
  { value: "1,247", accent: "+", label: "Buyer scans activated" },
  { value: "38", accent: "", label: "Countries reached" },
  { value: "90", accent: "", label: "Days to first results" },
  { value: "3", accent: "", label: "Core product lines" },
];

export function Numbers() {
  return (
    <section
      className="sticky top-0"
      style={{
        background: "#1A1A1A",
        borderTop: "1px solid rgba(224,169,58,0.2)",
        borderBottom: "1px solid rgba(224,169,58,0.2)",
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {STATS.map((s, i) => (
          <FadeIn
            key={s.label}
            delay={i * 0.1}
            y={20}
            style={{
              padding: "clamp(40px, 5vw, 80px) clamp(24px, 3vw, 48px)",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(224,169,58,0.15)" : undefined,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1vw, 14px)",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#FAF9F5",
              }}
            >
              {s.value}
              {s.accent && (
                <span style={{ color: "#E0A93A" }}>{s.accent}</span>
              )}
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                color: "rgba(250,249,245,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
