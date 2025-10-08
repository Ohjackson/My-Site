interface DeploymentData {
  environment: string | { ko: string; en: string; ja: string };
  pipeline: string | { ko: string; en: string; ja: string };
  signing: string | { ko: string; en: string; ja: string };
  secrets: string | { ko: string; en: string; ja: string };
}

interface DeploymentSectionProps {
  data: DeploymentData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function DeploymentSection({ data, language, backgroundColor }: DeploymentSectionProps) {
  if (!data) return null;

  const content = {
    ko: { 
      title: "배포",
      environment: "환경",
      pipeline: "파이프라인",
      signing: "서명",
      secrets: "시크릿"
    },
    en: { 
      title: "Deployment",
      environment: "Environment",
      pipeline: "Pipeline",
      signing: "Signing",
      secrets: "Secrets"
    },
    ja: { 
      title: "デプロイ",
      environment: "環境",
      pipeline: "パイプライン",
      signing: "署名",
      secrets: "シークレット"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          {data.environment && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].environment}</h3>
              <p className="text-muted">
                {typeof data.environment === 'string' ? data.environment : data.environment[language]}
              </p>
            </div>
          )}
          {data.pipeline && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].pipeline}</h3>
              <p className="text-muted">
                {typeof data.pipeline === 'string' ? data.pipeline : data.pipeline[language]}
              </p>
            </div>
          )}
          {data.signing && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].signing}</h3>
              <p className="text-muted">
                {typeof data.signing === 'string' ? data.signing : data.signing[language]}
              </p>
            </div>
          )}
          {data.secrets && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].secrets}</h3>
              <p className="text-muted">
                {typeof data.secrets === 'string' ? data.secrets : data.secrets[language]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}