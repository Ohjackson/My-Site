export interface AchievementsData {
  title: string;
  achievementsTitle: string;
  educationTitle: string;
  achievements: string[];
  education: string[];
}

export const achievementsData: Record<string, AchievementsData> = {
  ko: {
    title: "Achievements & Education",
    achievementsTitle: "수상 및 실적",
    educationTitle: "교육",
    achievements: [
      "GCS – 4기 전액 장학생",
      "Artechné – 금상"
    ],
    education: [
      "가천대학교 – AI학과 2기",
      "GCS 4기",
      "SOPT 35기 – iOS",
      "카카오엔터프라이즈 SW아카데미 7기 – 진행중"
    ]
  },
  en: {
    title: "Achievements & Education",
    achievementsTitle: "Achievements",
    educationTitle: "Education",
    achievements: [
      "GCS – 4th cohort full scholarship recipient",
      "Artechné – Gold prize"
    ],
    education: [
      "Gachon University – AI major (2nd cohort)",
      "GCS 4th cohort",
      "SOPT 35th – iOS",
      "Kakao Enterprise SW Academy 7th – In progress"
    ]
  },
  ja: {
    title: "Achievements & Education",
    achievementsTitle: "受賞・実績",
    educationTitle: "教育",
    achievements: [
      "GCS - 第4期 全額奨学生",
      "Artechné - 金賞"
    ],
    education: [
      "嘉泉大学 人工知能学科 第2期",
      "GCS 第4期",
      "SOPT 第35期 - iOS",
      "カカオエンタープライズ SWアカデミー 第7期 - 進行中"
    ]
  }
};
