import type { ReactNode } from "react";
import { Icons } from "@/lib/icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow">
        <Icons.zap size={12} />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function SectionFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`section-shell ${className}`}>{children}</div>;
}
