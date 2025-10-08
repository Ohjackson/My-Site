export interface AboutData {
  title: string;
  paragraphs: string[];
  imageAlt: string;
}

export const aboutData: Record<string, AboutData> = {
  ko: {
    title: "About",
    paragraphs: [
      "안녕하세요! 저는 사용자 중심의 디지털 경험을 만드는 개발자 안재현입니다.",
      "기술과 사람 사이의 다리 역할을 하며, 복잡한 문제를 단순하고 아름다운 솔루션으로 풀어내는 것을 좋아합니다.",
      "현재는 AI와 모바일 기술에 집중하고 있으며, 사용자의 일상을 더 편리하게 만드는 서비스를 개발하고 있습니다."
    ],
    imageAlt: "안재현 프로필 사진"
  },
  en: {
    title: "About",
    paragraphs: [
      "Hello! I'm Jaehyun Ahn, a developer who creates user-centered digital experiences.",
      "I enjoy bridging the gap between technology and people, solving complex problems with simple and beautiful solutions.",
      "Currently, I'm focused on AI and mobile technologies, developing services that make users' daily lives more convenient."
    ],
    imageAlt: "Jaehyun Ahn profile photo"
  },
  ja: {
    title: "About",
    paragraphs: [
      "こんにちは！ユーザー中心のデジタル体験を作る開発者、アン・ジェヒョンです。",
      "技術と人の間の架け橋の役割を果たし、複雑な問題をシンプルで美しいソリューションで解決することを好みます。",
      "現在はAIとモバイル技術に集中し、ユーザーの日常生活をより便利にするサービスを開発しています。"
    ],
    imageAlt: "アン・ジェヒョンのプロフィール写真"
  }
};
