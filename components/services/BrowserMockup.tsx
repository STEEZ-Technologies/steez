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
            steez.cn/aurora-home
          </div>
        </div>

        <iframe
          srcDoc={AURORA_HOME_HTML}
          scrolling="no"
          style={{
            width: "100%",
            height: "calc(100% - 38px)",
            border: "none",
            background: "#0B0F0E",
            display: "block",
            pointerEvents: "none",
            overflow: "hidden",
          }}
          title="Aurora Home Microsite Preview"
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

const AURORA_HOME_HTML = `<!DOCTYPE html>
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
  body { padding: 18px 22px; }
  body::-webkit-scrollbar { display: none; }
  nav { display: flex; justify-content: space-between; align-items: center; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; padding-bottom: 14px; border-bottom: 1px solid var(--bdr); }
  nav .links { display: flex; gap: 14px; color: var(--muted); }
  nav .lang { color: var(--gold); font-weight: 600; }
  .brand { font-weight: 800; letter-spacing: 0.08em; }
  .hero { padding: 22px 0 18px; }
  .eyebrow { color: var(--gold); font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px; }
  h1 { font-size: 28px; font-weight: 800; line-height: 1.04; letter-spacing: -0.02em; margin: 0; text-transform: uppercase; }
  h1 .accent { color: var(--gold); }
  .lede { font-size: 11px; line-height: 1.55; color: var(--muted); margin-top: 8px; max-width: 80%; }
  .ctas { display: flex; gap: 8px; margin-top: 12px; }
  .btn { font-size: 10px; padding: 7px 12px; border-radius: 999px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; }
  .btn.primary { background: var(--gold); color: #1A1A1A; }
  .btn.ghost { background: transparent; color: var(--fg); border: 1px solid var(--bdr); }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--bdr); }
  .stat { }
  .stat .n { font-size: 16px; font-weight: 800; letter-spacing: -0.01em; }
  .stat .n .plus { color: var(--gold); }
  .stat .l { font-size: 8px; color: var(--muted); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 2px; }
  .caps { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 12px; }
  .cap { font-size: 9px; padding: 6px 8px; background: rgba(250,249,245,0.03); border: 1px solid var(--bdr); border-radius: 6px; display: flex; align-items: center; gap: 6px; }
  .cap .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--mint); }
</style>
</head>
<body>
  <nav>
    <span class="brand">AURORA · 极光</span>
    <span class="links"><span>Profile</span><span>Capabilities</span><span>Contact</span></span>
    <span class="lang">EN / 中</span>
  </nav>
  <div class="hero">
    <div class="eyebrow">Hangzhou · Since 2014</div>
    <h1>Home Goods,<br/><span class="accent">Built To Export.</span></h1>
    <p class="lede">ISO-certified manufacturer of premium kitchenware. Trusted by buyers in 38 countries.</p>
    <div class="ctas">
      <span class="btn primary">Request Quote</span>
      <span class="btn ghost">Catalogue</span>
    </div>
    <div class="stats">
      <div class="stat"><div class="n">12<span class="plus">k</span></div><div class="l">SKUs</div></div>
      <div class="stat"><div class="n">38<span class="plus">+</span></div><div class="l">Countries</div></div>
      <div class="stat"><div class="n">10<span class="plus">y</span></div><div class="l">Experience</div></div>
    </div>
    <div class="caps">
      <div class="cap"><span class="dot"></span>OEM / ODM</div>
      <div class="cap"><span class="dot"></span>BSCI Audited</div>
    </div>
  </div>
</body>
</html>`;
