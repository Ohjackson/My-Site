import { useTranslation } from 'react-i18next';

import { CONTACT_EMAIL } from '@/shared/config/site';
import { SOCIAL_LINKS } from '@/shared/config/links';
import { ContactLink } from './components/ContactLink';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/shared/components/icons';
import { SectionHeading } from '@/shared/components/section-heading';

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

  return (
    <section id="contact" className="bg-bg py-32 px-8 text-text">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tKey="sections.contact.title" subtitleTKey="sections.contact.thanks">
          <div className="mx-auto mt-6 h-px w-16 bg-text" />
        </SectionHeading>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          {contactItems.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted/80">
          {t('sections.contact.description')}
        </div>
      </div>
    </section>
  );
};
