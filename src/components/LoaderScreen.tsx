"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/portfolio";
import { duration, easeOut } from "@/lib/motion";
import { useI18n } from "@/components/LanguageProvider";

type LoaderProps = {
  onComplete: () => void;
};

export function LoaderScreen({ onComplete }: LoaderProps) {
  const reduceMotion = useReducedMotion();
  const { m } = useI18n();
  const bootLines = m.loader.lines;
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"boot" | "burst" | "exit">("boot");
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onComplete();
  };

  useEffect(() => {
    if (reduceMotion) {
      const t = window.setTimeout(finish, 160);
      return () => window.clearTimeout(t);
    }

    const start = performance.now();
    const bootDuration = 2600;
    let raf = 0;
    let exitTimer = 0;
    let burstTimer = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / bootDuration);
      // smoother ease-out expo-ish
      const eased = 1 - Math.pow(1 - t, 3.2);
      setProgress(Math.round(eased * 100));
      setLineIndex(Math.min(bootLines.length - 1, Math.floor(t * bootLines.length)));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("burst");
        burstTimer = window.setTimeout(() => {
          setPhase("exit");
          exitTimer = window.setTimeout(finish, 720);
        }, 380);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(burstTimer);
      window.clearTimeout(exitTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, bootLines.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#04080f]"
      initial={{ opacity: 1 }}
      animate={
        phase === "exit"
          ? { opacity: 0, scale: 1.04, filter: "blur(12px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{
        duration: phase === "exit" ? 0.72 : 0.4,
        ease: easeOut,
      }}
    >
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,8,15,0.55)_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="loader-ring absolute left-1/2 top-1/2 h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={
            reduceMotion
              ? undefined
              : phase === "burst"
                ? { scale: 1.12, opacity: 0.35 }
                : { scale: [1, 1.04, 1], opacity: [0.45, 0.85, 0.45] }
          }
          transition={
            phase === "burst"
              ? { duration: 0.45, ease: easeOut }
              : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="loader-ring loader-ring--delay absolute left-1/2 top-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={
            reduceMotion
              ? undefined
              : phase === "burst"
                ? { scale: 1.18, opacity: 0.2 }
                : { scale: [1, 1.03, 1], opacity: [0.3, 0.65, 0.3] }
          }
          transition={
            phase === "burst"
              ? { duration: 0.5, ease: easeOut }
              : { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
          }
        />
        {!reduceMotion && (
          <>
            <div className="sakura-layer sakura-a absolute inset-0 opacity-70" />
            <div className="sakura-layer sakura-b absolute inset-0 opacity-45" />
          </>
        )}
      </div>

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">
        <motion.p
          className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-[#4ecdc4]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          {m.loader.boot}
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-4xl font-bold tracking-tight text-[#f5f0e8] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={
            phase === "burst"
              ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1.03 }
              : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
          }
          transition={{ duration: duration.entrance, ease: easeOut }}
        >
          {site.name.split(" ")[0]}
          <span className="block text-[#ff6b4a]">
            {site.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-sm text-sm text-[#8ba3b8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {m.site.role} · {m.site.location}
        </motion.p>

        <div className="mt-10 w-full max-w-xs">
          <div className="mb-2 flex items-center justify-between font-mono text-[0.68rem] text-[#8ba3b8]">
            <AnimatePresence mode="wait">
              <motion.span
                key={lineIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: easeOut }}
              >
                {bootLines[lineIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="tabular-nums text-[#f7c948]">{progress}%</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#ff6b4a] via-[#f7c948] to-[#4ecdc4]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.12, ease: "linear" }}
            />
          </div>
        </div>

        <motion.div
          className="mt-12 font-display text-5xl font-bold text-[#ff6b4a]/35"
          animate={
            reduceMotion
              ? undefined
              : phase === "burst"
                ? { opacity: 0.7, scale: 1.08 }
                : { opacity: [0.22, 0.48, 0.22], scale: [1, 1.03, 1] }
          }
          transition={
            phase === "burst"
              ? { duration: 0.4 }
              : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          炎
        </motion.div>
        <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[#8ba3b8]/70">
          {m.loader.tagline}
        </p>
      </div>

      {phase === "burst" && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b4a]/20 via-transparent to-[#4ecdc4]/12" />
          <motion.div
            className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#f7c948]/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
