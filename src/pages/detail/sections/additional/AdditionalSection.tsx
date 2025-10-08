interface AdditionalData {
  blog?: string | { ko: string; en: string; ja: string };
  [key: string]: string | { ko: string; en: string; ja: string } | undefined;
}

interface AdditionalSectionProps {
  data: AdditionalData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function AdditionalSection({ data, language, backgroundColor }: AdditionalSectionProps) {
  if (!data) return null;

  const content = {
    ko: { title: "추가 링크" },
    en: { title: "Additional Links" },
    ja: { title: "追加リンク" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => {
            if (!value) return null;
            const displayValue = typeof value === 'string' ? value : value?.[language] || '';
            return (
              <div key={key} className="flex items-center gap-4">
                <span className="font-semibold capitalize">{key}:</span>
                <a
                  href={displayValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-linkHover underline"
                >
                  {displayValue}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}