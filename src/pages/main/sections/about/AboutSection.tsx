import { useTranslation } from 'react-i18next';
import profileImage from '@/shared/photos/IMG_0586.jpg';
import { ImageWithFallback } from '@/shared/components/image';
import { SectionHeading } from '@/shared/components/section-heading';

export const AboutSection = () => {
  const { t } = useTranslation();
  const paragraphs = t('sections.about.paragraphs', { returnObjects: true }) as string[];
  const actions = t('sections.about.actions', { returnObjects: true }) as Record<string, string>;

  return (
    <section id="about" className="bg-surface py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tKey="sections.about.title">
          <div className="mt-6 h-px w-16 bg-text mx-auto" />
        </SectionHeading>

        <div className="grid gap-16 md:grid-cols-[0.45fr,0.55fr] md:items-start">
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

          <div className="space-y-8 text-lg leading-relaxed text-text/90">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-border pb-1 text-link transition hover:border-linkHover hover:text-linkHover"
              >
                {actions.github}
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border-b border-border pb-1 text-link transition hover:border-linkHover hover:text-linkHover"
              >
                {actions.resume}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
