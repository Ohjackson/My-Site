import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@/shared/components/header';
import { ProjectDetail } from './ProjectDetail';
import type { ProjectId } from '@/pages/main/sections/projects';

export const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const handleBack = () => {
    navigate('/');
  };

  const handleProjectClick = (newProjectId: ProjectId) => {
    navigate(`/project/${newProjectId}`);
  };

  if (!projectId) {
    return (
      <div className="min-h-screen bg-bg text-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <p className="text-muted mb-4">The requested project could not be found.</p>
          <button 
            onClick={handleBack}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
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
