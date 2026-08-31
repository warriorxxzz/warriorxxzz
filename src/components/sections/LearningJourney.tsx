import { JOURNEY } from "../../data/journey";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

export default function LearningJourney() {
  return (
    <section id="journey" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-display mb-10 font-display font-semibold text-text">Journey</h2>
        </Reveal>

        <div className="panel overflow-hidden font-mono text-sm">
          {JOURNEY.map((step, i) => (
            <Reveal key={`${step.stage}-${step.title}`} delay={i * 0.05}>
              <div
                className={cn(
                  "flex items-center gap-4 border-b border-border/60 px-5 py-3.5 last:border-0",
                  step.active && "bg-surface-2"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 shrink-0 rounded-full",
                    step.active ? "bg-signal" : "bg-border"
                  )}
                />
                <span className="w-20 shrink-0 text-xs uppercase tracking-wide text-muted">
                  {step.stage}
                </span>
                <span className={cn("text-sm", step.active ? "text-text" : "text-muted")}>
                  {step.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
