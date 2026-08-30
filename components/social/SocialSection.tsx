"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { motion } from "motion/react";

const SOCIALS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@steezdigital",
    href: "https://instagram.com/steezdigital",
    gradient: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "STEEZ Digital",
    href: "https://facebook.com/steezdigital",
    gradient: "linear-gradient(135deg, #2d88ff 0%, #0866ff 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "xiaohongshu",
    name: "小红书",
    handle: "思智STEEZ",
    href: "https://xiaohongshu.com",
    gradient: "linear-gradient(135deg, #ff5c6e 0%, #FF2442 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM20 19H6.5a.5.5 0 0 0 0 1H20v-1z" />
      </svg>
    ),
  },
];

export function SocialSection() {
  return (
    <section
      id="social"
      style={{
        background: "#04342C",
        color: "#FAF9F5",
        borderTop: "1px solid rgba(250,249,245,0.10)",
        borderTopLeftRadius: "var(--radius-cards)",
        borderTopRightRadius: "var(--radius-cards)",
        padding: "clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px) clamp(64px, 8vw, 112px)",
        position: "relative",
        zIndex: 8,
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(250,249,245,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,249,245,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Section header — centered */}
      <FadeIn
        delay={0}
        y={30}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)", position: "relative" }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: "#E0A93A",
            marginBottom: "clamp(12px, 1.5vw, 20px)",
          }}
        >
          07 · Social
        </div>
        <h2
          style={{
            fontFamily: "var(--font-stack-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#FAF9F5",
            textTransform: "uppercase" as const,
            margin: 0,
          }}
        >
          Stay Connected
        </h2>
        <p
          style={{
            marginTop: "clamp(16px, 2vw, 24px)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            color: "rgba(250,249,245,0.55)",
            fontWeight: 300,
            lineHeight: 1.65,
            maxWidth: 460,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Follow STEEZ on social, product stories, client showcases, and coverage from the trade-show floor.
        </p>
      </FadeIn>

      {/* iPhone mockup — centered with glow */}
      <FadeIn
        delay={0.2}
        y={50}
        style={{ display: "flex", justifyContent: "center", position: "relative" }}
      >
        {/* Ambient glow behind phone */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(280px, 38vw, 480px)",
            height: "clamp(280px, 38vw, 480px)",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(29,158,117,0.32) 0%, rgba(29,158,117,0.10) 45%, transparent 72%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "0%",
            left: "52%",
            transform: "translateX(-50%)",
            width: "clamp(180px, 22vw, 280px)",
            height: "clamp(100px, 14vw, 160px)",
            background:
              "radial-gradient(ellipse, rgba(224,169,58,0.18) 0%, transparent 70%)",
            filter: "blur(36px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Floating phone wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* iPhone outer shell */}
          <div
            style={{
              width: "clamp(232px, 22vw, 278px)",
              aspectRatio: "9 / 19.5",
              position: "relative",
              background: "linear-gradient(148deg, #3a3a3c 0%, #2d2d2f 45%, #1c1c1e 100%)",
              borderRadius: "clamp(38px, 4.2vw, 50px)",
              border: "1.5px solid rgba(255,255,255,0.14)",
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.13),
                inset 0 -1px 0 rgba(0,0,0,0.5),
                0 70px 140px -35px rgba(0,0,0,0.98),
                0 30px 60px -18px rgba(0,0,0,0.72),
                0 4px 20px rgba(0,0,0,0.5)
              `,
            }}
          >
            {/* Silent switch */}
            <div
              style={{
                position: "absolute",
                left: -3.5,
                top: "13.5%",
                width: 3.5,
                height: 22,
                background: "linear-gradient(180deg, #424244, #2e2e30)",
                borderRadius: "3px 0 0 3px",
              }}
            />
            {/* Volume up */}
            <div
              style={{
                position: "absolute",
                left: -3.5,
                top: "21%",
                width: 3.5,
                height: 34,
                background: "linear-gradient(180deg, #424244, #2e2e30)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            />
            {/* Volume down */}
            <div
              style={{
                position: "absolute",
                left: -3.5,
                top: "31%",
                width: 3.5,
                height: 34,
                background: "linear-gradient(180deg, #424244, #2e2e30)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            />
            {/* Power button */}
            <div
              style={{
                position: "absolute",
                right: -3.5,
                top: "25%",
                width: 3.5,
                height: 54,
                background: "linear-gradient(180deg, #424244, #2e2e30)",
                borderRadius: "0 3px 3px 0",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            />

            {/* Screen */}
            <div
              style={{
                position: "absolute",
                inset: 7,
                borderRadius: "clamp(32px, 3.6vw, 44px)",
                background: "linear-gradient(168deg, #041a14 0%, #020d0a 55%, #030c09 100%)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 13,
                  paddingBottom: 7,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "38%",
                    height: 31,
                    background: "#000",
                    borderRadius: 999,
                  }}
                />
              </div>

              {/* Scrollable app content */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "2px 12px 6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                  scrollbarWidth: "none",
                } as React.CSSProperties}
              >
                {/* Profile header */}
                <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "linear-gradient(145deg, #0F6E56 0%, #04342C 100%)",
                      border: "1.5px solid rgba(224,169,58,0.35)",
                      margin: "0 auto 7px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                    }}
                  >
                    <span
                      style={{
                        color: "#E0A93A",
                        fontWeight: 900,
                        fontSize: 17,
                        letterSpacing: "-0.05em",
                        fontFamily: "var(--font-stack-sans), sans-serif",
                      }}
                    >
                      S
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#FAF9F5",
                      fontWeight: 700,
                      fontSize: 12.5,
                      letterSpacing: "0.04em",
                      fontFamily: "var(--font-stack-sans), sans-serif",
                    }}
                  >
                    STEEZ
                  </div>
                  <div
                    style={{
                      color: "rgba(250,249,245,0.38)",
                      fontSize: 9.5,
                      fontWeight: 400,
                      marginTop: 1.5,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    Follow us
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(250,249,245,0.07)",
                    margin: "0 2px",
                    flexShrink: 0,
                  }}
                />

                {/* Social links */}
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.13, duration: 0.38 }}
                    whileHover={{ scale: 1.025, x: 2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "9px 11px",
                      background: "rgba(250,249,245,0.05)",
                      border: "1px solid rgba(250,249,245,0.07)",
                      borderRadius: 13,
                      textDecoration: "none",
                      flexShrink: 0,
                    } as React.CSSProperties}
                  >
                    {/* Platform icon */}
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9,
                        background: social.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 3px 10px rgba(0,0,0,0.35)",
                      }}
                    >
                      {social.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          color: "#FAF9F5",
                          fontWeight: 600,
                          fontSize: 11.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {social.name}
                      </div>
                      <div
                        style={{
                          color: "rgba(250,249,245,0.38)",
                          fontSize: 9.5,
                          marginTop: 1.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {social.handle}
                      </div>
                    </div>

                    {/* Chevron */}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(250,249,245,0.28)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Home indicator */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: 8,
                  paddingTop: 5,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 88,
                    height: 5,
                    background: "rgba(250,249,245,0.22)",
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
