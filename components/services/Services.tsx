import { FadeIn } from "@/components/shared/FadeIn";
import { COPY } from "@/lib/copy";
import { ServiceItem } from "./ServiceItem";

export function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--ivory)",
        color: "var(--charcoal)",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        padding: "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px)",
        position: "relative",
        zIndex: 4,
      }}
    >
      <FadeIn
        delay={0}
        y={40}
        style={{
          textAlign: "center",
          marginBottom: "clamp(64px, 8vw, 112px)",
        }}
      >
        <h2
          style={{
            color: "#0E2D24",
            fontWeight: 900,
            fontSize: "clamp(3rem, 12vw, 160px)",
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          {COPY.services.headingEn}
        </h2>
        <div
          className="cn-text"
          lang="zh"
          style={{
            color: "var(--mint)",
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            marginTop: "clamp(8px, 1vw, 16px)",
            letterSpacing: "0.08em",
          }}
        >
          {COPY.services.headingCn}
        </div>
      </FadeIn>

      <ul
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          listStyle: "none",
          padding: 0,
        }}
      >
        {COPY.services.items.map((s, i) => (
          <FadeIn key={s.n} as="li" delay={i * 0.1} y={30}>
            <ServiceItem n={s.n} en={s.en} cn={s.cn} body={s.body} />
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
