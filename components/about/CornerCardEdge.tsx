export function CornerCardEdge() {
  return (
    <div
      style={{
        transform: "perspective(900px) rotateX(60deg) rotateZ(-12deg)",
        filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))",
        width: "100%",
        aspectRatio: "1.6 / 1",
        position: "relative",
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            background:
              i % 2 === 0
                ? "linear-gradient(90deg, #084A3D, #021F18)"
                : "var(--mint)",
            borderRadius: 8,
            transform: `translateY(${i * 8}px)`,
            boxShadow: "0 1px 0 rgba(255,255,255,0.05)",
          }}
        />
      ))}
    </div>
  );
}
