import SectionHeading from "../ui/SectionHeading";
import ProjectGrid from "../projects/ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="projects" title="Things I've built" />
        <ProjectGrid />
      </div>
    </section>
  );
}
