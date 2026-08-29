import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "glow-pill mb-4 inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-signal",
          align === "center" && "mx-auto"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]" />
        {eyebrow}
      </div>
      <h2 className="glow-text font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
