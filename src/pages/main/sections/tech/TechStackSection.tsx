import { useTranslation } from 'react-i18next';

import { TECH_CATEGORIES } from './data/categories';

export const TechStackSection = () => {
  const { t } = useTranslation();
  const labels = t('sections.tech.categoryLabels', { returnObjects: true }) as Record<string, string>;

  return (
    <section id="tech" className="bg-bg py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <h2 className="text-5xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('sections.tech.title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="space-y-4 rounded-2xl border border-border bg-surface/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                {labels[category.id] ?? category.id}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.badges.map((badge, idx) => (
                  <img key={idx} src={badge} alt="tech badge" className="h-7" loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
