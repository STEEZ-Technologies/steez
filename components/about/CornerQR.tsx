import { QRPattern } from "@/components/shared/QRPattern";

export function CornerQR() {
  return (
    <div
      style={{
        transform: "perspective(800px) rotateY(-15deg) rotate(-8deg)",
        filter: "drop-shadow(0 30px 50px rgba(224, 169, 58,0.30))",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "var(--mint)",
          borderRadius: "clamp(8px, 1.2vw, 14px)",
          padding: "clamp(8px, 1.2vw, 14px)",
          aspectRatio: "1 / 1",
        }}
      >
        <QRPattern size={200} fg="#021F18" />
      </div>
    </div>
  );
}
