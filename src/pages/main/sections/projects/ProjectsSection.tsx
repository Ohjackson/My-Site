import { SectionHeading } from '@/shared/components/section-heading';
import { ProjectCard } from './components/ProjectCard';
import { useProjectsContent } from './hooks/useProjectsContent';
import type { ProjectId } from './types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectsSectionProps {
  onProjectClick: (id: ProjectId) => void;
}

export const ProjectsSection = ({ onProjectClick }: ProjectsSectionProps) => {
  const { content, projects } = useProjectsContent();
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const { t } = useTranslation();

  // Filter projects based on toggle state
  const filteredProjects = showActiveOnly 
    ? projects.filter(project => project.flag === 'active')
    : projects;

  return (
    <section id="projects" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Featured Projects
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
          
          {/* Toggle Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowActiveOnly(!showActiveOnly)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                showActiveOnly
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {showActiveOnly ? t('sections.projects.toggle.showAll') : t('sections.projects.toggle.showFeatured')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
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
