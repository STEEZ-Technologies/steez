"use client";

import { ReactLenis } from "lenis/react";

export function Lenis({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
