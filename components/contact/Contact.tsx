"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";

const INTERESTS = [
  "Digital Business Cards",
  "Digital Forms",
  "Digital Catalogues",
  "Full Package",
  "Other",
];

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid rgba(4,52,44,0.15)",
  borderRadius: "var(--radius-inputs)",
  padding: "clamp(10px, 1.4vw, 14px) clamp(12px, 1.6vw, 16px)",
  color: "#04342C",
  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    wechat: "",
    interest: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-secondary, #FAF9F5)",
        color: "var(--fg-secondary, #04342C)",
        borderTop: "1px solid var(--hairline)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "var(--space-120) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 7,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <FadeIn
        delay={0}
        y={30}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0A93A",
            marginBottom: "clamp(12px, 1.5vw, 20px)",
          }}
        >
          06 — Contact
        </div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "inherit",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "clamp(24px, 4vw, 56px)",
          alignItems: "start",
        }}
      >
        <FadeIn delay={0.1} x={-30} y={0}>
          <div
            style={{
              background: "var(--card-bg, #FFFFFF)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-cards)",
              padding: "var(--card-padding)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-28)",
              transition: "background 0.4s ease",
            }}
          >
            {[
              { label: "Phone", value: "+86 755 8888 0000" },
              { label: "Email", value: "hello@steez.cn" },
              { label: "HQ", value: "Shenzhen, Guangdong" },
              { label: "Hours", value: "Mon–Sat 09:00–19:00 CST" },
            ].map((row) => (
              <div key={row.label}>
                <div
                  style={{
                    fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#E0A93A",
                    marginBottom: 4,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    color: "inherit",
                    opacity: 0.8,
                    fontWeight: 400,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "1px solid var(--hairline)",
                paddingTop: "clamp(16px, 2vw, 24px)",
                display: "flex",
                gap: 12,
              }}
            >
              {["WeChat", "QQ"].map((platform) => (
                <button
                  key={platform}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "1px solid var(--hairline-strong)",
                    borderRadius: "var(--radius-buttons)",
                    padding: "clamp(8px, 1.2vw, 12px) 0",
                    color: "inherit",
                    fontWeight: 600,
                    fontSize: "clamp(0.75rem, 1vw, 0.88rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s ease, border-color 0.4s ease, color 0.4s ease",
                  }}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} x={30} y={0} style={{ minWidth: 0 }}>
          <div
            style={{
              background: "var(--card-bg, #FFFFFF)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-cards)",
              padding: "var(--card-padding)",
              transition: "background 0.4s ease",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "clamp(40px, 6vw, 80px) 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: "2.5rem", color: "#1D9E75" }}>✓</div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                    color: "inherit",
                  }}
                >
                  Message sent
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    color: "inherit",
                    opacity: 0.5,
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{ ...FIELD_STYLE, background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }} />
                  <input name="company" placeholder="Company" value={form.company} onChange={handleChange} style={{ ...FIELD_STYLE, background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }} />
                </div>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ ...FIELD_STYLE, background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }} />
                <input name="wechat" placeholder="WeChat ID" value={form.wechat} onChange={handleChange} style={{ ...FIELD_STYLE, background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }} />
                <select name="interest" value={form.interest} onChange={handleChange} style={{ ...FIELD_STYLE, appearance: "none", background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }}>
                  <option value="" disabled>Interest</option>
                  {INTERESTS.map((opt) => (
                    <option key={opt} value={opt} style={{ background: "var(--bg)", color: "inherit" }}>{opt}</option>
                  ))}
                </select>
                <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} style={{ ...FIELD_STYLE, resize: "vertical", background: "var(--bg)", color: "inherit", borderColor: "var(--hairline)" }} />
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "clamp(13px, 1.6vw, 17px) 0",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "var(--radius-buttons-lg)",
                    fontWeight: 700,
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s ease, color 0.4s ease",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.3}
        y={30}
        style={{
          maxWidth: 1100,
          margin: "clamp(48px, 6vw, 80px) auto 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {[
            {
              k: "Response",
              v: "Within 24 hrs",
              d: "Every inquiry routed to a real account manager — no auto-replies, no bots.",
            },
            {
              k: "Onboarding",
              v: "7 days avg.",
              d: "From signed brief to first scannable card in your buyer's hands.",
            },
            {
              k: "Languages",
              v: "EN · 中 · РУ · العربية",
              d: "Native localization on every plan — copy reviewed by in-region editors.",
            },
          ].map((b) => (
            <div
              key={b.k}
              style={{
                background: "var(--card-bg, #FFFFFF)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--radius-smallercards)",
                padding: "var(--space-28)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#E0A93A",
                }}
              >
                {b.k}
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  color: "inherit",
                  lineHeight: 1.15,
                }}
              >
                {b.v}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.82rem, 1vw, 0.92rem)",
                  color: "inherit",
                  opacity: 0.6,
                  lineHeight: 1.55,
                  marginTop: 4,
                }}
              >
                {b.d}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
