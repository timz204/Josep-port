"use client";

import type { ReactNode, PointerEvent } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

export function TiltCard({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 24 });
  function reset() { rotateX.set(0); rotateY.set(0); }
  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateX.set((0.5 - (event.clientY - rect.top) / rect.height) * 7);
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 7);
  }
  return (
    <motion.div className="tilt-card h-full" onPointerMove={move} onPointerLeave={reset}
      onPointerCancel={reset} style={{ transformPerspective: 1000, rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}>
      {children}
    </motion.div>
  );
}
