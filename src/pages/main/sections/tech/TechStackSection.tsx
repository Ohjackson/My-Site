import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/shared/components/section-heading';
import { TECH_CATEGORIES } from './data/categories';

export const TechStackSection = () => {
  const { t } = useTranslation();
  const labels = t('sections.tech.categoryLabels', { returnObjects: true }) as Record<string, string>;

  return (
    <section id="tech" className="bg-bg py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Tech Stack
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="space-y-4 p-6"
            >
              <div className="text-1.5xl font-semibold uppercase tracking-widest text-muted">
                {category.id === 'mobile' ? 'Mobile' :
                 category.id === 'frontend' ? 'Frontend' :
                 category.id === 'backend' ? 'Backend' :
                 category.id === 'data' ? 'Data' :
                 category.id === 'infra' ? 'Infra' :
                 category.id === 'ai' ? 'AI' :
                 category.id === 'tools' ? 'Tools' :
                 category.id === 'design' ? 'Design' :
                 category.id === 'experienced' ? 'Experienced' : category.id}
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
