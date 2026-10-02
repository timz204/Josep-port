"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/portfolio";
import { useI18n } from "@/components/LanguageProvider";
import { easeOut } from "@/lib/motion";

export function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const reduced = useReducedMotion();
  const { m } = useI18n();
  const done = useRef(false);
  const [lineIndex, setLineIndex] = useState(0);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timer = window.setTimeout(finish, reduced ? 100 : 2200);
    return () => window.clearTimeout(timer);
  }, [finish, reduced]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setLineIndex((prev) => Math.min(prev + 1, m.loader.lines.length - 1));
    }, 420);
    return () => window.clearInterval(timer);
  }, [reduced, m.loader.lines.length]);

  return (
    <motion.div
      className="intro-screen"
      initial={false}
      exit={reduced ? { opacity: 0 } : { y: "-100%" }}
      transition={{ duration: reduced ? 0.1 : 0.65, ease: easeOut }}
    >
      <div className="intro-topline">
        <span className="intro-monogram">
          {site.monogram}
          <span />
        </span>
        <span>{site.displayName}</span>
      </div>
      <div className="intro-content" role="status" aria-label={m.loader.boot}>
        <p className="intro-eyebrow">{m.loader.boot}</p>
        <div className="intro-words" aria-hidden="true">
          {["Build.", "Ship.", "Scale."].map((word, index) => (
            <span className="intro-word-mask" key={word}>
              <motion.span
                initial={reduced ? false : { y: "110%", rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ delay: index * 0.18, duration: 0.7, ease: easeOut }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>
        <motion.p
          className="intro-description font-mono"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          {m.loader.lines[lineIndex]}
        </motion.p>
        <div className="intro-progress" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduced ? 0 : 1.9, ease: [0.45, 0, 0.2, 1] }}
          />
        </div>
      </div>
      <div className="intro-bottomline">
        <span>{m.loader.tagline}</span>
        <button type="button" onClick={finish}>
          Skip <span aria-hidden="true">↗</span>
        </button>
      </div>
    </motion.div>
  );
}
