"use client";

import { useState } from "react";
import { ProjectCover } from "@/components/ProjectCover";
import { projectsMeta } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";

export function Projects() {
  const { m } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projectsMeta : projectsMeta.slice(0, 6);
  return (
    <section id="projects" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal><SectionHeading eyebrow={m.projects.eyebrow} title={m.projects.title} description={m.projects.description} /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" id="project-grid">
          {visible.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * .07}>
              <TiltCard>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-motion-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-[var(--shadow)]">
                  <ProjectCover url={project.url} name={project.company} />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 break-all font-mono text-xs text-muted">{new URL(project.url).hostname.replace("www.", "")}</p>
                    <h3 className="font-display text-xl font-semibold text-ink">{project.company}</h3>
                    <span className="mt-auto flex items-center justify-between gap-4 pt-7 text-sm font-semibold text-accent">
                      Visit website <Icons.arrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button type="button" className="btn-secondary" aria-expanded={expanded} aria-controls="project-grid" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show fewer projects" : "Explore all 21 projects"}
            <Icons.arrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
