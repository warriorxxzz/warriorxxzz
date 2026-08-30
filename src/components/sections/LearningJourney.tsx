import { JOURNEY } from "../../data/journey";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

export default function LearningJourney() {
  return (
    <section id="journey" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Journey" title="Learning journey" description="Still going — this isn't a finished timeline." />

        <div className="space-y-0">
          {JOURNEY.map((step, i) => (
            <Reveal key={`${step.stage}-${step.title}`} delay={i * 0.05}>
              <div className="flex gap-5 border-l border-border pb-8 pl-6 last:pb-0">
                <div className="relative -ml-[1.85rem] mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-border bg-bg">
                  {step.active && (
                    <span className={cn("absolute inset-0.5 rounded-full bg-signal")} />
                  )}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{step.stage}</p>
                  <p className="mt-1 font-display text-lg text-text">{step.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
