import { PROJECTS } from "../../data/projects";
import { PERSONAL } from "../../data/personal";
import ProjectCard from "../projects/ProjectCard";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-sm text-muted">Projects</p>
        <h2 className="text-display mb-10 font-display font-semibold text-text">Active builds</h2>

        <div className="space-y-4">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}

          <Reveal delay={PROJECTS.length * 0.06}>
            <a
              href={`https://github.com/${PERSONAL.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="panel panel-hover flex items-center justify-between gap-4 border-dashed p-5"
            >
              <div>
                <p className="text-sm text-text">More on GitHub</p>
                <p className="mt-1 text-xs text-muted">@{PERSONAL.githubUsername}</p>
              </div>
              <Icon name="external" className="h-4 w-4 shrink-0 text-muted" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
