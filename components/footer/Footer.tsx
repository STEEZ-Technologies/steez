import { COPY } from "@/lib/copy";
import { FooterCol } from "./FooterCol";

const ITEM_STYLE = { fontSize: "0.95rem", fontWeight: 400 } as const;
const LINK_STYLE = {
  color: "inherit",
  textDecoration: "none",
  opacity: 0.85,
} as const;

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--footer-bg, #1A1A1A)",
        color: "var(--footer-fg, #FAF9F5)",
        padding:
          "clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px) clamp(28px, 4vw, 48px)",
        borderTop: "1px solid var(--hairline-footer, rgba(250,249,245,0.15))",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "clamp(32px, 4vw, 64px)",
          maxWidth: 1280,
          margin: "0 auto",
          marginBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: "0.14em",
            }}
          >
            STEEZ
          </div>
          <div
            className="cn-text"
            lang="zh"
            style={{
              fontWeight: 700,
              color: "#E0A93A",
              letterSpacing: "0.18em",
              marginTop: 4,
            }}
          >
            思智
          </div>
          <p
            style={{
              fontWeight: 300,
              opacity: 0.65,
              lineHeight: 1.6,
              marginTop: 16,
              fontSize: "0.95rem",
              maxWidth: 280,
            }}
          >
            {COPY.footer.brandTagline}
          </p>
        </div>

        <FooterCol
          titleEn={COPY.footer.locations.heading.en}
          titleCn={COPY.footer.locations.heading.cn}
        >
          {COPY.footer.locations.items.map((it) => (
            <li key={it.en} style={ITEM_STYLE}>
              {it.en} ·{" "}
              <span className="cn-text" lang="zh">
                {it.cn}
              </span>
            </li>
          ))}
        </FooterCol>

        <FooterCol
          titleEn={COPY.footer.contact.heading.en}
          titleCn={COPY.footer.contact.heading.cn}
        >
          {COPY.footer.contact.items.map((it) => (
            <li key={it} style={ITEM_STYLE}>
              {it}
            </li>
          ))}
        </FooterCol>

        <FooterCol
          titleEn={COPY.footer.index.heading.en}
          titleCn={COPY.footer.index.heading.cn}
        >
          {COPY.footer.index.items.map((it) => (
            <li key={it.href} style={ITEM_STYLE}>
              <a href={it.href} style={LINK_STYLE}>
                {it.en} ·{" "}
                <span className="cn-text" lang="zh">
                  {it.cn}
                </span>
              </a>
            </li>
          ))}
        </FooterCol>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(250,249,245,0.12)",
          paddingTop: 24,
          fontSize: "0.78rem",
          opacity: 0.5,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>{COPY.footer.bottomLeft}</span>
        <span style={{ letterSpacing: "0.2em" }}>
          {COPY.footer.bottomRight}
        </span>
      </div>
    </footer>
  );
}
