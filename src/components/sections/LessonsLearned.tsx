import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function LessonsLearned() {
  return (
    <section className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Notes" title="What I've learned the hard way" />

        <div className="space-y-6">
          {PERSONAL.lessonsLearned.map((lesson, i) => (
            <Reveal key={lesson} delay={i * 0.05}>
              <p className="font-display text-xl italic leading-relaxed text-muted">
                "{lesson}"
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
