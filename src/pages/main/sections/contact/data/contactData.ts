export interface ContactData {
  title: string;
  thanks: string;
  description: string;
  emailCta: string;
  footer: string;
}

export const contactData: Record<string, ContactData> = {
  ko: {
    title: "Contact",
    thanks: "감사합니다",
    description: "사람을 중심으로 생각한 프로덕트를 함께 만들어보세요.",
    emailCta: "이메일 보내기",
    footer: "© 2025 JAEHYUN AHN"
  },
  en: {
    title: "Contact",
    thanks: "Thank you",
    description: "Let's build people-centered products together.",
    emailCta: "Send email",
    footer: "© 2025 JAEHYUN AHN"
  },
  ja: {
    title: "Contact",
    thanks: "ありがとうございます",
    description: "人を中心に考えたプロダクトを一緒に作りましょう。",
    emailCta: "メールを送る",
    footer: "© 2025 JAEHYUN AHN"
  }
};
