import type { ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:pointer-events-none';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-surface text-text border border-border hover:bg-surface/80',
  destructive: 'bg-primary-700 text-white hover:bg-primary-800'
};

const cx = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ');

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive';
  fullWidth?: boolean;
  icon?: ReactNode;
}

export const Button = ({
  variant = 'primary',
  fullWidth = false,
  icon,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(baseStyles, variantStyles[variant], fullWidth && 'w-full', className)}
      {...props}
    >
      {icon ? <span aria-hidden className="inline-flex items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
};
