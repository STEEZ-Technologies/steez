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
            steez.cn/showroom
          </div>
        </div>

        <iframe
          srcDoc={SKELETON_MICROSITE_HTML}
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
          title="Microsite Showcase"
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

const SKELETON_MICROSITE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  :root {
    --bg: #04342C;
    --mint: #1D9E75;
    --gold: #E0A93A;
    --ivory: #FAF9F5;
    --skeleton: rgba(250, 249, 245, 0.08);
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  .pulse { animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); overflow: hidden; height: 100vh; color: var(--ivory); font-family: system-ui, -apple-system, sans-serif; }
  body { padding: 24px 32px; }
  
  nav { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid rgba(250,249,245,0.1); margin-bottom: 32px; }
  .logo-skel { width: 100px; height: 16px; border-radius: 4px; background: var(--ivory); }
  .nav-links { display: flex; gap: 20px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(250,249,245,0.6); font-weight: 500; }
  .nav-lang { color: var(--gold); font-weight: 700; }
  
  .hero { display: flex; flex-direction: column; gap: 16px; }
  .eyebrow { font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.8; }
  .h1-line-1 { width: 320px; height: 36px; border-radius: 8px; background: var(--ivory); }
  .h1-line-2 { width: 240px; height: 36px; border-radius: 8px; background: var(--mint); }
  
  .lede { width: 80%; height: 12px; border-radius: 6px; background: var(--skeleton); margin-top: 12px; }
  .lede-2 { width: 60%; height: 12px; border-radius: 6px; background: var(--skeleton); }
  
  .ctas { display: flex; gap: 12px; margin-top: 24px; }
  .btn-1 { width: 140px; height: 40px; border-radius: 20px; background: var(--gold); color: #1A1A1A; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .btn-2 { width: 120px; height: 40px; border-radius: 20px; background: transparent; border: 1px solid rgba(250,249,245,0.2); color: var(--ivory); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 48px; padding-top: 24px; border-top: 1px solid rgba(250,249,245,0.1); }
  .stat-val { width: 60px; height: 24px; border-radius: 6px; background: var(--ivory); margin-bottom: 8px; }
  .stat-lbl { font-size: 9px; color: rgba(250,249,245,0.5); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
</style>
</head>
<body>
  <nav>
    <div class="logo-skel pulse"></div>
    <div class="nav-links">
      <div>Profile</div>
      <div>Products</div>
      <div>Contact</div>
      <div class="nav-lang">EN / 中</div>
    </div>
  </nav>
  <div class="hero">
    <div class="eyebrow">Export Manufacturing</div>
    <div class="h1-line-1 pulse"></div>
    <div class="h1-line-2 pulse"></div>
    <div class="lede pulse"></div>
    <div class="lede-2 pulse"></div>
    <div class="ctas">
      <div class="btn-1">Request Quote</div>
      <div class="btn-2">Catalogue</div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="stat-val pulse"></div>
        <div class="stat-lbl">SKUs</div>
      </div>
      <div class="stat">
        <div class="stat-val pulse" style="background: var(--mint)"></div>
        <div class="stat-lbl">Countries</div>
      </div>
      <div class="stat">
        <div class="stat-val pulse" style="background: var(--gold)"></div>
        <div class="stat-lbl">Experience</div>
      </div>
    </div>
  </div>
</body>
</html>`;
