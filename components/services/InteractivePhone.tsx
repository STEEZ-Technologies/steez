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
          srcDoc={DANIEL_CHEN_HTML}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "#080B14",
            display: "block",
          }}
          title="Daniel Chen Digital Card"
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
          background: "radial-gradient(circle, rgba(1, 157, 134, 0.15) 0%, transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const DANIEL_CHEN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --bg0: #080B14;
      --blue: #5B9EFF;
      --gold: #C9A84C;
      --txt: #EEF0F8;
      --txt-m: rgba(238,240,248,0.55);
      --bdr: rgba(255,255,255,0.08);
    }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg0);
      color: var(--txt);
      margin: 0; padding: 20px;
      text-align: center;
      display: flex; flex-direction: column; align-items: center;
    }
    .lang-bar { align-self: flex-end; margin-bottom: 20px; }
    .lang-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); color: var(--txt-m); padding: 4px 12px; border-radius: 20px; font-size: 10px; cursor: pointer; }
    .avatar-ring { width: 90px; height: 90px; border-radius: 50%; padding: 2px; background: linear-gradient(135deg, var(--blue), var(--gold)); margin-bottom: 20px; }
    .avatar-inner { width: 100%; height: 100%; border-radius: 50%; overflow: hidden; background: #111830; }
    .avatar-photo { width: 100%; height: 100%; object-fit: cover; }
    .name { font-size: 28px; font-weight: 700; margin: 0; }
    .title { color: var(--blue); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 8px; }
    .company { font-size: 13px; opacity: 0.6; margin-top: 4px; }
    .tagline { font-size: 13px; font-weight: 300; opacity: 0.7; margin-top: 15px; max-width: 250px; line-height: 1.6; }
    .btn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; margin-top: 30px; }
    .btn { display: flex; align-items: center; justify-content: center; padding: 12px; border-radius: 12px; border: 1px solid var(--bdr); background: rgba(255,255,255,0.04); color: var(--txt); text-decoration: none; font-size: 13px; font-weight: 500; }
    .btn.primary { grid-column: span 2; background: var(--blue); border: none; font-weight: 600; }
    .sec-label { width: 100%; text-align: left; font-size: 9px; font-weight: 600; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 30px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="lang-bar"><button class="lang-btn">EN / 中文</button></div>
  <div class="avatar-ring"><div class="avatar-inner"><img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=200" class="avatar-photo"></div></div>
  <h1 class="name">Daniel Chen</h1>
  <div class="title">Export Sales Manager</div>
  <div class="company">Aurora Home Manufacturing Co.</div>
  <p class="tagline">Helping global buyers connect with reliable Chinese suppliers.</p>
  <div class="btn-grid">
    <a href="#" class="btn primary">Save Contact</a>
    <a href="#" class="btn">Call</a>
    <a href="#" class="btn">Email</a>
    <a href="#" class="btn" style="color: #2DBA6E">WhatsApp</a>
    <a href="#" class="btn" style="color: #C9A84C">LinkedIn</a>
  </div>
  <div class="sec-label">Skills</div>
  <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
    <span style="font-size: 10px; padding: 4px 10px; background: rgba(255,255,255,0.05); border-radius: 20px; border: 1px solid var(--bdr);">International Sales</span>
    <span style="font-size: 10px; padding: 4px 10px; background: rgba(255,255,255,0.05); border-radius: 20px; border: 1px solid var(--bdr);">OEM / ODM</span>
  </div>
</body>
</html>`;
