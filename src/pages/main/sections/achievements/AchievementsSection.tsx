import { useTranslation } from 'react-i18next';
import { AchievementList } from './components/AchievementList';
import { achievementsData } from './data/achievementsData';

export const AchievementsSection = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const data = achievementsData[currentLanguage] || achievementsData.ko;
  const achievements = data.achievements;
  const education = data.education;

  return (
    <section id="achievements" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            {data.title}
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <AchievementList title={data.achievementsTitle} items={achievements} />
          <AchievementList title={data.educationTitle} items={education} />
        </div>
      </div>
    </section>
  );
};
