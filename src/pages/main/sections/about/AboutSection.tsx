import { useTranslation } from 'react-i18next';
import profileImage from '@/shared/photos/IMG_0586.jpg';
import { ImageWithFallback } from '@/shared/components/image';

export const AboutSection = () => {
  const { t } = useTranslation();
  const paragraphs = t('sections.about.paragraphs', { returnObjects: true }) as string[];

  return (
    <section id="about" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            {t('sections.about.title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </div>

        <div className="grid gap-16 md:grid-cols-[0.45fr,0.55fr] md:items-center">
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-lg">
              <ImageWithFallback
                src={profileImage}
                alt={t('sections.about.imageAlt')}
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-8 text-2xl leading-relaxed text-text/90">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
