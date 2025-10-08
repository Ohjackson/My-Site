export interface HistoryEntry {
  period: string;
  activity: string;
  description: string;
}

export const historyData: Record<string, HistoryEntry[]> = {
  ko: [
    { "period": "2025.03 ~ 2025.08", "activity": "inc - Pliad - Founder Developer", "description": "B2B 프로토타입 다수 개발" },
    { "period": "2025.01", "activity": "inc - Acon - iOS Developer", "description": "MVP 개발 및 출시" },
    { "period": "2024.10 ~ 2024.11", "activity": "inc - Daon - 풀스택 개발자 Cofounder", "description": "Daon 서비스 MVP 개발" },
    { "period": "2024.08 ~ 2024.09", "activity": "inc - Wiro - 풀스택 개발자 Cofounder", "description": "Wiro 서비스 개발" },
    { "period": "2024.01", "activity": "inc - Docent - 인턴", "description": "iOS Shortcut 기능 개발" },
    { "period": "2023.12", "activity": "병장 만기 전역", "description": "30사단" },
    { "period": "2021", "activity": "경복고 졸업", "description": "" }
  ],
  en: [
    { "period": "2025.03 – 2025.08", "activity": "inc – Pliad – Founder Developer", "description": "Built multiple B2B prototypes." },
    { "period": "2025.01", "activity": "inc – Acon – iOS Developer", "description": "Launched MVP." },
    { "period": "2024.10 – 2024.11", "activity": "inc – Daon – Full-stack Developer, Co-founder", "description": "Developed Daon service MVP." },
    { "period": "2024.08 – 2024.09", "activity": "inc – Wiro – Full-stack Developer, Co-founder", "description": "Delivered Wiro service." },
    { "period": "2024.01", "activity": "inc – Docent – Intern", "description": "Built iOS Shortcut features." },
    { "period": "2023.12", "activity": "Military discharge", "description": "30th Infantry Division." },
    { "period": "2021", "activity": "Graduated from Kyungbok High School", "description": "" }
  ],
  ja: [
    { "period": "2025.03 〜 2025.08", "activity": "inc - Pliad - Founder Developer", "description": "複数のB2Bプロトタイプを開発" },
    { "period": "2025.01", "activity": "inc - Acon - iOS Developer", "description": "MVPを開発・リリース" },
    { "period": "2024.10 〜 2024.11", "activity": "inc - Daon - フルスタック開発 Cofounder", "description": "DaonサービスMVP開発" },
    { "period": "2024.08 〜 2024.09", "activity": "inc - Wiro - フルスタック開発 Cofounder", "description": "Wiroサービスを提供" },
    { "period": "2024.01", "activity": "inc - Docent - インターン", "description": "iOSショートカット機能を開発" },
    { "period": "2023.12", "activity": "兵役満期除隊", "description": "第30師団" },
    { "period": "2021", "activity": "慶福高校 卒業", "description": "" }
  ]
};
