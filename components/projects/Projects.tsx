import { FadeIn } from "@/components/shared/FadeIn";
import { COPY } from "@/lib/copy";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const items = COPY.projects.items;
  return (
    <section
      id="projects"
      style={{
        background: "var(--forest)",
        borderTopLeftRadius: "clamp(40px, 4vw, 60px)",
        borderTopRightRadius: "clamp(40px, 4vw, 60px)",
        marginTop: "clamp(-56px, -4vw, -40px)",
        padding:
          "clamp(80px, 10vw, 160px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px)",
        position: "relative",
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

      <div>
        {items.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={items.length}
          />
        ))}
      </div>
    </section>
  );
}
