import { useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@/shared/components/header';
import { ProjectDetail } from './ProjectDetail';
import type { ProjectId } from '@/pages/main/sections/projects';

export const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const resolvedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? 'en').split('-')[0];
  const language: 'ko' | 'en' | 'ja' =
    resolvedLanguage === 'ko' || resolvedLanguage === 'ja' || resolvedLanguage === 'en'
      ? resolvedLanguage
      : 'en';

  // 페이지 렌더 전에 상단으로 즉시 이동해서 이전 화면의 스크롤 위치가 보이지 않게 한다.
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    const animationFrameId = requestAnimationFrame(scrollToTop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.history.scrollRestoration = previousScrollRestoration;
    };
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
        language={language}
        onBack={handleBack}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};
