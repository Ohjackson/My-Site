interface PreviewData {
  screenshots: string[];
  description: string | { ko: string; en: string; ja: string };
}

interface PreviewSectionProps {
  data: PreviewData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function PreviewSection({ data, language, backgroundColor }: PreviewSectionProps) {
  if (!data) return null;

  const content = {
    ko: { title: "미리보기" },
    en: { title: "Preview" },
    ja: { title: "プレビュー" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.screenshots.map((screenshot, idx) => (
            <div key={idx} className="aspect-[9/16] rounded-lg overflow-hidden bg-bg/50">
              <img 
                src={screenshot} 
                alt={`Screenshot ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        {data.description && (
          <p className="text-center text-muted mt-4">
            {typeof data.description === 'string' ? data.description : data.description[language]}
          </p>
        )}
      </div>
    </section>
  );
}