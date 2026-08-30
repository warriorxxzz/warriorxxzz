import type { Achievement } from "../../types";
import Icon from "../icons/Icon";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="panel panel-hover flex flex-col p-5">
      {achievement.image && (
        <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-md border border-border">
          <img
            src={achievement.image}
            alt={`${achievement.title} certificate`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="mb-2 flex items-center justify-between gap-3 text-xs text-muted">
        <span>{achievement.issuer ?? "Milestone"}</span>
        {achievement.date && <span>{achievement.date}</span>}
      </div>
      <h3 className="font-display text-base font-semibold text-text">{achievement.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{achievement.description}</p>

      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-1.5 text-xs text-signal"
        >
          View credential
          <Icon name="external" className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
