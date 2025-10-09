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
  lessonsLearned?: {
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

  const content = {
    ko: { 
      title: "결과 & 배운 점",
      metrics: "측정 기준",
      achievements: "성과",
      learnings: "배운 점",
      nextSteps: "다음 단계"
    },
    en: { 
      title: "Results & Learnings",
      metrics: "Metrics",
      achievements: "Achievements",
      learnings: "Learnings",
      nextSteps: "Next Steps"
    },
    ja: { 
      title: "結果と学び",
      metrics: "測定基準",
      achievements: "成果",
      learnings: "学び",
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
              <div className="space-y-2">
                {data.metrics[language].map((metric, idx) => (
                  <div key={idx} className="text-muted">
                    {metric.split('\n').map((line, lineIdx) => {
                      const trimmedLine = line.trim();
                      if (trimmedLine.startsWith('-')) {
                        return (
                          <div key={lineIdx} className="flex items-start mb-2">
                            <span className="w-2 h-2 bg-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{trimmedLine.substring(1).trim()}</span>
                          </div>
                        );
                      }
                      return (
                        <p key={lineIdx} className="mb-2">
                          {trimmedLine}
                        </p>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {data.achievements && data.achievements[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].achievements}</h3>
              <div className="text-muted">
                {data.achievements[language].split('\n').map((line, index) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith('-')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="w-2 h-2 bg-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{trimmedLine.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="mb-2">
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {data.lessonsLearned && data.lessonsLearned[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].learnings}</h3>
              <div className="text-muted">
                {data.lessonsLearned[language].split('\n').map((line, index) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith('-')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="w-2 h-2 bg-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{trimmedLine.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="mb-2">
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {data.nextSteps && data.nextSteps[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].nextSteps}</h3>
              <div className="text-muted">
                {data.nextSteps[language].split('\n').map((line, index) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith('-')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="w-2 h-2 bg-muted rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{trimmedLine.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="mb-2">
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}