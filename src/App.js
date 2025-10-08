import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Header } from '@/shared/components/header';
import { HeroSection } from '@/pages/main/sections/hero';
import { AboutSection } from '@/pages/main/sections/about';
import { TechStackSection } from '@/pages/main/sections/tech';
import { ProjectsSection } from '@/pages/main/sections/projects';
import { HistorySection } from '@/pages/main/sections/history';
import { AchievementsSection } from '@/pages/main/sections/achievements';
import { ContactSection } from '@/pages/main/sections/contact';
const HEADER_OFFSET = 96;
export const App = () => {
    const [currentView, setCurrentView] = useState('main');
    const [selectedProjectId, setSelectedProjectId] = useState('danggocho');
    const handleProjectClick = (projectId) => {
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
    if (currentView === 'project') {
        return (_jsxs("div", { className: "min-h-screen bg-bg text-text transition-colors duration-300", children: [_jsx(Header, { currentView: currentView, onNavigateHome: handleNavigateHome }), _jsx("main", { className: "min-h-[70vh]" })] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-bg text-text transition-colors duration-300", children: [_jsx(Header, { currentView: currentView, onNavigateHome: handleNavigateHome }), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(TechStackSection, {}), _jsx(ProjectsSection, { onProjectClick: handleProjectClick }), _jsx(HistorySection, {}), _jsx(AchievementsSection, {}), _jsx(ContactSection, {})] })] }));
};
