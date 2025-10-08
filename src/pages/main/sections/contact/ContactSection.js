import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { CONTACT_EMAIL } from '@/shared/config/site';
import { SOCIAL_LINKS } from '@/shared/config/links';
import { ContactLink } from './components/ContactLink';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/shared/components/icons';
export const ContactSection = () => {
    const { t } = useTranslation();
    const emailLabel = t('sections.contact.emailCta');
    const contactItems = [
        {
            href: `mailto:${CONTACT_EMAIL}`,
            label: emailLabel,
            value: CONTACT_EMAIL,
            icon: MailIcon
        },
        ...SOCIAL_LINKS.filter((link) => link.id === 'github' || link.id === 'linkedin').map((link) => ({
            href: link.href,
            label: t(link.labelKey),
            value: link.href.replace(/^https?:\/\//, ''),
            icon: link.id === 'github' ? GithubIcon : LinkedinIcon
        }))
    ];
    return (_jsx("section", { id: "contact", className: "bg-bg py-32 px-8 text-text", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsx("h2", { className: "text-5xl tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: t('sections.contact.title') }), _jsx("div", { className: "mx-auto mt-6 h-px w-16 bg-text" }), _jsx("p", { className: "mt-8 text-xl text-muted italic", children: t('sections.contact.thanks') })] }), _jsx("div", { className: "mx-auto grid max-w-4xl gap-12 md:grid-cols-3", children: contactItems.map((item) => (_jsx(ContactLink, { ...item }, item.label))) }), _jsx("div", { className: "mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted/80", children: t('sections.contact.description') }), _jsx("div", { className: "mt-4 text-center text-xs text-muted", children: t('sections.contact.footer') })] }) }));
};
