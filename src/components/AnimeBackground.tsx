"use client";

import { useReducedMotion } from "framer-motion";

/** Full-bleed anime dusk atmosphere — city silhouette, sakura, aurora sky */
export function AnimeBackground({ intensity = "full" }: { intensity?: "full" | "soft" }) {
  const reduceMotion = useReducedMotion();
  const soft = intensity === "soft";

  return (
    <div
      className="anime-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="anime-sky absolute inset-0" />
      <div className="anime-aurora absolute inset-0" />
      <div className="anime-stars absolute inset-0" />

      {!reduceMotion && (
        <>
          <div className="sakura-layer sakura-a absolute inset-0" />
          <div className="sakura-layer sakura-b absolute inset-0" />
        </>
      )}

      <svg
        className={`anime-city absolute bottom-0 left-0 w-full ${soft ? "opacity-40" : "opacity-70"}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: soft ? "28vh" : "42vh" }}
      >
        <defs>
          <linearGradient id="cityFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--city-top)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--city-bottom)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#cityFade)"
          d="M0,280 L0,220 L40,220 L40,160 L70,160 L70,200 L110,200 L110,120 L140,90 L170,120 L170,180 L210,180 L210,100 L250,100 L250,140 L290,140 L290,80 L320,50 L350,80 L350,160 L400,160 L400,110 L440,70 L480,110 L480,200 L520,200 L520,140 L560,140 L560,90 L600,90 L600,170 L650,170 L650,130 L700,80 L740,130 L740,190 L800,190 L800,100 L840,60 L880,100 L880,160 L940,160 L940,120 L980,120 L980,70 L1020,40 L1060,70 L1060,150 L1120,150 L1120,100 L1160,100 L1160,180 L1220,180 L1220,130 L1260,90 L1300,130 L1300,200 L1360,200 L1360,160 L1440,160 L1440,320 L0,320 Z"
        />
        {/* Window lights */}
        <g fill="#f7c948" opacity="0.55">
          <rect x="55" y="175" width="4" height="5" rx="0.5" />
          <rect x="65" y="185" width="4" height="5" rx="0.5" />
          <rect x="220" y="115" width="4" height="5" rx="0.5" />
          <rect x="235" y="125" width="4" height="5" rx="0.5" />
          <rect x="310" y="95" width="3" height="4" rx="0.5" />
          <rect x="330" y="105" width="3" height="4" rx="0.5" />
          <rect x="460" y="130" width="4" height="5" rx="0.5" />
          <rect x="620" y="145" width="4" height="5" rx="0.5" />
          <rect x="820" y="115" width="4" height="5" rx="0.5" />
          <rect x="860" y="125" width="3" height="4" rx="0.5" />
          <rect x="1040" y="95" width="4" height="5" rx="0.5" />
          <rect x="1140" y="120" width="4" height="5" rx="0.5" />
          <rect x="1280" y="145" width="4" height="5" rx="0.5" />
        </g>
        <g fill="#4ecdc4" opacity="0.35">
          <rect x="125" y="145" width="3" height="4" rx="0.5" />
          <rect x="530" y="155" width="3" height="4" rx="0.5" />
          <rect x="720" y="150" width="3" height="4" rx="0.5" />
          <rect x="1000" y="135" width="3" height="4" rx="0.5" />
          <rect x="1240" y="155" width="3" height="4" rx="0.5" />
        </g>
      </svg>

      {/* Soft sun / moon disc */}
      <div
        className={`anime-orb absolute rounded-full ${soft ? "opacity-50" : "opacity-80"}`}
      />
    </div>
  );
}
