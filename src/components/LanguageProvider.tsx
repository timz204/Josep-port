"use client";

import type { ReactNode } from "react";
import { en } from "@/i18n/en";

/** English-only copy, shared by the portfolio and printable resume. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  return children;
}

export function useI18n() {
  return { m: en };
}
