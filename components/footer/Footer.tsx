"use client";

import { COPY } from "@/lib/copy";
import { FooterCol } from "./FooterCol";
import { useI18n } from "@/lib/i18n/useI18n";

const ITEM_STYLE = { fontSize: "0.95rem", fontWeight: 400 } as const;
const LINK_STYLE = {
  color: "inherit",
  textDecoration: "none",
  opacity: 0.85,
} as const;

const NAV_KEY_BY_HREF: Record<string, "pricing" | "cards" | "contact"> = {
  "#pricing": "pricing",
  "#services": "cards",
  "#contact": "contact",
};

export function Footer() {
  const { dict, lang } = useI18n();
  const isEn = lang === "en";

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
            {dict.footer.brandTagline}
          </p>
        </div>

        <FooterCol
          titleEn={dict.footer.locations}
          titleCn={isEn ? COPY.footer.locations.heading.cn : undefined}
          collapsible
        >
          {(["hangzhou", "yiwu", "foshan", "guangzhou"] as const).map((k, i) => {
            const cnItem = COPY.footer.locations.items[i];
            return (
              <li key={k} style={ITEM_STYLE}>
                {dict.footer.locationItems[k]}
                {isEn && cnItem && (
                  <>
                    {" "}·{" "}
                    <span className="cn-text" lang="zh">
                      {cnItem.cn}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </FooterCol>

        <FooterCol
          titleEn={dict.footer.reachUs}
          titleCn={isEn ? COPY.footer.contact.heading.cn : undefined}
          collapsible
        >
          {COPY.footer.contact.items.map((it) => (
            <li key={it} style={ITEM_STYLE}>
              {it}
            </li>
          ))}
        </FooterCol>

        <FooterCol
          titleEn={dict.footer.index}
          titleCn={isEn ? COPY.footer.index.heading.cn : undefined}
          collapsible
        >
          {COPY.footer.index.items.map((it) => {
            const k = NAV_KEY_BY_HREF[it.href];
            const primary = k ? dict.nav[k] : it.en;
            return (
              <li key={it.href} style={ITEM_STYLE}>
                <a href={it.href} style={LINK_STYLE}>
                  {primary}
                  {isEn && (
                    <>
                      {" "}·{" "}
                      <span className="cn-text" lang="zh">
                        {it.cn}
                      </span>
                    </>
                  )}
                </a>
              </li>
            );
          })}
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
        <span>{dict.footer.bottomLeft}</span>
        <span style={{ letterSpacing: "0.2em" }}>
          {dict.footer.bottomRight}
        </span>
      </div>
    </footer>
  );
}
