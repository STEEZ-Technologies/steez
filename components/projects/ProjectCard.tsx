"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LiveProjectButton } from "@/components/shared/LiveProjectButton";
import { useReducedMotion } from "@/components/shared/useReducedMotion";
import { ProjectImages } from "./ProjectImages";

type Project = {
  n: string;
  cat: string;
  catCn: string;
  en: string;
  cn: string;
  op: string;
  body: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0.3, 0.9], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      style={{
        height: "85vh",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          scale: reduced ? 1 : scale,
          position: "sticky",
          top: "clamp(96px, 8vw, 140px)",
          width: "min(1280px, 100%)",
          marginTop: index * 28,
          background: "var(--forest-deep)",
          border: "2px solid rgba(224, 169, 58, 0.4)",
          borderRadius: "clamp(40px, 4vw, 60px)",
          padding: "clamp(20px, 2.5vw, 36px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
          color: "var(--bone)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "clamp(20px, 3vw, 40px)",
            alignItems: "center",
            padding: "clamp(8px, 1vw, 16px) clamp(12px, 2vw, 24px)",
            marginBottom: "clamp(20px, 2vw, 28px)",
          }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 140px)",
              lineHeight: 0.9,
              color: "var(--bone)",
              letterSpacing: "-0.04em",
            }}
          >
            {project.n}
          </div>

          <div>
            <div
              style={{
                color: "var(--mint)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: "clamp(0.7rem, 1vw, 0.95rem)",
              }}
            >
              {project.cat}{" "}
              <span style={{ opacity: 0.5 }}>·</span>{" "}
              <span className="cn-text" lang="zh">
                {project.catCn}
              </span>
            </div>
            <h3
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 3rem)",
                margin: "clamp(4px, 0.5vw, 10px) 0 0",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              {project.en}
            </h3>
            <div
              className="cn-text"
              lang="zh"
              style={{
                color: "var(--mint)",
                fontWeight: 600,
                fontSize: "clamp(0.95rem, 1.7vw, 1.6rem)",
                marginTop: 4,
                letterSpacing: "0.08em",
              }}
            >
              {project.cn}
            </div>
            <div
              style={{
                fontWeight: 300,
                opacity: 0.65,
                fontSize: "clamp(0.78rem, 1.05vw, 1rem)",
                marginTop: "clamp(6px, 1vw, 12px)",
              }}
            >
              {project.op}
            </div>
            <p
              style={{
                fontWeight: 300,
                lineHeight: 1.55,
                opacity: 0.8,
                maxWidth: 640,
                fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                marginTop: "clamp(8px, 1.2vw, 14px)",
              }}
            >
              {project.body}
            </p>
          </div>

          <LiveProjectButton />
        </div>

        <ProjectImages index={index} />
      </motion.div>
    </div>
  );
}
