import { ACHIEVEMENTS } from "../../data/achievements";
import Reveal from "../ui/Reveal";
import AchievementCard from "../achievements/AchievementCard";

export default function Achievements() {
  if (ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-sm text-muted">Milestones</p>
          <h2 className="text-display mb-10 font-display font-semibold text-text">
            Where things stand
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className="h-full">
              <AchievementCard achievement={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
