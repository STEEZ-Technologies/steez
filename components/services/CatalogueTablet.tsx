"use client";

export function CatalogueTablet() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "560px", margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          background: "#1A1A1A",
          borderRadius: 24,
          border: "10px solid #1A1A1A",
          boxShadow:
            "0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -30px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: 4,
            transform: "translateX(-50%)",
            width: 36,
            height: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.08)",
            zIndex: 2,
          }}
        />

        <iframe
          srcDoc={SKELETON_CATALOGUE_HTML}
          scrolling="no"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "#04342C",
            display: "block",
            borderRadius: 14,
            pointerEvents: "none",
            overflow: "hidden",
          }}
          title="Catalogue Showcase"
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
            "radial-gradient(circle, rgba(29, 158, 117, 0.15) 0%, transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const SKELETON_CATALOGUE_HTML = `<!DOCTYPE html>
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
  body { padding: 24px; }

  header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid rgba(250,249,245,0.1); }
  .crumbs { display: flex; gap: 8px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(250,249,245,0.4); }
  .crumb.active { color: var(--gold); font-weight: 700; opacity: 0.8; }
  .actions { display: flex; gap: 8px; }
  .action-pill { padding: 4px 10px; border-radius: 20px; background: var(--skeleton); font-size: 8px; text-transform: uppercase; font-weight: 700; }
  .action-pill.mint { background: var(--mint); color: var(--bg); }

  .title { width: 180px; height: 24px; border-radius: 6px; background: var(--ivory); margin-top: 24px; margin-bottom: 8px; }
  .sub-title { width: 240px; height: 8px; border-radius: 4px; background: var(--skeleton); margin-bottom: 24px; }

  .filterbar { display: flex; gap: 8px; margin-bottom: 24px; }
  .chip { padding: 6px 12px; border-radius: 20px; background: var(--skeleton); border: 1px solid rgba(250,249,245,0.1); font-size: 9px; text-transform: uppercase; font-weight: 600; color: rgba(250,249,245,0.6); }
  .chip.active { background: var(--gold); color: #1A1A1A; border-color: var(--gold); }

  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .card { padding: 10px; border-radius: 10px; background: var(--skeleton); border: 1px solid rgba(250,249,245,0.05); position: relative; }
  .ph { width: 100%; aspect-ratio: 4/3; border-radius: 6px; background: rgba(250,249,245,0.05); margin-bottom: 10px; }
  .line-1 { width: 70%; height: 8px; border-radius: 4px; background: var(--ivory); opacity: 0.8; margin-bottom: 6px; }
  .line-2 { width: 40%; height: 6px; border-radius: 3px; background: var(--skeleton); }
  .badge { position: absolute; top: 6px; right: 6px; font-size: 7px; background: var(--mint); color: var(--bg); padding: 2px 5px; border-radius: 4px; font-weight: 800; }
</style>
</head>
<body>
  <header>
    <div class="crumbs">
      <div>Factory</div>
      <div>·</div>
      <div>Catalogue</div>
      <div>·</div>
      <div class="crumb active">Showroom</div>
    </div>
    <div class="actions">
      <div class="action-pill">EN / 中</div>
      <div class="action-pill mint">3D / AR</div>
    </div>
  </header>

  <div class="title pulse"></div>
  <div class="sub-title pulse"></div>

  <div class="filterbar">
    <div class="chip active">All</div>
    <div class="chip">Cast Iron</div>
    <div class="chip">Ceramic</div>
    <div class="chip">Stainless</div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="badge">3D</div>
      <div class="ph pulse"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
    <div class="card">
      <div class="ph pulse" style="background: rgba(29, 158, 117, 0.1)"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
    <div class="card">
      <div class="badge">AR</div>
      <div class="ph pulse" style="background: rgba(224, 169, 58, 0.1)"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
    <div class="card">
      <div class="ph pulse"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
    <div class="card">
      <div class="badge">3D</div>
      <div class="ph pulse"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
    <div class="card">
      <div class="ph pulse"></div>
      <div class="line-1 pulse"></div>
      <div class="line-2 pulse"></div>
    </div>
  </div>
</body>
</html>`;
