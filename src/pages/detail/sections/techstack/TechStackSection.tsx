interface TechStackData {
  techStack: {
    frontend?: string;
    backend?: string;
    ai_ml?: string;
    devops?: string;
    database?: string;
    infra?: string;
  };
}

interface TechStackSectionProps {
  data: TechStackData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function TechStackSection({ data, language, backgroundColor }: TechStackSectionProps) {
  if (!data) return null;

  const content = {
    ko: { 
      title: "기술 스택",
      frontend: "프론트엔드",
      backend: "백엔드",
      ai_ml: "AI/ML",
      database: "데이터베이스",
      devops: "DevOps",
      infra: "인프라"
    },
    en: { 
      title: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      ai_ml: "AI/ML",
      database: "Database",
      devops: "DevOps",
      infra: "Infrastructure"
    },
    ja: { 
      title: "技術スタック",
      frontend: "フロントエンド",
      backend: "バックエンド",
      ai_ml: "AI/ML",
      database: "データベース",
      devops: "DevOps",
      infra: "インフラ"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          {data.techStack?.frontend && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].frontend}</h3>
              <p className="text-muted">{data.techStack.frontend}</p>
            </div>
          )}
          {data.techStack?.backend && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].backend}</h3>
              <p className="text-muted">{data.techStack.backend}</p>
            </div>
          )}
          {data.techStack?.ai_ml && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].ai_ml}</h3>
              <p className="text-muted">{data.techStack.ai_ml}</p>
            </div>
          )}
          {data.techStack?.database && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].database}</h3>
              <p className="text-muted">{data.techStack.database}</p>
            </div>
          )}
          {data.techStack?.devops && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].devops}</h3>
              <p className="text-muted">{data.techStack.devops}</p>
            </div>
          )}
          {data.techStack?.infra && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].infra}</h3>
              <p className="text-muted">{data.techStack.infra}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}