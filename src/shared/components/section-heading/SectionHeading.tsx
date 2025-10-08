import { PropsWithChildren } from 'react';

interface SectionHeadingProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ title, subtitle, align = 'center', children }: SectionHeadingProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-20 ${alignmentClass}`}>
      <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  );
};
