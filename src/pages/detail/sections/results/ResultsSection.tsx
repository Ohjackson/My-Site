interface ResultsData {
  metrics: {
    ko: string[];
    en: string[];
    ja: string[];
  };
  lessonsLearned: {
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
          {data.metrics && data.metrics[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].achievements}</h3>
              <div className="space-y-2">
                {data.metrics[language].map((metric, idx) => (
                  <p key={idx} className="text-muted">• {metric}</p>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {data.lessonsLearned && data.lessonsLearned[language] && (
            <div>
              <h3 className="font-semibold mb-3">{content[language].learnings}</h3>
              <p className="text-muted">{data.lessonsLearned[language]}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}