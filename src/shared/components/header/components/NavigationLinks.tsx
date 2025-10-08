import { useTranslation } from 'react-i18next';

import { NAV_LINKS } from '@/shared/config/links';

export const NavigationLinks = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="transition hover:text-blue-600 dark:hover:text-blue-400"
        >
          {t(link.labelKey)}
        </a>
      ))}
    </nav>
  );
};
