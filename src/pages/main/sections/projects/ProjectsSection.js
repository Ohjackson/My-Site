import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProjectCard } from './components/ProjectCard';
import { useProjectsContent } from './hooks/useProjectsContent';
export const ProjectsSection = ({ onProjectClick }) => {
    const { content, projects } = useProjectsContent();
    return (_jsx("section", { id: "projects", className: "bg-surface py-32 px-8 text-text", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-24 text-center", children: [_jsx("h2", { className: "text-5xl tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: content.title }), _jsx("div", { className: "mt-6 h-px w-16 bg-text mx-auto" })] }), _jsx("div", { className: "space-y-20", children: projects.map((project) => (_jsx(ProjectCard, { project: project, labels: content.labels, viewLabel: content.viewDetails, onSelect: onProjectClick }, project.id))) })] }) }));
};
