import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@/shared/components/section-heading';
import { HistoryItem } from './components/HistoryItem';

interface HistoryEntry {
  period: string;
  activity: string;
  description: string;
}

export const HistorySection = () => {
  const { t } = useTranslation();
  const items = t('sections.history.items', { returnObjects: true }) as HistoryEntry[];

  return (
    <section id="history" className="bg-bg py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tKey="sections.history.title">
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </SectionHeading>

        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <HistoryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
