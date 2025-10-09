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
    ko: { title: "내가 담당한 것" },
    en: { title: "My Responsibilities" },
    ja: { title: "私が担当したこと" }
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
                <h3 className="font-bold text-lg text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}