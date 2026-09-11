"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin reading-progress rail under the fixed header */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.001,
  });


  return (
    <div
      className="scroll-progress-track pointer-events-none fixed inset-x-0"
      style={{ top: "var(--header-offset, 4.25rem)", zIndex: 9998 }}
      aria-hidden
    >
      <motion.div className="scroll-progress-bar origin-left" style={{ scaleX }} />
    </div>
  );
}

