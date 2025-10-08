import { useTranslation } from 'react-i18next';

import type { ProjectId, ProjectTranslation, ProjectsContent } from '../types';

// Import project data
import tangochoData from '../data/Tangocho/project.json';
import loventureData from '../data/Loventure/project.json';
import routiqData from '../data/Routiq/project.json';
import aconData from '../data/Acon/project.json';
import popcoData from '../data/POPCO/project.json';
import daonData from '../data/Daon/project.json';
import pliadData from '../data/Pliad/project.json';
import mysiteData from '../data/MySite/project.json';

const projectData = {
  tangocho: tangochoData,
  loventure: loventureData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  pliad: pliadData,
  mysite: mysiteData,
};

export const useProjectsContent = () => {
  const { t } = useTranslation();
  
  console.log('useProjectsContent called');
  
  // Get labels from translation
  const labels = {
    period: t('sections.projects.labels.period'),
    role: t('sections.projects.labels.role'),
    coreFeatures: t('sections.projects.labels.coreFeatures'),
  };
  
  const viewDetails = t('sections.projects.viewDetails');
  
  // Convert project data to the expected format
  const projects: Array<ProjectTranslation & { id: ProjectId }> = Object.entries(projectData).map(([id, data]) => ({
    id: id as ProjectId,
    name: data.name.ko, // Use Korean for now, can be made dynamic later
    summary: data.summary.ko,
    period: data.period.ko,
    role: data.role.ko,
    tags: data.tags.ko,
    features: data.features.ko,
    detail: data.detail,
  }));

  console.log('Projects loaded:', projects.map(p => ({ id: p.id, name: p.name })));

  const getProjectById = (id: ProjectId) => {
    const data = projectData[id];
    if (!data) return null;
    return {
      name: data.name.ko,
      summary: data.summary.ko,
      period: data.period.ko,
      role: data.role.ko,
      tags: data.tags.ko,
      features: data.features.ko,
      detail: data.detail,
    };
  };

  return {
    content: { labels, viewDetails },
    projects,
    getProjectById
  };
};
