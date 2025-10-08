interface TechStackData {
  frontend: string | { ko: string; en: string; ja: string };
  ai: string | { ko: string; en: string; ja: string };
  data: string | { ko: string; en: string; ja: string };
  devops: string | { ko: string; en: string; ja: string };
  etc: string | { ko: string; en: string; ja: string };
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
      ai: "AI/ML",
      data: "데이터",
      devops: "DevOps",
      etc: "기타"
    },
    en: { 
      title: "Tech Stack",
      frontend: "Frontend",
      ai: "AI/ML",
      data: "Data",
      devops: "DevOps",
      etc: "Others"
    },
    ja: { 
      title: "技術スタック",
      frontend: "フロントエンド",
      ai: "AI/ML",
      data: "データ",
      devops: "DevOps",
      etc: "その他"
    }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-6">
          {data.frontend && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].frontend}</h3>
              <p className="text-muted">
                {typeof data.frontend === 'string' ? data.frontend : data.frontend[language]}
              </p>
            </div>
          )}
          {data.ai && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].ai}</h3>
              <p className="text-muted">
                {typeof data.ai === 'string' ? data.ai : data.ai[language]}
              </p>
            </div>
          )}
          {data.data && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].data}</h3>
              <p className="text-muted">
                {typeof data.data === 'string' ? data.data : data.data[language]}
              </p>
            </div>
          )}
          {data.devops && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].devops}</h3>
              <p className="text-muted">
                {typeof data.devops === 'string' ? data.devops : data.devops[language]}
              </p>
            </div>
          )}
          {data.etc && (
            <div>
              <h3 className="font-semibold mb-2">{content[language].etc}</h3>
              <p className="text-muted">
                {typeof data.etc === 'string' ? data.etc : data.etc[language]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}