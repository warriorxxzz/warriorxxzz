import { PERSONAL } from "../../data/personal";
import Button from "../ui/Button";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen scroll-mt-16 flex-col justify-center px-6 pt-20"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Reveal>
            <p className="mb-5 text-sm text-muted">{PERSONAL.location}</p>
          </Reveal>

          <h1 className="text-hero font-display font-semibold text-text">{PERSONAL.name}</h1>
        </div>

        <Reveal delay={0.05}>
          <p className="text-sm leading-relaxed text-muted sm:max-w-[11rem] sm:text-right">
            {PERSONAL.role}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 w-full max-w-5xl border-t border-border pt-10">
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{PERSONAL.tagline}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
              <Icon name="arrow-right" />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
