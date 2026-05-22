"use client";

import { ReactLenis } from "lenis/react";
import { useIsMobile } from "@/lib/useIsMobile";

export function Lenis({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  if (isMobile) return <>{children}</>;
  return <ReactLenis root>{children}</ReactLenis>;
}
