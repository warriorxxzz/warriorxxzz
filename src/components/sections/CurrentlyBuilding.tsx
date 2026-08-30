import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Building" title="Currently in progress" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERSONAL.currentlyBuilding.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="panel panel-hover flex h-full flex-col p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className={cn("h-1.5 w-1.5 rounded-full", item.active ? "bg-signal" : "bg-border")} />
                  <span className="text-xs uppercase tracking-wide text-muted">
                    {item.active ? "Active" : "Paused"}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
