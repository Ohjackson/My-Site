import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@/shared/components/icons';
export const HeroSection = () => {
    const { t } = useTranslation();
    const scrollToNext = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    return (_jsxs("section", { id: "hero", className: "relative flex min-h-screen flex-col items-center justify-center bg-bg px-8 text-text", children: [_jsx("div", { className: "max-w-5xl text-center", children: _jsx("h1", { className: "text-4xl leading-tight tracking-tight text-text md:text-5xl lg:text-6xl", style: { fontFamily: "'Playfair Display', serif" }, children: t('sections.hero.headline') }) }), _jsx("button", { type: "button", onClick: scrollToNext, className: "absolute bottom-16 flex items-center justify-center p-2 text-muted/80 transition-colors hover:text-text", "aria-label": t('sections.hero.scrollHint'), children: _jsx(ChevronDownIcon, { className: "h-6 w-6" }) })] }));
};
