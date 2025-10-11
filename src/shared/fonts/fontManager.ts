const setLangAttribute = (language: string) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.setAttribute('lang', language);
};

// 폰트 로딩 상태 확인
const checkFontLoaded = (fontFamily: string): Promise<boolean> => {
  if (typeof document === 'undefined') {
    return Promise.resolve(true);
  }

  return document.fonts.check(`16px "${fontFamily}"`);
};

// 폰트가 로드될 때까지 기다림
const waitForFont = (fontFamily: string, timeout = 3000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof document === 'undefined') {
      resolve(true);
      return;
    }

    const checkFont = () => {
      if (document.fonts.check(`16px "${fontFamily}"`)) {
        resolve(true);
        return;
      }
      
      // 폰트 로드 이벤트 리스너
      document.fonts.addEventListener('loadingdone', () => {
        if (document.fonts.check(`16px "${fontFamily}"`)) {
          resolve(true);
        }
      });
    };

    checkFont();
    
    // 타임아웃 설정
    setTimeout(() => resolve(false), timeout);
  });
};

export const applyLanguageFont = async (language: string) => {
  const normalized = language.split('-')[0];
  setLangAttribute(normalized);
  
  if (typeof document === 'undefined') {
    return;
  }
  
  let fontFamily = '';
  let fontToWait = '';
  
  switch (normalized) {
    case 'ko':
      fontFamily = "'Gowun Dodum', 'Malgun Gothic', '맑은 고딕', serif";
      fontToWait = 'Gowun Dodum';
      break;
    case 'ja':
      fontFamily = "'Klee One', 'Hiragino Sans', 'ヒラギノ角ゴシック', serif";
      fontToWait = 'Klee One';
      break;
    case 'en':
    default:
      fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      break;
  }

  // 시스템 폰트가 아닌 경우에만 폰트 로딩 대기
  if (fontToWait) {
    try {
      await waitForFont(fontToWait, 1000); // 1초 타임아웃
    } catch (error) {
      console.warn(`Font ${fontToWait} loading timeout`);
    }
  }
  
  document.body.style.fontFamily = fontFamily;
};
