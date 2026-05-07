"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";

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
  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
