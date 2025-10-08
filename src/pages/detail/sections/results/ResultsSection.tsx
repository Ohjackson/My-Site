interface ResultsData {
  metrics: {
    ko: string[];
    en: string[];
    ja: string[];
  };
  challenge: {
    problem: {
      ko: string;
      en: string;
      ja: string;
    };
    solution: {
      ko: string;
      en: string;
      ja: string;
    };
    result: {
      ko: string;
      en: string;
      ja: string;
    };
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
      achievements: "결과",
      learnings: "배운 점",
      nextSteps: "다음 단계"
    },
    en: { 
      title: "Results & Learnings",
      achievements: "Results",
      learnings: "Learnings",
      nextSteps: "Next Steps"
    },
    ja: { 
      title: "結果と学び",
      achievements: "結果",
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
          {/* Metrics as Achievements */}
          {data.metrics && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].achievements}</h3>
              <div className="space-y-2">
                {data.metrics[language].map((metric, idx) => (
                  <p key={idx} className="text-muted">• {metric}</p>
                ))}
              </div>
            </div>
          )}

          {/* Challenge as Learnings */}
          {data.challenge && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].learnings}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">문제</h4>
                  <p className="text-muted">{data.challenge.problem[language]}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">해결책</h4>
                  <p className="text-muted">{data.challenge.solution[language]}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">결과</h4>
                  <p className="text-muted">{data.challenge.result[language]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}