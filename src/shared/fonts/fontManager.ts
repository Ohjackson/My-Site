const FONT_STACKS: Record<string, string> = {
  en: "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  ko: "'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
  ja: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif"
};

const DEFAULT_FONT = FONT_STACKS.en;

const setCssVariable = (font: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.style.setProperty('--app-font-family', font);
};

const setLangAttribute = (language: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('lang', language);
};

export const applyLanguageFont = (language: string) => {
  const normalized = language.split('-')[0];
  const font = FONT_STACKS[normalized] ?? DEFAULT_FONT;

  setCssVariable(font);
  setLangAttribute(normalized);
};

export const getFontStack = (language: string) => {
  const normalized = language.split('-')[0];
  return FONT_STACKS[normalized] ?? DEFAULT_FONT;
};

export const supportedFonts = FONT_STACKS;
