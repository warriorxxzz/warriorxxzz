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
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Currently learning &amp; building — {PERSONAL.location}
          </p>
        </Reveal>

        <h1 className="font-display text-6xl font-medium leading-[1.05] tracking-tight text-text sm:text-7xl">
          {PERSONAL.name}
        </h1>

        <Reveal delay={0.1}>
          <p className="mt-2 text-lg text-muted">{PERSONAL.role}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {PERSONAL.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
              <Icon name="arrow-right" />
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
