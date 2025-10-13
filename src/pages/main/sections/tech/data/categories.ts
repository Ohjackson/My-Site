export interface TechCategory {
  id: 'mobile' | 'frontend' | 'backend' | 'data' | 'infra' | 'ai' | 'tools' | 'design' | 'experienced';
  badges: string[];
}

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    id: 'mobile',
    badges: [
      'https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white',
      'https://img.shields.io/badge/SwiftUI-000000?style=for-the-badge&logo=swift&logoColor=white',
      'https://img.shields.io/badge/UIKit-000000?style=for-the-badge&logo=swift&logoColor=white',
      'https://img.shields.io/badge/Core%20ML-000000?style=for-the-badge&logo=apple&logoColor=white',
      'https://img.shields.io/badge/Core%20Data-000000?style=for-the-badge&logo=apple&logoColor=white',
      'https://img.shields.io/badge/SwiftData-000000?style=for-the-badge&logo=apple&logoColor=white'
    ]
  },
  {
    id: 'infra',
    badges: [
      'https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white',
      'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=000000',
      'https://img.shields.io/badge/iCloud-3693F3?style=for-the-badge&logo=icloud&logoColor=white',
      'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white',
      'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
      'https://img.shields.io/badge/Kakao%20Cloud-FEE500?style=for-the-badge'
    ]
  },
  {
    id: 'frontend',
    badges: [
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
      'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white'
    ]
  },
  {
    id: 'backend',
    badges: [
      'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white',
      'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white'
    ]
  },
  {
    id: 'data',
    badges: [
      'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
      'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white'
    ]
  },
  {
    id: 'ai',
    badges: [
      'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white',
      'https://img.shields.io/badge/LangGraph-121011?style=for-the-badge',
      'https://img.shields.io/badge/CNN-Concept-555555?style=for-the-badge'
    ]
  },
  {
    id: 'tools',
    badges: [
      'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white',
      'https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white',
      'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white',
      'https://img.shields.io/badge/LangSmith-FF6B6B?style=for-the-badge&logo=langsmith&logoColor=white'
    ]
  },
  {
    id: 'design',
    badges: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'
    ]
  },
  {
    id: 'experienced',
    badges: [
      'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white',
      'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      'https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white',
      'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
      'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
      'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white',
      'https://img.shields.io/badge/Qdrant-FF6B6B?style=for-the-badge&logo=qdrant&logoColor=white'
    ]
  }
] as const;
