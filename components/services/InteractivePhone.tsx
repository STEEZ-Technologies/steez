"use client";

import { Iphone } from "@/components/ui/iphone";

const SCREEN_LEFT_PCT = (21.25 / 433) * 100;
const SCREEN_TOP_PCT = (19.25 / 882) * 100;
const SCREEN_WIDTH_PCT = (389.5 / 433) * 100;
const SCREEN_HEIGHT_PCT = (843.5 / 882) * 100;
const SCREEN_RADIUS_H_PCT = (55.75 / 389.5) * 100;
const SCREEN_RADIUS_V_PCT = (55.75 / 843.5) * 100;

export function InteractivePhone() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "320px", margin: "0 auto" }}>
      <Iphone
        style={{
          filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.5)) drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: `${SCREEN_LEFT_PCT}%`,
          top: `${SCREEN_TOP_PCT}%`,
          width: `${SCREEN_WIDTH_PCT}%`,
          height: `${SCREEN_HEIGHT_PCT}%`,
          borderRadius: `${SCREEN_RADIUS_H_PCT}% / ${SCREEN_RADIUS_V_PCT}%`,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <iframe
          srcDoc={CARD_HTML}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "#04342C",
            display: "block",
          }}
          title="Digital Card Showcase"
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(circle, rgba(29, 158, 117, 0.15) 0%, transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const CARD_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@700;900&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg: #04342C;
    --bg-deep: #02211C;
    --mint: #1D9E75;
    --mint-deep: #0F6E56;
    --gold: #E0A93A;
    --ivory: #FAF9F5;
    --hairline: rgba(250,249,245,0.08);
    --hairline-strong: rgba(250,249,245,0.16);
    --font-display: "Stack Sans Notch", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif;
    background: linear-gradient(180deg, #043831 0%, var(--bg) 50%, var(--bg-deep) 100%);
    color: var(--ivory);
    padding: 18px 18px 24px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  body > * { flex-shrink: 0; }

  /* Status row */
  .status { display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-weight: 700; letter-spacing: 0.02em; opacity: 0.85; padding: 0 4px; }
  .status .icons { display: flex; gap: 4px; align-items: center; }
  .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--ivory); opacity: 0.7; }

  /* Top bar */
  .topbar { display: flex; justify-content: space-between; align-items: center; }
  .brand { font-family: var(--font-display); font-size: 13px; font-weight: 900; letter-spacing: -0.04em; text-transform: uppercase; }
  .lang { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; background: rgba(250,249,245,0.06); border: 1px solid var(--hairline); font-size: 9px; font-weight: 600; letter-spacing: 0.1em; color: rgba(250,249,245,0.7); }
  .lang .cn { color: var(--gold); }

  /* Profile block */
  .profile { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 2px; }
  .avatar { position: relative; width: 76px; height: 76px; border-radius: 50%; background: linear-gradient(135deg, var(--mint) 0%, var(--gold) 100%); display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 700; color: var(--bg); box-shadow: 0 0 0 3px rgba(224,169,58,0.18); }
  .verified { position: absolute; right: -2px; bottom: -2px; width: 20px; height: 20px; border-radius: 50%; background: var(--mint); border: 2px solid var(--bg); display: flex; align-items: center; justify-content: center; }
  .verified svg { width: 10px; height: 10px; }
  .name { font-size: 17px; font-weight: 800; letter-spacing: -0.01em; }
  .role { font-size: 10px; font-weight: 600; color: var(--gold); letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.9; }
  .company { font-size: 11px; font-weight: 500; opacity: 0.65; }

  /* Quick stats */
  .stats { display: flex; gap: 6px; }
  .stat { flex: 1; padding: 8px 6px; border-radius: 10px; background: rgba(250,249,245,0.04); border: 1px solid var(--hairline); text-align: center; }
  .stat-num { font-size: 13px; font-weight: 800; color: var(--ivory); }
  .stat-num .accent { color: var(--gold); }
  .stat-lbl { font-size: 7px; font-weight: 600; color: rgba(250,249,245,0.55); text-transform: uppercase; letter-spacing: 0.12em; margin-top: 2px; }

  /* CTA primary */
  .btn-primary { width: 100%; padding: 11px 0; border-radius: 12px; background: var(--mint); color: var(--bg); font-size: 12px; font-weight: 800; text-align: center; letter-spacing: 0.08em; text-transform: uppercase; box-shadow: 0 8px 20px -8px rgba(29,158,117,0.6); }

  /* CTA grid */
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .action { display: flex; align-items: center; justify-content: center; gap: 5px; padding: 9px 0; border-radius: 10px; background: rgba(250,249,245,0.04); border: 1px solid var(--hairline); font-size: 11px; font-weight: 600; color: var(--ivory); }
  .action.green { color: #5BD795; }
  .action.gold { color: var(--gold); }
  .action svg { width: 12px; height: 12px; }

  /* Section label */
  .label { font-size: 8px; font-weight: 700; color: var(--gold); letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.85; margin-top: 2px; }

  /* Skill chips */
  .chips { display: flex; gap: 5px; flex-wrap: nowrap; }
  .chip { padding: 4px 9px; border-radius: 999px; background: rgba(250,249,245,0.06); border: 1px solid var(--hairline); font-size: 9px; font-weight: 600; color: rgba(250,249,245,0.75); white-space: nowrap; }
  .chip.active { background: rgba(224,169,58,0.15); border-color: rgba(224,169,58,0.4); color: var(--gold); }

  /* Reach footer */
  .reach { margin-top: auto; padding-top: 8px; border-top: 1px solid var(--hairline); display: flex; align-items: center; justify-content: space-between; }
  .reach-left { display: flex; flex-direction: column; gap: 2px; }
  .reach-lbl { font-size: 7.5px; font-weight: 600; color: rgba(250,249,245,0.5); text-transform: uppercase; letter-spacing: 0.16em; }
  .reach-val { font-size: 10px; font-weight: 700; }
  .flags { display: flex; gap: 3px; align-items: center; }
  .flag { width: 12px; height: 12px; border-radius: 50%; border: 1px solid rgba(250,249,245,0.15); }
  .flag.cn { background: linear-gradient(135deg, #DE2910, #FFDE00); }
  .flag.sa { background: linear-gradient(135deg, #006C35, #FFFFFF 60%); }
  .flag.ru { background: linear-gradient(180deg, #FFFFFF 33%, #0039A6 33%, #0039A6 66%, #D52B1E 66%); }
  .flag.de { background: linear-gradient(180deg, #000 33%, #DD0000 33%, #DD0000 66%, #FFCE00 66%); }
  .flag.br { background: #009C3B; position: relative; }
</style>
</head>
<body>
  <div class="status">
    <span>9:41</span>
    <div class="icons">
      <span style="font-weight: 700;">●●●●</span>
      <span style="margin-left:6px; opacity: 0.6;">100%</span>
    </div>
  </div>

  <div class="topbar">
    <div class="brand">STEEZ</div>
    <div class="lang"><span>EN</span><span class="cn">中</span></div>
  </div>

  <div class="profile">
    <div class="avatar">
      W
      <div class="verified">
        <svg viewBox="0 0 24 24" fill="none" stroke="#04342C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </div>
    <div class="name">WEI CHEN</div>
    <div class="role">Sales Director</div>
    <div class="company">Foshan Hardware Co. · 佛山五金</div>
  </div>

  <div class="stats">
    <div class="stat"><div class="stat-num">38<span class="accent">+</span></div><div class="stat-lbl">Countries</div></div>
    <div class="stat"><div class="stat-num">5<span class="accent">yr</span></div><div class="stat-lbl">Export</div></div>
    <div class="stat"><div class="stat-num">1.2<span class="accent">k</span></div><div class="stat-lbl">Buyers</div></div>
  </div>

  <div class="btn-primary">Save Contact</div>

  <div class="actions">
    <div class="action">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>
      Call
    </div>
    <div class="action">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
      Email
    </div>
    <div class="action green">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
      WhatsApp
    </div>
    <div class="action gold">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2C3.891 2 0 5.07 0 8.85c0 2.17 1.34 4.1 3.43 5.42L2.7 17l3.13-1.74c.84.24 1.74.37 2.66.37l.6-.01c-.16-.55-.25-1.13-.25-1.74 0-3.6 3.5-6.52 7.81-6.52l.55.02C16.35 4.03 12.84 2 8.7 2zM5.62 5.16c.62 0 1.12.5 1.12 1.12 0 .61-.5 1.11-1.12 1.11-.62 0-1.12-.5-1.12-1.11 0-.62.5-1.12 1.12-1.12zm6.18 0c.62 0 1.12.5 1.12 1.12 0 .61-.5 1.11-1.12 1.11-.62 0-1.12-.5-1.12-1.11 0-.62.5-1.12 1.12-1.12z"/></svg>
      WeChat
    </div>
  </div>

  <div class="label">Skills</div>
  <div class="chips">
    <span class="chip active">Manufacturing</span>
    <span class="chip">Export</span>
    <span class="chip">OEM</span>
  </div>

  <div class="reach">
    <div class="reach-left">
      <div class="reach-lbl">Reaches</div>
      <div class="reach-val">38 Countries</div>
    </div>
    <div class="flags">
      <span class="flag cn"></span>
      <span class="flag sa"></span>
      <span class="flag ru"></span>
      <span class="flag de"></span>
      <span class="flag br"></span>
    </div>
  </div>
</body>
</html>`;
