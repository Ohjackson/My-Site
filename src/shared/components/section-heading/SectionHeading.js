import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SectionHeading = ({ title, subtitle, align = 'center', children }) => {
    const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
    return (_jsxs("div", { className: `mb-20 ${alignmentClass}`, children: [_jsx("h2", { className: "text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl", children: title }), subtitle ? (_jsx("p", { className: "mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg", children: subtitle })) : null, children] }));
};
