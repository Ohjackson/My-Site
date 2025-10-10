import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@/shared/components/header';
import { ProjectDetail } from './ProjectDetail';
import type { ProjectId } from '@/pages/main/sections/projects';

export const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleBack = () => {
    navigate('/');
  };

  const handleProjectClick = (newProjectId: ProjectId) => {
    navigate(`/project/${newProjectId}`);
  };

  if (!projectId) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Header
        currentView="project"
        onNavigateHome={handleBack}
      />
      <ProjectDetail
        projectId={projectId as ProjectId}
        language={i18n.language as 'ko' | 'en' | 'ja'}
        onBack={handleBack}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};
