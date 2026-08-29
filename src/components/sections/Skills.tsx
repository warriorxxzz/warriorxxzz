import { SKILLS } from "../../data/skills";
import { groupBy } from "../../lib/utils";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../skills/SkillCard";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const grouped = groupBy(SKILLS, (s) => s.category);

  return (
    <section id="skills" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="skills"
          title="What I work with"
          description="Grouped by area — this list grows as I learn."
        />

        <div className="space-y-8">
          {Object.entries(grouped).map(([category, skills], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <div className="panel p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <p className="font-mono text-xs uppercase tracking-widest text-signal">
                    {category}
                  </p>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted">
                    {skills.length}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
