export const NAV_LINKS = [
    { id: 'hero', href: '#hero', labelKey: 'nav.home' },
    { id: 'about', href: '#about', labelKey: 'nav.about' },
    { id: 'tech', href: '#tech', labelKey: 'nav.tech' },
    { id: 'projects', href: '#projects', labelKey: 'nav.projects' },
    { id: 'history', href: '#history', labelKey: 'nav.history' },
    { id: 'achievements', href: '#achievements', labelKey: 'nav.achievements' },
    { id: 'contact', href: '#contact', labelKey: 'nav.contact' }
];
export const SOCIAL_LINKS = [
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
];
export const getSocialLinkById = (id) => SOCIAL_LINKS.find((link) => link.id === id) ?? null;
