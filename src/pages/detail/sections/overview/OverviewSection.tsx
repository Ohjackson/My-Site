interface OverviewData {
  overviewStory: {
    ko: string;
    en: string;
    ja: string;
  };
}

interface OverviewSectionProps {
  data: OverviewData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function OverviewSection({ data, language, backgroundColor }: OverviewSectionProps) {
  if (!data) return null;

  const content = {
    ko: { title: "스토리" },
    en: { title: "Story" },
    ja: { title: "ストーリー" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {data.overviewStory[language].split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.overviewStory[language].split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}