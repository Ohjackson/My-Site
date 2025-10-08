import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CONTACT_EMAIL } from '@/shared/config/site';
export const HeroActions = ({ primaryLabel, secondaryLabel }) => {
    return (_jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [_jsx("a", { href: "#projects", className: "inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700", children: primaryLabel }), _jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-100", children: secondaryLabel })] }));
};
