"use client";

import Link from "next/link";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navHrefs, site } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";
import { easeOut } from "@/lib/motion";

/** Truly fixed site header — rendered from root layout, never inside fade wrappers */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { m } = useI18n();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: "100%",
      }}
      className={`site-header border-b border-line ${
        scrolled || open ? "site-header--scrolled" : ""
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-3 md:h-[4.25rem] md:gap-4">
        <Link
          href="/#home"
          className="inline-flex min-w-0 items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink md:text-lg"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 font-display text-sm text-accent">
            J
          </span>
          <span className="truncate">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navHrefs.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="rounded-md px-2.5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              {m.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? m.common.switchToLight : m.common.switchToDark
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-canvas text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            {theme === "dark" ? <Icons.sun size={16} /> : <Icons.moon size={16} />}
          </button>
          <Link
            href="/#contact"
            className="btn-primary hidden px-4 py-2 text-[0.78rem] uppercase tracking-[0.1em] lg:inline-flex"
          >
            <Icons.mail size={14} />
            {m.common.contact}
          </Link>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? m.common.switchToLight : m.common.switchToDark
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-canvas text-muted"
          >
            {theme === "dark" ? <Icons.sun size={16} /> : <Icons.moon size={16} />}
          </button>
          <button
            type="button"
            aria-label={open ? m.common.closeMenu : m.common.openMenu}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full origin-center bg-ink transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-ink transition duration-300 ${
                  open ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full origin-center bg-ink transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-nav"
            className="overflow-hidden border-t border-line bg-[var(--surface)] lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navHrefs.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={`/${link.href}`}
                  className="py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink-soft"
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.04 + index * 0.04,
                    duration: 0.3,
                    ease: easeOut,
                  }}
                >
                  {m.nav[link.key]}
                </motion.a>
              ))}
              <Link
                href="/#contact"
                className="btn-primary mt-2 mb-2 w-fit px-4 py-2.5 text-sm uppercase tracking-[0.1em]"
                onClick={() => setOpen(false)}
              >
                <Icons.mail size={14} />
                {m.common.contact}
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/** Spacer matching header height — place once at top of page content */
export function HeaderSpacer() {
  return <div className="h-16 shrink-0 md:h-[4.25rem]" aria-hidden />;
}
