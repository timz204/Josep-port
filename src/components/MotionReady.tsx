"use client";

import { createContext, useContext } from "react";

const MotionReadyContext = createContext(false);

export function MotionReadyProvider({
  ready,
  children,
}: {
  ready: boolean;
  children: React.ReactNode;
}) {
  return (
    <MotionReadyContext.Provider value={ready}>
      {children}
    </MotionReadyContext.Provider>
  );
}

export function useMotionReady() {
  return useContext(MotionReadyContext);
}
