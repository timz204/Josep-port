"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { projectsMeta } from "@/data/portfolio";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";
import { easeOut } from "@/lib/motion";

type ProjectMeta = (typeof projectsMeta)[number];

type ProjectModalProps = {
  project: ProjectMeta | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const { m } = useI18n();
  const reduceMotion = useReducedMotion();
  const copy = project ? m.projects.items[project.id] : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && project && copy ? (
        <motion.div
          className="fixed inset-0 z-[10050] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label={m.common.close}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-line bg-[var(--surface)] shadow-[var(--shadow-lg)] sm:rounded-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden sm:aspect-[21/9]">
              <Image
                src={project.image}
                alt={copy.name}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/20 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label={m.common.close}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition hover:bg-black/65"
              >
                <Icons.close size={18} />
              </button>
              <div className="absolute bottom-4 left-4 right-14 sm:bottom-5 sm:left-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">
                  {project.company}
                </p>
                <h2
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl"
                >
                  {copy.name}
                </h2>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                <span className="rounded-md border border-line bg-canvas/60 px-2.5 py-1.5">
                  {m.common.role}: {copy.role}
                </span>
                <span className="rounded-md border border-line bg-canvas/60 px-2.5 py-1.5">
                  {copy.period}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted">
                {copy.summary}
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <DetailBlock title={m.common.problem} body={copy.problem} />
                <DetailBlock title={m.common.challenge} body={copy.challenge} />
                <DetailBlock title={m.common.solution} body={copy.solution} />
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {m.common.architecture}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {copy.architecture.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-ink-soft"
                      >
                        <Icons.layers
                          className="mt-0.5 shrink-0 text-teal"
                          size={14}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {m.common.outcomes}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {copy.impact.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-ink-soft"
                      >
                        <Icons.check
                          className="mt-0.5 shrink-0 text-gold"
                          size={14}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {m.common.stack}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-canvas/60 px-2.5 py-1 text-[0.75rem] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end pb-1">
                <button type="button" onClick={onClose} className="btn-secondary">
                  {m.common.close}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-line bg-canvas/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
