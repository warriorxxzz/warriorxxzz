import type { Skill } from "../../types";
import { getTechIcon } from "../icons/TechIcon";

function initials(name: string): string {
  const words = name.split(/[\s.]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const level = skill.level ?? 3;
  const pct = (level / 5) * 100;
  const icon = getTechIcon(skill.name);

  return (
    <div className="panel panel-hover flex flex-col gap-3 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-text">
          {icon ?? <span className="text-xs font-semibold">{initials(skill.name)}</span>}
        </span>
        <span className="text-sm font-medium text-text">{skill.name}</span>
      </div>

      {skill.level && (
        <div className="h-1 w-full overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-signal" style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}
