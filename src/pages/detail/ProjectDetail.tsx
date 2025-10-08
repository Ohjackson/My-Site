import { ArrowUpRightIcon } from '@/shared/components/icons';
import { Button } from "./components/Button";
import { OverviewSection } from "./sections/overview";
import { ServiceSection } from "./sections/service";
import { FeaturesSection } from "./sections/features";
import { PreviewSection } from "./sections/preview";
import { ArchitectureSection } from "./sections/architecture";
import { TechStackSection } from "./sections/techstack";
import { ResponsibilitiesSection } from "./sections/responsibilities";
import { DeploymentSection } from "./sections/deployment";
import { ResultsSection } from "./sections/results";
import { AdditionalSection } from "./sections/additional";

// Import project data
import tangochoData from '../main/sections/projects/data/Tangocho/project.json';
import loventureData from '../main/sections/projects/data/Loventure/project.json';
import routiqData from '../main/sections/projects/data/Routiq/project.json';
import aconData from '../main/sections/projects/data/Acon/project.json';
import popcoData from '../main/sections/projects/data/POPCO/project.json';
import daonData from '../main/sections/projects/data/Daon/project.json';
import pliadData from '../main/sections/projects/data/Pliad/project.json';
import mySiteData from '../main/sections/projects/data/MySite/project.json';

const projectData = {
  tangocho: tangochoData,
  loventure: loventureData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  pliad: pliadData,
  mysite: mySiteData,
};

interface ProjectDetailProps {
  projectId: string;
  language: 'ko' | 'en' | 'ja';
  onBack: () => void;
}

export function ProjectDetail({ projectId, language, onBack }: ProjectDetailProps) {
  console.log('ProjectDetail rendered with:', { projectId, language });
  
  const project = projectData[projectId as keyof typeof projectData] || projectData.tangocho;
  console.log('Selected project:', project);

  const content = {
    ko: {
      back: "목록으로",
      github: "GitHub",
      appStore: "App Store"
    },
    en: {
      back: "Back to List",
      github: "GitHub",
      appStore: "App Store"
    },
    ja: {
      back: "リストに戻る",
      github: "GitHub",
      appStore: "App Store"
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-link hover:text-linkHover transition-colors mb-12"
          >
            <ArrowUpRightIcon className="h-4 w-4 rotate-180" />
            <span>{content[language].back}</span>
          </button>

          <div className="flex items-center gap-8 mb-8">
            <img 
              src={`./src/pages/main/sections/projects/data/${projectId}/icon.png`}
              alt={project.name[language]}
              className="w-20 h-20 rounded-2xl object-cover shadow-2xl border border-gray-200/50"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.name[language]}</h1>
              <p className="text-lg text-muted">{project.summary[language]}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text/90">
                <span className="text-primary-500">📅</span>
                <span><strong>운영기간:</strong> {project.period[language]}</span>
              </div>
              <div className="flex items-center gap-3 text-text/90">
                <span className="text-primary-500">👤</span>
                <span><strong>역할:</strong> {project.role[language]}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                className="px-6"
              >
                {content[language].appStore}
              </Button>
              <Button
                variant="secondary"
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                className="px-6"
              >
                {content[language].github}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally render sections based on available data */}
      {project.detail?.overview && <OverviewSection data={project.detail.overview} language={language} />}
      <ServiceSection data={undefined} language={language} />
      <FeaturesSection data={project} language={language} />
      <PreviewSection data={undefined} language={language} />
      <ArchitectureSection data={undefined} language={language} />
      <TechStackSection data={undefined} language={language} />
      {project.detail?.responsibilities && <ResponsibilitiesSection data={project.detail} language={language} />}
      <DeploymentSection data={undefined} language={language} />
      {project.detail?.metrics && <ResultsSection data={project.detail} language={language} />}
      <AdditionalSection data={undefined} language={language} />
    </div>
  );
}
