"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { motion, AnimatePresence } from "motion/react";
import { Send } from "lucide-react";

const INTERESTS = [
  "Digital Business Cards",
  "Digital Forms",
  "Digital Catalogues",
  "Full Package",
  "Other",
];

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--hairline)",
  borderRadius: "var(--radius-inputs)",
  padding: "clamp(10px, 1.4vw, 14px) clamp(12px, 1.6vw, 16px)",
  color: "inherit",
  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

interface FormState {
  name: string;
  company: string;
  email: string;
  wechat: string;
  interest: string;
  message: string;
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    wechat: "",
    interest: "",
    message: "",
  });

  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Invalid email address";
    }
    if (!form.message.trim()) e.message = "Please leave a short message";
    return e;
  }, [form]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(name: keyof FormState) {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const allTouched: Partial<Record<keyof FormState, boolean>> = {};
    (Object.keys(form) as Array<keyof FormState>).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
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
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
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
              { label: "HQ", value: "Hangzhou, Zhejiang" },
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
              minHeight: 480,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "clamp(40px, 6vw, 80px) 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    flex: 1,
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <motion.div
                    initial={{ x: -100, y: 100, opacity: 0, rotate: -45 }}
                    animate={{ 
                      x: [null, 0, 100, 200], 
                      y: [null, 0, -100, -200], 
                      opacity: [0, 1, 1, 0],
                      rotate: [null, -45, -60, -75]
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ position: "absolute" }}
                  >
                    <Send size={40} color="#E0A93A" />
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.8 }}
                    style={{ fontSize: "3.5rem", color: "#1D9E75" }}
                  >
                    ✓
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                      color: "inherit",
                    }}
                  >
                    Message sent
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    style={{
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      color: "inherit",
                      opacity: 0.5,
                    }}
                  >
                    We&apos;ll be in touch within 24 hours.
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <FormField 
                      name="name" 
                      placeholder="Name" 
                      value={form.name} 
                      onChange={handleChange} 
                      onBlur={() => handleBlur("name")}
                      error={touched.name ? errors.name : undefined}
                      required 
                    />
                    <FormField 
                      name="company" 
                      placeholder="Company" 
                      value={form.company} 
                      onChange={handleChange} 
                      onBlur={() => handleBlur("company")}
                    />
                  </div>
                  <FormField 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    value={form.email} 
                    onChange={handleChange} 
                    onBlur={() => handleBlur("email")}
                    error={touched.email ? errors.email : undefined}
                    required 
                  />
                  <FormField 
                    name="wechat" 
                    placeholder="WeChat ID" 
                    value={form.wechat} 
                    onChange={handleChange} 
                    onBlur={() => handleBlur("wechat")}
                  />
                  
                  <div style={{ position: "relative" }}>
                    <select 
                      name="interest" 
                      value={form.interest} 
                      onChange={handleChange} 
                      style={{ ...FIELD_STYLE, appearance: "none" }}
                    >
                      <option value="" disabled>Interest</option>
                      {INTERESTS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "var(--bg)", color: "#04342C" }}>{opt}</option>
                      ))}
                    </select>
                    <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", opacity: 0.5, fontSize: "0.8rem" }}>▼</div>
                  </div>

                  <FormField 
                    name="message" 
                    as="textarea"
                    placeholder="Message" 
                    rows={4} 
                    value={form.message} 
                    onChange={handleChange} 
                    onBlur={() => handleBlur("message")}
                    error={touched.message ? errors.message : undefined}
                  />

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "clamp(13px, 1.6vw, 17px) 0",
                      background: isSubmitting ? "var(--hairline-strong)" : "var(--fg)",
                      color: "var(--bg)",
                      border: "none",
                      borderRadius: "var(--radius-buttons-lg)",
                      fontWeight: 700,
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.3s ease, color 0.4s ease",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
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

function FormField({ 
  error, 
  as = "input", 
  ...props 
}: { 
  error?: string; 
  as?: "input" | "textarea" 
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  const Tag = as as any;
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
      <motion.div
        animate={{ 
          borderColor: error ? "#EF4444" : "var(--hairline)",
          boxShadow: error ? "0 0 0 1px #EF4444" : "0 0 0 0px transparent" 
        }}
        style={{ borderRadius: "var(--radius-inputs)", overflow: "hidden" }}
      >
        <Tag
          {...props}
          style={{ 
            ...FIELD_STYLE, 
            border: "none", 
            resize: as === "textarea" ? "vertical" : "none"
          }}
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ 
              fontSize: "0.75rem", 
              color: "#EF4444", 
              fontWeight: 500, 
              marginLeft: 4,
              overflow: "hidden"
            }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
