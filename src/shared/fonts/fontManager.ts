const setLangAttribute = (language: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('lang', language);
};

export const applyLanguageFont = (language: string) => {
  const normalized = language.split('-')[0];
  setLangAttribute(normalized);
  
  // 언어별 폰트 적용
  if (typeof document === 'undefined') {
    return;
  }
  
  switch (normalized) {
    case 'ko':
      document.body.style.fontFamily = "'Gowun Dodum', 'Malgun Gothic', '맑은 고딕', serif";
      break;
    case 'ja':
      document.body.style.fontFamily = "'Klee One', 'Hiragino Sans', 'ヒラギノ角ゴシック', serif";
      break;
    case 'en':
    default:
      document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      break;
  }
};
