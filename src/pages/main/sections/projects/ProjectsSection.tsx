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
        <SectionHeading tKey="sections.projects.title">
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </SectionHeading>

        <div className="space-y-20">
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
