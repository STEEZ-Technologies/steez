import { ContactButton } from "@/components/shared/ContactButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { COPY } from "@/lib/copy";
import { AnimatedText } from "./AnimatedText";
import { CornerCardEdge } from "./CornerCardEdge";
import { CornerCardStack } from "./CornerCardStack";
import { CornerChatBubble } from "./CornerChatBubble";
import { CornerQR } from "./CornerQR";

export function About() {
  return (
    <section
      id="about"
      className="sticky top-0"
      style={{
        minHeight: "100vh",
        padding: "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(40px, 6vw, 64px)",
      }}
    >
      <FadeIn
        delay={0.1}
        duration={0.9}
        x={-80}
        y={0}
        style={{
          position: "absolute",
          top: "4%",
          left: "clamp(8px, 4vw, 64px)",
          width: "clamp(110px, 14vw, 210px)",
          zIndex: 0,
        }}
      >
        <CornerQR />
      </FadeIn>
      <FadeIn
        delay={0.15}
        duration={0.9}
        x={80}
        y={0}
        style={{
          position: "absolute",
          top: "4%",
          right: "clamp(8px, 4vw, 64px)",
          width: "clamp(120px, 14vw, 210px)",
          zIndex: 0,
        }}
      >
        <CornerChatBubble />
      </FadeIn>
      <FadeIn
        delay={0.25}
        duration={0.9}
        x={-80}
        y={0}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "clamp(20px, 6vw, 120px)",
          width: "clamp(100px, 12vw, 180px)",
          zIndex: 0,
        }}
      >
        <CornerCardEdge />
      </FadeIn>
      <FadeIn
        delay={0.3}
        duration={0.9}
        x={80}
        y={0}
        style={{
          position: "absolute",
          bottom: "8%",
          right: "clamp(20px, 6vw, 120px)",
          width: "clamp(130px, 14vw, 220px)",
          zIndex: 0,
        }}
      >
        <CornerCardStack />
      </FadeIn>

      <FadeIn
        delay={0}
        y={40}
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          className="hero-heading"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          {COPY.about.headingEn}
        </h2>
        <div
          className="cn-text"
          lang="zh"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            color: "var(--mint)",
            marginTop: "clamp(8px, 1vw, 16px)",
            letterSpacing: "0.08em",
          }}
        >
          {COPY.about.headingCn}
        </div>
      </FadeIn>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(64px, 8vw, 96px)",
          position: "relative",
          zIndex: 2,
          maxWidth: 720,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <AnimatedText
            text={COPY.about.body}
            style={{
              color: "var(--bone)",
              fontWeight: 500,
              lineHeight: 1.55,
              maxWidth: 640,
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              textAlign: "center",
              margin: "0 auto",
            }}
          />
          <div
            className="cn-text"
            style={{
              color: "var(--mint)",
              fontWeight: 300,
              letterSpacing: "0.25em",
              fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
              marginTop: "clamp(20px, 2.5vw, 32px)",
              textTransform: "uppercase",
            }}
          >
            <span lang="zh">为中国制造商而生</span> · BUILT FOR CHINESE MAKERS
          </div>
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
