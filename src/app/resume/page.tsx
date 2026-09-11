"use client";

import Link from "next/link";

import { educationPeriod, experienceMeta, site } from "@/data/portfolio";
import { PrintButton } from "@/components/PrintButton";
import { useI18n } from "@/components/LanguageProvider";

export default function ResumePage() {
  const { m } = useI18n();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {site.name}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">{m.site.role}</p>
          <p className="mt-3 text-sm text-ink-soft">
            {site.email} · {site.phoneDisplay} · {m.site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <Link
            href="/"
            className="rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
          >
            ← Back
          </Link>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
          >
            PDF
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">{m.site.positioning}</p>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">{m.experience.title}</h2>
        <div className="mt-6 space-y-8">
          {experienceMeta.map((job, index) => {
            const copy = m.experience.jobs[index];
            if (!copy) return null;
            return (
              <article key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {copy.title} — {job.company}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">{copy.place}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft">
                  {copy.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">{m.common.education}</h2>
        <p className="mt-3 text-sm text-ink-soft">
          {m.experience.educationDegree} — {m.experience.educationSchool} (
          {educationPeriod})
        </p>
      </section>

      <div className="mt-10 print:hidden">
        <PrintButton />
      </div>
    </main>
  );
}
