const setLangAttribute = (language: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('lang', language);
};

const normalizeLanguage = (language: string) => {
  const normalized = language.split('-')[0];
  return normalized === 'ko' || normalized === 'ja' || normalized === 'en' ? normalized : 'en';
};

export const applyLanguageFont = (language: string) => {
  const normalized = normalizeLanguage(language);
  setLangAttribute(normalized);

  if (typeof document !== 'undefined') {
    document.body?.style.removeProperty('font-family');
  }
};
