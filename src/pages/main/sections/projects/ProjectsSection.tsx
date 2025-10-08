import { SectionHeading } from '@/shared/components/section-heading';
import { ProjectCard } from './components/ProjectCard';
import { useProjectsContent } from './hooks/useProjectsContent';
import type { ProjectId } from './types';

interface ProjectsSectionProps {
  onProjectClick: (id: ProjectId) => void;
}

export const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  const { content, projects } = useProjectsContent();

  return (
    <section id="projects" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Featured Projects
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={content.labels}
              viewLabel={content.viewDetails}
              onSelect={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
