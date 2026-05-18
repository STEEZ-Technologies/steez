import { readFileSync, writeFileSync } from 'fs';

const path = String.raw`C:/Users/Admin/Documents/GitHub/steez/demo cards/electronics_demo2/index.html`;
let html = readFileSync(path, 'utf-8');

// ── CSS updates ──────────────────────────────────────────────────────────────
html = html.replace(
  'width:80px;height:80px;display:flex;align-items:center',
  'width:120px;height:120px;display:flex;align-items:center'
);
html = html.replace('.pc-vis{height:154px;', '.pc-vis{height:170px;');

// ── New SVGs keyed by data-pid ────────────────────────────────────────────────
const SVGS = {};

// 1 ── Hair Dryer
SVGS['hair-dryer'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <rect x="6" y="38" width="72" height="26" rx="13" fill="rgba(22,82,240,.16)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="8" y="40" width="64" height="9" rx="4.5" fill="rgba(255,255,255,.14)"/>
  <circle cx="84" cy="44" r="2.5" fill="rgba(22,82,240,.55)"/>
  <circle cx="84" cy="52" r="2.5" fill="rgba(22,82,240,.45)"/>
  <circle cx="90" cy="41" r="2.2" fill="rgba(22,82,240,.45)"/>
  <circle cx="90" cy="49" r="2.2" fill="rgba(22,82,240,.35)"/>
  <circle cx="90" cy="57" r="2.2" fill="rgba(22,82,240,.25)"/>
  <circle cx="96" cy="44" r="2" fill="rgba(22,82,240,.35)"/>
  <circle cx="96" cy="52" r="2" fill="rgba(22,82,240,.25)"/>
  <circle cx="96" cy="60" r="2" fill="rgba(22,82,240,.15)"/>
  <path d="M6 42 L1 46 L1 56 L6 54Z" fill="rgba(22,82,240,.42)" stroke="#1652F0" stroke-width="1.3"/>
  <path d="M62 60 Q64 67 62 78 Q60 87 54 91 L46 91 Q42 87 44 78 Q46 69 54 63Z" fill="rgba(22,82,240,.16)" stroke="#1652F0" stroke-width="1.8"/>
  <path d="M58 66 Q60 70 58 79" stroke="rgba(255,255,255,.16)" stroke-width="4" stroke-linecap="round" fill="none"/>
  <line x1="46" y1="76" x2="60" y2="72" stroke="rgba(22,82,240,.18)" stroke-width="1" stroke-linecap="round"/>
  <line x1="45" y1="81" x2="59" y2="77" stroke="rgba(22,82,240,.13)" stroke-width="1" stroke-linecap="round"/>
  <rect x="18" y="59" width="24" height="7" rx="3.5" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1"/>
  <circle cx="23" cy="62.5" r="2.2" fill="#E8A820"/>
  <line x1="31" y1="61" x2="40" y2="61" stroke="rgba(22,82,240,.4)" stroke-width="1" stroke-linecap="round"/>
  <line x1="31" y1="64" x2="40" y2="64" stroke="rgba(22,82,240,.28)" stroke-width="1" stroke-linecap="round"/>
  <circle cx="51" cy="87" r="2.5" fill="#0A9E6A" opacity=".9"/>
  <path d="M47 91 Q41 101 39 111" stroke="rgba(22,82,240,.48)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
</svg>`;

// 2 ── Massage Gun
SVGS['massage-device'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <rect x="46" y="52" width="28" height="54" rx="12" fill="rgba(22,82,240,.15)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="48" y="54" width="7" height="46" rx="3.5" fill="rgba(255,255,255,.12)"/>
  <line x1="48" y1="74" x2="72" y2="74" stroke="rgba(22,82,240,.18)" stroke-width="1.2"/>
  <line x1="48" y1="81" x2="72" y2="81" stroke="rgba(22,82,240,.14)" stroke-width="1.2"/>
  <line x1="48" y1="88" x2="72" y2="88" stroke="rgba(22,82,240,.1)" stroke-width="1.2"/>
  <rect x="18" y="24" width="84" height="32" rx="14" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="20" y="26" width="76" height="10" rx="5" fill="rgba(255,255,255,.13)"/>
  <rect x="92" y="28" width="8" height="24" rx="4" fill="rgba(22,82,240,.25)" stroke="#1652F0" stroke-width="1"/>
  <circle cx="14" cy="40" r="13" fill="rgba(22,82,240,.22)" stroke="#1652F0" stroke-width="1.8"/>
  <circle cx="14" cy="40" r="8" fill="rgba(22,82,240,.2)"/>
  <circle cx="11" cy="36" r="3.5" fill="rgba(255,255,255,.18)"/>
  <circle cx="86" cy="34" r="8" fill="rgba(22,82,240,.25)" stroke="#1652F0" stroke-width="1.3"/>
  <path d="M86 29 L86 34" stroke="#E8A820" stroke-width="2" stroke-linecap="round"/>
  <circle cx="52" cy="44" r="2.2" fill="#E8A820" opacity=".95"/>
  <circle cx="60" cy="44" r="2.2" fill="#E8A820" opacity=".7"/>
  <circle cx="68" cy="44" r="2.2" fill="#0A9E6A" opacity=".75"/>
  <circle cx="60" cy="94" r="6.5" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1.2"/>
  <line x1="60" y1="90.5" x2="60" y2="97.5" stroke="rgba(255,255,255,.5)" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M56.5 91 A5.5 5.5 0 1 1 63.5 91" stroke="rgba(255,255,255,.4)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
</svg>`;

// 3 ── Beauty Instrument (RF / EMS)
SVGS['beauty-instrument'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <ellipse cx="60" cy="24" rx="30" ry="24" fill="rgba(232,168,32,.07)"/>
  <ellipse cx="60" cy="24" rx="22" ry="18" fill="rgba(232,168,32,.2)" stroke="#E8A820" stroke-width="1.8"/>
  <ellipse cx="60" cy="24" rx="15" ry="12" fill="rgba(232,168,32,.32)"/>
  <ellipse cx="60" cy="24" rx="8" ry="6" fill="rgba(232,168,32,.55)"/>
  <ellipse cx="60" cy="24" rx="3.5" ry="2.8" fill="#E8A820" opacity=".85"/>
  <line x1="40" y1="12" x2="34" y2="6" stroke="#E8A820" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="60" y1="8" x2="60" y2="2" stroke="#E8A820" stroke-opacity=".38" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="80" y1="12" x2="86" y2="6" stroke="#E8A820" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="38" y1="24" x2="30" y2="24" stroke="#E8A820" stroke-opacity=".32" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="82" y1="24" x2="90" y2="24" stroke="#E8A820" stroke-opacity=".32" stroke-width="1.4" stroke-linecap="round"/>
  <rect x="48" y="40" width="24" height="64" rx="12" fill="rgba(22,82,240,.15)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="50" y="42" width="7" height="58" rx="3.5" fill="rgba(255,255,255,.12)"/>
  <rect x="51" y="56" width="18" height="4" rx="2" fill="#E8A820" fill-opacity=".6"/>
  <rect x="51" y="65" width="18" height="4" rx="2" fill="#1652F0" fill-opacity=".5"/>
  <rect x="51" y="74" width="18" height="4" rx="2" fill="#0A9E6A" fill-opacity=".5"/>
  <circle cx="60" cy="90" r="7" fill="rgba(22,82,240,.28)" stroke="#1652F0" stroke-width="1.3"/>
  <circle cx="60" cy="90" r="4" fill="rgba(22,82,240,.5)"/>
  <rect x="54" y="100" width="12" height="5" rx="2.5" fill="rgba(22,82,240,.35)" stroke="#1652F0" stroke-width="1"/>
</svg>`;

// 4 ── Blender
SVGS['blender'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <ellipse cx="60" cy="18" rx="18" ry="5" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1.6"/>
  <rect x="50" y="10" width="20" height="11" rx="5" fill="rgba(22,82,240,.22)" stroke="#1652F0" stroke-width="1.3"/>
  <path d="M26 20 L94 20 L82 64 L38 64Z" fill="rgba(22,82,240,.1)" stroke="#1652F0" stroke-width="1.8"/>
  <path d="M30 24 L40 60" stroke="rgba(255,255,255,.22)" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M36 50 Q60 46 84 50 L82 64 L38 64Z" fill="rgba(22,82,240,.08)"/>
  <line x1="30" y1="34" x2="90" y2="34" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="32" y1="44" x2="88" y2="44" stroke="rgba(22,82,240,.1)" stroke-width="1"/>
  <line x1="34" y1="54" x2="86" y2="54" stroke="rgba(22,82,240,.08)" stroke-width="1"/>
  <ellipse cx="60" cy="63" rx="22" ry="5" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1.3"/>
  <line x1="40" y1="63" x2="80" y2="63" stroke="#1652F0" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>
  <line x1="60" y1="53" x2="60" y2="73" stroke="#1652F0" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>
  <rect x="28" y="64" width="64" height="36" rx="10" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="30" y="66" width="56" height="9" rx="4.5" fill="rgba(255,255,255,.12)"/>
  <circle cx="44" cy="86" r="5" fill="rgba(22,82,240,.4)" stroke="#1652F0" stroke-width="1.2"/>
  <circle cx="60" cy="86" r="6.5" fill="rgba(22,82,240,.6)" stroke="#1652F0" stroke-width="1.4"/>
  <circle cx="76" cy="86" r="5" fill="rgba(232,168,32,.6)" stroke="#E8A820" stroke-width="1.2"/>
  <circle cx="60" cy="93" r="2.2" fill="#0A9E6A" opacity=".85" style="animation:led 2s ease-in-out infinite"/>
</svg>`;

// 5 ── Decorative Table Lamp
SVGS['table-lamp'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <defs>
    <radialGradient id="tlamp-g" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#E8A820" stop-opacity=".55"/>
      <stop offset="100%" stop-color="#E8A820" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tlamp-glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#E8A820" stop-opacity=".18"/>
      <stop offset="100%" stop-color="#E8A820" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="72" rx="38" ry="28" fill="url(#tlamp-glow)"/>
  <path d="M22 18 L98 18 L80 58 L40 58Z" fill="rgba(232,168,32,.2)" stroke="#E8A820" stroke-width="1.8"/>
  <path d="M22 18 L98 18 L80 58 L40 58Z" fill="url(#tlamp-g)"/>
  <path d="M26 22 L44 54" stroke="rgba(255,255,255,.2)" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M40 58 L80 58" stroke="#E8A820" stroke-opacity=".7" stroke-width="2"/>
  <line x1="22" y1="18" x2="98" y2="18" stroke="#E8A820" stroke-opacity=".65" stroke-width="2"/>
  <circle cx="60" cy="18" r="6" fill="#E8A820" fill-opacity=".7"/>
  <circle cx="60" cy="18" r="3.5" fill="#E8A820"/>
  <line x1="60" y1="58" x2="60" y2="88" stroke="#E8A820" stroke-opacity=".75" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="60" cy="95" rx="30" ry="9" fill="rgba(232,168,32,.2)" stroke="#E8A820" stroke-width="1.5"/>
  <ellipse cx="60" cy="95" rx="20" ry="6" fill="rgba(232,168,32,.25)"/>
  <ellipse cx="60" cy="93" rx="10" ry="3" fill="rgba(232,168,32,.45)"/>
  <path d="M34 96 Q50 93 58 97" stroke="#E8A820" stroke-opacity=".2" stroke-width="1" fill="none"/>
  <path d="M62 93 Q72 96 82 94" stroke="#E8A820" stroke-opacity=".15" stroke-width="1" fill="none"/>
  <path d="M56 104 Q50 112 48 118" stroke="rgba(22,82,240,.35)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
</svg>`;

// 6 ── Artistic Chandelier
SVGS['chandelier'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <ellipse cx="60" cy="10" rx="18" ry="5.5" fill="rgba(232,168,32,.4)" stroke="#E8A820" stroke-width="1.6"/>
  <line x1="60" y1="15.5" x2="60" y2="34" stroke="#E8A820" stroke-opacity=".75" stroke-width="2.5"/>
  <circle cx="60" cy="38" r="11" fill="rgba(232,168,32,.3)" stroke="#E8A820" stroke-width="1.8"/>
  <circle cx="60" cy="38" r="6" fill="rgba(232,168,32,.5)"/>
  <circle cx="57" cy="35" r="2.5" fill="rgba(255,255,255,.2)"/>
  <path d="M50 38 Q30 40 20 56" stroke="#E8A820" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="20" cy="60" r="7" fill="rgba(232,168,32,.35)" stroke="#E8A820" stroke-width="1.3"/>
  <circle cx="20" cy="60" r="3.5" fill="#E8A820" opacity=".8"/>
  <ellipse cx="20" cy="70" rx="5.5" ry="7" fill="rgba(232,168,32,.12)" stroke="#E8A820" stroke-width="1"/>
  <ellipse cx="20" cy="74" rx="6" ry="2" fill="rgba(232,168,32,.18)"/>
  <path d="M52 44 Q40 52 34 64" stroke="#E8A820" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="34" cy="68" r="6" fill="rgba(232,168,32,.4)" stroke="#E8A820" stroke-width="1.3"/>
  <circle cx="34" cy="68" r="3" fill="#E8A820" opacity=".8"/>
  <ellipse cx="34" cy="77" rx="4.5" ry="6" fill="rgba(232,168,32,.12)" stroke="#E8A820" stroke-width="1"/>
  <ellipse cx="34" cy="81" rx="5" ry="1.8" fill="rgba(232,168,32,.18)"/>
  <line x1="60" y1="49" x2="60" y2="64" stroke="#E8A820" stroke-opacity=".7" stroke-width="1.6"/>
  <circle cx="60" cy="68" r="8" fill="rgba(232,168,32,.45)" stroke="#E8A820" stroke-width="1.6"/>
  <circle cx="60" cy="68" r="4.5" fill="#E8A820" opacity=".85"/>
  <ellipse cx="60" cy="80" rx="6" ry="8" fill="rgba(232,168,32,.13)" stroke="#E8A820" stroke-width="1.1"/>
  <ellipse cx="60" cy="86" rx="6.5" ry="2" fill="rgba(232,168,32,.22)"/>
  <path d="M68 44 Q80 52 86 64" stroke="#E8A820" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="86" cy="68" r="6" fill="rgba(232,168,32,.4)" stroke="#E8A820" stroke-width="1.3"/>
  <circle cx="86" cy="68" r="3" fill="#E8A820" opacity=".8"/>
  <ellipse cx="86" cy="77" rx="4.5" ry="6" fill="rgba(232,168,32,.12)" stroke="#E8A820" stroke-width="1"/>
  <ellipse cx="86" cy="81" rx="5" ry="1.8" fill="rgba(232,168,32,.18)"/>
  <path d="M70 38 Q90 40 100 56" stroke="#E8A820" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="100" cy="60" r="7" fill="rgba(232,168,32,.35)" stroke="#E8A820" stroke-width="1.3"/>
  <circle cx="100" cy="60" r="3.5" fill="#E8A820" opacity=".8"/>
  <ellipse cx="100" cy="70" rx="5.5" ry="7" fill="rgba(232,168,32,.12)" stroke="#E8A820" stroke-width="1"/>
  <ellipse cx="100" cy="74" rx="6" ry="2" fill="rgba(232,168,32,.18)"/>
  <ellipse cx="60" cy="104" rx="52" ry="10" fill="rgba(232,168,32,.07)"/>
</svg>`;

// 7 ── Smart Lighting Set
SVGS['smart-lighting'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <rect x="6" y="24" width="88" height="18" rx="9" fill="rgba(232,168,32,.22)" stroke="#E8A820" stroke-width="1.8"/>
  <rect x="8" y="26" width="84" height="14" rx="7" fill="rgba(232,168,32,.15)"/>
  <circle cx="20" cy="33" r="4.5" fill="#E8A820" opacity=".95"/>
  <circle cx="33" cy="33" r="4.5" fill="#E8A820" opacity=".88"/>
  <circle cx="46" cy="33" r="4.5" fill="rgba(22,82,240,.9)"/>
  <circle cx="59" cy="33" r="4.5" fill="rgba(0,200,80,.9)"/>
  <circle cx="72" cy="33" r="4.5" fill="rgba(220,60,60,.8)"/>
  <circle cx="85" cy="33" r="4.5" fill="#E8A820" opacity=".7"/>
  <ellipse cx="20" cy="47" rx="7" ry="3" fill="rgba(232,168,32,.2)"/>
  <ellipse cx="46" cy="47" rx="7" ry="3" fill="rgba(22,82,240,.15)"/>
  <ellipse cx="59" cy="47" rx="7" ry="3" fill="rgba(0,200,80,.12)"/>
  <rect x="22" y="68" width="76" height="40" rx="9" fill="rgba(22,82,240,.15)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="24" y="70" width="68" height="10" rx="5" fill="rgba(255,255,255,.1)"/>
  <path d="M56 90 Q60 86 64 90" stroke="#E8A820" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M51 86 Q60 80 69 86" stroke="#E8A820" stroke-opacity=".65" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M46 82 Q60 74 74 82" stroke="#E8A820" stroke-opacity=".4" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="60" cy="93" r="2.5" fill="#E8A820"/>
  <circle cx="88" cy="78" r="3.5" fill="#0A9E6A" opacity=".85" style="animation:led 2.5s ease-in-out infinite"/>
  <rect x="28" y="100" width="14" height="5" rx="2.5" fill="rgba(22,82,240,.4)"/>
  <rect x="46" y="100" width="14" height="5" rx="2.5" fill="rgba(22,82,240,.3)"/>
  <rect x="64" y="100" width="14" height="5" rx="2.5" fill="rgba(22,82,240,.2)"/>
  <path d="M54 42 Q50 56 46 68" stroke="rgba(22,82,240,.28)" stroke-width="1.5" stroke-dasharray="3 2" fill="none" stroke-linecap="round"/>
</svg>`;

// 8 ── Wall Lamp (Sconce)
SVGS['wall-lamp'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <defs>
    <radialGradient id="wlamp-glow" cx="55%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#E8A820" stop-opacity=".25"/>
      <stop offset="100%" stop-color="#E8A820" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="4" y="22" width="18" height="58" rx="7" fill="rgba(22,82,240,.16)" stroke="#1652F0" stroke-width="1.6"/>
  <rect x="6" y="26" width="6" height="46" rx="3" fill="rgba(255,255,255,.12)"/>
  <circle cx="13" cy="32" r="3" fill="rgba(22,82,240,.35)" stroke="#1652F0" stroke-width="1"/>
  <circle cx="13" cy="70" r="3" fill="rgba(22,82,240,.35)" stroke="#1652F0" stroke-width="1"/>
  <path d="M22 46 Q44 42 58 44" stroke="#E8A820" stroke-opacity=".8" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <line x1="58" y1="44" x2="58" y2="58" stroke="#E8A820" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M30 55 Q58 50 86 55 L96 88 Q58 98 22 88Z" fill="rgba(232,168,32,.2)" stroke="#E8A820" stroke-width="1.8"/>
  <path d="M36 59 Q58 55 80 59 L88 84 Q58 92 28 84Z" fill="rgba(232,168,32,.14)"/>
  <path d="M32 59 L28 84" stroke="rgba(255,255,255,.18)" stroke-width="3" stroke-linecap="round"/>
  <circle cx="58" cy="56" r="5.5" fill="rgba(232,168,32,.6)" stroke="#E8A820" stroke-width="1.2"/>
  <circle cx="58" cy="56" r="3" fill="#E8A820" opacity=".9"/>
  <ellipse cx="59" cy="95" rx="36" ry="12" fill="url(#wlamp-glow)"/>
  <rect x="70" y="110" width="24" height="8" rx="4" fill="rgba(22,82,240,.18)" stroke="#1652F0" stroke-width="1"/>
</svg>`;

// 9 ── Smart Speaker
SVGS['smart-speaker'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <ellipse cx="60" cy="106" rx="28" ry="6" fill="rgba(4,10,24,.16)"/>
  <ellipse cx="60" cy="98" rx="28" ry="9" fill="rgba(22,82,240,.22)" stroke="#1652F0" stroke-width="1.5"/>
  <rect x="32" y="22" width="56" height="76" fill="rgba(22,82,240,.11)"/>
  <line x1="32" y1="22" x2="32" y2="98" stroke="rgba(22,82,240,.22)" stroke-width="1.5"/>
  <line x1="88" y1="22" x2="88" y2="98" stroke="rgba(22,82,240,.22)" stroke-width="1.5"/>
  <ellipse cx="60" cy="22" rx="28" ry="9" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1.8"/>
  <ellipse cx="60" cy="22" rx="22" ry="7" fill="rgba(22,82,240,.28)"/>
  <ellipse cx="60" cy="22" rx="14" ry="4.5" fill="rgba(22,82,240,.18)"/>
  <ellipse cx="60" cy="22" rx="10" ry="3.2" fill="none" stroke="#E8A820" stroke-opacity=".55" stroke-width="1.3"/>
  <line x1="56" y1="22" x2="64" y2="22" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="60" y1="18.5" x2="60" y2="25.5" stroke="rgba(255,255,255,.2)" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="34" y1="34" x2="86" y2="34" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="40" x2="86" y2="40" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="46" x2="86" y2="46" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="52" x2="86" y2="52" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="58" x2="86" y2="58" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="64" x2="86" y2="64" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="70" x2="86" y2="70" stroke="rgba(22,82,240,.12)" stroke-width="1"/>
  <line x1="34" y1="76" x2="86" y2="76" stroke="rgba(22,82,240,.1)" stroke-width="1"/>
  <line x1="34" y1="82" x2="86" y2="82" stroke="rgba(22,82,240,.08)" stroke-width="1"/>
  <line x1="34" y1="88" x2="86" y2="88" stroke="rgba(22,82,240,.06)" stroke-width="1"/>
  <ellipse cx="60" cy="62" rx="16" ry="5" fill="none" stroke="rgba(22,82,240,.2)" stroke-width="1.3"/>
  <ellipse cx="60" cy="62" rx="10" ry="3" fill="none" stroke="rgba(22,82,240,.15)" stroke-width="1"/>
  <ellipse cx="60" cy="62" rx="5" ry="1.5" fill="rgba(22,82,240,.12)"/>
  <ellipse cx="60" cy="98" rx="22" ry="7" fill="none" stroke="#E8A820" stroke-opacity=".5" stroke-width="1.5"/>
  <circle cx="60" cy="103" r="2.8" fill="#E8A820" opacity=".8" style="animation:led 2.2s ease-in-out infinite"/>
  <rect x="34" y="28" width="4" height="64" rx="2" fill="rgba(255,255,255,.07)"/>
</svg>`;

// 10 ── Wireless Headphones
SVGS['headphones'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <path d="M14 68 Q14 18 60 14 Q106 18 106 68" stroke="#1652F0" stroke-width="3.8" fill="none" stroke-linecap="round"/>
  <path d="M20 66 Q20 24 60 20 Q100 24 100 66" stroke="rgba(255,255,255,.14)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="60" cy="14" rx="10" ry="3.5" fill="rgba(22,82,240,.14)" stroke="#1652F0" stroke-width="1"/>
  <rect x="8" y="60" width="15" height="20" rx="6" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="1.5"/>
  <rect x="97" y="60" width="15" height="20" rx="6" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="1.5"/>
  <rect x="2" y="74" width="28" height="38" rx="13" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="2.2"/>
  <ellipse cx="16" cy="93" rx="10" ry="15" fill="rgba(22,82,240,.15)" stroke="#1652F0" stroke-width="1"/>
  <ellipse cx="16" cy="93" rx="6" ry="9" fill="rgba(22,82,240,.18)"/>
  <ellipse cx="16" cy="93" rx="3" ry="4.5" fill="rgba(22,82,240,.25)"/>
  <rect x="4" y="76" width="6" height="24" rx="3" fill="rgba(255,255,255,.12)"/>
  <circle cx="26" cy="80" r="4" fill="rgba(22,82,240,.4)" stroke="#1652F0" stroke-width="1"/>
  <rect x="90" y="74" width="28" height="38" rx="13" fill="rgba(22,82,240,.2)" stroke="#1652F0" stroke-width="2.2"/>
  <ellipse cx="104" cy="93" rx="10" ry="15" fill="rgba(22,82,240,.15)" stroke="#1652F0" stroke-width="1"/>
  <ellipse cx="104" cy="93" rx="6" ry="9" fill="rgba(22,82,240,.18)"/>
  <ellipse cx="104" cy="93" rx="3" ry="4.5" fill="rgba(22,82,240,.25)"/>
  <rect x="110" y="76" width="6" height="24" rx="3" fill="rgba(255,255,255,.12)"/>
  <circle cx="94" cy="80" r="4" fill="rgba(232,168,32,.6)" stroke="#E8A820" stroke-width="1"/>
  <circle cx="94" cy="100" r="3" fill="#0A9E6A" opacity=".8" style="animation:led 2.8s ease-in-out infinite"/>
</svg>`;

// 11 ── Power Bank
SVGS['power-bank'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <path d="M14 28 L96 28 L106 38 L24 38Z" fill="rgba(22,82,240,.22)" stroke="#1652F0" stroke-width="1.3"/>
  <path d="M96 28 L106 38 L106 98 L96 98Z" fill="rgba(22,82,240,.28)" stroke="#1652F0" stroke-width="1.3"/>
  <rect x="14" y="38" width="82" height="60" rx="10" fill="rgba(22,82,240,.14)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="16" y="40" width="78" height="6" rx="3" fill="rgba(255,255,255,.08)"/>
  <line x1="16" y1="50" x2="94" y2="50" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
  <text x="55" y="46" font-family="monospace" font-size="5.5" fill="rgba(22,82,240,.55)" text-anchor="middle">PD 65W · 20000mAh</text>
  <circle cx="28" cy="64" r="6.5" fill="rgba(22,82,240,.8)" stroke="#1652F0" stroke-width="1.2"/>
  <circle cx="46" cy="64" r="6.5" fill="rgba(22,82,240,.7)" stroke="#1652F0" stroke-width="1.2"/>
  <circle cx="64" cy="64" r="6.5" fill="rgba(22,82,240,.5)" stroke="#1652F0" stroke-width="1.2"/>
  <circle cx="82" cy="64" r="6.5" fill="rgba(22,82,240,.1)" stroke="rgba(22,82,240,.3)" stroke-width="1.2"/>
  <circle cx="28" cy="64" r="3.5" fill="#E8A820" opacity=".95"/>
  <circle cx="46" cy="64" r="3.5" fill="#E8A820" opacity=".85"/>
  <circle cx="64" cy="64" r="3.5" fill="#E8A820" opacity=".65"/>
  <circle cx="82" cy="64" r="3.5" fill="rgba(22,82,240,.2)"/>
  <rect x="20" y="88" width="18" height="8" rx="4" fill="rgba(22,82,240,.38)" stroke="#1652F0" stroke-width="1"/>
  <rect x="42" y="88" width="18" height="8" rx="4" fill="rgba(22,82,240,.38)" stroke="#1652F0" stroke-width="1"/>
  <rect x="64" y="89" width="20" height="6" rx="2.5" fill="rgba(22,82,240,.3)" stroke="#1652F0" stroke-width="1"/>
  <text x="29" y="93.5" font-family="monospace" font-size="4.5" fill="rgba(22,82,240,.6)" text-anchor="middle">C</text>
  <text x="51" y="93.5" font-family="monospace" font-size="4.5" fill="rgba(22,82,240,.6)" text-anchor="middle">C</text>
  <text x="74" y="93" font-family="monospace" font-size="4.5" fill="rgba(22,82,240,.5)" text-anchor="middle">A</text>
  <circle cx="90" cy="33" r="4.5" fill="rgba(22,82,240,.45)" stroke="#1652F0" stroke-width="1"/>
</svg>`;

// 12 ── GaN Charger + Braided Cable
SVGS['cables-charger'] = `<svg viewBox="0 0 120 120" fill="none" width="120" height="120">
  <path d="M24 18 L76 18 L86 28 L34 28Z" fill="rgba(22,82,240,.22)" stroke="#1652F0" stroke-width="1.3"/>
  <path d="M76 18 L86 28 L86 82 L76 82Z" fill="rgba(22,82,240,.28)" stroke="#1652F0" stroke-width="1.3"/>
  <rect x="24" y="28" width="52" height="54" rx="10" fill="rgba(22,82,240,.14)" stroke="#1652F0" stroke-width="1.8"/>
  <rect x="26" y="30" width="8" height="46" rx="4" fill="rgba(255,255,255,.1)"/>
  <rect x="32" y="36" width="36" height="24" rx="5" fill="rgba(22,82,240,.15)" stroke="rgba(22,82,240,.3)" stroke-width="1"/>
  <text x="50" y="52" font-family="monospace" font-size="9" font-weight="bold" fill="rgba(22,82,240,.65)" text-anchor="middle">GaN</text>
  <text x="50" y="62" font-family="monospace" font-size="6" fill="#E8A820" fill-opacity=".8" text-anchor="middle">65W</text>
  <circle cx="72" cy="70" r="3.5" fill="#0A9E6A" opacity=".8" style="animation:led 2s ease-in-out infinite"/>
  <rect x="36" y="8" width="6" height="13" rx="3" fill="rgba(22,82,240,.5)" stroke="#1652F0" stroke-width="1.2"/>
  <rect x="58" y="8" width="6" height="13" rx="3" fill="rgba(22,82,240,.5)" stroke="#1652F0" stroke-width="1.2"/>
  <rect x="42" y="80" width="16" height="7" rx="3.5" fill="rgba(22,82,240,.4)" stroke="#1652F0" stroke-width="1.2"/>
  <path d="M50 87 Q50 96 62 100 Q76 104 74 112" stroke="#1652F0" stroke-opacity=".55" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <path d="M50 90 Q53 89 55 91" stroke="rgba(255,255,255,.22)" stroke-width="1" fill="none"/>
  <path d="M55 94 Q58 93 60 95" stroke="rgba(255,255,255,.18)" fill="none" stroke-width="1"/>
  <path d="M61 98 Q64 97 66 99" stroke="rgba(255,255,255,.15)" fill="none" stroke-width="1"/>
  <path d="M67 103 Q70 102 72 104" stroke="rgba(255,255,255,.12)" fill="none" stroke-width="1"/>
  <rect x="66" y="109" width="16" height="9" rx="4.5" fill="rgba(22,82,240,.45)" stroke="#1652F0" stroke-width="1.3"/>
  <rect x="69" y="111" width="10" height="5" rx="2.5" fill="rgba(22,82,240,.65)"/>
</svg>`;

// ── Replace each SVG using data-pid anchor ────────────────────────────────────
for (const [pid, newSvg] of Object.entries(SVGS)) {
  const pattern = new RegExp(
    `(data-pid="${pid.replace(/[-]/g, '\\-')}"[\\s\\S]*?<div class="pc-icon">\\s*)` +
    `(<svg[\\s\\S]*?<\\/svg>)` +
    `(\\s*<\\/div>\\s*<div class="pc-badges">)`,
    'g'
  );
  const indented = newSvg.trim().split('\n').map(l => '            ' + l).join('\n');
  const replaced = html.replace(pattern, (_, pre, _oldSvg, post) => pre + '\n' + indented + '\n          ' + post.trimStart());
  if (replaced === html) {
    console.error(`WARNING: No match for pid=${pid}`);
  } else {
    console.log(`Replaced SVG for pid=${pid}`);
    html = replaced;
  }
}

writeFileSync(path, html, 'utf-8');
console.log('Done.');
