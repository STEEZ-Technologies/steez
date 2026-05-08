import { FadeIn } from "@/components/shared/FadeIn";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { COPY } from "@/lib/copy";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const items = COPY.projects.items;
  return (
    <section
      id="projects"
      className="sticky top-0"
      style={{
        background: "var(--forest)",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        marginTop: "clamp(-56px, -4vw, -40px)",
        padding:
          "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px)",
        zIndex: 5,
      }}
    >
      <FadeIn
        delay={0}
        y={40}
        style={{
          textAlign: "center",
          marginBottom: "clamp(48px, 6vw, 80px)",
        }}
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
          04 — Portfolio
        </div>
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
          {COPY.projects.headingEn}
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
          {COPY.projects.headingCn}
        </div>
      </FadeIn>

      {items.map((p, i) => (
        <ContainerScroll key={p.n} titleComponent={<></>}>
          <ProjectCard
            project={p}
            index={i}
            total={items.length}
          />
        </ContainerScroll>
      ))}
    </section>
  );
}
