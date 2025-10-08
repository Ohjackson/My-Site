import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/features/theme/theme.store';
import { SITE_OWNER } from '@/shared/config/site';
import { Button } from '@/shared/components/button';
import { ArrowRightIcon, GlobeIcon, MoonIcon } from '@/shared/components/icons';
const LANG_OPTIONS = [
    { code: 'ko', short: 'KR', labelKey: 'language.korean' },
    { code: 'en', short: 'EN', labelKey: 'language.english' },
    { code: 'ja', short: 'JP', labelKey: 'language.japanese' }
];
export const Header = ({ currentView, onNavigateHome }) => {
    const { t, i18n } = useTranslation();
    const { mode, toggle } = useThemeStore();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const onClick = (event) => {
            if (!menuRef.current) {
                return;
            }
            if (!menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);
    const handleLanguageChange = (code) => {
        void i18n.changeLanguage(code);
        setMenuOpen(false);
    };
    const shouldShowBack = currentView === 'project';
    const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en';
    const active = LANG_OPTIONS.find((lang) => lang.code === currentLanguage) ?? LANG_OPTIONS[1];
    return (_jsx("header", { className: "fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur-md", children: _jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-8 py-6 text-text", children: [_jsx("div", { className: "text-sm font-medium tracking-[0.4em]", children: SITE_OWNER.toUpperCase() }), _jsxs("div", { className: "flex items-center gap-3", children: [shouldShowBack ? (_jsx(Button, { variant: "secondary", onClick: onNavigateHome, className: "h-9 px-3", children: t('header.backToHome') })) : null, _jsx(Button, { variant: "secondary", onClick: toggle, className: "h-9 px-3", icon: _jsx(MoonIcon, { className: "h-4 w-4" }), children: mode === 'dark' ? 'Light' : 'Dark' }), _jsxs("div", { className: "relative", ref: menuRef, children: [_jsxs("button", { type: "button", onClick: () => setMenuOpen((prev) => !prev), className: "flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-muted transition-colors hover:border-border hover:text-text", children: [_jsx(GlobeIcon, { className: "h-4 w-4" }), _jsx("span", { className: "tracking-wider", children: active.short }), _jsx(ArrowRightIcon, { className: "h-3 w-3 rotate-90 text-muted" })] }), menuOpen ? (_jsx("div", { className: "absolute right-0 mt-2 w-40 rounded-lg border border-border bg-surface py-2 text-text shadow-lg", children: LANG_OPTIONS.map((lang) => (_jsxs("button", { type: "button", onClick: () => handleLanguageChange(lang.code), className: "flex w-full items-center justify-between px-4 py-2 text-sm text-text/90 transition hover:bg-surface/80", children: [_jsx("span", { children: t(lang.labelKey) }), _jsx("span", { className: "text-xs text-muted", children: lang.short })] }, lang.code))) })) : null] })] })] }) }));
};
