export function CornerChatBubble() {
  return (
    <div
      style={{
        transform: "perspective(800px) rotateY(15deg) rotate(8deg)",
        filter: "drop-shadow(0 30px 50px rgba(224, 169, 58,0.25))",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(224, 169, 58,0.20)",
          borderRadius: "20px 20px 20px 4px",
          padding: "10px 16px",
          color: "var(--bone)",
          fontSize: "clamp(0.6rem, 0.9vw, 0.9rem)",
          fontWeight: 500,
        }}
      >
        Hi! Saw your card.
      </div>
      <div
        className="cn-text"
        lang="zh"
        style={{
          alignSelf: "flex-end",
          background: "linear-gradient(123deg, #B5872E, #E0A93A)",
          borderRadius: "20px 20px 4px 20px",
          padding: "10px 16px",
          color: "#021F18",
          fontSize: "clamp(0.6rem, 0.9vw, 0.9rem)",
          fontWeight: 600,
        }}
      >
        欢迎！
      </div>
    </div>
  );
}
