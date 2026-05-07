import { QRPattern } from "@/components/shared/QRPattern";

const CARDS = [
  { rot: -16, x: -18, z: 0, light: false },
  { rot: -2, x: 0, z: 1, light: true },
  { rot: 14, x: 18, z: 2, light: false },
];

export function CornerCardStack() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1.2 / 1",
        position: "relative",
        filter: "drop-shadow(0 30px 50px rgba(111,201,161,0.20))",
      }}
    >
      {CARDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: "15% 10%",
            transform: `translate(${c.x}%, ${i * -2}%) rotate(${c.rot}deg) perspective(900px) rotateY(-10deg)`,
            background: c.light
              ? "linear-gradient(135deg, #FFFFFF, #F2EFE5)"
              : "linear-gradient(135deg, #14392F, #0A211B)",
            border: c.light
              ? "1px solid rgba(14,45,36,0.12)"
              : "1px solid rgba(111,201,161,0.30)",
            borderRadius: 10,
            padding: "12% 12%",
            color: c.light ? "#0E2D24" : "var(--bone)",
            zIndex: c.z,
          }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: "clamp(10px, 1.4vw, 18px)",
              letterSpacing: "0.18em",
            }}
          >
            STEEZ
          </div>
          <div
            className="cn-text"
            lang="zh"
            style={{
              fontWeight: 700,
              fontSize: "clamp(6px, 0.9vw, 11px)",
              color: "var(--mint)",
              letterSpacing: "0.2em",
              marginTop: 2,
            }}
          >
            思智
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "12%",
              right: "12%",
              width: "32%",
              aspectRatio: "1",
              background: c.light ? "#0E2D24" : "#F2EFE5",
              borderRadius: 4,
              padding: 3,
            }}
          >
            <QRPattern size={50} fg={c.light ? "var(--mint)" : "#0A211B"} />
          </div>
        </div>
      ))}
    </div>
  );
}
