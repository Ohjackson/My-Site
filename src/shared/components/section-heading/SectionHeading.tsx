import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

interface SectionHeadingProps extends PropsWithChildren {
  tKey: string;
  subtitleTKey?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ tKey, subtitleTKey, align = 'center', children }: SectionHeadingProps) => {
  const { t } = useTranslation();
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-20 ${alignmentClass}`}>
      <h2 className="text-4xl tracking-tight md:text-5xl">
        {t(tKey as never)}
      </h2>
      {subtitleTKey ? (
        <p className="mt-4 text-base leading-7 text-text/80 md:text-lg">
          {t(subtitleTKey as never)}
        </p>
      ) : null}
      {children}
    </div>
  );
};
