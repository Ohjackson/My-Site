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
  if (!data?.responsibilities) return null;

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
          {data.responsibilities[language].map((responsibility, idx) => (
            <div key={idx}>
              <p className="text-muted">{responsibility}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}