export interface HistoryEntry {
  period: string;
  activity: string;
  description: string;
}

export const historyData: Record<string, HistoryEntry[]> = {
  ko: [
    { period: "2025.03 ~ 2025.08", activity: "Founder Developer – Pliad .inc (現)", description: "B2B 프로토타입 개발" },
    { period: "2025.01",           activity: "iOS Developer – Acon .inc (現)",       description: "MVP 개발 및 출시" },
    { period: "2024.10 ~ 2024.11", activity: "Full-stack Developer / Cofounder – Daon", description: "서비스 MVP 총괄 개발" },
    { period: "2024.08 ~ 2024.09", activity: "Full-stack Developer / Cofounder – Wiro", description: "서비스 MVP 총 개발" },
    { period: "2024.01",           activity: "인턴 – Docent .inc (前)",               description: "iOS Shortcut 기능 개발" },
    { period: "2023.12",           activity: "병장 만기 전역",               description: "30사단" },
    { period: "2021",              activity: "경복고 졸업",                  description: "" }
  ],
  en: [
    { period: "2025.03 – 2025.08", activity: "Founder Developer – Pliad",               description: "Developed multiple B2B prototypes." },
    { period: "2025.01",           activity: "iOS Developer – Acon",                    description: "Developed and launched the MVP." },
    { period: "2024.10 – 2024.11", activity: "Full-stack Developer, Co-founder – Daon", description: "Led development of the service MVP." },
    { period: "2024.08 – 2024.09", activity: "Full-stack Developer, Co-founder – Wiro", description: "end-to-end development of the service MVP." },
    { period: "2024.01",           activity: "Intern – Docent",                         description: "Developed iOS Shortcuts automation features." },
    { period: "2023.12",           activity: "Military discharge",                      description: "30th Infantry Division." },
    { period: "2021",              activity: "Graduated from Kyungbok High School",     description: "" }
  ],
  ja: [
    { period: "2025.03 〜 2025.08", activity: "Founder Developer – Pliad .inc (現)",        description: "複数のB2Bプロトタイプを開発" },
    { period: "2025.01",            activity: "iOS Developer – Acon .inc (現)",            description: "MVPを開発・リリース" },
    { period: "2024.10 〜 2024.11", activity: "フルスタック開発・Cofounder – Daon",          description: "サービスのMVPを総括開発" },
    { period: "2024.08 〜 2024.09", activity: "フルスタック開発・Cofounder – Wiro",          description: "サービスのMVPを総括開発" },
    { period: "2024.01",            activity: "インターン – Docent .inc (現)",              description: "iOSショートカットの自動化機能を開発" },
    { period: "2023.12",            activity: "兵役満期除隊",                                description: "第30師団" },
    { period: "2021",               activity: "景福高等學校 卒業",                               description: "" }
  ]
};

