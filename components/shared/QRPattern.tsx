import { useMemo } from "react";

type QRPatternProps = {
  size?: number;
  fg?: string;
  bg?: string;
};

export function QRPattern({
  size = 100,
  fg = "#04342C",
  bg = "transparent",
}: QRPatternProps) {
  const cells = 11;
  const cell = size / cells;
  const grid = useMemo(() => {
    const g: boolean[][] = [];
    for (let r = 0; r < cells; r++) {
      const row: boolean[] = [];
      for (let c = 0; c < cells; c++) {
        const inFinderTL = r < 3 && c < 3;
        const inFinderTR = r < 3 && c >= cells - 3;
        const inFinderBL = r >= cells - 3 && c < 3;
        if (inFinderTL || inFinderTR || inFinderBL) {
          const isEdge =
            r === 0 ||
            c === 0 ||
            r === 2 ||
            c === 2 ||
            (inFinderTR && c === cells - 3) ||
            (inFinderTR && c === cells - 1) ||
            (inFinderBL && r === cells - 3) ||
            (inFinderBL && r === cells - 1);
          const isCenter =
            (inFinderTL && r === 1 && c === 1) ||
            (inFinderTR && r === 1 && c === cells - 2) ||
            (inFinderBL && r === cells - 2 && c === 1);
          row.push(isEdge || isCenter);
        } else {
          row.push((r * 31 + c * 17 + r * c * 3) % 5 < 2);
        }
      }
      g.push(row);
    }
    return g;
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block", background: bg }}
    >
      {grid.flatMap((row, r) =>
        row.map(
          (on, c) =>
            on && (
              <rect
                key={`${r}-${c}`}
                x={c * cell}
                y={r * cell}
                width={cell}
                height={cell}
                fill={fg}
              />
            ),
        ),
      )}
    </svg>
  );
}
