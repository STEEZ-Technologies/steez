import type { ReactNode } from "react";

type ImageTileProps = {
  tall?: boolean;
  fill?: boolean;
  children: ReactNode;
};

export function ImageTile({ tall, fill, children }: ImageTileProps) {
  const aspect = fill ? "auto" : tall ? "1.4 / 1" : "2 / 1";
  return (
    <div
      style={{
        borderRadius: "clamp(28px, 3vw, 44px)",
        overflow: "hidden",
        background: "var(--forest)",
        border: "1px solid rgba(224, 169, 58, 0.18)",
        aspectRatio: fill ? "0.9 / 1" : aspect,
        height: fill ? "100%" : "auto",
        minHeight: tall
          ? "clamp(160px, 22vw, 340px)"
          : fill
            ? "auto"
            : "clamp(130px, 16vw, 230px)",
      }}
    >
      {children}
    </div>
  );
}
