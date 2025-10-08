import { useTranslation } from 'react-i18next';
export const useProjectsContent = () => {
    const { t } = useTranslation();
    const content = t('sections.projects', { returnObjects: true });
    const projects = Object.entries(content.items).map(([id, value]) => ({
        id: id,
        ...value
    }));
    const getProjectById = (id) => content.items[id];
    return {
        content,
        projects,
        getProjectById
    };
};
