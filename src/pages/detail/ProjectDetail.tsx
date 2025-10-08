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
      {(() => {
        const sections = [];
        let sectionIndex = 0;

        // Overview Section
        if (project.detail?.overview) {
          sections.push(
            <OverviewSection 
              key="overview" 
              data={project.detail.overview} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Service Section
        if ((project as any).danggocho?.service) {
          sections.push(
            <ServiceSection 
              key="service" 
              data={(project as any).danggocho.service} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Features Section (always render)
        sections.push(
          <FeaturesSection 
            key="features" 
            data={project} 
            language={language} 
            backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
          />
        );
        sectionIndex++;

        // Preview Section
        if ((project as any).danggocho?.preview_screenshots) {
          sections.push(
            <PreviewSection 
              key="preview" 
              data={(project as any).danggocho.preview_screenshots} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Architecture Section
        if ((project as any).danggocho?.architecture) {
          sections.push(
            <ArchitectureSection 
              key="architecture" 
              data={(project as any).danggocho.architecture} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // TechStack Section
        if ((project as any).danggocho?.techStack) {
          sections.push(
            <TechStackSection 
              key="techstack" 
              data={(project as any).danggocho.techStack} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Responsibilities Section
        if (project.detail?.responsibilities) {
          sections.push(
            <ResponsibilitiesSection 
              key="responsibilities" 
              data={project.detail} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Deployment Section
        if ((project as any).danggocho?.deployment) {
          sections.push(
            <DeploymentSection 
              key="deployment" 
              data={(project as any).danggocho.deployment} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Results Section
        if (project.detail?.metrics) {
          sections.push(
            <ResultsSection 
              key="results" 
              data={project.detail} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Additional Section
        if ((project as any).danggocho?.additional_links) {
          sections.push(
            <AdditionalSection 
              key="additional" 
              data={(project as any).danggocho.additional_links} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        return sections;
      })()}
    </div>
  );
}
