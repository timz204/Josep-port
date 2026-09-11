"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

type SkillChipProps = {
  label: string;
  icon: IconType;
  color: string;
  soft: string;
  border: string;
  size?: "md" | "sm";
  className?: string;
};

export function SkillChip({
  label,
  icon: Icon,
  color,
  soft,
  border,
  size = "md",
  className = "",
}: SkillChipProps) {
  return (
    <span
      className={`skill-chip ${size === "sm" ? "skill-chip--sm" : ""} ${className}`}
      style={
        {
          "--chip-color": color,
          "--chip-soft": soft,
          "--chip-border": border,
        } as CSSProperties
      }
    >
      <span className="skill-chip__icon" aria-hidden>
        <Icon size={size === "sm" ? 13 : 15} />
      </span>
      <span className="skill-chip__label">{label}</span>
    </span>
  );
}
