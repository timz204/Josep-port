"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function Impact() {
  const { m } = useI18n();

  return (
    <section id="impact" className="section-pad section-alt section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.impact.eyebrow}
            title={m.impact.title}
            description={m.impact.description}
          />
        </Reveal>

        <Stagger className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {m.impact.stats.map((stat, index) => (
            <StaggerItem key={stat.label} className="h-full">
              <div className="achievement-card flex h-full min-h-full flex-col p-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal">
                  ACH-{String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {stat.label}
                </p>
                <div className="xp-bar mt-5" aria-hidden>
                  <span style={{ width: `${72 + index * 7}%` }} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
