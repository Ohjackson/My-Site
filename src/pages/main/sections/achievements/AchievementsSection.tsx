import { useTranslation } from 'react-i18next';

import { AchievementList } from './components/AchievementList';

export const AchievementsSection = () => {
  const { t } = useTranslation();
  const achievements = t('sections.achievements.achievements', { returnObjects: true }) as string[];
  const education = t('sections.achievements.education', { returnObjects: true }) as string[];

  return (
    <section id="achievements" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <h2 className="text-5xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('sections.achievements.title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <AchievementList title={t('sections.achievements.achievementsTitle')} items={achievements} />
          <AchievementList title={t('sections.achievements.educationTitle')} items={education} />
        </div>
      </div>
    </section>
  );
};
