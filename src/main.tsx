import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProviders } from '@/app/providers/AppProviders';
import { App } from '@/App';
import '@/index.css';
import '@/shared/i18n';
import { initializeTheme } from '@/features/theme/theme.store';
import { applyLanguageFont } from '@/shared/fonts/fontManager';

initializeTheme();

// 초기 언어 설정 시 폰트 적용
const initializeApp = async () => {
  const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
  await applyLanguageFont(savedLanguage);
};

initializeApp();

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
