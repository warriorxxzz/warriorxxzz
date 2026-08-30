import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function About() {
  const [lead, ...rest] = PERSONAL.bio;

  return (
    <section id="about" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title="Who I am" />

        <Reveal>
          <div className="mb-10 flex items-center gap-5">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
              <img
                src="/projects/image3.png"
                alt={PERSONAL.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-display text-lg font-medium text-text">{PERSONAL.name}</p>
              <p className="text-sm text-muted">{PERSONAL.handle}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <blockquote className="font-display text-2xl font-normal italic leading-snug text-text">
            "{lead}"
          </blockquote>

          <div className="mt-6 space-y-4">
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            Based in {PERSONAL.location} — {PERSONAL.availability.toLowerCase()}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
