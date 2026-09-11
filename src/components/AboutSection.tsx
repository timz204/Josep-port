"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";
import { focusIcons, Icons } from "@/lib/icons";
import { interpolate } from "@/i18n";

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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal className="min-w-0 space-y-5">
            <Image src="/joseph-portrait.png" alt="Joseph Bernard Adlaon" width={462} height={498} className="portrait-frame mb-8 w-full max-w-sm rounded-2xl border border-line object-cover" />
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
                  className="flex gap-4 rounded-xl border border-line bg-canvas/60 p-4 backdrop-blur-sm transition-colors hover:border-accent"
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
