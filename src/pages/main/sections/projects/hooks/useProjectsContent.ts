import { useTranslation } from 'react-i18next';

import type { ProjectDetailContent, ProjectId, ProjectTranslation } from '../types';

// Import project data
import tangochoData from '../data/Tangocho/project.json';
import loventureData from '../data/Loventure/project.json';
import cocoData from '../data/coco/project.json';
import fedstockData from '../data/FedStock/project.json';
import uritomoData from '../data/Uritomo/project.json';
import routiqData from '../data/Routiq/project.json';
import aconData from '../data/Acon/project.json';
import popcoData from '../data/POPCO/project.json';
import daonData from '../data/Daon/project.json';
import wiroData from '../data/Wiro/project.json';
import mysiteData from '../data/MySite/project.json';
import healthfinbotData from '../data/healthFinBot/project.json';
import ideaverifyprogramData from '../data/IdeaVerifyProgram/project.json';
import sururiData from '../data/Sururi/project.json';
// import inkdueData from '../data/InkDue/project.json';

const projectData = {
  tangocho: tangochoData,
  loventure: loventureData,
  coco: cocoData,
  fedstock: fedstockData,
  uritomo: uritomoData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  wiro: wiroData,
  mysite: mysiteData,
  healthfinbot: healthfinbotData,
  ideaverifyprogram: ideaverifyprogramData,
  sururi: sururiData,
  // inkdue: inkdueData,
};

// 일부 프로젝트 JSON에만 있는 선택 필드
type ProjectMeta = { detail?: ProjectDetailContent; flag?: string; making?: boolean };
const getMeta = (data: object) => data as ProjectMeta;

const getStartPeriodValue = (period?: string) => {
  const match = period?.match(/(\d{4})\.(\d{2})/);
  if (!match) return Number.POSITIVE_INFINITY;

  const [, year, month] = match;
  return Number(year) * 100 + Number(month);
};

const THIRD_ROW_PROJECT_IDS: ProjectId[] = ['fedstock', 'sururi'];

export const useProjectsContent = () => {
  const { t, i18n } = useTranslation();


  // Get current language
  const currentLanguage = (i18n.language?.split('-')[0] || 'ko') as 'ko' | 'en' | 'ja';

  // Get labels from translation
  const labels = {
    period: t('sections.projects.labels.period'),
    role: t('sections.projects.labels.role'),
    coreFeatures: t('sections.projects.labels.coreFeatures'),
  };

  const viewDetails = t('sections.projects.viewDetails');

  // Convert project data to the expected format with language-specific data
  const sortedProjects: Array<ProjectTranslation & { id: ProjectId; flag?: string; making?: boolean }> =
    Object.entries(projectData)
      // 표시 언어와 상관없이 숫자 형식인 한국어 기간으로 정렬한다
      .sort(([, a], [, b]) => getStartPeriodValue(b.workPeriod.ko) - getStartPeriodValue(a.workPeriod.ko))
      .map(([id, data]) => ({
        id: id as ProjectId,
        name: data.name[currentLanguage],
        summary: data.summary[currentLanguage],
        period: data.workPeriod[currentLanguage],
        role: data.role[currentLanguage],
        tags: data.tags[currentLanguage],
        features: data.features[currentLanguage],
        detail: getMeta(data).detail as ProjectDetailContent,
        flag: getMeta(data).flag,
        making: getMeta(data).making,
      }));

  const thirdRowProjects = sortedProjects.filter((project) => THIRD_ROW_PROJECT_IDS.includes(project.id));
  const remainingProjects = sortedProjects.filter((project) => !THIRD_ROW_PROJECT_IDS.includes(project.id));
  const projects = [
    ...remainingProjects.slice(0, 4),
    ...thirdRowProjects,
    ...remainingProjects.slice(4),
  ];


  const getProjectById = (id: ProjectId) => {
    const data = projectData[id];
    if (!data) return null;
    return {
      name: data.name[currentLanguage],
      summary: data.summary[currentLanguage],
      period: data.workPeriod[currentLanguage],
      role: data.role[currentLanguage],
      tags: data.tags[currentLanguage],
      features: data.features[currentLanguage],
      detail: getMeta(data).detail as ProjectDetailContent,
    };
  };

  return {
    content: { labels, viewDetails },
    projects,
    getProjectById
  };
};
