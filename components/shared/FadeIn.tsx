"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

type FadeInProps = {
  as?: keyof typeof motion;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children?: ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  ...rest
}: FadeInProps) {
  const Tag = (motion[as] ?? motion.div) as ElementType;
  const isMobile = useIsMobile();

  const finalDuration = isMobile ? Math.min(duration, 0.25) : duration;
  const finalY = isMobile ? 0 : y;
  const finalX = isMobile ? 0 : x;
  const finalDelay = isMobile ? Math.min(delay, 0.1) : delay;

  return (
    <Tag
      initial={{ opacity: 0, x: finalX, y: finalY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration: finalDuration, delay: finalDelay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
