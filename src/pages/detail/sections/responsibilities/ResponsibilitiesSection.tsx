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
}

export function ResponsibilitiesSection({ data, language }: ResponsibilitiesSectionProps) {
  if (!data?.responsibilities) return null;

  const content = {
    ko: {
      title: "주요 역할"
    },
    en: {
      title: "Key Responsibilities"
    },
    ja: {
      title: "主要な役割"
    }
  };

  return (
    <section className="py-20 px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">{content[language].title}</h2>
        
        <div className="space-y-4">
          {data.responsibilities[language].map((responsibility, index) => (
            <div key={index} className="flex gap-3 p-4 rounded-lg bg-surface/50">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-text/90">{responsibility}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}