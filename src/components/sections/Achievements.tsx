import { ACHIEVEMENTS } from "../../data/achievements";
import SectionHeading from "../ui/SectionHeading";
import AchievementCard from "../achievements/AchievementCard";
import Reveal from "../ui/Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="achievements" title="Milestones so far" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, i) => (
            <Reveal key={achievement.title} delay={i * 0.06}>
              <AchievementCard achievement={achievement} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
