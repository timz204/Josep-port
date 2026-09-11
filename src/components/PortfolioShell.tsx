"use client";

import { useCallback, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { ProfessionalBackground } from "@/components/ProfessionalBackground";
import { LoaderScreen } from "@/components/LoaderScreen";
import { MotionReadyProvider } from "@/components/MotionReady";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleComplete = useCallback(() => {
    setShowLoader(false);
    requestAnimationFrame(() => setReady(true));
  }, []);

  const visible = ready || !!reduceMotion;

  return (
    <MotionConfig reducedMotion="user"><MotionReadyProvider ready={visible}>
      <ProfessionalBackground />

      <AnimatePresence mode="wait">
        {showLoader ? <LoaderScreen key="loader" onComplete={handleComplete} /> : null}
      </AnimatePresence>

      <div
        inert={!visible}
        className={`relative z-10 transition-opacity duration-500 ease-out ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {children}
      </div>
    </MotionReadyProvider></MotionConfig>
  );
}
