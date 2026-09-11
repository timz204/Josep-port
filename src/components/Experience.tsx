"use client";

import { educationPeriod, experienceMeta } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";

export function Experience() {
  const { m } = useI18n();

  return (
    <section id="experience" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.experience.eyebrow}
            title={m.experience.title}
            description={m.experience.description}
          />
        </Reveal>

        <ul className="relative mt-14 space-y-16 md:space-y-20">
          <span
            aria-hidden
            className="absolute bottom-6 left-[15px] top-6 w-0.5 bg-line"
          />

          {experienceMeta.map((job, index) => {
            const copy = m.experience.jobs[index];
            if (!copy) return null;
            return (
              <li
                key={`${job.company}-${job.period}`}
                className="relative flex gap-5 md:gap-8"
              >
                <span className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-sm">
                  <Icons.briefcase size={14} />
                </span>

                <Reveal delay={index * 0.04} className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                        {copy.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-accent">
                        {job.company}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-sm leading-relaxed text-muted">
                        <Icons.mapPin size={13} />
                        {copy.place}
                      </p>
                    </div>
                    <p className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line bg-surface/80 px-2.5 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                      {job.period}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface/60 px-2.5 py-1.5 text-xs leading-relaxed text-ink-soft"
                      >
                        <Icons.check size={11} className="text-teal" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {copy.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-muted md:text-[0.95rem]"
                      >
                        <Icons.arrowRight
                          className="mt-1.5 shrink-0 text-accent"
                          size={13}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-16 flex items-start gap-4 rounded-xl border border-line bg-surface/80 p-5 backdrop-blur-sm">
          <span className="icon-chip">
            <Icons.award size={18} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              {m.common.education}
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug text-ink">
              {m.experience.educationDegree}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {m.experience.educationSchool}
              <span className="mx-2 text-line">·</span>
              {educationPeriod}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
