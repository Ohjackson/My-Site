interface ArchitectureData {
  components: string;
  dataFlow: string;
  deployment: string;
  security: string;
  network: string;
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
          <div>
            <h3 className="font-semibold mb-2">{content[language].components}</h3>
            <p className="text-muted">{data.components}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].dataFlow}</h3>
            <p className="text-muted">{data.dataFlow}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].deployment}</h3>
            <p className="text-muted">{data.deployment}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].security}</h3>
            <p className="text-muted">{data.security}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].network}</h3>
            <p className="text-muted">{data.network}</p>
          </div>
        </div>
      </div>
    </section>
  );
}