"use client";

import type { IconType } from "react-icons";
import {
  FiCode,
  FiCloud,
  FiDatabase,
  FiServer,
  FiShield,
  FiZap,
} from "react-icons/fi";
import {
  SiDjango,
  SiDocker,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillChip } from "@/components/SkillChip";
import { useI18n } from "@/components/LanguageProvider";
import { skillCategories } from "@/data/portfolio";
import { getSkillTone } from "@/lib/skillMeta";

type SkillGroup = {
  id: string;
  title: string;
  icon: IconType;
  accent: string;
  soft: string;
  skills: string[];
};

const groupMeta: Record<
  string,
  { icon: IconType; accent: string; soft: string }
> = {
  languages: {
    icon: FiCode,
    accent: "#f7c948",
    soft: "rgba(247, 201, 72, 0.28)",
  },
  frontend: {
    icon: SiReact,
    accent: "#4ecdc4",
    soft: "rgba(78, 205, 196, 0.28)",
  },
  backend: {
    icon: FiServer,
    accent: "#ff6b4a",
    soft: "rgba(255, 107, 74, 0.28)",
  },
  cloud: {
    icon: FiCloud,
    accent: "#f7c948",
    soft: "rgba(247, 201, 72, 0.26)",
  },
  databases: {
    icon: FiDatabase,
    accent: "#4ecdc4",
    soft: "rgba(78, 205, 196, 0.26)",
  },
  testing: {
    icon: FiShield,
    accent: "#ff6b4a",
    soft: "rgba(255, 107, 74, 0.24)",
  },
};

const brandIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FiCode,
  "React.js": SiReact,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Laravel: SiLaravel,
  Django: SiDjango,
  FastAPI: FiZap,
  "Node.js": SiNodedotjs,
  NestJS: FiServer,
  "Express.js": SiNodedotjs,
  "Spring Boot": FiServer,
  Docker: SiDocker,
  Kubernetes: FiCloud,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: FiDatabase,
  Redis: FiDatabase,
  AWS: FiCloud,
  "AWS EC2": FiCloud,
  "AWS S3": FiCloud,
  "AWS RDS": FiCloud,
  "AWS Lambda": FiCloud,
  "AWS ECS": FiCloud,
  CloudWatch: FiCloud,
  Pytest: FiShield,
  Jest: FiShield,
  "CI/CD": FiZap,
  "GitHub Actions": FiZap,
  Git: FiCode,
};

export function SkillSet() {
  const { m } = useI18n();

  const groups: SkillGroup[] = skillCategories.map((cat) => {
    const meta = groupMeta[cat.id] ?? {
      icon: FiZap,
      accent: "#ff6b4a",
      soft: "rgba(255, 107, 74, 0.25)",
    };
    const copy = m.skills.categories[cat.id];
    return {
      id: cat.id,
      title: copy?.title ?? cat.id,
      icon: meta.icon,
      accent: meta.accent,
      soft: meta.soft,
      skills: [...cat.items].slice(0, 8),
    };
  });

  return (
    <section id="skills" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.skills.eyebrow}
            title={m.skills.title}
            description={m.skills.description}
          />
        </Reveal>

        <Stagger className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <StaggerItem key={group.id} className="flex h-full">
                <div
                  className="interactive-card flex h-full w-full flex-col rounded-2xl bg-surface/80 p-5 backdrop-blur-sm md:p-6"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${group.accent}55, 0 8px 28px -12px ${group.soft}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        color: group.accent,
                        background: group.soft,
                        borderColor: `${group.accent}99`,
                      }}
                    >
                      <GroupIcon size={20} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const tone = getSkillTone(skill);
                      const SkillIcon = brandIcons[skill] ?? tone.icon;
                      return (
                        <li key={skill}>
                          <SkillChip
                            label={skill}
                            icon={SkillIcon}
                            color={tone.color}
                            soft={tone.soft}
                            border={tone.border}
                            size="sm"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
