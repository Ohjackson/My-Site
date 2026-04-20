import { ImageWithFallback } from '@/shared/components/image';

type LocalizedText = {
  ko: string;
  en: string;
  ja: string;
};

interface ArchitectureData {
  architectureFlow?: {
    ko: string[];
    en: string[];
    ja: string[];
  };
  architectureImage?: string;
  architectureImageAlt?: LocalizedText;
  architectureNotes?: LocalizedText;
  stackAndArchitecture?: {
    architectureImage?: string;
    architectureImageAlt?: LocalizedText;
    architectureNotes?: LocalizedText;
  };
}

interface ArchitectureSectionProps {
  data: ArchitectureData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function ArchitectureSection({ data, language, backgroundColor }: ArchitectureSectionProps) {
  const steps = data.architectureFlow?.[language];
  const architectureImage = data.architectureImage ?? data.stackAndArchitecture?.architectureImage;
  const architectureImageAlt =
    data.architectureImageAlt?.[language] ?? data.stackAndArchitecture?.architectureImageAlt?.[language];
  const notes = data.architectureNotes?.[language] ?? data.stackAndArchitecture?.architectureNotes?.[language];
  const hasArchitectureContent = Boolean(architectureImage || steps?.length || notes?.trim());
  if (!hasArchitectureContent) return null;

  const content = {
    ko: { title: 'Architecture' },
    en: { title: 'Architecture' },
    ja: { title: 'Architecture' }
  };

  const noteLines = notes
    ?.split('\n')
    .map((line) => line.trim())
    .filter(Boolean) ?? [];

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>

        {architectureImage && (
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            <ImageWithFallback
              src={architectureImage}
              alt={architectureImageAlt ?? `${content[language].title} diagram`}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {noteLines.length > 0 && (
          <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
            <div className="space-y-2 text-text/80 leading-relaxed">
              {noteLines.map((line, index) => {
                if (line.startsWith('-')) {
                  return (
                    <div key={index} className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-text/60" />
                      <span>{line.substring(1).trim()}</span>
                    </div>
                  );
                }

                return <p key={index}>{line}</p>;
              })}
            </div>
          </div>
        )}

        {steps?.length ? (
          <ol className="mt-6 space-y-3">
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
        ) : null}
      </div>
    </section>
  );
}
