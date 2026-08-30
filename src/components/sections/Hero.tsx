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
          <p className="mb-6 font-display text-base italic text-muted">
            {PERSONAL.location} — currently open to new work
          </p>
        </Reveal>

        <h1 className="font-display text-6xl font-medium leading-[1.05] tracking-tight text-text sm:text-7xl">
          {PERSONAL.name}
        </h1>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {PERSONAL.role}. {PERSONAL.tagline}
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
