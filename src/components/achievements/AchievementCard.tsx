import type { Achievement } from "../../types";
import Icon from "../icons/Icon";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="panel panel-hover relative flex flex-col overflow-hidden p-5 pl-6">
      <span className="absolute inset-y-0 left-0 w-1 bg-signal shadow-[0_0_14px_var(--color-signal)]" />

      {achievement.image && (
        <div className="mb-4 -mt-1 -mr-1 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border">
          <img
            src={achievement.image}
            alt={`${achievement.title} certificate`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_6px_var(--color-signal)]" />
          {achievement.issuer ?? "Milestone"}
        </span>

        {achievement.date && (
          <span className="glow-pill rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal">
            {achievement.date}
          </span>
        )}
      </div>

      <h3 className="font-display text-base font-semibold text-text">
        {achievement.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {achievement.description}
      </p>

      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-1.5 font-mono text-xs text-signal"
        >
          View credential
          <Icon name="external" className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
