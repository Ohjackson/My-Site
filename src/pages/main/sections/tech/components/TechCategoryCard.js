import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TechCategoryCard = ({ category, label }) => {
    return (_jsxs("div", { className: "space-y-4 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/70", children: [_jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-blue-500/80", children: label }), _jsx("div", { className: "flex flex-wrap gap-2", children: category.badges.map((badge, index) => (_jsx("img", { src: badge, alt: "tech badge", className: "h-7", loading: "lazy" }, index))) })] }));
};
