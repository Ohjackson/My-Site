import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeStore } from '@/features/theme/theme.store';
import { SITE_OWNER } from '@/shared/config/site';
import { Button } from '@/shared/components/button';
import {
  ArrowRightIcon,
  GlobeIcon,
  MoonIcon
} from '@/shared/components/icons';

type HeaderView = 'main' | 'project';

interface HeaderProps {
  currentView: HeaderView;
  onNavigateHome: () => void;
}

const LANG_OPTIONS = [
  { code: 'ko', short: 'KR', labelKey: 'language.korean' },
  { code: 'en', short: 'EN', labelKey: 'language.english' },
  { code: 'ja', short: 'JP', labelKey: 'language.japanese' }
] as const;

export const Header = ({ currentView, onNavigateHome }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const { mode, toggle } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const handleLanguageChange = (code: string) => {
    void i18n.changeLanguage(code);
    setMenuOpen(false);
  };

  const shouldShowBack = currentView === 'project';

  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en';
  const active = LANG_OPTIONS.find((lang) => lang.code === currentLanguage) ?? LANG_OPTIONS[1];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 text-text">
        <div className="text-sm font-medium tracking-[0.4em]">{SITE_OWNER.toUpperCase()}</div>

        <div className="flex items-center gap-3">
          {shouldShowBack ? (
            <Button variant="secondary" onClick={onNavigateHome} className="h-9 px-3">
              {t('header.backToHome')}
            </Button>
          ) : null}
          <Button
            variant="secondary"
            onClick={toggle}
            className="h-9 px-3"
            icon={<MoonIcon className="h-4 w-4" />}
          >
            {mode === 'dark' ? 'Light' : 'Dark'}
          </Button>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-muted transition-colors hover:border-border hover:text-text"
            >
              <GlobeIcon className="h-4 w-4" />
              <span className="tracking-wider">{active.short}</span>
              <ArrowRightIcon className="h-3 w-3 rotate-90 text-muted" />
            </button>

            {menuOpen ? (
              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-surface py-2 text-text shadow-lg">
                {LANG_OPTIONS.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    className="flex w-full items-center justify-between px-4 py-2 text-sm text-text/90 transition hover:bg-surface/80"
                  >
                    <span>{t(lang.labelKey)}</span>
                    <span className="text-xs text-muted">{lang.short}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
