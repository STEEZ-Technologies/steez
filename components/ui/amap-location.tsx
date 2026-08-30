"use client";

// Amap's JS SDK is loaded at runtime and ships no types — `any` is unavoidable here.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

type AmapLocationProps = {
  /** Full address in Chinese — Amap geocodes this exactly (product-accurate) */
  addressZh: string;
  /** Human-readable address shown on the card (any language) */
  addressLabel: string;
  /** Keyword used for the keyless "Open in Amap" deep link */
  keyword: string;
  city?: string;
};

declare global {
  interface Window {
    AMap?: any;
    _AMapSecurityConfig?: { securityJsCode: string };
  }
}

const KEY = process.env.NEXT_PUBLIC_AMAP_KEY;
const SECURITY = process.env.NEXT_PUBLIC_AMAP_SECURITY;

function loadAmap(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject();
  if (window.AMap) return Promise.resolve(window.AMap);
  if (SECURITY) window._AMapSecurityConfig = { securityJsCode: SECURITY };
  return new Promise((resolve, reject) => {
    const existing = document.getElementById("amap-sdk") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(window.AMap));
      existing.addEventListener("error", reject);
      return;
    }
    const s = document.createElement("script");
    s.id = "amap-sdk";
    s.async = true;
    s.src = `https://webapi.amap.com/maps?v=2.0&key=${KEY}&plugin=AMap.Geocoder`;
    s.onload = () => resolve(window.AMap);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export function AmapLocation({ addressZh, addressLabel, keyword, city = "杭州" }: AmapLocationProps) {
  const mapEl = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // Keyless deep link — always works in China, even without an API key.
  const amapUri = `https://uri.amap.com/search?keyword=${encodeURIComponent(
    keyword
  )}&city=${encodeURIComponent(city)}&src=steez&coordinate=gaode&callnative=0`;

  useEffect(() => {
    if (!KEY || !mapEl.current) return;
    let map: any;
    let cancelled = false;
    loadAmap()
      .then((AMap) => {
        if (cancelled || !mapEl.current) return;
        map = new AMap.Map(mapEl.current, { zoom: 16, viewMode: "2D" });
        const geocoder = new AMap.Geocoder({ city });
        geocoder.getLocation(addressZh, (status: string, result: any) => {
          if (cancelled || !map) return;
          if (status === "complete" && result.geocodes.length) {
            const loc = result.geocodes[0].location;
            map.setCenter(loc);
            new AMap.Marker({ position: loc, map });
            setMapReady(true);
          } else {
            setFailed(true);
          }
        });
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
      if (map) map.destroy();
    };
  }, [addressZh, city]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 520,
        borderRadius: "var(--radius-cards, 20px)",
        overflow: "hidden",
        border: "1px solid var(--hairline, rgba(0,0,0,0.1))",
        background: "var(--card-bg, #fff)",
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18)",
      }}
    >
      {/* Map canvas — only when a key is configured */}
      {KEY && !failed && (
        <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#EDEBE5" }}>
          <div ref={mapEl} style={{ position: "absolute", inset: 0 }} />
          {!mapReady && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                opacity: 0.5,
              }}
            >
              Loading map…
            </div>
          )}
        </div>
      )}

      {/* Address + Amap deep link — always shown */}
      <div style={{ padding: "clamp(20px, 4vw, 28px)", display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0A93A",
          }}
        >
          STEEZ HQ
        </div>
        <div style={{ fontSize: "0.95rem", lineHeight: 1.55, opacity: 0.85 }}>{addressLabel}</div>
        <a
          href={amapUri}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 4,
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 20px",
            borderRadius: 999,
            background: "#E0A93A",
            color: "#1A1A1A",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
        >
          在高德地图查看 · Open in Amap
        </a>
      </div>
    </div>
  );
}
