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
            background: "#0B0F0E",
            display: "block",
            borderRadius: 14,
            pointerEvents: "none",
            overflow: "hidden",
          }}
          title="Catalogue Preview"
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
    --bg: #0B0F0E;
    --fg: #FAF9F5;
    --muted: rgba(250,249,245,0.55);
    --gold: #E0A93A;
    --mint: #1D9E75;
    --bdr: rgba(250,249,245,0.08);
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background: var(--bg); color: var(--fg); overflow: hidden; }
  body { padding: 16px 20px; }
  body::-webkit-scrollbar { display: none; }
  header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid var(--bdr); }
  .crumbs { font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
  .crumbs span.cur { color: var(--gold); }
  .actions { display: flex; gap: 6px; }
  .pill { font-size: 8px; padding: 4px 8px; border-radius: 999px; border: 1px solid var(--bdr); color: var(--fg); letter-spacing: 0.1em; text-transform: uppercase; }
  .pill.ar { background: var(--mint); color: #0B0F0E; border-color: var(--mint); font-weight: 700; }
  h2 { font-size: 18px; font-weight: 800; margin: 14px 0 4px; letter-spacing: -0.01em; text-transform: uppercase; }
  .sub { font-size: 9px; color: var(--muted); margin-bottom: 12px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .card { background: rgba(250,249,245,0.03); border: 1px solid var(--bdr); border-radius: 8px; padding: 8px; position: relative; }
  .ph { width: 100%; aspect-ratio: 4/3; border-radius: 6px; background: linear-gradient(135deg, rgba(224,169,58,0.18), rgba(29,158,117,0.12)); margin-bottom: 6px; display: flex; align-items: center; justify-content: center; font-size: 8px; color: var(--muted); letter-spacing: 0.15em; }
  .name { font-size: 10px; font-weight: 600; }
  .meta { font-size: 8px; color: var(--muted); margin-top: 2px; letter-spacing: 0.05em; }
  .badge { position: absolute; top: 6px; right: 6px; font-size: 7px; background: var(--mint); color: #0B0F0E; padding: 2px 5px; border-radius: 4px; font-weight: 800; letter-spacing: 0.08em; }
  .filterbar { display: flex; gap: 6px; margin-top: 10px; flex-wrap: wrap; }
  .chip { font-size: 8px; padding: 4px 8px; border-radius: 999px; border: 1px solid var(--bdr); color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .chip.on { background: var(--gold); color: #1A1A1A; border-color: var(--gold); font-weight: 700; }
</style>
</head>
<body>
  <header>
    <div class="crumbs">Aurora <span>·</span> Catalogue <span>·</span> <span class="cur">Kitchenware</span></div>
    <div class="actions">
      <span class="pill">EN / 中</span>
      <span class="pill ar">3D / AR</span>
    </div>
  </header>

  <h2>Kitchenware Line</h2>
  <div class="sub">128 SKUs · MOQ from 500 units · Air / Sea / Rail</div>

  <div class="filterbar">
    <span class="chip on">All</span>
    <span class="chip">Cast Iron</span>
    <span class="chip">Ceramic</span>
    <span class="chip">Stainless</span>
    <span class="chip">Bamboo</span>
  </div>

  <div class="grid" style="margin-top: 10px;">
    <div class="card"><span class="badge">3D</span><div class="ph">CAST IRON · 26CM</div><div class="name">Skillet Pro 26</div><div class="meta">MOQ 500 · ¥38</div></div>
    <div class="card"><div class="ph">CERAMIC · 4PC</div><div class="name">Bowl Set Mint</div><div class="meta">MOQ 1k · ¥22</div></div>
    <div class="card"><span class="badge">AR</span><div class="ph">BAMBOO · BOARD</div><div class="name">Slate Board L</div><div class="meta">MOQ 800 · ¥14</div></div>
    <div class="card"><div class="ph">STEEL · 3PC</div><div class="name">Chef Knife Set</div><div class="meta">MOQ 500 · ¥56</div></div>
    <div class="card"><span class="badge">3D</span><div class="ph">CERAMIC · MUG</div><div class="name">Heritage Mug</div><div class="meta">MOQ 1k · ¥9</div></div>
    <div class="card"><div class="ph">IRON · 30CM</div><div class="name">Dutch Oven</div><div class="meta">MOQ 300 · ¥72</div></div>
  </div>
</body>
</html>`;
