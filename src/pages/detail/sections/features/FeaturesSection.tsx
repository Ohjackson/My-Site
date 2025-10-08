interface FeaturesData {
  features: {
    ko: string[];
    en: string[];
    ja: string[];
  };
}

interface FeaturesSectionProps {
  data: FeaturesData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function FeaturesSection({ data, language, backgroundColor }: FeaturesSectionProps) {
  if (!data?.features) return null;

  const content = {
    ko: { 
      title: "주요 기능"
    },
    en: { 
      title: "Key Features"
    },
    ja: { 
      title: "主要機能"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-4">
          {data.features[language].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-bg/50"
            >
              <span className="text-primary-500 font-bold mt-0.5 flex-shrink-0">•</span>
              <div>
                <p className="text-text/90">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}