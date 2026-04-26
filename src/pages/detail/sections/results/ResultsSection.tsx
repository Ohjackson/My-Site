interface ResultsData {
  metrics?: {
    ko: string[];
    en: string[];
    ja: string[];
  };
  achievements?: {
    ko: string;
    en: string;
    ja: string;
  };
  nextSteps?: {
    ko: string;
    en: string;
    ja: string;
  };
}

interface ResultsSectionProps {
  data: ResultsData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ResultsSection({ data, language, backgroundColor }: ResultsSectionProps) {
  if (!data) return null;

  const renderBulletList = (value: string | string[]) => {
    const lines = (Array.isArray(value) ? value : [value])
      .flatMap((item) => item.split('\n'))
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => (line.startsWith('-') ? line.substring(1).trim() : line));

    if (lines.length === 0) return null;

    return (
      <div className="space-y-2 text-muted">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start">
            <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-muted"></span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    );
  };

  const content = {
    ko: { 
      title: "결과",
      metrics: "측정 기준",
      achievements: "결과",
      nextSteps: "다음 단계"
    },
    en: { 
      title: "Results",
      metrics: "Metrics",
      achievements: "Results",
      nextSteps: "Next Steps"
    },
    ja: { 
      title: "結果",
      metrics: "測定基準",
      achievements: "結果",
      nextSteps: "次のステップ"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-8">
          {/* Metrics */}
          {data.metrics && data.metrics[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].metrics}</h3>
              {renderBulletList(data.metrics[language])}
            </div>
          )}

          {/* Achievements */}
          {((data.achievements && data.achievements[language]) || ((data as any).results?.achievements && (data as any).results.achievements[language])) && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].achievements}</h3>
              {renderBulletList(data.achievements?.[language] || (data as any).results?.achievements?.[language])}
            </div>
          )}

          {/* Next Steps */}
          {data.nextSteps && data.nextSteps[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].nextSteps}</h3>
              {renderBulletList(data.nextSteps[language])}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
