export interface HistoryEntry {
  period: string;
  activity: string;
  description: string;
}

export const historyData: Record<string, HistoryEntry[]> = {
  ko: [
    { period: "2025.12 ~ 2026.02", activity: "인턴십 – OIT Cyber Life Design Laboratory", description: "" },
    { period: "2025.09 ~ 2025.12", activity: "카카오엔터프라이즈 SW아카데미 7기", description: "" },
    { period: "2025.03 ~ 2025.08", activity: "Founder Developer – Plaid .inc (現)", description: "B2B 프로토타입 개발" },
    { period: "2025.01",           activity: "iOS Developer – Acon .inc (現)",       description: "MVP 개발 및 출시" },
    { period: "2024.10 ~ 2024.11", activity: "Full-stack Developer – Daon(초기 창업팀)", description: "서비스 MVP 총괄 개발" },
    { period: "2024.08 ~ 2024.09", activity: "Full-stack Developer – Wiro(초기 창업팀)", description: "서비스 MVP 총 개발" },
    { period: "2024.01",           activity: "Docent .inc (前)",                      description: "iOS Shortcut 기능 개발" },
    { period: "2023.12",           activity: "병장 만기 전역",               description: "30사단 - 네트워크 운용 체계 설치병" },
    { period: "2021",              activity: "경복고 졸업",                  description: "" }
  ],
  en: [
    { period: "2025.12 ~ 2026.02", activity: "Internship – OIT Cyber Life Design Laboratory", description: "" },
    { period: "2025.09 ~ 2025.12", activity: "Kakao Enterprise SW Academy 7th Cohort", description: "" },
    { period: "2025.03 ~ 2025.08", activity: "Founder Developer – Plaid .inc (Current)", description: "Developed B2B prototypes" },
    { period: "2025.01",           activity: "iOS Developer – Acon .inc (Current)",       description: "Developed and launched the MVP" },
    { period: "2024.10 ~ 2024.11", activity: "Full-stack Developer – Daon(Early Startup Team)", description: "Led overall development of the service MVP" },
    { period: "2024.08 ~ 2024.09", activity: "Full-stack Developer – Wiro(Early Startup Team)", description: "Developed the overall service MVP" },
    { period: "2024.01",           activity: "Docent .inc (Former)",                      description: "Developed iOS Shortcut features" },
    { period: "2023.12",           activity: "Completed military service as Sergeant",    description: "30th Infantry Division - Network Operations System Installer" },
    { period: "2021",              activity: "Graduated from Kyungbok High School",     description: "" }
  ],
  ja: [
    { period: "2025.12 ~ 2026.02", activity: "インターンシップ – OIT Cyber Life Design Laboratory", description: "" },
    { period: "2025.09 ~ 2025.12", activity: "カカオエンタープライズ SWアカデミー 第7期", description: "" },
    { period: "2025.03 ~ 2025.08", activity: "Founder Developer – Plaid .inc (現)", description: "B2Bプロトタイプを開発" },
    { period: "2025.01",           activity: "iOS Developer – Acon .inc (現)",     description: "MVPを開発・リリース" },
    { period: "2024.10 ~ 2024.11", activity: "フルスタック開発 – Daon(初期スタートアップチーム)", description: "サービスMVPの総括開発" },
    { period: "2024.08 ~ 2024.09", activity: "フルスタック開発 – Wiro(初期スタートアップチーム)", description: "サービスMVP全体を開発" },
    { period: "2024.01",           activity: "Docent .inc (前)",                  description: "iOS Shortcut機能を開発" },
    { period: "2023.12",           activity: "兵長満期除隊",                      description: "第30師団 - ネットワーク運用体系設置兵" },
    { period: "2021",              activity: "景福高校 卒業",                      description: "" }
  ]
};
