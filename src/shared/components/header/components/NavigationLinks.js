import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '@/shared/config/links';
export const NavigationLinks = () => {
    const { t } = useTranslation();
    return (_jsx("nav", { className: "hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex", children: NAV_LINKS.map((link) => (_jsx("a", { href: link.href, className: "transition hover:text-blue-600 dark:hover:text-blue-400", children: t(link.labelKey) }, link.id))) }));
};
