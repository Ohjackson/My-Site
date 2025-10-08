import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import ja from './locales/ja/common.json';
import ko from './locales/ko/common.json';
import { applyLanguageFont } from '@/shared/fonts/fontManager';
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources: {
        en: { translation: en },
        ja: { translation: ja },
        ko: { translation: ko }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja', 'ko'],
    defaultNS: 'translation',
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ['querystring', 'localStorage', 'navigator'],
        caches: ['localStorage']
    }
});
i18n.on('initialized', () => {
    applyLanguageFont(i18n.resolvedLanguage ?? 'en');
});
i18n.on('languageChanged', (lng) => {
    applyLanguageFont(lng ?? 'en');
});
export default i18n;
