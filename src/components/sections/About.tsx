import { PERSONAL } from "../../data/personal";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="hero" className="scroll-mt-16 px-6 pt-20 pb-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rounded-3xl border border-border/50 bg-surface/20 p-6 md:p-10">
            <div className="grid gap-8 sm:grid-cols-[6rem_1fr] sm:items-start">
              <div className="h-24 w-24 overflow-hidden rounded-2xl border border-border shadow-xl shadow-signal/5">
                <img
                  src="/projects/image3.png"
                  alt={PERSONAL.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="text-sm text-muted">{PERSONAL.name}</p>
                <h1 className="text-display mt-1 font-display font-semibold leading-snug text-text">
                  {PERSONAL.tagline}
                </h1>

                <div className="mt-6 max-w-xl space-y-3">
                  {PERSONAL.bio.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/80 px-3 py-2 font-mono text-xs text-muted">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                  </span>
                  Right now: {PERSONAL.now.learning}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 rounded-xl border border-signal/30 bg-signal/10 px-5 py-2.5 text-sm font-medium text-signal transition-all hover:bg-signal/20"
                  >
                    See what I'm building
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl border border-border bg-surface-2 px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-border/80 hover:text-text"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
