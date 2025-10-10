interface TechStackData {
  techStack: {
    frontend?: string;
    backend?: string;
    database?: string;
    AI?: string;
    AITraining?: string;
    devops?: string;
    infra?: string;
    loggingMonitoring?: string;
    Tools?: string;
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
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      AI: "AI",
      AITraining: "AI Training",
      devops: "DevOps",
      infra: "Infrastructure",
      loggingMonitoring: "Logging & Monitoring",
      Tools: "Tools"
    },
    en: { 
      title: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      AI: "AI",
      AITraining: "AI Training",
      devops: "DevOps",
      infra: "Infrastructure",
      loggingMonitoring: "Logging & Monitoring",
      Tools: "Tools"
    },
    ja: { 
      title: "技術スタック",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      AI: "AI",
      AITraining: "AI Training",
      devops: "DevOps",
      infra: "Infrastructure",
      loggingMonitoring: "Logging & Monitoring",
      Tools: "Tools"
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
          {data.techStack?.database && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].database}</h3>
              <p className="text-muted">{data.techStack.database}</p>
            </div>
          )}
          {data.techStack?.AI && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].AI}</h3>
              <p className="text-muted">{data.techStack.AI}</p>
            </div>
          )}
          {data.techStack?.AITraining && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].AITraining}</h3>
              <p className="text-muted">{data.techStack.AITraining}</p>
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
          {data.techStack?.loggingMonitoring && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].loggingMonitoring}</h3>
              <p className="text-muted">{data.techStack.loggingMonitoring}</p>
            </div>
          )}
          {data.techStack?.Tools && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].Tools}</h3>
              <p className="text-muted">{data.techStack.Tools}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}