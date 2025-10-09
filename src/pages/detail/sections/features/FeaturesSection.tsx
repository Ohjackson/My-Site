import { CheckCircle } from 'lucide-react';

interface FeaturesData {
  detail_features?: Array<{
    title: {
      ko: string;
      en: string;
      ja: string;
    };
    description: {
      ko: string;
      en: string;
      ja: string;
    };
    implemented: boolean;
  }>;
  features?: {
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
  if (!data?.detail_features && !data?.features) return null;

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
          {data.detail_features ? (
            data.detail_features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card text-card-foreground shadow p-6 h-24 flex items-center"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title[language]}</h3>
                    <p className="text-muted text-sm">{feature.description[language]}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            data.features?.[language]?.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card text-card-foreground shadow p-6 h-24 flex items-center"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature}</h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}