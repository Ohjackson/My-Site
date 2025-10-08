import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { HistoryItem } from './components/HistoryItem';
export const HistorySection = () => {
    const { t } = useTranslation();
    const items = t('sections.history.items', { returnObjects: true });
    return (_jsx("section", { id: "history", className: "bg-bg py-32 px-8 text-text", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-24 text-center", children: [_jsx("h2", { className: "text-5xl tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: t('sections.history.title') }), _jsx("div", { className: "mt-6 h-px w-16 bg-text mx-auto" })] }), _jsx("div", { className: "mx-auto max-w-3xl", children: items.map((item, index) => (_jsx(HistoryItem, { ...item }, index))) })] }) }));
};
