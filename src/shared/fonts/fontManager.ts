const setLangAttribute = (language: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('lang', language);
};

export const applyLanguageFont = (language: string) => {
  const normalized = language.split('-')[0];
  setLangAttribute(normalized);
};
