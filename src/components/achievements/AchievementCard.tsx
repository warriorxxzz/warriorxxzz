import type { Achievement } from "../../types";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="panel panel-hover flex h-full flex-col p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-semibold text-text">{achievement.title}</h3>
        {achievement.issuer && (
          <span className="status-pill shrink-0 whitespace-nowrap rounded-md px-2 py-1 font-mono text-[11px]">
            {achievement.issuer}
          </span>
        )}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted">{achievement.description}</p>
    </div>
  );
}
