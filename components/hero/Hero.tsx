"use client";

import { useEffect, useState } from "react";
import { ContactButton } from "@/components/shared/ContactButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { Magnet } from "@/components/shared/Magnet";
import { COPY } from "@/lib/copy";
import { BizCard } from "./BizCard";
import { Nav } from "./Nav";

type HeroProps = { cardVariant?: "dark" | "light" };

export function Hero({ cardVariant = "dark" }: HeroProps) {
  const [cardWidth, setCardWidth] = useState(520);

  useEffect(() => {
    function update() {
      setCardWidth(Math.min(560, window.innerWidth * 0.5));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "clip",
      }}
    >
      <Nav />

      <div style={{ overflow: "hidden", position: "relative", zIndex: 2 }}>
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading"
            style={{
              fontSize: "clamp(180px, 22vw, 460px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
              whiteSpace: "nowrap",
              width: "100%",
              textAlign: "center",
              margin: 0,
              marginTop: "clamp(-20px, -1vw, 16px)",
              textTransform: "uppercase",
            }}
          >
            {COPY.hero.title}
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.25} y={20}>
        <div
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2.25rem)",
            fontWeight: 300,
            color: "var(--mint)",
            textAlign: "center",
            letterSpacing: "0.04em",
            marginTop: 8,
          }}
        >
          <span className="cn-text" lang="zh">
            思智
          </span>
          <span style={{ margin: "0 0.4em", opacity: 0.5 }}>·</span>
          <span className="cn-text" lang="zh">
            连接全球买家
          </span>
        </div>
      </FadeIn>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "clamp(60px, 6vw, 120px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <BizCard width={cardWidth} variant={cardVariant} />
          </Magnet>
        </FadeIn>
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding:
            "0 clamp(20px, 4vw, 40px) clamp(28px, 4vw, 48px)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <FadeIn delay={0.35} y={20}>
          <p
            style={{
              color: "var(--bone)",
              fontWeight: 300,
              textTransform: "lowercase",
              letterSpacing: "0.02em",
              lineHeight: 1.3,
              fontSize: "clamp(0.78rem, 1.4vw, 1.4rem)",
              maxWidth: "clamp(160px, 22vw, 320px)",
            }}
          >
            {COPY.hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            label={COPY.hero.cta.en}
            cn={COPY.hero.cta.cn}
          />
        </FadeIn>
      </div>
    </section>
  );
}
