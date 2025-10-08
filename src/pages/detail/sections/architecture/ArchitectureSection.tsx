interface ArchitectureData {
  components: string | { ko: string; en: string; ja: string };
  dataFlow: string | { ko: string; en: string; ja: string };
  deployment: string | { ko: string; en: string; ja: string };
  security: string | { ko: string; en: string; ja: string };
  network: string | { ko: string; en: string; ja: string };
}

interface ArchitectureSectionProps {
  data: ArchitectureData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ArchitectureSection({ data, language, backgroundColor }: ArchitectureSectionProps) {
  if (!data) return null;

  const content = {
    ko: { 
      title: "아키텍처",
      components: "컴포넌트",
      dataFlow: "데이터 플로우",
      deployment: "배포",
      security: "보안",
      network: "네트워크"
    },
    en: { 
      title: "Architecture",
      components: "Components",
      dataFlow: "Data Flow",
      deployment: "Deployment",
      security: "Security",
      network: "Network"
    },
    ja: { 
      title: "アーキテクチャ",
      components: "コンポーネント",
      dataFlow: "データフロー",
      deployment: "デプロイ",
      security: "セキュリティ",
      network: "ネットワーク"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          {data.components && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].components}</h3>
              <p className="text-muted">
                {typeof data.components === 'string' ? data.components : data.components[language]}
              </p>
            </div>
          )}
          {data.dataFlow && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].dataFlow}</h3>
              <p className="text-muted">
                {typeof data.dataFlow === 'string' ? data.dataFlow : data.dataFlow[language]}
              </p>
            </div>
          )}
          {data.deployment && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].deployment}</h3>
              <p className="text-muted">
                {typeof data.deployment === 'string' ? data.deployment : data.deployment[language]}
              </p>
            </div>
          )}
          {data.security && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].security}</h3>
              <p className="text-muted">
                {typeof data.security === 'string' ? data.security : data.security[language]}
              </p>
            </div>
          )}
          {data.network && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].network}</h3>
              <p className="text-muted">
                {typeof data.network === 'string' ? data.network : data.network[language]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}