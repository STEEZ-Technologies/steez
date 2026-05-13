type NavLabelProps = { en: string; cn: string };

export function NavLabel({ en, cn }: NavLabelProps) {
  return (
    <span
      style={{ display: "inline-flex", alignItems: "baseline", gap: "0.35em" }}
    >
      <span style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {en}
      </span>
      <span aria-hidden style={{ opacity: 0.45 }}>
        ·
      </span>
      <span
        className="cn-text"
        lang="zh"
        style={{ fontSize: "0.78em", opacity: 0.85 }}
      >
        {cn}
      </span>
    </span>
  );
}
