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
  borderRadius: 10,
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
      className="sticky top-0"
      style={{
        background: "#FAF9F5",
        borderTop: "1px solid rgba(4,52,44,0.15)",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px)",
        zIndex: 7,
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
            color: "#04342C",
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
              background: "#FFFFFF",
              border: "1px solid rgba(4,52,44,0.12)",
              borderRadius: 16,
              padding: "clamp(28px, 3.5vw, 44px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(20px, 2.5vw, 28px)",
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
                    color: "rgba(4,52,44,0.8)",
                    fontWeight: 400,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "1px solid rgba(4,52,44,0.1)",
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
                    border: "1px solid rgba(4,52,44,0.2)",
                    borderRadius: 999,
                    padding: "clamp(8px, 1.2vw, 12px) 0",
                    color: "#04342C",
                    fontWeight: 600,
                    fontSize: "clamp(0.75rem, 1vw, 0.88rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s ease",
                  }}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} x={30} y={0}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(4,52,44,0.12)",
              borderRadius: 16,
              padding: "clamp(28px, 3.5vw, 44px)",
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
                    color: "#04342C",
                  }}
                >
                  Message sent
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    color: "rgba(4,52,44,0.5)",
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
                  <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={FIELD_STYLE} />
                  <input name="company" placeholder="Company" value={form.company} onChange={handleChange} style={FIELD_STYLE} />
                </div>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={FIELD_STYLE} />
                <input name="wechat" placeholder="WeChat ID" value={form.wechat} onChange={handleChange} style={FIELD_STYLE} />
                <select name="interest" value={form.interest} onChange={handleChange} style={{ ...FIELD_STYLE, appearance: "none" }}>
                  <option value="" disabled>Interest</option>
                  {INTERESTS.map((opt) => (
                    <option key={opt} value={opt} style={{ background: "#FAF9F5", color: "#04342C" }}>{opt}</option>
                  ))}
                </select>
                <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} style={{ ...FIELD_STYLE, resize: "vertical" }} />
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "clamp(13px, 1.6vw, 17px) 0",
                    background: "#04342C",
                    color: "#FAF9F5",
                    border: "none",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s ease",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
