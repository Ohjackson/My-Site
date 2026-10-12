import { Fragment } from 'react';
import type { ReactNode } from 'react';

import { OverviewSection } from '../sections/overview';
import { ArchitectureSection } from '../sections/architecture';
import { FeaturesSection } from '../sections/features';
import { PreviewSection } from '../sections/preview';
import { SecuritySection } from '../sections/security';
import { TechStackSection } from '../sections/techstack';
import { ResultsSection } from '../sections/results';
import { MLOpsStorySection } from '../sections/mlops-story';
import { AdditionalSection } from '../sections/additional';
import type { Language, ProjectDetailData } from '../types';

interface ProjectSectionsProps {
  project: ProjectDetailData;
  language: Language;
}

// 데이터가 있는 섹션만 순서대로 렌더링하고 배경색을 번갈아 적용한다
export function ProjectSections({ project, language }: ProjectSectionsProps) {
  const hasArchitectureSection =
    Boolean(project.architectureImage) ||
    Boolean(project.architectureNotes?.[language]?.trim()) ||
    Boolean(project.stackAndArchitecture?.architectureImage) ||
    Boolean(project.stackAndArchitecture?.architectureNotes?.[language]?.trim()) ||
    Boolean(project.architectureFlow?.[language]?.length);

  const { overviewStory, mlopsStory, preview_screenshots, results, additional_links, securityDesign } = project;
  const techStack = project.stackAndArchitecture?.techStack;

  const sections: Array<[key: string, render: (backgroundColor: string) => ReactNode]> = [];

  if (overviewStory) {
    sections.push(['overview', (bg) => <OverviewSection data={{ overviewStory }} language={language} backgroundColor={bg} />]);
  }
  if (mlopsStory) {
    sections.push(['mlops-story', (bg) => <MLOpsStorySection data={mlopsStory} language={language} backgroundColor={bg} />]);
  }
  if (hasArchitectureSection) {
    sections.push(['architecture', (bg) => <ArchitectureSection data={project} language={language} backgroundColor={bg} />]);
  }
  sections.push(['features', (bg) => <FeaturesSection data={project} language={language} backgroundColor={bg} />]);
  if (preview_screenshots) {
    sections.push(['preview', (bg) => <PreviewSection data={preview_screenshots} language={language} backgroundColor={bg} />]);
  }
  if (securityDesign) {
    sections.push(['security', (bg) => <SecuritySection data={project} language={language} backgroundColor={bg} />]);
  }
  if (techStack) {
    sections.push(['techstack', (bg) => <TechStackSection data={{ techStack }} language={language} backgroundColor={bg} />]);
  }
  if (results) {
    sections.push(['results', (bg) => <ResultsSection data={project} language={language} backgroundColor={bg} />]);
  }
  if (additional_links) {
    sections.push(['additional', (bg) => <AdditionalSection data={additional_links} language={language} backgroundColor={bg} />]);
  }

  return (
    <>
      {sections.map(([key, render], index) => (
        <Fragment key={key}>{render(index % 2 === 0 ? 'bg-bg' : 'bg-surface')}</Fragment>
      ))}
    </>
  );
}
