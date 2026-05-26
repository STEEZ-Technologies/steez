"use client";

import { COPY } from "@/lib/copy";
import { FooterCol } from "./FooterCol";
import { useI18n } from "@/lib/i18n/useI18n";
import { STEEZWordmark } from "@/components/shared/STEEZWordmark";

const ITEM_STYLE = { fontSize: "0.95rem", fontWeight: 400 } as const;

export function Footer() {
  const { dict, lang } = useI18n();
  const isZh = lang === "zh";

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
          <STEEZWordmark size={28} color="var(--footer-fg, #FAF9F5)" />
          {isZh && (
            <div
              className="cn-text"
              lang="zh"
              style={{
                fontWeight: 700,
                color: "#E0A93A",
                letterSpacing: "0.18em",
                marginTop: 6,
                fontSize: 14,
              }}
            >
              思智
            </div>
          )}
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

        <FooterCol titleEn={dict.footer.locations} collapsible>
          <li style={ITEM_STYLE}>{dict.footer.locationItems.hangzhou}</li>
        </FooterCol>

        <FooterCol titleEn={dict.footer.reachUs} collapsible>
          {COPY.footer.contact.items.map((it) => (
            <li key={it} style={ITEM_STYLE}>
              {it}
            </li>
          ))}
        </FooterCol>
      </div>

      {/* Legal links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 28px",
          borderTop: "1px solid rgba(250,249,245,0.12)",
          paddingTop: 24,
          marginBottom: 18,
          fontSize: "0.78rem",
          letterSpacing: "0.08em",
        }}
      >
        {[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
          { href: "/cookies", label: "Cookies" },
          { href: "/refund", label: "Refund" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ color: "inherit", textDecoration: "none", opacity: 0.65 }}
          >
            {l.label}
          </a>
        ))}
        <span style={{ flex: 1 }} />
        <span style={{ opacity: 0.45, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "0.7rem" }}>
          浙ICP备 XXXXXXXX 号 · 统一社会信用代码 XXXXXXXXXXXXXXXXXX
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
