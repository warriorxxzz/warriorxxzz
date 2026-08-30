import { SKILLS } from "../../data/skills";
import { groupBy } from "../../lib/utils";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const grouped = groupBy(SKILLS, (s) => s.category);

  return (
    <section id="skills" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Honest labels, not made-up percentages — this grows as I learn."
        />

        <div className="space-y-10">
          {Object.entries(grouped).map(([category, skills], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div>
                <p className="mb-4 text-sm uppercase tracking-wide text-muted">{category}</p>
                <div className="divide-y divide-border/60">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-base text-text">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.note}</span>
                    </div>
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
