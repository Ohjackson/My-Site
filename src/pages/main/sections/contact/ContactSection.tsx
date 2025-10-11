import { useTranslation } from 'react-i18next';

import { CONTACT_EMAIL } from '@/shared/config/site';
import { SOCIAL_LINKS } from '@/shared/config/links';
import { ContactLink } from './components/ContactLink';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/shared/components/icons';
import { contactData } from './data/contactData';

export const ContactSection = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const data = contactData[currentLanguage] || contactData.ko;
  const emailLabel = data.emailCta;

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
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-text/80 md:text-lg">
            {data.thanks}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-text" />
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          {contactItems.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </div>
{/* 
        <div className="mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted/80">
          {data.description}
        </div> */}
      </div>
    </section>
  );
};
