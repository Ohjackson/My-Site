const env = import.meta.env;

const fallbackOwner = 'Jack Lee';
const fallbackEmail = 'jack@example.com';

export const SITE_OWNER = env.VITE_SITE_OWNER ?? fallbackOwner;
export const CONTACT_EMAIL = env.VITE_CONTACT_EMAIL ?? fallbackEmail;
