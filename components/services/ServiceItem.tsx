type ServiceItemProps = {
  n: string;
  en: string;
  cn: string;
  body: string;
};

export function ServiceItem({ n, en, cn, body }: ServiceItemProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "clamp(120px, 16vw, 220px) 1fr",
        gap: "clamp(24px, 4vw, 48px)",
        alignItems: "baseline",
        padding: "clamp(32px, 4vw, 48px) 0",
        borderTop: "1px solid rgba(4, 52, 44, 0.15)",
      }}
    >
      <div
        style={{
          fontWeight: 900,
          fontSize: "clamp(3rem, 10vw, 140px)",
          lineHeight: 0.9,
          color: "#04342C",
          letterSpacing: "-0.04em",
        }}
      >
        {n}
      </div>
      <div>
        <h3
          style={{
            fontWeight: 500,
            fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "#04342C",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {en}
        </h3>
        <div
          className="cn-text"
          lang="zh"
          style={{
            color: "var(--mint)",
            fontSize: "clamp(0.72rem, 1.32vw, 1.26rem)",
            marginTop: 6,
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          {cn}
        </div>
        <p
          style={{
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: 720,
            fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
            opacity: 0.7,
            marginTop: "clamp(16px, 2vw, 24px)",
            color: "#04342C",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
