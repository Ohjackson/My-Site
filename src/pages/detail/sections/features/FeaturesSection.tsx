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
}

export function FeaturesSection({ data, language }: FeaturesSectionProps) {
  if (!data?.features) return null;

  const content = {
    ko: {
      title: "핵심 기능"
    },
    en: {
      title: "Core Features"
    },
    ja: {
      title: "コア機能"
    }
  };

  return (
    <section className="py-20 px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">{content[language].title}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {data.features[language].map((feature, index) => (
            <div key={index} className="flex gap-3 p-4 rounded-lg bg-bg/50">
              <span className="text-primary-500 font-bold">—</span>
              <span className="text-text/90">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}