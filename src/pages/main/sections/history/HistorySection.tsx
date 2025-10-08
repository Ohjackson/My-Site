import { useTranslation } from 'react-i18next';
import { HistoryItem } from './components/HistoryItem';
import { historyData } from './data/historyData';

export const HistorySection = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const items = historyData[currentLanguage] || historyData.ko;

  return (
    <section id="history" className="bg-bg py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            History
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <HistoryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
