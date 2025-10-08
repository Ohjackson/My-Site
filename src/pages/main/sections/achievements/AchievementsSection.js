import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { AchievementList } from './components/AchievementList';
export const AchievementsSection = () => {
    const { t } = useTranslation();
    const achievements = t('sections.achievements.achievements', { returnObjects: true });
    const education = t('sections.achievements.education', { returnObjects: true });
    return (_jsx("section", { id: "achievements", className: "bg-surface py-32 px-8 text-text", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-24 text-center", children: [_jsx("h2", { className: "text-5xl tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: t('sections.achievements.title') }), _jsx("div", { className: "mt-6 h-px w-16 bg-text mx-auto" })] }), _jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [_jsx(AchievementList, { title: t('sections.achievements.achievementsTitle'), items: achievements }), _jsx(AchievementList, { title: t('sections.achievements.educationTitle'), items: education })] })] }) }));
};
