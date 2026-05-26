"use client";

export function BrowserMockup() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "560px", margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 11",
          background: "#0E0E0E",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 50px 100px -20px rgba(0,0,0,0.45), 0 30px 60px -30px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            background: "#161616",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
          <div
            style={{
              flex: 1,
              marginLeft: 12,
              padding: "5px 12px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8,
              fontSize: 11,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.02em",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            }}
          >
            steez.digital/jiangsu-aquatech
          </div>
        </div>

        <iframe
          srcDoc={SITE_HTML}
          scrolling="no"
          style={{
            width: "100%",
            height: "calc(100% - 38px)",
            border: "none",
            background: "#04342C",
            display: "block",
            pointerEvents: "none",
            overflow: "hidden",
          }}
          title="Company Profile Showcase"
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "115%",
          height: "115%",
          background:
            "radial-gradient(circle, rgba(224, 169, 58, 0.12) 0%, transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const SITE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@700;900&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg: #04342C;
    --bg-2: #02261F;
    --mint: #1D9E75;
    --gold: #E0A93A;
    --ivory: #FAF9F5;
    --hairline: rgba(250,249,245,0.08);
    --hairline-strong: rgba(250,249,245,0.18);
    --font-display: "Stack Sans Notch", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); overflow: hidden; height: 100vh; color: var(--ivory); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif; }
  body { padding: 18px 28px 22px; display: flex; flex-direction: column; gap: 14px; }
  body > * { flex-shrink: 0; }

  nav { display: flex; justify-content: space-between; align-items: center; gap: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--hairline); }
  nav > * { flex-shrink: 0; }
  .brand { font-family: var(--font-display); font-size: 14px; font-weight: 900; letter-spacing: -0.04em; text-transform: uppercase; }
  .brand .cn { color: var(--gold); margin-left: 6px; font-weight: 700; letter-spacing: 0; }
  .nav-links { display: flex; gap: 18px; flex-wrap: nowrap; font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(250,249,245,0.55); font-weight: 600; white-space: nowrap; }
  .nav-links > * { flex-shrink: 0; white-space: nowrap; }
  .nav-links .active { color: var(--ivory); }
  .nav-lang { color: var(--gold); font-weight: 700; }

  .hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 18px; align-items: center; }

  .hero-text { display: flex; flex-direction: column; gap: 10px; }
  .eyebrow { font-size: 9px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.24em; opacity: 0.85; display: inline-flex; align-items: center; gap: 8px; }
  .eyebrow::before { content: ""; width: 14px; height: 1px; background: var(--gold); opacity: 0.6; }
  .h1 { font-size: 24px; line-height: 1.05; letter-spacing: -0.025em; font-weight: 800; text-transform: uppercase; }
  .h1 .accent { color: var(--gold); font-weight: 800; }
  .lede { font-size: 10px; line-height: 1.55; color: rgba(250,249,245,0.62); max-width: 240px; font-weight: 400; }
  .ctas { display: flex; gap: 8px; margin-top: 4px; }
  .btn-1 { padding: 8px 16px; border-radius: 999px; background: var(--gold); color: #1A1A1A; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; }
  .btn-2 { padding: 8px 16px; border-radius: 999px; background: transparent; border: 1px solid var(--hairline-strong); color: var(--ivory); font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; }

  /* Hero image card */
  .hero-image { position: relative; aspect-ratio: 4/3.2; border-radius: 14px; overflow: hidden; background:
    radial-gradient(circle at 20% 20%, rgba(224,169,58,0.18) 0%, transparent 55%),
    radial-gradient(circle at 80% 70%, rgba(29,158,117,0.22) 0%, transparent 60%),
    linear-gradient(140deg, #043831, #02211C);
    border: 1px solid var(--hairline);
  }
  .hero-image::before {
    content: "";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(250,249,245,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250,249,245,0.04) 1px, transparent 1px);
    background-size: 18px 18px;
    opacity: 0.6;
  }
  .pump-badge { position: absolute; top: 10px; left: 10px; display: inline-flex; align-items: center; gap: 5px; padding: 4px 8px; border-radius: 999px; background: rgba(4,52,44,0.7); border: 1px solid var(--hairline-strong); backdrop-filter: blur(6px); font-size: 8px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .pump-badge .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--mint); box-shadow: 0 0 6px var(--mint); }
  .pump-tag { position: absolute; bottom: 10px; left: 10px; font-size: 8px; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.55; }
  .pump-shape { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60%; height: 60%; }
  .pump-circle { position: absolute; inset: 0; border-radius: 50%; border: 1.5px dashed rgba(224,169,58,0.35); }
  .pump-inner { position: absolute; inset: 18%; border-radius: 50%; background: radial-gradient(circle at 35% 35%, rgba(224,169,58,0.4), rgba(4,52,44,0.7) 70%); border: 1px solid rgba(224,169,58,0.4); }
  .pump-hub { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border-radius: 50%; background: var(--gold); }

  /* Stats strip */
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-top: 12px; border-top: 1px solid var(--hairline); }
  .stat { padding: 8px 10px; border-radius: 10px; background: rgba(250,249,245,0.03); border: 1px solid var(--hairline); }
  .stat-val { font-size: 16px; font-weight: 800; line-height: 1; }
  .stat-val .acc { color: var(--gold); }
  .stat-lbl { margin-top: 4px; font-size: 8px; font-weight: 600; color: rgba(250,249,245,0.55); text-transform: uppercase; letter-spacing: 0.16em; }
</style>
</head>
<body>
  <nav>
    <div class="brand">JIANGSU<span class="cn">江苏</span></div>
    <div class="nav-links">
      <div class="active">Profile</div>
      <div>Products</div>
      <div>Catalogue</div>
      <div>Contact</div>
      <div class="nav-lang">EN · 中</div>
    </div>
  </nav>

  <div class="hero">
    <div class="hero-text">
      <div class="eyebrow">Industrial Manufacturing</div>
      <div class="h1">Centrifugal<br/><span class="accent">Pumps.</span> Industrial<br/>scale.</div>
      <div class="lede">ISO 9001 hardware factory in Wuxi, exporting precision pumps to 38 countries since 2018.</div>
      <div class="ctas">
        <span class="btn-1">Request Quote</span>
        <span class="btn-2">View Catalogue</span>
      </div>
    </div>

    <div class="hero-image">
      <div class="pump-badge"><span class="dot"></span>Live · 2,000 m³/h</div>
      <div class="pump-shape">
        <div class="pump-circle"></div>
        <div class="pump-inner"></div>
        <div class="pump-hub"></div>
      </div>
      <div class="pump-tag">GX-2000 · Centrifugal</div>
    </div>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-val">12<span class="acc">+</span></div>
      <div class="stat-lbl">SKUs</div>
    </div>
    <div class="stat">
      <div class="stat-val">38<span class="acc">·</span></div>
      <div class="stat-lbl">Countries</div>
    </div>
    <div class="stat">
      <div class="stat-val">ISO<span class="acc"> 9001</span></div>
      <div class="stat-lbl">Certified</div>
    </div>
  </div>
</body>
</html>`;
