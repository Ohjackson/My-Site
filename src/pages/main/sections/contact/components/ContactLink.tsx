import type { ComponentType, SVGProps } from 'react';

interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const ContactLink = ({ href, label, value, icon: Icon }: ContactLinkProps) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="group text-center"
  >
    <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border bg-surface p-4 transition-colors group-hover:bg-primary-500">
      <Icon className="h-6 w-6 text-text/80 transition-colors group-hover:text-white" />
    </div>
    <div className="text-xs uppercase tracking-widest text-muted">{label}</div>
    <div className="mt-2 text-sm text-link transition-colors group-hover:text-linkHover">{value}</div>
  </a>
);
