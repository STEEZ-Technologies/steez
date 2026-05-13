type STEEZWordmarkProps = { size?: number };

export function STEEZWordmark({ size = 28 }: STEEZWordmarkProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 0.9,
      }}
    >
      <span
        style={{
          fontWeight: 900,
          fontSize: size,
          color: "var(--fg)",
          letterSpacing: "0.14em",
          transition: "color 0.4s ease",
        }}
      >
        STEEZ
      </span>
      <span
        className="cn-text"
        lang="zh"
        style={{
          fontWeight: 700,
          fontSize: size * 0.5,
          color: "var(--mint)",
          letterSpacing: "0.18em",
          marginTop: 2,
        }}
      >
        思智
      </span>
    </div>
  );
}
