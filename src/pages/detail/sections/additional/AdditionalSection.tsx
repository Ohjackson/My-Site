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
    ko: { title: "추가 링크", open: "열기" },
    en: { title: "Additional Links", open: "Open" },
    ja: { title: "追加リンク", open: "開く" }
  };

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  };

  const toDisplayLabel = (key: string) =>
    key
      .replace(/[_-]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

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
            const isUrl = displayValue.startsWith('https://') || displayValue.startsWith('http://');
            
            return (
              <div key={key}>
                {isUrl ? (
                  <a
                    href={displayValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-400/80 hover:shadow-[0_10px_24px_rgba(37,99,235,0.14)]"
                  >
                    <div>
                      <div className="font-semibold text-text">{toDisplayLabel(key)}</div>
                      <div className="text-sm text-muted">{getHostname(displayValue)}</div>
                    </div>
                    <div className="text-sm font-medium text-link group-hover:text-linkHover">
                      {content[language].open}
                    </div>
                  </a>
                ) : (
                  <div className="rounded-2xl border border-border bg-surface p-4">
                    <div className="font-semibold text-text">{toDisplayLabel(key)}</div>
                    <div className="text-sm text-muted mt-1">{displayValue}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
