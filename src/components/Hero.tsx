"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/portfolio";
import { useMotionReady } from "@/components/MotionReady";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";
import { duration, easeOut, staggerContainer, fadeUp } from "@/lib/motion";

const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((mod) => mod.Scene3D),
  { ssr: false, loading: () => <div className="hero-scene hero-scene--fallback" /> },
);

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();
  const play = ready && !reduceMotion;
  const { m } = useI18n();
  const [firstName, lastName] = site.displayName.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-end overflow-hidden pb-24 pt-8 md:justify-center md:pb-20 md:pt-10"
    >
      {!reduceMotion ? <Scene3D /> : <div className="hero-scene hero-scene--fallback" />}

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-veil absolute inset-0" />
        <div className="hero-veil-top absolute inset-x-0 top-0 h-40" />
      </div>

      <motion.div
        className="section-shell relative z-10 w-full max-w-[min(1140px,calc(100%-2rem))]"
        initial="hidden"
        animate={play ? "show" : reduceMotion ? "show" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div
          className="hud-chip mb-5 inline-flex items-center gap-2"
          variants={fadeUp}
        >
          <span className="hud-chip__pulse" />
          {m.site.remoteTag}
        </motion.div>

        <motion.p
          className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-teal"
          variants={fadeUp}
        >
          {m.site.role}
        </motion.p>

        <motion.h1
          className="hero-brand-name mt-5 max-w-[12ch] font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-ink md:max-w-none"
          variants={{
            hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: duration.entrance, ease: easeOut },
            },
          }}
        >
          <span className="hero-word-mask">
            <motion.span
              className="hero-word"
              variants={{
                hidden: { y: "110%", rotate: 3 },
                show: {
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.95, ease: easeOut },
                },
              }}
            >
              {firstName}
            </motion.span>
          </span>
          <br />
          <span className="hero-word-mask">
            <motion.span
              className="hero-word hero-name-accent"
              variants={{
                hidden: { y: "110%", rotate: 3 },
                show: {
                  y: 0,
                  rotate: 0,
                  transition: { duration: 1.05, delay: 0.1, ease: easeOut },
                },
              }}
            >
              {lastName}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl font-display text-xl font-semibold leading-snug text-accent md:text-2xl"
          variants={fadeUp}
        >
          {m.site.headline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          variants={fadeUp}
        >
          {m.site.subheadline}
        </motion.p>

        <motion.div className="mt-9 flex flex-wrap items-center gap-3" variants={fadeUp}>
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
          >
            {m.hero.viewProjects}
            <Icons.arrowRight size={16} />
          </motion.a>
          <motion.a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
          >
            <Icons.download size={16} />
            {m.common.downloadResume}
          </motion.a>
          <motion.a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
          >
            <Icons.code size={16} />
            GitHub
          </motion.a>
        </motion.div>

        <motion.ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2" variants={fadeUp}>
          {m.highlights.map((item, index) => (
            <motion.li
              key={item}
              className="inline-flex items-center gap-2 text-sm text-ink-soft"
              initial={play ? { opacity: 0, y: 8 } : false}
              animate={play || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.55 + index * 0.06, duration: 0.4, ease: easeOut }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-ambition absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={play || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 1.05, duration: 0.55, ease: easeOut }}
      >
        <span>{m.common.scroll}</span>
        <span className="scroll-ambition__rail" aria-hidden>
          <span className="scroll-ambition__dot" />
        </span>
      </motion.a>
    </section>
  );
}
