"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/** Decorative CSS geometry; paused as soon as the hero leaves the viewport. */
export function OrbitScene() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={`orbit-scene ${visible ? "is-visible" : ""}`} aria-hidden="true">
      <div className="orbit-halo" />
      <div className="orbit-plane"><div className="orbit-track"><i /></div></div>
      <div className="orbit-plane orbit-plane--two"><div className="orbit-track"><i /></div></div>
      <div className="orbit-plane orbit-plane--three"><div className="orbit-track"><i /></div></div>
      <div className="orbit-core"><span>&lt;/&gt;</span></div>
    </div>
  );
}
