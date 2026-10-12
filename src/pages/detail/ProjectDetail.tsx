import { projectIcons } from '@/assets/icons';
import { ContactSection } from '@/pages/main/sections/contact';
import { ProjectHeader } from './components/ProjectHeader';
import { ProjectSections } from './components/ProjectSections';
import { OtherProjectsSection } from './sections/other-projects';
import { getProjectDetail, projectDetails } from './data';
import type { Language } from './types';

interface ProjectDetailProps {
  projectId: string;
  language: Language;
  onBack: () => void;
  onProjectClick: (projectId: string) => void;
}

const otherProjects = Object.entries(projectDetails).map(([id, data]) => ({
  id,
  name: data.name,
  summary: data.summary,
  tags: data.tags ?? { ko: [], en: [], ja: [] },
}));

export function ProjectDetail({ projectId, language, onBack, onProjectClick }: ProjectDetailProps) {
  const project = getProjectDetail(projectId);
  const projectIcon = projectIcons[projectId as keyof typeof projectIcons];

  return (
    <div className="min-h-screen bg-bg text-text">
      <ProjectHeader project={project} projectIcon={projectIcon} language={language} onBack={onBack} />

      <ProjectSections project={project} language={language} />

      <OtherProjectsSection
        projects={otherProjects}
        currentProjectId={projectId}
        language={language}
        onProjectClick={onProjectClick}
      />

      <ContactSection compactTop />
    </div>
  );
}
