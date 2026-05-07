"use client";

import { useReducedMotion as motionUseReducedMotion } from "motion/react";

export function useReducedMotion(): boolean {
  return motionUseReducedMotion() ?? false;
}
