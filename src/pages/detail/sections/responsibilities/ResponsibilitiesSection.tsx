interface ResponsibilitiesData {
  responsibilities: {
    ko: string[];
    en: string[];
    ja: string[];
  };
}

interface ResponsibilitiesSectionProps {
  data: ResponsibilitiesData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ResponsibilitiesSection({ data, language, backgroundColor }: ResponsibilitiesSectionProps) {
  if (!data?.responsibilities || !data.responsibilities[language]) return null;

  const content = {
    ko: { title: "담당 요소" },
    en: { title: "My Responsibilities" },
    ja: { title: "担当したこと" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          {data.responsibilities[language].map((responsibility, idx) => {
            // ":" 기준으로 제목과 내용을 분리
            const parts = responsibility.split(':');
            const title = parts[0]?.trim();
            const content = parts[1]?.trim();
            
            return (
              <div key={idx} className="space-y-2">
                <h3 className="font-bold text-lg text-text">{title}</h3>
                {content && (
                  <div className="text-text/80 leading-relaxed">
                    {content.split('\n').map((line, lineIdx) => {
                      const trimmedLine = line.trim();
                      if (trimmedLine.startsWith('-')) {
                        return (
                          <div key={lineIdx} className="flex items-start mb-2">
                            <span className="w-2 h-2 bg-text/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{trimmedLine.substring(1).trim()}</span>
                          </div>
                        );
                      }
                      return (
                        <p key={lineIdx} className="mb-2">
                          {trimmedLine.split('\n').map((subLine, subIdx) => (
                            <span key={subIdx}>
                              {subLine}
                              {subIdx < trimmedLine.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}