import { PreviewPhoto } from './PreviewPhoto';

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

  console.log('PreviewSection data:', data);
  console.log('PreviewSection screenshots:', data.screenshots);

  const content = {
    ko: { title: "미리보기" },
    en: { title: "Preview" },
    ja: { title: "プレビュー" }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        <div className="flex gap-6 justify-center">
          {data.screenshots.map((screenshot, idx) => {
            console.log(`Rendering screenshot ${idx + 1}:`, screenshot);
            
            return (
              <PreviewPhoto
                key={idx}
                src={screenshot}
                alt={`Screenshot ${idx + 1}`}
                onLoad={() => {
                  console.log(`Image loaded successfully: ${screenshot}`);
                }}
                onError={(e) => {
                  console.error(`Image failed to load: ${screenshot}`, e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            );
          })}
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