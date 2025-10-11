import { useTranslation } from 'react-i18next';

import type { ProjectId, ProjectTranslation, ProjectsContent } from '../types';

// Import project data
import tangochoData from '../data/Tangocho/project.json';
import loventureData from '../data/Loventure/project.json';
import routiqData from '../data/Routiq/project.json';
import aconData from '../data/Acon/project.json';
import popcoData from '../data/POPCO/project.json';
import daonData from '../data/Daon/project.json';
import wiroData from '../data/Wiro/project.json';
import mysiteData from '../data/MySite/project.json';
import healthfinbotData from '../data/healthFinBot/project.json';
import ideaverifyprogramData from '../data/IdeaVerifyProgram/project.json';

const projectData = {
  tangocho: tangochoData,
  loventure: loventureData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  wiro: wiroData,
  mysite: mysiteData,
  healthfinbot: healthfinbotData,
  ideaverifyprogram: ideaverifyprogramData,
};

export const useProjectsContent = () => {
  const { t, i18n } = useTranslation();
  
  console.log('useProjectsContent called');
  
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
  const projects: Array<ProjectTranslation & { id: ProjectId; flag?: string }> = Object.entries(projectData).map(([id, data]) => ({
    id: id as ProjectId,
    name: data.name[currentLanguage],
    summary: data.summary[currentLanguage],
    period: data.workPeriod[currentLanguage],
    role: data.role[currentLanguage],
    tags: data.tags[currentLanguage],
    features: data.features[currentLanguage],
    detail: (data as any).detail,
    flag: (data as any).flag, // Include flag information
  }));

  console.log('Projects loaded:', projects.map(p => ({ id: p.id, name: p.name })));

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
      detail: (data as any).detail,
    };
  };

  return {
    content: { labels, viewDetails },
    projects,
    getProjectById
  };
};
