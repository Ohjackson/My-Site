import type { HTMLAttributes } from 'react';

const cx = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ');

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx('rounded-2xl border border-border bg-surface p-6 text-text shadow-sm', className)}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cx('mb-4 flex flex-col gap-2', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cx("text-xl font-semibold text-text", className)} {...props} />
);

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cx('text-sm text-muted', className)} {...props} />
);

export const CardFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cx('mt-6 flex items-center gap-4 text-link hover:text-linkHover', className)} {...props} />
);
