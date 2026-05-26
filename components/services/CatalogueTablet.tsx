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
          srcDoc={CATALOGUE_HTML}
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

const CATALOGUE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  :root {
    --bg: #04342C;
    --bg-2: #02261F;
    --mint: #1D9E75;
    --gold: #E0A93A;
    --ivory: #FAF9F5;
    --hairline: rgba(250,249,245,0.08);
    --hairline-strong: rgba(250,249,245,0.18);
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    background: linear-gradient(180deg, #053a32 0%, var(--bg) 100%);
    overflow: hidden; height: 100vh;
    color: var(--ivory);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif;
    padding: 16px 20px;
    display: flex; flex-direction: column; gap: 12px;
  }
  body > * { flex-shrink: 0; }

  header { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--hairline); }
  header > * { flex-shrink: 0; }
  .crumbs { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(250,249,245,0.45); white-space: nowrap; }
  .crumbs > * { flex-shrink: 0; }
  .crumbs .sep { opacity: 0.4; }
  .crumb.active { color: var(--gold); font-weight: 700; opacity: 0.95; }
  .actions { display: flex; gap: 6px; flex-wrap: nowrap; }
  .actions > * { flex-shrink: 0; white-space: nowrap; }
  .pill { padding: 4px 9px; border-radius: 999px; background: rgba(250,249,245,0.05); border: 1px solid var(--hairline); font-size: 8px; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 700; color: rgba(250,249,245,0.7); }
  .pill.mint { background: var(--mint); color: var(--bg); border-color: var(--mint); }

  .title-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; }
  .title-text .eyebrow { font-size: 8px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.24em; opacity: 0.85; margin-bottom: 4px; }
  .title-text .h1 { font-size: 17px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; text-transform: uppercase; }
  .title-text .h1 .acc { color: var(--gold); }
  .meta { font-size: 8.5px; color: rgba(250,249,245,0.55); font-weight: 500; letter-spacing: 0.04em; white-space: nowrap; }

  .filterbar { display: flex; align-items: center; gap: 6px; flex-wrap: nowrap; }
  .filterbar > * { flex-shrink: 0; white-space: nowrap; }
  .chip { padding: 5px 10px; border-radius: 999px; background: rgba(250,249,245,0.05); border: 1px solid var(--hairline); font-size: 8.5px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.12em; color: rgba(250,249,245,0.6); }
  .chip.active { background: var(--gold); color: #1A1A1A; border-color: var(--gold); }
  .chip-count { background: rgba(224,169,58,0.15); color: var(--gold); border-color: rgba(224,169,58,0.3); }
  .filter-spacer { flex: 1; }
  .sort { font-size: 8px; color: rgba(250,249,245,0.55); font-weight: 600; text-transform: uppercase; letter-spacing: 0.16em; display: inline-flex; gap: 4px; align-items: center; }

  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; flex: 1; min-height: 0; }
  .card { position: relative; border-radius: 10px; background: rgba(250,249,245,0.04); border: 1px solid var(--hairline); padding: 8px; display: flex; flex-direction: column; gap: 5px; overflow: hidden; }
  .ph { width: 100%; aspect-ratio: 16/11; border-radius: 6px; position: relative; overflow: hidden; }
  .ph-pump { background:
    radial-gradient(circle at 50% 50%, rgba(224,169,58,0.4) 0%, transparent 35%),
    linear-gradient(135deg, #0F6E56, #02261F);
  }
  .ph-valve { background:
    linear-gradient(135deg, rgba(29,158,117,0.4) 0%, rgba(224,169,58,0.15) 100%),
    #053a32;
  }
  .ph-bearing { background:
    radial-gradient(circle at 30% 70%, rgba(250,249,245,0.18) 0%, transparent 50%),
    linear-gradient(135deg, #02261F, #043831);
  }
  .ph-motor { background:
    radial-gradient(circle at 70% 30%, rgba(224,169,58,0.35), transparent 50%),
    #053a32;
  }
  .ph-coupling { background:
    radial-gradient(circle at 50% 50%, rgba(29,158,117,0.35), transparent 50%),
    #043831;
  }
  .ph-flange { background:
    repeating-linear-gradient(45deg, rgba(250,249,245,0.04) 0 4px, transparent 4px 8px),
    linear-gradient(135deg, #043831, #02261F);
  }
  .ph-inner { position: absolute; inset: 25%; border-radius: 50%; border: 1.5px dashed rgba(250,249,245,0.18); }
  .ph-hub { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 8px; height: 8px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 8px rgba(224,169,58,0.6); }
  .ph-tag { position: absolute; top: 4px; right: 4px; padding: 2px 5px; border-radius: 4px; font-size: 6.5px; font-weight: 800; letter-spacing: 0.1em; background: rgba(4,52,44,0.7); backdrop-filter: blur(4px); border: 1px solid rgba(250,249,245,0.15); }
  .ph-tag.new { color: var(--gold); }
  .ph-tag.hot { color: #FF8C42; border-color: rgba(255,140,66,0.3); background: rgba(255,140,66,0.12); }

  .card-name { font-size: 9.5px; font-weight: 700; letter-spacing: 0.01em; line-height: 1.2; }
  .card-meta { display: flex; justify-content: space-between; align-items: center; gap: 4px; }
  .card-meta .price { font-size: 9px; color: var(--gold); font-weight: 800; letter-spacing: 0.02em; }
  .card-meta .moq { font-size: 7px; color: rgba(250,249,245,0.55); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
</style>
</head>
<body>
  <header>
    <div class="crumbs">
      <span class="crumb">Jiangsu</span>
      <span class="sep">/</span>
      <span class="crumb">Catalogue</span>
      <span class="sep">/</span>
      <span class="crumb active">Industrial Hardware</span>
    </div>
    <div class="actions">
      <span class="pill">EN · 中</span>
      <span class="pill mint">Request Quote</span>
    </div>
  </header>

  <div class="title-row">
    <div class="title-text">
      <div class="eyebrow">Catalogue · 2026</div>
      <div class="h1">Industrial<br/><span class="acc">Hardware.</span></div>
    </div>
    <div class="meta">12 SKUs · 38 countries · ISO 9001</div>
  </div>

  <div class="filterbar">
    <span class="chip active">All</span>
    <span class="chip">Pumps</span>
    <span class="chip">Valves</span>
    <span class="chip">Bearings</span>
    <span class="chip">Motors</span>
    <span class="chip chip-count">+3</span>
    <span class="filter-spacer"></span>
    <span class="sort">Sort · Featured ↓</span>
  </div>

  <div class="grid">
    <div class="card">
      <div class="ph ph-pump"><div class="ph-inner"></div><div class="ph-hub"></div><span class="ph-tag hot">Hot</span></div>
      <div class="card-name">GX-2000 Centrifugal Pump</div>
      <div class="card-meta"><span class="price">¥ 18,400</span><span class="moq">MOQ 5</span></div>
    </div>
    <div class="card">
      <div class="ph ph-valve"><span class="ph-tag">New</span></div>
      <div class="card-name">VX-150 Butterfly Valve</div>
      <div class="card-meta"><span class="price">¥ 2,250</span><span class="moq">MOQ 20</span></div>
    </div>
    <div class="card">
      <div class="ph ph-bearing"><div class="ph-inner"></div><div class="ph-hub"></div></div>
      <div class="card-name">BR-80 Roller Bearing</div>
      <div class="card-meta"><span class="price">¥ 480</span><span class="moq">MOQ 100</span></div>
    </div>
    <div class="card">
      <div class="ph ph-motor"><span class="ph-tag new">3D</span></div>
      <div class="card-name">MT-300 Induction Motor</div>
      <div class="card-meta"><span class="price">¥ 6,900</span><span class="moq">MOQ 10</span></div>
    </div>
    <div class="card">
      <div class="ph ph-coupling"><div class="ph-inner"></div><div class="ph-hub"></div></div>
      <div class="card-name">CP-60 Flexible Coupling</div>
      <div class="card-meta"><span class="price">¥ 1,180</span><span class="moq">MOQ 25</span></div>
    </div>
    <div class="card">
      <div class="ph ph-flange"></div>
      <div class="card-name">FL-200 Steel Flange</div>
      <div class="card-meta"><span class="price">¥ 360</span><span class="moq">MOQ 50</span></div>
    </div>
  </div>
</body>
</html>`;
