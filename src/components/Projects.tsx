"use client";

import { useState } from "react";
import { projectsMeta } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";

export function Projects() {
  const { m } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projectsMeta.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.projects.eyebrow}
            title={m.projects.title}
            description={m.projects.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectsMeta.map((project, index) => {
            const copy = m.projects.items[project.id];
            if (!copy) return null;
            return (
              <Reveal key={project.id} delay={(index % 3) * 0.07}>
                <TiltCard>
                  <button
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    className="project-motion-card mission-card group relative flex h-full w-full flex-col overflow-hidden text-left"
                  >
                    <div className="mission-card__top">
                      <span className="font-mono text-xs text-teal">
                        {m.projects.missionLabel} {project.level}
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                        {project.company}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {copy.name}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {copy.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-line bg-canvas/50 px-2 py-1 font-mono text-[0.65rem] text-ink-soft"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 flex items-center justify-between gap-4 text-sm font-semibold text-accent">
                        {m.common.viewDetails}
                        <Icons.arrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </button>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={active}
        open={Boolean(active)}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}
