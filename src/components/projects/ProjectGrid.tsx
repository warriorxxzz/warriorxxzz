import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "../ui/Reveal";

export default function ProjectGrid() {
  if (PROJECTS.length === 0) {
    return (
      <div className="panel flex flex-col items-center gap-3 py-16 text-center">
        <span className="glow-pill flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          building
        </span>
        <p className="font-display text-lg font-semibold text-text">
          First project loading...
        </p>
        <p className="max-w-sm text-sm text-muted">
          Nothing shipped yet — check back soon, or see what's currently in progress below.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.06} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
