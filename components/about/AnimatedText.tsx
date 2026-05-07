"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { type CSSProperties, useMemo, useRef } from "react";
import { useReducedMotion } from "@/components/shared/useReducedMotion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((ch, i) => (
        <Char
          key={i}
          ch={ch}
          start={i / chars.length}
          end={i / chars.length + 1 / chars.length}
          progress={scrollYProgress}
          reduced={reduced}
        />
      ))}
    </p>
  );
}

type CharProps = {
  ch: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
  reduced: boolean;
};

function Char({ ch, start, end, progress, reduced }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        whiteSpace: "pre",
      }}
    >
      <span style={{ opacity: 0.18 }} aria-hidden>
        {ch}
      </span>
      <motion.span
        style={{
          opacity: reduced ? 1 : opacity,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {ch}
      </motion.span>
    </span>
  );
}
