interface OverviewData {
  purpose: {
    ko: string;
    en: string;
    ja: string;
  };
  target: {
    ko: string;
    en: string;
    ja: string;
  };
  value: {
    ko: string;
    en: string;
    ja: string;
  };
}

interface OverviewSectionProps {
  data: OverviewData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function OverviewSection({ data, language, backgroundColor }: OverviewSectionProps) {
  if (!data) return null;

  const content = {
    ko: { title: "개요" },
    en: { title: "Overview" },
    ja: { title: "概要" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">목적</h3>
              <p className="text-muted leading-relaxed">{data.purpose[language]}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">타겟</h3>
              <p className="text-muted leading-relaxed">{data.target[language]}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">가치</h3>
              <p className="text-muted leading-relaxed">{data.value[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}