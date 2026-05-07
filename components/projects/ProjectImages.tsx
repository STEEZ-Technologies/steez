import { STEEZ_TILES } from "@/components/tiles";
import { ImageTile } from "./ImageTile";

const PICKS: ReadonlyArray<readonly [number, number, number]> = [
  [0, 2, 19],
  [5, 17, 8],
  [6, 11, 9],
];

type ProjectImagesProps = { index: number };

export function ProjectImages({ index }: ProjectImagesProps) {
  const [a, b, c] = PICKS[index] ?? PICKS[0];
  const LeftTop = STEEZ_TILES[a];
  const LeftBottom = STEEZ_TILES[b];
  const Right = STEEZ_TILES[c];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40fr 60fr",
        gap: "clamp(12px, 1.5vw, 20px)",
        padding: "0 clamp(12px, 2vw, 24px) clamp(12px, 2vw, 24px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px, 1.5vw, 20px)",
        }}
      >
        <ImageTile>
          <LeftTop />
        </ImageTile>
        <ImageTile tall>
          <LeftBottom />
        </ImageTile>
      </div>
      <ImageTile fill>
        <Right />
      </ImageTile>
    </div>
  );
}
