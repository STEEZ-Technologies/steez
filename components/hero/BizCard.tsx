import { QRPattern } from "@/components/shared/QRPattern";

type BizCardProps = {
  width?: number;
  variant?: "dark" | "light";
  name?: string;
  role?: string;
  email?: string;
  tilt?: number;
};

export function BizCard({
  width = 520,
  variant = "dark",
  name = "WEI CHEN",
  role = "SALES DIR · SHENZHEN PRECISION",
  email = "wei@steez.cn",
  tilt = 10,
}: BizCardProps) {
  const isLight = variant === "light";
  const aspect = 1.6;
  const h = width / aspect;

  const fg = isLight ? "#04342C" : "#FAF9F5";
  const sub = isLight
    ? "rgba(4, 52, 44,0.55)"
    : "rgba(250, 249, 245,0.55)";
  const line = isLight
    ? "rgba(4, 52, 44,0.18)"
    : "rgba(224, 169, 58,0.30)";
  const padding = width * 0.07;

  return (
    <div
      style={{
        width,
        height: h,
        position: "relative",
        transform: `perspective(1200px) rotateY(-${tilt}deg) rotateX(4deg)`,
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 30px 80px rgba(224, 169, 58, 0.18))",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? "linear-gradient(135deg, #FFFFFF 0%, #FAF9F5 70%, #EFEDE3 100%)"
            : "linear-gradient(135deg, #084A3D 0%, #021F18 65%, #021110 100%)",
          borderRadius: width * 0.04,
          border: `1px solid ${line}`,
          overflow: "hidden",
          boxShadow: isLight
            ? "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.6)"
            : "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {!isLight && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(224, 169, 58,0.18), transparent 50%)",
              pointerEvents: "none",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: padding,
            left: padding,
            lineHeight: 1,
          }}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: width * 0.075,
              color: fg,
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
              fontSize: width * 0.038,
              color: "var(--mint)",
              letterSpacing: "0.22em",
              marginTop: width * 0.015,
            }}
          >
            思智
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: padding,
            right: padding,
            textAlign: "right",
            fontSize: width * 0.018,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: sub,
            textTransform: "uppercase",
          }}
        >
          digital business card
          <br />
          <span className="cn-text" lang="zh" style={{ opacity: 0.8 }}>
            智能名片
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            left: padding,
            right: padding,
            top: "52%",
            height: 1,
            background: line,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: padding,
            bottom: padding,
            fontSize: width * 0.025,
            lineHeight: 1.5,
            color: fg,
          }}
        >
          <div style={{ fontWeight: 700, letterSpacing: "0.08em" }}>{name}</div>
          <div style={{ color: sub, fontSize: width * 0.02 }}>{role}</div>
          <div
            style={{
              color: sub,
              fontSize: width * 0.02,
              marginTop: width * 0.008,
            }}
          >
            {email}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: padding,
            bottom: padding,
            width: width * 0.18,
            height: width * 0.18,
            background: isLight ? "#04342C" : "#FAF9F5",
            borderRadius: width * 0.012,
            padding: width * 0.012,
          }}
        >
          <QRPattern
            size={width * 0.156}
            fg={isLight ? "var(--mint)" : "#021F18"}
          />
        </div>
      </div>
    </div>
  );
}
