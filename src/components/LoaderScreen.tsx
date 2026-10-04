"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { site } from "@/data/portfolio";
import { easeOut } from "@/lib/motion";

export function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const reduced = useReducedMotion();
  const done = useRef(false);
  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timer = window.setTimeout(finish, reduced ? 100 : 1900);
    return () => window.clearTimeout(timer);
  }, [finish, reduced]);

  return (
    <motion.div className="intro-screen" initial={false}
      exit={reduced ? { opacity: 0 } : { y: "-100%" }}
      transition={{ duration: reduced ? .1 : .65, ease: easeOut }}>
      <div className="intro-topline">
        <span className="intro-monogram">JA<span /></span>
        <span>{site.name}</span>
      </div>
      <div className="intro-content" role="status" aria-label="Preparing Joseph’s portfolio">
        <p className="intro-eyebrow">Ideas into impact</p>
        <div className="intro-words" aria-hidden="true">
          {["Design.", "Build.", "Grow."].map((word, index) => (
            <span className="intro-word-mask" key={word}>
              <motion.span initial={reduced ? false : { y: "110%", rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ delay: index * .18, duration: .7, ease: easeOut }}>{word}</motion.span>
            </span>
          ))}
        </div>
        <motion.p className="intro-description" initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }} transition={{ delay: .55, duration: .4 }}>
          A better digital presence starts here.
        </motion.p>
        <div className="intro-progress" aria-hidden="true">
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: reduced ? 0 : 1.7, ease: [.45, 0, .2, 1] }} />
        </div>
      </div>
      <div className="intro-bottomline">
        <span>WordPress · SEO · Performance</span>
        <button type="button" onClick={finish}>Skip intro <span aria-hidden="true">↗</span></button>
      </div>
    </motion.div>
  );
}
