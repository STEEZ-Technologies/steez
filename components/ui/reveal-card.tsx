"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IdentityCardBodyProps {
  fullName: string;
  about: string;
  scheme?: "plain" | "accented";
  displayAvatar?: boolean;
}

export const IdentityCardBody: React.FC<IdentityCardBodyProps> = ({
  fullName,
  about,
  scheme = "plain",
  displayAvatar = false,
}) => {
  const isAccented = scheme === "accented";

  return (
    <div
      className={`flex h-full flex-col transition-colors duration-300 ${
        isAccented
          ? "bg-[#E0A93A] text-[#04342C]"
          : "bg-white/5 backdrop-blur-sm text-white"
      }`}
      style={{ borderRadius: "inherit", padding: "var(--card-padding)" }}
    >
      <div className="mb-4 flex items-center gap-4">
        {displayAvatar && (
          <div className="h-12 w-12 rounded-full bg-gray-400" />
        )}
        <h3 className="text-xl font-bold uppercase tracking-tight leading-none">
          {fullName}
        </h3>
      </div>
      <p className="text-sm font-light leading-relaxed opacity-90">{about}</p>
      <div className="mt-auto pt-4 border-t border-current/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
        <span>STEEZ Agency</span>
        <span>2026</span>
      </div>
    </div>
  );
};

interface RevealCardContainerProps {
  base: React.ReactNode;
  overlay: React.ReactNode;
}

export const RevealCardContainer: React.FC<RevealCardContainerProps> = ({
  base,
  overlay,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const overlay = overlayRef.current;

      if (!container || !overlay) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(overlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "power3.inOut",
      });

      const onMouseEnter = () => tl.play();
      const onMouseLeave = () => tl.reverse();

      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-[1.6/1] w-full overflow-hidden cursor-pointer"
      style={{ borderRadius: "var(--radius-cards)" }}
    >
      <div className="h-full w-full">{base}</div>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          borderRadius: "inherit",
        }}
      >
        {overlay}
      </div>
    </div>
  );
};
