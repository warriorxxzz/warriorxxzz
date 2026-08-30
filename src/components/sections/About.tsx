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
          <p className="font-display text-2xl font-normal italic leading-snug text-text">
            "{lead}"
          </p>

          <div className="mt-6 space-y-4">
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <p className="mb-6 text-sm uppercase tracking-wide text-muted">How I learn</p>
            <ol className="space-y-4">
              {PERSONAL.howILearn.map((step, i) => (
                <li key={step} className="flex gap-4 border-b border-border/60 pb-4 last:border-0">
                  <span className="font-mono text-sm text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
