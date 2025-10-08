interface ServiceData {
  problem: string;
  target: string;
  value: string;
}

interface ServiceSectionProps {
  data: ServiceData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ServiceSection({ data, language, backgroundColor }: ServiceSectionProps) {
  if (!data) return null;

  const content = {
    ko: { 
      title: "서비스 개요",
      problem: "문제",
      target: "타겟",
      value: "가치"
    },
    en: { 
      title: "Service Overview",
      problem: "Problem",
      target: "Target",
      value: "Value"
    },
    ja: { 
      title: "サービス概要",
      problem: "問題",
      target: "ターゲット",
      value: "価値"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">{content[language].problem}</h3>
            <p className="text-muted">{data.problem}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].target}</h3>
            <p className="text-muted">{data.target}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].value}</h3>
            <p className="text-muted">{data.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}