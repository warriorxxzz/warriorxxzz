import { SKILLS } from "../../data/skills";
import { groupBy } from "../../lib/utils";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const grouped = groupBy(SKILLS, (s) => s.category);
  const entries = Object.entries(grouped);

  return (
    <section id="skills" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-sm text-muted">Skills</p>
          <h2 className="text-display mb-14 font-display font-semibold text-text">
            Technologies I work with
          </h2>
        </Reveal>

        <div className="space-y-10">
          {entries.map(([category, skills], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-muted">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
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
