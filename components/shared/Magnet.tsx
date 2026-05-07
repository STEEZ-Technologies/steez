"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type MagnetProps = {
  padding?: number;
  strength?: number;
  children?: ReactNode;
  style?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export function Magnet({
  padding = 150,
  strength = 3,
  children,
  style,
  ...rest
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.max(
        Math.abs(dx) - r.width / 2,
        Math.abs(dy) - r.height / 2,
      );
      if (dist < padding) {
        setT({ x: dx / strength, y: dy / strength, active: true });
      } else if (t.active) {
        setT({ x: 0, y: 0, active: false });
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength, t.active]);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        transform: `translate3d(${t.x}px, ${t.y}px, 0)`,
        transition: t.active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
