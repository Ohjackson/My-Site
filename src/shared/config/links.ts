export interface NavLink {
  id: string;
  href: string;
  labelKey: `nav.${string}`;
}

export interface SocialLink {
  id: string;
  href: string;
  labelKey: `social.${string}`;
  target?: '_self' | '_blank';
  rel?: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'hero', href: '#hero', labelKey: 'nav.home' },
  { id: 'about', href: '#about', labelKey: 'nav.about' },
  { id: 'tech', href: '#tech', labelKey: 'nav.tech' },
  { id: 'projects', href: '#projects', labelKey: 'nav.projects' },
  { id: 'history', href: '#history', labelKey: 'nav.history' },
  { id: 'achievements', href: '#achievements', labelKey: 'nav.achievements' },
  { id: 'contact', href: '#contact', labelKey: 'nav.contact' }
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    href: 'https://github.com/jack',
    labelKey: 'social.github',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/jack',
    labelKey: 'social.linkedin',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    id: 'resume',
    href: '/resume.pdf',
    labelKey: 'social.resume',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
] as const;

export const getSocialLinkById = (id: SocialLink['id']) =>
  SOCIAL_LINKS.find((link) => link.id === id) ?? null;
