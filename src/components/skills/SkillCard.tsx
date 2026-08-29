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
    <div className="panel panel-hover flex flex-col gap-4 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-signal/40 bg-gradient-to-br from-signal/15 to-transparent text-signal shadow-[0_0_16px_rgba(43,255,140,0.18)]">
          {icon ?? (
            <span className="font-mono text-xs font-semibold">{initials(skill.name)}</span>
          )}
        </span>
        <span className="text-sm font-medium text-text">{skill.name}</span>
      </div>

      {skill.level && (
        <div className="flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-signal to-cyan"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-muted">{Math.round(pct)}%</span>
        </div>
      )}
    </div>
  );
}
