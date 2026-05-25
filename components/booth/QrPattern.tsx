"use client";

const PATTERN = [
  [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0],
  [1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0],
  [0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1],
  [1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0],
  [0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
  [1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0],
  [1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0],
  [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1],
];

type Props = { size?: number; foreground?: string; background?: string };

export function QrPattern({
  size = 96,
  foreground = "#04342C",
  background = "#FAF9F5",
}: Props) {
  const grid = PATTERN.length;
  const cell = size / grid;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${grid} ${grid}`}
      shapeRendering="crispEdges"
      style={{ display: "block", borderRadius: 8 }}
    >
      <rect width={grid} height={grid} fill={background} />
      {PATTERN.flatMap((row, y) =>
        row.map((v, x) =>
          v ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={foreground} /> : null
        )
      )}
      {/* Center logo dot */}
      <rect
        x={grid / 2 - 1.5}
        y={grid / 2 - 1.5}
        width={3}
        height={3}
        rx={0.5}
        fill={background}
      />
      <circle cx={grid / 2} cy={grid / 2} r={0.9} fill="#E0A93A" />
    </svg>
  );
}
