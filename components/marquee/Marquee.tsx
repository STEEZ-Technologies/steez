"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { STEEZ_TILES } from "@/components/tiles";
import { useReducedMotion } from "@/components/shared/useReducedMotion";

export function Marquee() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const sectionTop = window.scrollY + r.top;
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(o);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  const row1 = STEEZ_TILES.slice(0, 11);
  const row2 = STEEZ_TILES.slice(11);
  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  const tx1 = reduced ? 0 : offset - 200;
  const tx2 = reduced ? 0 : -(offset - 200);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--forest)",
        paddingTop: "clamp(96px, 10vw, 200px)",
        paddingBottom: 40,
        overflowX: "clip",
      }}
    >
      <Row tiles={tripled1} tx={tx1} />
      <div style={{ height: 12 }} />
      <Row tiles={tripled2} tx={tx2} />
    </section>
  );
}

type RowProps = {
  tiles: ReadonlyArray<ComponentType>;
  tx: number;
};

function Row({ tiles, tx }: RowProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        transform: `translateX(${tx}px)`,
        willChange: "transform",
      }}
    >
      {tiles.map((Tile, i) => (
        <div
          key={i}
          style={{
            flex: "none",
            width: 420,
            height: 270,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(111, 201, 161, 0.15)",
            background: "var(--forest-deep)",
          }}
        >
          <Tile />
        </div>
      ))}
    </div>
  );
}
