import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-border/60 py-5 last:border-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <p className="text-sm uppercase tracking-wide text-muted">{label}</p>
      <p className="text-base text-text">{value}</p>
    </div>
  );
}

export default function Now() {
  return (
    <section id="now" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Now" title="What I'm doing right now" />

        <Reveal>
          <div>
            <Row label="Learning" value={PERSONAL.now.learning} />
            <Row label="Building" value={PERSONAL.now.building} />
            <Row label="Exploring" value={PERSONAL.now.exploring} />
            <Row label="Based in" value={PERSONAL.location} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
