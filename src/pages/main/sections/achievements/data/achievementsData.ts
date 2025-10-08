export interface AchievementsData {
  achievementsTitle: string;
  educationTitle: string;
  achievements: string[];
  education: string[];
}

export const achievementsData: Record<string, AchievementsData> = {
  ko: {
    achievementsTitle: "수상 및 실적",
    educationTitle: "학력 및 교육",
    achievements: [
      "GCS – 4기 전액 장학생 선발",
      "아르테크네 – 제1회 창업 연계 지원 사업 대상 (2024)"
    ],
    education: [
      "가천대학교 인공지능학과(本) 2기 (2026년 졸업 예정)",
      "가천대학교 창업대학 GCS(複) 4기",
      "SOPT 35기 – iOS 트랙",
      "카카오엔터프라이즈 SW아카데미 7기 – 재학 중"
    ]
  },
  en: {
    achievementsTitle: "Achievements",
    educationTitle: "Education",
    achievements: [
      "GCS – 4th cohort full scholarship recipient",
      "Artechné – Grand Prize, 1st Startup Support Program (2024)"
    ],
    education: [
      "Gachon University, Department of Artificial Intelligence (Main Major, 2nd Cohort, Expected 2026)",
      "Gachon University, Startup College – GCS (Double Major, 4th Cohort)",
      "SOPT 35th – iOS Track",
      "Kakao Enterprise SW Academy 7th – In Progress"
    ]
  },
  ja: {
    achievementsTitle: "受賞・実績",
    educationTitle: "学歴・教育",
    achievements: [
      "GCS – 第4期 全額奨学生に選抜",
      "Artechné – 第1回 起業連携支援事業 大賞 (2024)"
    ],
    education: [
      "嘉泉大学 人工知能学科（本専攻）第2期（2026年卒業予定）",
      "嘉泉大学 起業大学 GCS（複専攻）第4期",
      "SOPT 第35期 – iOSトラック",
      "カカオエンタープライズ SWアカデミー 第7期 – 在籍中"
    ]
  }
};
