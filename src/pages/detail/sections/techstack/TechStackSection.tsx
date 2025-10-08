interface TechStackData {
  frontend: string;
  ai: string;
  data: string;
  devops: string;
  etc: string;
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
          <div>
            <h3 className="font-semibold mb-2">{content[language].frontend}</h3>
            <p className="text-muted">{data.frontend}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].ai}</h3>
            <p className="text-muted">{data.ai}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].data}</h3>
            <p className="text-muted">{data.data}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].devops}</h3>
            <p className="text-muted">{data.devops}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{content[language].etc}</h3>
            <p className="text-muted">{data.etc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}