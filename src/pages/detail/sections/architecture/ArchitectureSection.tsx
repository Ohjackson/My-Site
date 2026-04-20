interface ArchitectureData {
  architectureFlow?: {
    ko: string[];
    en: string[];
    ja: string[];
  };
}

interface ArchitectureSectionProps {
  data: ArchitectureData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ArchitectureSection({ data, language, backgroundColor }: ArchitectureSectionProps) {
  const steps = data.architectureFlow?.[language];
  if (!steps?.length) return null;

  const content = {
    ko: { title: 'Architecture' },
    en: { title: 'Architecture' },
    ja: { title: 'Architecture' }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <ol className="space-y-3">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-4"
            >
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                {idx + 1}
              </div>
              <div className="text-text/90 leading-relaxed">{step}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
