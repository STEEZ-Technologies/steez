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
          srcDoc={SKELETON_CARD_HTML}
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

const SKELETON_CARD_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --bg: #04342C;
      --mint: #1D9E75;
      --gold: #E0A93A;
      --ivory: #FAF9F5;
      --skeleton: rgba(250, 249, 245, 0.08);
      --skeleton-bright: rgba(250, 249, 245, 0.15);
    }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg);
      margin: 0; padding: 24px;
      display: flex; flex-direction: column; align-items: center;
      height: 100vh; box-sizing: border-box; overflow: hidden;
      color: var(--ivory);
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    .pulse { animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    
    .header { width: 100%; display: flex; justify-content: flex-end; margin-bottom: 24px; }
    .lang-pill { padding: 4px 10px; border-radius: 20px; background: var(--skeleton); border: 1px solid rgba(250,249,245,0.1); font-size: 10px; color: rgba(250,249,245,0.6); }
    
    .avatar-wrap { position: relative; width: 84px; height: 84px; margin-bottom: 24px; }
    .avatar-circle { width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(135deg, var(--mint), var(--gold)); opacity: 0.2; }
    .avatar-ring { position: absolute; inset: -4px; border-radius: 50%; border: 2px solid var(--mint); opacity: 0.3; }
    
    .name-bar { width: 140px; height: 24px; border-radius: 6px; background: var(--ivory); opacity: 0.9; margin-bottom: 12px; }
    .title-bar { width: 110px; height: 10px; border-radius: 4px; background: var(--mint); margin-bottom: 8px; }
    .company-bar { width: 160px; height: 10px; border-radius: 4px; background: var(--skeleton); margin-bottom: 24px; }
    
    .line-lg { width: 100%; max-width: 220px; height: 8px; border-radius: 4px; background: var(--skeleton); margin-bottom: 8px; }
    .line-md { width: 160px; height: 8px; border-radius: 4px; background: var(--skeleton); margin-bottom: 32px; }
    
    .btn-main { width: 100%; height: 44px; border-radius: 12px; background: var(--mint); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; color: var(--bg); }
    
    .btn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
    .btn-sub { height: 42px; border-radius: 12px; background: var(--skeleton); border: 1px solid rgba(250,249,245,0.1); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 500; }
    
    .skills-title { align-self: flex-start; font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 32px; margin-bottom: 12px; opacity: 0.8; }
    .skills-group { display: flex; gap: 8px; width: 100%; }
    .skill-pill { padding: 4px 12px; border-radius: 20px; background: var(--skeleton); border: 1px solid rgba(250,249,245,0.1); font-size: 10px; color: rgba(250,249,245,0.6); }
  </style>
</head>
<body>
  <div class="header"><div class="lang-pill">EN / 中文</div></div>
  <div class="avatar-wrap"><div class="avatar-circle pulse"></div><div class="avatar-ring"></div></div>
  <div class="name-bar pulse"></div>
  <div class="title-bar pulse"></div>
  <div class="company-bar pulse"></div>
  <div class="line-lg pulse"></div>
  <div class="line-md pulse"></div>
  <div class="btn-main">Save Contact</div>
  <div class="btn-grid">
    <div class="btn-sub">Call</div>
    <div class="btn-sub">Email</div>
    <div class="btn-sub" style="color: #2DBA6E">WhatsApp</div>
    <div class="btn-sub" style="color: #E0A93A">WeChat</div>
  </div>
  <div class="skills-title">Skills</div>
  <div class="skills-group">
    <div class="skill-pill">Manufacturing</div>
    <div class="skill-pill">Export Sales</div>
  </div>
</body>
</html>`;
