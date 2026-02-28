interface DataModelGroup {
  title: string;
  items: string[];
}

interface DataModelData {
  dataModelPoints?: {
    ko: DataModelGroup[];
    en: DataModelGroup[];
    ja: DataModelGroup[];
  };
}

interface DataModelSectionProps {
  data: DataModelData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function DataModelSection({ data, language, backgroundColor }: DataModelSectionProps) {
  const groups = data.dataModelPoints?.[language];
  if (!groups?.length) return null;

  const content = {
    ko: { title: '기술적 포인트' },
    en: { title: 'Technical Highlights' },
    ja: { title: '技術的ポイント' }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="space-y-4">
          {groups.map((group, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-lg text-text mb-3">{group.title}</h3>
              <div className="space-y-2 text-text/80 leading-relaxed">
                {group.items.map((line, lineIdx) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('-')) {
                    return (
                      <div key={lineIdx} className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-text/60" />
                        <span>{trimmed.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return <p key={lineIdx}>{trimmed}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
