import { useTranslation } from 'react-i18next';

import type { ProjectId, ProjectTranslation, ProjectsContent } from '../types';

export const useProjectsContent = () => {
  const { t } = useTranslation();
  const content = t('sections.projects', { returnObjects: true }) as ProjectsContent;
  const projects: Array<ProjectTranslation & { id: ProjectId }> = Object.entries(content.items).map(([id, value]) => ({
    id: id as ProjectId,
    ...value
  }));

  const getProjectById = (id: ProjectId) => content.items[id];

  return {
    content,
    projects,
    getProjectById
  };
};
