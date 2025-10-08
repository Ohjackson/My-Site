import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '@/shared/components/header';
import { HeroSection } from '@/pages/main/sections/hero';
import { AboutSection } from '@/pages/main/sections/about';
import { TechStackSection } from '@/pages/main/sections/tech';
import { ProjectsSection } from '@/pages/main/sections/projects';
import { HistorySection } from '@/pages/main/sections/history';
import { AchievementsSection } from '@/pages/main/sections/achievements';
import { ContactSection } from '@/pages/main/sections/contact';
import { ProjectDetail } from '@/pages/detail/ProjectDetail';
import type { ProjectId } from '@/pages/main/sections/projects';

type ViewState = 'main' | 'project';

const HEADER_OFFSET = 96;

export const App = () => {
  const [currentView, setCurrentView] = useState<ViewState>('main');
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | null>(null);
  const { i18n } = useTranslation();

  const handleProjectClick = (projectId: ProjectId) => {
    console.log('Project clicked:', projectId);
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentView !== 'main') {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(hash);
      if (!element) {
        return;
      }

      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = Math.max(elementTop - HEADER_OFFSET, 0);

      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    };

    requestAnimationFrame(scrollToSection);
  }, [currentView]);

  if (currentView === 'project' && selectedProjectId) {
    return (
      <div className="min-h-screen bg-bg text-text transition-colors duration-300">
        <Header
          currentView={currentView}
          onNavigateHome={handleNavigateHome}
        />
        <ProjectDetail
          projectId={selectedProjectId}
          language={i18n.language as 'ko' | 'en' | 'ja'}
          onBack={handleNavigateHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Header
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection onProjectClick={handleProjectClick} />
        <HistorySection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
};
