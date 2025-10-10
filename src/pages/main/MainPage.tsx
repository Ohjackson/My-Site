import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/components/header';
import { HeroSection } from '@/pages/main/sections/hero';
import { AboutSection } from '@/pages/main/sections/about';
import { TechStackSection } from '@/pages/main/sections/tech';
import { ProjectsSection } from '@/pages/main/sections/projects';
import { HistorySection } from '@/pages/main/sections/history';
import { AchievementsSection } from '@/pages/main/sections/achievements';
import { ContactSection } from '@/pages/main/sections/contact';
import type { ProjectId } from '@/pages/main/sections/projects';

const HEADER_OFFSET = 96;

export const MainPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleProjectClick = (projectId: ProjectId) => {
    console.log('Project clicked:', projectId);
    navigate(`/project/${projectId}`);
  };

  const handleNavigateHome = () => {
    navigate('/');
    // Scroll to Featured Projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const elementTop = projectsSection.getBoundingClientRect().top + window.scrollY;
        const scrollTarget = Math.max(elementTop - HEADER_OFFSET, 0);
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      }
    }, 100);
  };

  // Hash-based scrolling for main page
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Header
        currentView="main"
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