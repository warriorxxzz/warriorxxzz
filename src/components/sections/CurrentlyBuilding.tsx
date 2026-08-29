import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="building"
          title="Currently in progress"
          description="What I'm actively working on right now — updated as things move."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERSONAL.currentlyBuilding.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="panel panel-hover relative flex h-full flex-col overflow-hidden p-5">
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px]",
                    item.active
                      ? "bg-gradient-to-r from-signal via-cyan to-transparent"
                      : "bg-border"
                  )}
                />

                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      item.active ? "animate-pulse bg-signal shadow-[0_0_8px_var(--color-signal)]" : "bg-border"
                    )}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {item.active ? "active" : "paused"}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
