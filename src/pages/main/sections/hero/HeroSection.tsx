import { useTranslation } from 'react-i18next';

import { ChevronDownIcon } from '@/shared/components/icons';

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center bg-bg px-8 text-text">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
          {t('sections.hero.headline')}
        </h1>
      </div>

      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-16 flex items-center justify-center p-2 text-muted/80 transition-colors hover:text-text"
        aria-label={t('sections.hero.scrollHint')}
      >
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </section>
  );
};
