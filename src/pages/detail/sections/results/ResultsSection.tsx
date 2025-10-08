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
}

export function ResultsSection({ data, language }: ResultsSectionProps) {
  if (!data) return null;

  const content = {
    ko: {
      title: "프로젝트 결과",
      metrics: "주요 지표",
      challenge: "도전과 해결",
      problem: "문제",
      solution: "해결책",
      result: "결과"
    },
    en: {
      title: "Project Results",
      metrics: "Key Metrics",
      challenge: "Challenge & Solution",
      problem: "Problem",
      solution: "Solution",
      result: "Result"
    },
    ja: {
      title: "プロジェクト結果",
      metrics: "主要指標",
      challenge: "挑戦と解決",
      problem: "問題",
      solution: "解決策",
      result: "結果"
    }
  };

  return (
    <section className="py-20 px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">{content[language].title}</h2>
        
        <div className="space-y-12">
          {/* Metrics */}
          {data.metrics && (
            <div>
              <h3 className="text-xl font-semibold mb-6">{content[language].metrics}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {data.metrics[language].map((metric, index) => (
                  <div key={index} className="p-4 rounded-lg bg-bg/50 text-center">
                    <span className="text-text/90">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge */}
          {data.challenge && (
            <div>
              <h3 className="text-xl font-semibold mb-6">{content[language].challenge}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-bg/50">
                  <h4 className="font-semibold text-primary-500 mb-2">{content[language].problem}</h4>
                  <p className="text-text/90">{data.challenge.problem[language]}</p>
                </div>
                <div className="p-4 rounded-lg bg-bg/50">
                  <h4 className="font-semibold text-primary-500 mb-2">{content[language].solution}</h4>
                  <p className="text-text/90">{data.challenge.solution[language]}</p>
                </div>
                <div className="p-4 rounded-lg bg-bg/50">
                  <h4 className="font-semibold text-primary-500 mb-2">{content[language].result}</h4>
                  <p className="text-text/90">{data.challenge.result[language]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}