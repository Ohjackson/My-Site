import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { TECH_CATEGORIES } from './data/categories';
export const TechStackSection = () => {
    const { t } = useTranslation();
    const labels = t('sections.tech.categoryLabels', { returnObjects: true });
    return (_jsx("section", { id: "tech", className: "bg-bg py-32 px-8 text-text", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-24 text-center", children: [_jsx("h2", { className: "text-5xl tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: t('sections.tech.title') }), _jsx("div", { className: "mt-6 h-px w-16 bg-text mx-auto" })] }), _jsx("div", { className: "grid gap-8 md:grid-cols-2", children: TECH_CATEGORIES.map((category) => (_jsxs("div", { className: "space-y-4 rounded-2xl border border-border bg-surface/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg", children: [_jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-muted", children: labels[category.id] ?? category.id }), _jsx("div", { className: "flex flex-wrap gap-2", children: category.badges.map((badge, idx) => (_jsx("img", { src: badge, alt: "tech badge", className: "h-7", loading: "lazy" }, idx))) })] }, category.id))) })] }) }));
};
