import type { Project, ProjectStatus } from "../../types";
import Tag from "../ui/Tag";
import Icon from "../icons/Icon";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "text-status border-status/30",
  "In Progress": "text-signal border-signal/30",
  Planned: "text-muted border-border",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs uppercase tracking-wide text-muted">No preview</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
          {project.status && (
            <span className={`shrink-0 rounded-sm border px-2 py-0.5 text-[11px] ${statusStyles[project.status]}`}>
              {project.status}
            </span>
          )}
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-text"
            >
              <Icon name="github" className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-text"
            >
              <Icon name="external" className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
