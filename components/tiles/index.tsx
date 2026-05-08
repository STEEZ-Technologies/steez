import type { ReactNode } from "react";

const TILE_W = 420;
const TILE_H = 270;

const T = {
  forest: "#04342C",
  forestDeep: "#021F18",
  forestMid: "#084A3D",
  mint: "#E0A93A",
  mintGlow: "#F0C75A",
  ivory: "#FAF9F5",
  bone: "#FAF9F5",
  hairline: "rgba(224, 169, 58, 0.20)",
} as const;

type TileFrameProps = {
  bg?: string;
  kind: string;
  children: ReactNode;
};

function TileFrame({ bg = T.forestDeep, children, kind }: TileFrameProps) {
  return (
    <svg
      viewBox={`0 0 ${TILE_W} ${TILE_H}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", borderRadius: 16, background: bg }}
    >
      <defs>
        <linearGradient id="tileGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#084A3D" />
          <stop offset="1" stopColor="#021F18" />
        </linearGradient>
        <linearGradient id="mintGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0A93A" />
          <stop offset="1" stopColor="#F0C75A" />
        </linearGradient>
      </defs>
      {children}
      <text
        x={16}
        y={TILE_H - 14}
        fill={T.mint}
        fontSize="9"
        fontWeight="600"
        letterSpacing="2"
        fontFamily="Inter, sans-serif"
        opacity="0.7"
      >
        {kind}
      </text>
    </svg>
  );
}

type PhoneFrameProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  children?: ReactNode;
};

function PhoneFrame({ x, y, w, h, children }: PhoneFrameProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width={w} height={h} rx="22" fill="#000" />
      <rect x="3" y="3" width={w - 6} height={h - 6} rx="20" fill={T.forest} />
      <rect
        x="3"
        y="3"
        width={w - 6}
        height={h - 6}
        rx="20"
        fill="url(#tileGrad)"
      />
      {children}
    </g>
  );
}

export function Showroom1() {
  return (
    <TileFrame kind="01 · SHOWROOM / ELECTRONICS">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <PhoneFrame x={150} y={20} w={120} h={230}>
        <rect x="14" y="20" width="40" height="6" rx="2" fill={T.bone} />
        <rect
          x="14"
          y="32"
          width="80"
          height="3"
          rx="1"
          fill={T.mint}
          opacity="0.6"
        />
        <rect
          x="14"
          y="50"
          width="92"
          height="64"
          rx="6"
          fill={T.mint}
          opacity="0.15"
        />
        <text
          x="20"
          y="72"
          fill={T.bone}
          fontSize="9"
          fontFamily="Inter"
          fontWeight="700"
        >
          SHENZHEN
        </text>
        <text
          x="20"
          y="84"
          fill={T.mint}
          fontSize="6"
          fontFamily="Noto Sans SC"
        >
          深圳精密电子
        </text>
        <rect
          x="14"
          y="124"
          width="92"
          height="32"
          rx="6"
          fill={T.mint}
          opacity="0.10"
        />
        <rect
          x="20"
          y="132"
          width="40"
          height="4"
          rx="1"
          fill={T.bone}
          opacity="0.7"
        />
        <rect
          x="20"
          y="142"
          width="60"
          height="3"
          rx="1"
          fill={T.bone}
          opacity="0.4"
        />
        <rect
          x="14"
          y="164"
          width="44"
          height="44"
          rx="6"
          fill={T.mint}
          opacity="0.18"
        />
        <rect
          x="62"
          y="164"
          width="44"
          height="44"
          rx="6"
          fill={T.mint}
          opacity="0.18"
        />
      </PhoneFrame>
      <text
        x="20"
        y="40"
        fill={T.bone}
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter"
        letterSpacing="1"
      >
        SHENZHEN PRECISION
      </text>
      <text x="20" y="58" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        深圳精密 · 电子制造
      </text>
      <rect x="20" y="76" width="100" height="1" fill={T.mint} opacity="0.4" />
      <text
        x="20"
        y="100"
        fill={T.bone}
        opacity="0.7"
        fontSize="8"
        fontFamily="Inter"
      >
        PCB · SMT · INJECTION
      </text>
      <text
        x="20"
        y="116"
        fill={T.bone}
        opacity="0.7"
        fontSize="8"
        fontFamily="Inter"
      >
        MOQ 500 · LEAD 21D
      </text>
      <text
        x="20"
        y="132"
        fill={T.bone}
        opacity="0.7"
        fontSize="8"
        fontFamily="Inter"
      >
        ISO 9001 · ROHS
      </text>
      <g transform="translate(20 200)">
        <rect width="58" height="22" rx="11" fill={T.mint} />
        <text
          x="29"
          y="14"
          textAnchor="middle"
          fill={T.forestDeep}
          fontSize="7"
          fontWeight="700"
          fontFamily="Inter"
        >
          VIEW CATALOG
        </text>
      </g>
    </TileFrame>
  );
}

export function WeChat1() {
  const states = [
    { title: "SCAN", cn: "扫描", body: "qr" as const },
    { title: "SHOWROOM", cn: "展厅", body: "list" as const },
    { title: "INQUIRE", cn: "询价", body: "form" as const },
    { title: "WECHAT", cn: "微信", body: "chat" as const },
  ];
  return (
    <TileFrame kind="02 · WECHAT ACTIVATION FLOW">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
        letterSpacing="1"
      >
        SCAN → SHOWROOM → INQUIRY → WECHAT
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        微信优先激活 · 四步流程
      </text>
      {states.map((s, i) => {
        const x = 20 + i * 100;
        const y = 64;
        return (
          <g key={i}>
            <PhoneFrame x={x} y={y} w={86} h={170}>
              <text
                x="14"
                y="22"
                fill={T.mint}
                fontSize="6"
                fontWeight="700"
                fontFamily="Inter"
              >
                STEP 0{i + 1}
              </text>
              <text
                x="14"
                y="38"
                fill={T.bone}
                fontSize="9"
                fontWeight="700"
                fontFamily="Inter"
              >
                {s.title}
              </text>
              <text
                x="14"
                y="50"
                fill={T.mint}
                fontSize="6"
                fontFamily="Noto Sans SC"
              >
                {s.cn}
              </text>
              {s.body === "qr" && (
                <g transform="translate(14 60)">
                  <rect width="56" height="56" rx="6" fill={T.bone} />
                  {[...Array(8)].flatMap((_, r) =>
                    [...Array(8)].map((_, c) => (
                      <rect
                        key={`${r}-${c}`}
                        x={4 + c * 6}
                        y={4 + r * 6}
                        width="5"
                        height="5"
                        fill={
                          (r + c + r * c) % 3 === 0
                            ? T.forestDeep
                            : "transparent"
                        }
                      />
                    )),
                  )}
                </g>
              )}
              {s.body === "list" && (
                <g transform="translate(14 60)">
                  {[0, 1, 2, 3].map((j) => (
                    <g key={j} transform={`translate(0 ${j * 22})`}>
                      <rect
                        width="56"
                        height="18"
                        rx="3"
                        fill={T.mint}
                        opacity="0.15"
                      />
                      <rect
                        x="4"
                        y="4"
                        width="10"
                        height="10"
                        rx="2"
                        fill={T.mint}
                        opacity="0.5"
                      />
                      <rect
                        x="18"
                        y="6"
                        width="32"
                        height="2"
                        rx="1"
                        fill={T.bone}
                      />
                      <rect
                        x="18"
                        y="11"
                        width="22"
                        height="2"
                        rx="1"
                        fill={T.bone}
                        opacity="0.5"
                      />
                    </g>
                  ))}
                </g>
              )}
              {s.body === "form" && (
                <g transform="translate(14 60)">
                  {[0, 1, 2].map((j) => (
                    <g key={j} transform={`translate(0 ${j * 22})`}>
                      <rect
                        width="56"
                        height="16"
                        rx="3"
                        fill="rgba(255,255,255,0.06)"
                      />
                      <rect
                        x="4"
                        y="6"
                        width="30"
                        height="3"
                        rx="1"
                        fill={T.bone}
                        opacity="0.6"
                      />
                    </g>
                  ))}
                  <rect y="70" width="56" height="18" rx="9" fill={T.mint} />
                  <text
                    x="28"
                    y="82"
                    textAnchor="middle"
                    fill={T.forestDeep}
                    fontSize="6"
                    fontWeight="700"
                    fontFamily="Inter"
                  >
                    SEND
                  </text>
                </g>
              )}
              {s.body === "chat" && (
                <g transform="translate(14 60)">
                  <rect
                    width="38"
                    height="14"
                    rx="6"
                    fill={T.mint}
                    opacity="0.25"
                  />
                  <rect
                    x="18"
                    y="20"
                    width="38"
                    height="14"
                    rx="6"
                    fill={T.mint}
                  />
                  <rect
                    y="40"
                    width="42"
                    height="14"
                    rx="6"
                    fill={T.mint}
                    opacity="0.25"
                  />
                  <rect
                    x="14"
                    y="60"
                    width="42"
                    height="14"
                    rx="6"
                    fill={T.mint}
                  />
                  <rect
                    y="86"
                    width="56"
                    height="16"
                    rx="8"
                    fill="rgba(255,255,255,0.08)"
                  />
                </g>
              )}
            </PhoneFrame>
            {i < 3 && (
              <text
                x={x + 92}
                y={150}
                fill={T.mint}
                fontSize="14"
                fontFamily="Inter"
                opacity="0.5"
              >
                →
              </text>
            )}
          </g>
        );
      })}
    </TileFrame>
  );
}

export function FactoryProfile1() {
  return (
    <TileFrame kind="03 · FACTORY PROFILE">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <rect
        x="20"
        y="20"
        width={TILE_W - 40}
        height="120"
        rx="10"
        fill={T.forestMid}
      />
      <rect
        x="20"
        y="20"
        width={TILE_W - 40}
        height="120"
        rx="10"
        fill="url(#mintGrad)"
        opacity="0.10"
      />
      {[...Array(7)].map((_, i) => (
        <rect
          key={i}
          x={40 + i * 48}
          y={70 + (i % 2) * 20}
          width="36"
          height="40"
          rx="3"
          fill={T.mint}
          opacity="0.18"
        />
      ))}
      <rect
        x="40"
        y="120"
        width={TILE_W - 80}
        height="2"
        fill={T.mint}
        opacity="0.4"
      />
      <text
        x="32"
        y="40"
        fill={T.bone}
        fontSize="9"
        fontWeight="700"
        fontFamily="Inter"
        opacity="0.6"
      >
        DONGGUAN, GUANGDONG
      </text>
      <text
        x="32"
        y="54"
        fill={T.bone}
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter"
      >
        YIWU KNIT CO.
      </text>
      <text x="32" y="68" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        义乌针织 · 纺织
      </text>
      <g transform="translate(20 160)">
        {[
          ["EST.", "1998"],
          ["STAFF", "320"],
          ["EXPORT", "47 CTRY"],
          ["CERTS", "BSCI · OEKO"],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(${i * 95} 0)`}>
            <text
              fill={T.mint}
              fontSize="8"
              fontWeight="600"
              fontFamily="Inter"
              letterSpacing="1.5"
            >
              {k}
            </text>
            <text
              y="18"
              fill={T.bone}
              fontSize="13"
              fontWeight="700"
              fontFamily="Inter"
            >
              {v}
            </text>
          </g>
        ))}
      </g>
      <rect x="20" y="200" width={TILE_W - 40} height="1" fill={T.hairline} />
      <text
        x="20"
        y="222"
        fill={T.bone}
        opacity="0.6"
        fontSize="9"
        fontFamily="Inter"
      >
        MEI LIN · EXPORT MANAGER · 出口经理
      </text>
    </TileFrame>
  );
}

export function Catalog1() {
  return (
    <TileFrame kind="04 · MULTILINGUAL CATALOG">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <g transform="translate(20 22)">
        {["EN", "中文", "ES", "ع", "РУ", "PT"].map((l, i) => (
          <g key={i} transform={`translate(${i * 52} 0)`}>
            <rect
              width="44"
              height="22"
              rx="11"
              fill={i === 0 ? T.mint : "rgba(255,255,255,0.08)"}
            />
            <text
              x="22"
              y="15"
              textAnchor="middle"
              fill={i === 0 ? T.forestDeep : T.bone}
              fontSize="9"
              fontWeight="700"
              fontFamily="Inter"
            >
              {l}
            </text>
          </g>
        ))}
      </g>
      <text
        x="20"
        y="68"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        PRODUCT CATALOG
      </text>
      <text x="20" y="82" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        多语言产品目录
      </text>
      <g transform="translate(20 96)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 128} 0)`}>
            <rect
              width="120"
              height="120"
              rx="8"
              fill={T.mint}
              opacity="0.12"
            />
            <rect
              x="8"
              y="8"
              width="104"
              height="74"
              rx="4"
              fill={T.mint}
              opacity="0.18"
            />
            <text
              x="8"
              y="98"
              fill={T.bone}
              fontSize="9"
              fontWeight="700"
              fontFamily="Inter"
            >
              SKU-{1024 + i}
            </text>
            <text
              x="8"
              y="110"
              fill={T.mint}
              fontSize="7"
              fontFamily="Inter"
              opacity="0.8"
            >
              FROM ¥{(12 + i * 4).toFixed(2)}/PC
            </text>
          </g>
        ))}
      </g>
    </TileFrame>
  );
}

export function Dashboard1() {
  return (
    <TileFrame kind="05 · SCAN ANALYTICS">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="32"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        SCANS · LAST 30 DAYS
      </text>
      <text x="20" y="48" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        扫码数据 · 近30天
      </text>
      <g transform="translate(20 64)">
        {[
          ["1,247", "SCANS"],
          ["38", "COUNTRIES"],
          ["62", "INQUIRIES"],
          ["$84K", "PIPELINE"],
        ].map(([n, l], i) => (
          <g key={i} transform={`translate(${i * 95} 0)`}>
            <rect
              width="86"
              height="50"
              rx="6"
              fill="rgba(255,255,255,0.04)"
            />
            <text
              x="10"
              y="22"
              fill={T.bone}
              fontSize="14"
              fontWeight="800"
              fontFamily="Inter"
            >
              {n}
            </text>
            <text
              x="10"
              y="38"
              fill={T.mint}
              fontSize="7"
              fontWeight="600"
              fontFamily="Inter"
              letterSpacing="1.5"
            >
              {l}
            </text>
          </g>
        ))}
      </g>
      <g transform="translate(20 130)">
        <rect
          width={TILE_W - 40}
          height="100"
          rx="8"
          fill="rgba(255,255,255,0.04)"
        />
        <polyline
          fill="none"
          stroke={T.mint}
          strokeWidth="2"
          points="10,80 50,72 90,68 130,55 170,50 210,38 250,40 290,28 330,22 370,18"
        />
        <polyline
          fill="rgba(224, 169, 58,0.18)"
          stroke="none"
          points="10,80 50,72 90,68 130,55 170,50 210,38 250,40 290,28 330,22 370,18 370,90 10,90"
        />
        {[10, 90, 170, 250, 330].map((x, i) => (
          <text
            key={i}
            x={x}
            y="98"
            fill={T.bone}
            fontSize="7"
            fontFamily="Inter"
            opacity="0.5"
          >
            {`W${i + 1}`}
          </text>
        ))}
      </g>
    </TileFrame>
  );
}

export function Showroom2() {
  return (
    <TileFrame kind="06 · SHOWROOM / TEXTILES">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <rect x="0" y="0" width={TILE_W} height="160" fill={T.forestMid} />
      {[...Array(12)].map((_, i) => (
        <rect
          key={i}
          x={i * 36}
          y="0"
          width="32"
          height="160"
          fill={T.mint}
          opacity={0.05 + (i % 3) * 0.05}
        />
      ))}
      <text
        x="20"
        y="40"
        fill={T.bone}
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter"
      >
        SOFT GOODS
      </text>
      <text x="20" y="56" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        柔性面料 · 现代针织
      </text>
      <g transform="translate(20 180)">
        <text fill={T.bone} fontSize="10" fontFamily="Inter">
          12 SERIES · 240 SKUS · MOQ 100
        </text>
        <text
          y="14"
          fill={T.bone}
          fontSize="9"
          fontFamily="Inter"
          opacity="0.6"
        >
          COTTON · LINEN · BAMBOO · TENCEL · MERINO
        </text>
      </g>
      <g transform="translate(280 180)">
        <rect width="120" height="36" rx="18" fill={T.mint} />
        <text
          x="60"
          y="22"
          textAnchor="middle"
          fill={T.forestDeep}
          fontSize="10"
          fontWeight="700"
          fontFamily="Inter"
        >
          VIEW SERIES
        </text>
      </g>
    </TileFrame>
  );
}

export function Showroom3() {
  return (
    <TileFrame kind="07 · SHOWROOM / HARDWARE">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="36"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        FOSHAN HARDWARE GROUP
      </text>
      <text x="20" y="52" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        佛山五金 · 工业制造
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g
          key={i}
          transform={`translate(${20 + (i % 3) * 128} ${
            72 + Math.floor(i / 3) * 84
          })`}
        >
          <rect
            width="120"
            height="76"
            rx="8"
            fill="rgba(255,255,255,0.04)"
            stroke={T.hairline}
          />
          <g
            transform="translate(60 38)"
            stroke={T.mint}
            strokeWidth="1.4"
            fill="none"
          >
            <circle r={i % 2 ? 18 : 14} />
            {i % 2 === 0 && <circle r="6" />}
            {i % 3 === 0 && <line x1="-22" y1="0" x2="22" y2="0" />}
            {i % 3 === 1 && <rect x="-16" y="-10" width="32" height="20" />}
          </g>
          <text
            x="8"
            y="68"
            fill={T.bone}
            fontSize="7"
            fontWeight="600"
            fontFamily="Inter"
          >
            PRT-{2048 + i * 7}
          </text>
        </g>
      ))}
    </TileFrame>
  );
}

export function Showroom4() {
  return (
    <TileFrame kind="08 · SHOWROOM / COSMETICS">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="46"
        fill={T.bone}
        fontSize="22"
        fontWeight="900"
        fontFamily="Inter"
        letterSpacing="-1"
      >
        JADE LAB
      </text>
      <text
        x="20"
        y="64"
        fill={T.mint}
        fontSize="10"
        fontFamily="Noto Sans SC"
      >
        玉石实验室 · 美妆OEM
      </text>
      <text
        x="20"
        y="100"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        CONTRACT MANUFACTURING
      </text>
      <text
        x="20"
        y="114"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        CLEAN · VEGAN · CRUELTY-FREE
      </text>
      <text
        x="20"
        y="128"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        FDA · CE · MOQ 1,000
      </text>
      <g transform="translate(20 160)">
        <rect width="100" height="32" rx="16" fill={T.mint} />
        <text
          x="50"
          y="20"
          textAnchor="middle"
          fill={T.forestDeep}
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter"
        >
          REQUEST TKT
        </text>
      </g>
      <g transform="translate(260 30)">
        <rect width="140" height="210" rx="14" fill="rgba(255,255,255,0.06)" />
        <ellipse
          cx="70"
          cy="120"
          rx="32"
          ry="44"
          fill={T.mintGlow}
          opacity="0.9"
        />
        <ellipse
          cx="70"
          cy="120"
          rx="32"
          ry="44"
          fill="url(#mintGrad)"
          opacity="0.6"
        />
        <rect x="58" y="58" width="24" height="20" rx="4" fill={T.mint} />
        <text
          x="70"
          y="178"
          textAnchor="middle"
          fill={T.bone}
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter"
        >
          SERUM 30ML
        </text>
        <text
          x="70"
          y="190"
          textAnchor="middle"
          fill={T.mint}
          fontSize="7"
          fontFamily="Noto Sans SC"
        >
          精华液
        </text>
      </g>
    </TileFrame>
  );
}

export function Showroom5() {
  return (
    <TileFrame kind="09 · SHOWROOM / PACKAGING">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="34"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        CARTON & RIGID BOX
      </text>
      <text x="20" y="50" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        纸箱与硬质礼盒
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${30 + i * 125} 90)`}>
          <polygon
            points="0,30 50,5 100,30 50,55"
            fill={T.mint}
            opacity="0.6"
          />
          <polygon
            points="0,30 50,55 50,120 0,95"
            fill={T.mint}
            opacity="0.35"
          />
          <polygon
            points="100,30 50,55 50,120 100,95"
            fill={T.mint}
            opacity="0.20"
          />
          <text
            x="50"
            y="148"
            textAnchor="middle"
            fill={T.bone}
            fontSize="8"
            fontWeight="700"
            fontFamily="Inter"
          >
            {["MAILER", "RIGID", "KRAFT"][i]}
          </text>
        </g>
      ))}
      <text
        x="20"
        y="248"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.6"
      >
        FSC · RECYCLED · MOQ 1,000 · LEAD 14D
      </text>
    </TileFrame>
  );
}

export function Showroom6() {
  return (
    <TileFrame kind="10 · SHOWROOM / MACHINERY">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="34"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        CNC SOLUTIONS
      </text>
      <text x="20" y="50" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        数控解决方案 · 重型机械
      </text>
      <g
        transform="translate(20 70)"
        stroke={T.mint}
        fill="none"
        strokeWidth="1.4"
      >
        <rect x="20" y="40" width="160" height="100" rx="4" opacity="0.8" />
        <rect x="40" y="20" width="120" height="20" opacity="0.6" />
        <line x1="100" y1="0" x2="100" y2="20" opacity="0.5" />
        <circle cx="100" cy="6" r="6" opacity="0.5" />
        <line x1="20" y1="160" x2="180" y2="160" opacity="0.4" />
        <line x1="190" y1="40" x2="200" y2="40" opacity="0.4" />
        <line x1="200" y1="40" x2="200" y2="140" opacity="0.4" />
        <line x1="190" y1="140" x2="200" y2="140" opacity="0.4" />
      </g>
      <text
        x="220"
        y="100"
        fill={T.bone}
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter"
      >
        5-AXIS · ±0.005MM
      </text>
      <text
        x="220"
        y="118"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        SIEMENS · FANUC
      </text>
      <text
        x="220"
        y="134"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        DELIVERED 47 UNITS &apos;25
      </text>
      <text
        x="220"
        y="150"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        EU · NA · MENA
      </text>
    </TileFrame>
  );
}

export function WeChat2() {
  const messages = [
    { side: "L", text: "Hi! Saw your STEEZ card.", w: 200 },
    { side: "R", text: "您好！欢迎来到深圳精密。", w: 220 },
    { side: "L", text: "Catalog in EN, MOQ 500?", w: 180 },
    { side: "R", text: "Yes — sending PDF + factory video.", w: 240 },
  ] as const;
  return (
    <TileFrame kind="11 · BUYER ↔ MAKER THREAD">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="32"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        BERLIN · WECHAT
      </text>
      <text x="20" y="48" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        柏林买家 · 实时对话
      </text>
      {messages.map((m, i) => (
        <g
          key={i}
          transform={`translate(${m.side === "L" ? 20 : TILE_W - 20 - m.w} ${
            72 + i * 42
          })`}
        >
          <rect
            width={m.w}
            height="32"
            rx="14"
            fill={m.side === "R" ? T.mint : "rgba(255,255,255,0.08)"}
          />
          <text
            x="14"
            y="20"
            fill={m.side === "R" ? T.forestDeep : T.bone}
            fontSize="9"
            fontWeight={m.side === "R" ? 600 : 500}
            fontFamily="Inter"
          >
            {m.text}
          </text>
        </g>
      ))}
    </TileFrame>
  );
}

export function WeChat3() {
  return (
    <TileFrame kind="12 · QR SCAN MOMENT">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <g transform="translate(180 20)">
        <rect
          x="0"
          y="0"
          width="120"
          height="76"
          rx="6"
          fill="#04342C"
          stroke={T.mint}
        />
        <text
          x="12"
          y="22"
          fill={T.bone}
          fontSize="11"
          fontWeight="900"
          fontFamily="Inter"
          letterSpacing="2"
        >
          STEEZ
        </text>
        <text
          x="12"
          y="34"
          fill={T.mint}
          fontSize="7"
          fontFamily="Noto Sans SC"
        >
          思智
        </text>
        <g transform="translate(74 38)">
          <rect width="40" height="32" rx="3" fill={T.bone} />
          {[...Array(7)].flatMap((_, r) =>
            [...Array(9)].map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={2 + c * 4}
                y={2 + r * 4}
                width="3"
                height="3"
                fill={
                  (r + c + r * c * 2) % 4 === 0 ? T.forestDeep : "transparent"
                }
              />
            )),
          )}
        </g>
      </g>
      <g transform="translate(20 70)">
        <rect width="140" height="180" rx="20" fill="#000" />
        <rect
          x="3"
          y="3"
          width="134"
          height="174"
          rx="18"
          fill={T.forestDeep}
        />
        {(
          [
            [20, 40],
            [110, 40],
            [20, 130],
            [110, 130],
          ] as const
        ).map(([x, y], i) => (
          <g
            key={i}
            transform={`translate(${x} ${y})`}
            stroke={T.mint}
            strokeWidth="2"
            fill="none"
          >
            <path
              d={
                i === 0
                  ? "M0,8 L0,0 L8,0"
                  : i === 1
                    ? "M0,0 L8,0 L8,8"
                    : i === 2
                      ? "M0,0 L0,8 L8,8"
                      : "M0,8 L8,8 L8,0"
              }
            />
          </g>
        ))}
        <line
          x1="20"
          y1="86"
          x2="118"
          y2="86"
          stroke={T.mint}
          strokeWidth="1.5"
          opacity="0.8"
        />
        <text
          x="70"
          y="160"
          textAnchor="middle"
          fill={T.mint}
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter"
          letterSpacing="2"
        >
          SCANNING…
        </text>
      </g>
      <text
        x="180"
        y="118"
        fill={T.bone}
        fontSize="10"
        fontFamily="Inter"
        opacity="0.7"
      >
        3 SECONDS
      </text>
      <text
        x="180"
        y="134"
        fill={T.bone}
        fontSize="10"
        fontFamily="Inter"
        opacity="0.7"
      >
        FROM CARD
      </text>
      <text
        x="180"
        y="150"
        fill={T.bone}
        fontSize="10"
        fontFamily="Inter"
        opacity="0.7"
      >
        TO SHOWROOM
      </text>
      <text
        x="180"
        y="178"
        fill={T.mint}
        fontSize="9"
        fontFamily="Noto Sans SC"
      >
        三秒打开展厅
      </text>
    </TileFrame>
  );
}

export function WeChat4() {
  return (
    <TileFrame kind="13 · ACTIVATION SUCCESS">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <g transform="translate(150 30)">
        <PhoneFrame x={0} y={0} w={120} h={210}>
          <g transform="translate(60 80)">
            <circle r="32" fill={T.mint} />
            <path
              d="M-12,2 L-3,12 L14,-8"
              stroke={T.forestDeep}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text
            x="60"
            y="142"
            textAnchor="middle"
            fill={T.bone}
            fontSize="11"
            fontWeight="800"
            fontFamily="Inter"
          >
            CONNECTED
          </text>
          <text
            x="60"
            y="156"
            textAnchor="middle"
            fill={T.mint}
            fontSize="8"
            fontFamily="Noto Sans SC"
          >
            已建立联系
          </text>
          <rect x="14" y="172" width="92" height="24" rx="12" fill={T.mint} />
          <text
            x="60"
            y="187"
            textAnchor="middle"
            fill={T.forestDeep}
            fontSize="8"
            fontWeight="700"
            fontFamily="Inter"
          >
            OPEN WECHAT
          </text>
        </PhoneFrame>
      </g>
      <text
        x="20"
        y="52"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        BUYER ON-CHAIN
      </text>
      <text x="20" y="68" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        买家已加入
      </text>
      <text
        x="20"
        y="100"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        RIYADH · 11:42 LOCAL
      </text>
      <text
        x="20"
        y="116"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        SCANNED IN BAR + RM
      </text>
      <text
        x="20"
        y="132"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        VIEWED 12 PRODUCTS
      </text>
      <text
        x="20"
        y="148"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.7"
      >
        SAVED CONTACT TO CRM
      </text>
    </TileFrame>
  );
}

export function FactoryProfile2() {
  return (
    <TileFrame kind="14 · MAKER PROFILE">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <g transform="translate(24 24)">
        <circle cx="40" cy="40" r="36" fill={T.mint} opacity="0.2" />
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke={T.mint}
          strokeWidth="1.5"
        />
        <text
          x="40"
          y="46"
          textAnchor="middle"
          fill={T.bone}
          fontSize="20"
          fontWeight="800"
          fontFamily="Inter"
        >
          WC
        </text>
      </g>
      <text
        x="120"
        y="46"
        fill={T.bone}
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter"
      >
        WEI CHEN
      </text>
      <text
        x="120"
        y="62"
        fill={T.mint}
        fontSize="9"
        fontFamily="Noto Sans SC"
      >
        陈伟 · 销售总监
      </text>
      <text
        x="120"
        y="78"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.6"
      >
        SALES DIRECTOR · 22 YRS
      </text>
      <rect x="24" y="120" width={TILE_W - 48} height="1" fill={T.hairline} />
      <text
        x="24"
        y="148"
        fill={T.mint}
        fontSize="9"
        fontWeight="600"
        fontFamily="Inter"
        letterSpacing="2"
      >
        SHENZHEN PRECISION · 深圳精密
      </text>
      <g transform="translate(24 160)">
        {[
          ["EN", "native"],
          ["中文", "native"],
          ["ES", "B2"],
          ["DE", "A2"],
        ].map(([l, lvl], i) => (
          <g key={i} transform={`translate(${i * 92} 0)`}>
            <rect
              width="84"
              height="40"
              rx="6"
              fill="rgba(255,255,255,0.04)"
            />
            <text
              x="10"
              y="18"
              fill={T.bone}
              fontSize="11"
              fontWeight="700"
              fontFamily="Inter"
            >
              {l}
            </text>
            <text
              x="10"
              y="32"
              fill={T.mint}
              fontSize="7"
              fontFamily="Inter"
              letterSpacing="1.5"
            >
              {lvl.toUpperCase()}
            </text>
          </g>
        ))}
      </g>
      <text
        x="24"
        y="234"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.5"
      >
        RESPONDS WITHIN 4H · KEY ACCOUNTS: SIEMENS · BOSCH · LG
      </text>
    </TileFrame>
  );
}

export function FactoryProfile3() {
  const certs = [
    "ISO 9001",
    "BSCI",
    "OEKO-TEX",
    "CE",
    "FDA",
    "RoHS",
    "REACH",
    "FSC",
  ];
  return (
    <TileFrame kind="15 · CERTIFICATIONS">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        VERIFIED CREDENTIALS
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        认证资质
      </text>
      <g transform="translate(20 60)">
        {certs.map((c, i) => (
          <g
            key={i}
            transform={`translate(${(i % 4) * 95} ${Math.floor(i / 4) * 86})`}
          >
            <rect
              width="86"
              height="76"
              rx="8"
              fill="rgba(255,255,255,0.04)"
              stroke={T.hairline}
            />
            <circle cx="20" cy="20" r="8" fill={T.mint} />
            <path
              d="M16,20 L19,23 L24,17"
              stroke={T.forestDeep}
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="10"
              y="48"
              fill={T.bone}
              fontSize="10"
              fontWeight="700"
              fontFamily="Inter"
            >
              {c}
            </text>
            <text
              x="10"
              y="62"
              fill={T.bone}
              fontSize="6"
              fontFamily="Inter"
              opacity="0.5"
            >
              VERIFIED 2025
            </text>
          </g>
        ))}
      </g>
    </TileFrame>
  );
}

export function FactoryProfile4() {
  const events = [
    ["1998", "FOUNDED"],
    ["2007", "1ST EU CONTRACT"],
    ["2014", "NEW PLANT, DG"],
    ["2019", "BSCI"],
    ["2025", "STEEZ"],
  ];
  return (
    <TileFrame kind="16 · MAKER STORY">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter"
      >
        SINCE 1998
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        自1998年起 · 工厂故事
      </text>
      <line
        x1="20"
        y1="120"
        x2={TILE_W - 20}
        y2="120"
        stroke={T.mint}
        strokeWidth="1"
        opacity="0.4"
      />
      {events.map(([y, l], i) => (
        <g key={i} transform={`translate(${20 + i * 94} 0)`}>
          <circle cx="0" cy="120" r="5" fill={T.mint} />
          <text
            x="0"
            y="100"
            textAnchor="middle"
            fill={T.bone}
            fontSize="11"
            fontWeight="800"
            fontFamily="Inter"
          >
            {y}
          </text>
          <text
            x="0"
            y="146"
            textAnchor="middle"
            fill={T.mint}
            fontSize="7"
            fontFamily="Inter"
            letterSpacing="1.5"
          >
            {l}
          </text>
        </g>
      ))}
      <text
        x={TILE_W / 2}
        y={210}
        textAnchor="middle"
        fill={T.bone}
        fontSize="9"
        fontFamily="Inter"
        opacity="0.5"
      >
        320 STAFF · 47 EXPORT MARKETS · 0 OUTAGES
      </text>
    </TileFrame>
  );
}

export function Catalog2() {
  const headers = ["SKU", "NAME", "MOQ", "LEAD", "FOB ¥"];
  const rows = [
    ["SP-1024", "PCB Assy v3", "500", "21D", "12.40"],
    ["SP-1031", "Cable Harness", "1000", "14D", "4.80"],
    ["SP-1042", "Enclosure ABS", "500", "28D", "8.60"],
    ["SP-1058", "Sub-assy A", "200", "35D", "34.00"],
    ["SP-1077", "Final QC pack", "100", "7D", "0.80"],
  ];
  return (
    <TileFrame kind="17 · PRODUCT TABLE">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        SKU TABLE · BUYER VIEW
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        产品列表
      </text>
      <g transform="translate(20 64)">
        {headers.map((h, i) => (
          <text
            key={i}
            x={i * 76}
            y="0"
            fill={T.mint}
            fontSize="8"
            fontWeight="700"
            fontFamily="Inter"
            letterSpacing="1.5"
          >
            {h}
          </text>
        ))}
        <line
          x1="0"
          y1="8"
          x2={TILE_W - 40}
          y2="8"
          stroke={T.hairline}
        />
        {rows.map((row, r) => (
          <g key={r} transform={`translate(0 ${24 + r * 28})`}>
            {row.map((cell, i) => (
              <text
                key={i}
                x={i * 76}
                y="0"
                fill={T.bone}
                fontSize="9"
                fontFamily="Inter"
              >
                {cell}
              </text>
            ))}
            <line
              x1="0"
              y1="10"
              x2={TILE_W - 40}
              y2="10"
              stroke={T.hairline}
            />
          </g>
        ))}
      </g>
    </TileFrame>
  );
}

export function Catalog3() {
  const cards = [
    [
      "EN",
      "High-Density Knit Tee",
      "Combed cotton, 220 GSM. Reactive dye, 200 wash cycles tested.",
    ],
    [
      "ES",
      "Camiseta de Punto Denso",
      "Algodón peinado 220 g/m². Tinte reactivo, probado a 200 lavados.",
    ],
    [
      "ع",
      "تيشيرت محبوك عالي الكثافة",
      "٢٢٠ غرام/م². قطن ممشط، مختبر على ٢٠٠ غسلة.",
    ],
  ];
  return (
    <TileFrame kind="18 · LIVE TRANSLATION">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        SAME PRODUCT, ANY LANGUAGE
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        同一产品 · 任意语言
      </text>
      {cards.map(([l, t, b], i) => (
        <g key={i} transform={`translate(20 ${72 + i * 58})`}>
          <rect
            width={TILE_W - 40}
            height="48"
            rx="8"
            fill="rgba(255,255,255,0.04)"
            stroke={T.hairline}
          />
          <rect x="10" y="10" width="32" height="28" rx="6" fill={T.mint} />
          <text
            x="26"
            y="28"
            textAnchor="middle"
            fill={T.forestDeep}
            fontSize="9"
            fontWeight="800"
            fontFamily="Inter"
          >
            {l}
          </text>
          <text
            x="56"
            y="22"
            fill={T.bone}
            fontSize="10"
            fontWeight="700"
            fontFamily="Inter"
          >
            {t}
          </text>
          <text
            x="56"
            y="36"
            fill={T.bone}
            fontSize="7"
            fontFamily="Inter"
            opacity="0.6"
          >
            {b}
          </text>
        </g>
      ))}
    </TileFrame>
  );
}

export function Dashboard2() {
  const pins: ReadonlyArray<readonly [number, number, number]> = [
    [70, 70, 18],
    [120, 60, 8],
    [200, 80, 24],
    [240, 70, 6],
    [280, 100, 14],
    [320, 60, 10],
    [110, 120, 6],
    [160, 130, 8],
    [240, 130, 4],
    [310, 130, 10],
  ];
  return (
    <TileFrame kind="19 · GLOBAL HEATMAP">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <text
        x="20"
        y="30"
        fill={T.bone}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter"
      >
        WHERE BUYERS ARE
      </text>
      <text x="20" y="46" fill={T.mint} fontSize="9" fontFamily="Noto Sans SC">
        买家分布地图
      </text>
      <g transform="translate(20 60)">
        <rect
          width={TILE_W - 40}
          height="160"
          rx="10"
          fill="rgba(255,255,255,0.03)"
        />
        <path
          d="M40,80 Q80,40 140,60 T240,90 Q280,110 340,80"
          fill={T.mint}
          opacity="0.10"
        />
        <path
          d="M60,130 Q120,110 200,140 T340,130"
          fill={T.mint}
          opacity="0.08"
        />
        {pins.map(([x, y, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill={T.mint} opacity="0.18" />
            <circle cx={x} cy={y} r={r / 3} fill={T.mint} />
          </g>
        ))}
      </g>
    </TileFrame>
  );
}

export function CardLight() {
  return (
    <TileFrame kind="20 · CARD · LIGHT VARIANT" bg={T.ivory}>
      <rect width={TILE_W} height={TILE_H} fill={T.ivory} />
      <g transform="translate(60 60) rotate(-6)">
        <rect
          width="300"
          height="180"
          rx="12"
          fill="#fff"
          stroke={T.forestDeep}
          strokeOpacity="0.15"
        />
        <rect
          width="300"
          height="180"
          rx="12"
          fill="url(#mintGrad)"
          opacity="0.05"
        />
        <text
          x="24"
          y="44"
          fill={T.forestDeep}
          fontSize="22"
          fontWeight="900"
          fontFamily="Inter"
          letterSpacing="3"
        >
          STEEZ
        </text>
        <text
          x="24"
          y="62"
          fill={T.mint}
          fontSize="13"
          fontFamily="Noto Sans SC"
          letterSpacing="3"
        >
          思智
        </text>
        <line
          x1="24"
          y1="80"
          x2="100"
          y2="80"
          stroke={T.forestDeep}
          strokeOpacity="0.2"
        />
        <text
          x="24"
          y="120"
          fill={T.forestDeep}
          fontSize="11"
          fontWeight="700"
          fontFamily="Inter"
        >
          MEI LIN
        </text>
        <text
          x="24"
          y="134"
          fill={T.forestDeep}
          fontSize="9"
          fontFamily="Inter"
          opacity="0.6"
        >
          EXPORT MGR · YIWU KNIT
        </text>
        <text
          x="24"
          y="148"
          fill={T.forestDeep}
          fontSize="9"
          fontFamily="Inter"
          opacity="0.6"
        >
          +86 138 0001 2345
        </text>
        <g transform="translate(220 100)">
          <rect width="60" height="60" rx="6" fill={T.forestDeep} />
          {[...Array(8)].flatMap((_, r) =>
            [...Array(8)].map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={6 + c * 6}
                y={6 + r * 6}
                width="5"
                height="5"
                fill={(r + c + r * c) % 3 === 0 ? T.mint : "transparent"}
              />
            )),
          )}
        </g>
      </g>
      <text
        x="20"
        y={TILE_H - 14}
        fill={T.forestDeep}
        opacity="0.5"
        fontSize="9"
        fontWeight="600"
        fontFamily="Inter"
      >
        20 · CARD · LIGHT VARIANT
      </text>
    </TileFrame>
  );
}

export function CardDark() {
  return (
    <TileFrame kind="21 · CARD · DARK VARIANT">
      <rect width={TILE_W} height={TILE_H} fill="url(#tileGrad)" />
      <g transform="translate(60 60) rotate(-6)">
        <rect
          width="300"
          height="180"
          rx="12"
          fill={T.forestDeep}
          stroke={T.mint}
          strokeOpacity="0.4"
        />
        <text
          x="24"
          y="44"
          fill={T.bone}
          fontSize="22"
          fontWeight="900"
          fontFamily="Inter"
          letterSpacing="3"
        >
          STEEZ
        </text>
        <text
          x="24"
          y="62"
          fill={T.mint}
          fontSize="13"
          fontFamily="Noto Sans SC"
          letterSpacing="3"
        >
          思智
        </text>
        <line
          x1="24"
          y1="80"
          x2="100"
          y2="80"
          stroke={T.mint}
          strokeOpacity="0.4"
        />
        <text
          x="24"
          y="120"
          fill={T.bone}
          fontSize="11"
          fontWeight="700"
          fontFamily="Inter"
        >
          WEI CHEN
        </text>
        <text
          x="24"
          y="134"
          fill={T.bone}
          fontSize="9"
          fontFamily="Inter"
          opacity="0.6"
        >
          SALES DIR · SHENZHEN PRECISION
        </text>
        <text
          x="24"
          y="148"
          fill={T.bone}
          fontSize="9"
          fontFamily="Inter"
          opacity="0.6"
        >
          wei@steez.cn
        </text>
        <g transform="translate(220 100)">
          <rect width="60" height="60" rx="6" fill={T.bone} />
          {[...Array(8)].flatMap((_, r) =>
            [...Array(8)].map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={6 + c * 6}
                y={6 + r * 6}
                width="5"
                height="5"
                fill={(r + c + r * c) % 3 === 0 ? T.forestDeep : "transparent"}
              />
            )),
          )}
        </g>
      </g>
    </TileFrame>
  );
}

export const STEEZ_TILES = [
  Showroom1,
  WeChat1,
  FactoryProfile1,
  Catalog1,
  Dashboard1,
  Showroom2,
  Showroom3,
  Showroom4,
  Showroom5,
  Showroom6,
  WeChat2,
  WeChat3,
  WeChat4,
  FactoryProfile2,
  FactoryProfile3,
  FactoryProfile4,
  Catalog2,
  Catalog3,
  Dashboard2,
  CardLight,
  CardDark,
] as const;
