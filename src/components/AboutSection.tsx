"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";
import { focusIcons, Icons } from "@/lib/icons";
import { interpolate } from "@/i18n";
import { site } from "@/data/portfolio";

export function AboutSection() {
  const { m } = useI18n();

  return (
    <section id="about" className="section-pad section-alt section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.about.eyebrow}
            title={m.about.title}
            description={m.about.lead}
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal className="min-w-0 space-y-5">
            <div className="player-card mb-2">
              <div className="player-card__badge">{site.monogram}</div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">{site.displayName}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-teal">
                  {m.about.playerLevel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-3 py-2 text-xs"
                  >
                    <Icons.linkedin size={14} />
                    LinkedIn
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-3 py-2 text-xs"
                  >
                    <Icons.github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-[1.02rem] text-muted md:text-lg">
              {m.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="inline-flex items-center gap-2 text-sm text-ink-soft md:text-base">
                <Icons.mapPin className="text-accent" size={16} />
                {interpolate(m.about.basedIn, { location: m.site.location })}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {m.about.focus.map((item) => {
              const Icon = focusIcons[item.icon] ?? Icons.layers;
              return (
                <div
                  key={item.label}
                  className="mission-panel flex gap-4 p-4 transition-colors hover:border-accent"
                >
                  <span className="icon-chip">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-ink">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
