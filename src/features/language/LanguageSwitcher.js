import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TranslateOutlined from '@mui/icons-material/TranslateOutlined';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
const languages = [
    { code: 'en', labelKey: 'language.english' },
    { code: 'ko', labelKey: 'language.korean' },
    { code: 'ja', labelKey: 'language.japanese' }
];
export const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const handleChange = (event) => {
        const value = event.target.value;
        void i18n.changeLanguage(value);
    };
    return (_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [_jsx(TranslateOutlined, { fontSize: "small" }), _jsxs(FormControl, { size: "small", variant: "outlined", sx: { minWidth: 120 }, children: [_jsx(InputLabel, { id: "language-label", children: t('language.label') }), _jsx(Select, { labelId: "language-label", label: t('language.label'), value: i18n.resolvedLanguage ?? 'en', onChange: handleChange, children: languages.map((language) => (_jsx(MenuItem, { value: language.code, children: t(language.labelKey) }, language.code))) })] })] }));
};
