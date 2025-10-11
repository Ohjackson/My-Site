import { ArrowUpRightIcon } from '@/shared/components/icons';
import { Calendar, User, Smartphone, CalendarDays, Users, Clock } from 'lucide-react';
import { projectIcons } from '@/assets/icons';
import { Button } from "./components/Button";
import { OverviewSection } from "./sections/overview";
import { ServiceSection } from "./sections/service";
import { FeaturesSection } from "./sections/features";
import { PreviewSection } from "./sections/preview";
import { TechStackSection } from "./sections/techstack";
import { ResponsibilitiesSection } from "./sections/responsibilities";
import { ResultsSection } from "./sections/results";
import { AdditionalSection } from "./sections/additional";
import { OtherProjectsSection } from "./sections/other-projects";

// Import project data
import tangochoData from '../main/sections/projects/data/Tangocho/project.json';
import loventureData from '../main/sections/projects/data/Loventure/project.json';
import routiqData from '../main/sections/projects/data/Routiq/project.json';
import aconData from '../main/sections/projects/data/Acon/project.json';
import popcoData from '../main/sections/projects/data/POPCO/project.json';
import daonData from '../main/sections/projects/data/Daon/project.json';
import wiroData from '../main/sections/projects/data/Wiro/project.json';
import mySiteData from '../main/sections/projects/data/MySite/project.json';
import healthfinbotData from '../main/sections/projects/data/healthFinBot/project.json';
import ideaverifyprogramData from '../main/sections/projects/data/IdeaVerifyProgram/project.json';

const projectData = {
  tangocho: tangochoData,
  loventure: loventureData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  wiro: wiroData,
  mysite: mySiteData,
  healthfinbot: healthfinbotData,
  ideaverifyprogram: ideaverifyprogramData,
};

interface ProjectDetailProps {
  projectId: string;
  language: 'ko' | 'en' | 'ja';
  onBack: () => void;
  onProjectClick: (projectId: string) => void;
}

export function ProjectDetail({ projectId, language, onBack, onProjectClick }: ProjectDetailProps) {
  console.log('ProjectDetail rendered with:', { projectId, language });
  
  const project = projectData[projectId as keyof typeof projectData] || projectData.tangocho;
  console.log('Selected project:', project);
  console.log('Project keys:', Object.keys(project));
  console.log('Project overviewStory:', project.overviewStory);
  console.log('Project danggocho:', (project as any).danggocho);

  const content = {
    ko: {
      back: "목록으로",
      github: "GitHub",
      appStore: "App Store",
      website: "Website",
      platform: "플랫폼",
      releaseDate: "출시일자",
      workPeriod: "작업일자",
      serviceStatus: "서비스상태",
      role: "역할",
      teamSize: "인원",
      hashtags: "해시태그",
      additionalFeatures: "특징"
    },
    en: {
      back: "Back to List",
      github: "GitHub",
      appStore: "App Store",
      website: "Website",
      platform: "Platform",
      releaseDate: "Release Date",
      workPeriod: "Work Period",
      serviceStatus: "Service Status",
      role: "Role",
      teamSize: "Team Size",
      hashtags: "Hashtags",
      additionalFeatures: "AdditioFeatures"
    },
    ja: {
      back: "リストに戻る",
      github: "GitHub",
      appStore: "App Store",
      website: "Website",
      platform: "プラットフォーム",
      releaseDate: "リリース日",
      workPeriod: "作業期間",
      serviceStatus: "サービス状態",
      role: "役割",
      teamSize: "人数",
      hashtags: "ハッシュタグ",
      additionalFeatures: "その他の特徴"
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
              src={projectIcons[projectId as keyof typeof projectIcons]}
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

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-text/90">
              <Clock className="h-4 w-4 text-primary-500" />
              <span><strong>{content[language].workPeriod}:</strong> {project.workPeriod?.[language]}</span>
                </div>
                <div className="flex items-center gap-3 text-text/90">
              <User className="h-4 w-4 text-primary-500" />
              <span><strong>{content[language].role}:</strong> {project.role[language]}</span>
            </div>
            {project.releaseDate && (
              <div className="flex items-center gap-3 text-text/90">
                <Calendar className="h-4 w-4 text-primary-500" />
                <span><strong>{content[language].releaseDate}:</strong> {project.releaseDate[language]}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center gap-3 text-text/90">
                <Users className="h-4 w-4 text-primary-500" />
                <span><strong>{content[language].teamSize}:</strong> {project.teamSize[language]}</span>
              </div>
            )}
            {project.serviceStatus && (
              <div className="flex items-center gap-3 text-text/90">
                <CalendarDays className="h-4 w-4 text-primary-500" />
                <span><strong>{content[language].serviceStatus}:</strong> {project.serviceStatus[language]}</span>
              </div>
            )}
            {project.platform && (
              <div className="flex items-center gap-3 text-text/90">
                <Smartphone className="h-4 w-4 text-primary-500" />
                <span><strong>{content[language].platform}:</strong> {project.platform[language]}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 items-stretch mb-8">
            {(project.links as any)?.appStore && (
              <Button
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                onClick={() => window.open((project.links as any)?.appStore, '_blank')}
              >
                {content[language].appStore}
              </Button>
            )}
            {project.links?.github && (
                <Button
                variant="secondary"
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                onClick={() => window.open(project.links?.github, '_blank')}
                >
                  {content[language].github}
                </Button>
            )}
            {(project.links as any)?.website && (
              <Button
                variant="outline"
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
                onClick={() => window.open((project.links as any)?.website, '_blank')}
              >
                {content[language].website}
              </Button>
            )}
          </div>
          
          {/* Tags Section */}
          {project.tags && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text/70 mb-3">{content[language].hashtags}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags[language].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
          </div>
          )}

          {/* Additional Features Section */}
          {project.additionalFeatures && project.additionalFeatures[language] && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text/70 mb-3">{content[language].additionalFeatures}</h3>
              <div className="text-text/80 leading-relaxed">
                {project.additionalFeatures[language].split('\n').map((line, index) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.startsWith('-')) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="w-2 h-2 bg-text/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{trimmedLine.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="mb-2">
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Conditionally render sections based on available data */}
      {(() => {
        const sections = [];
        let sectionIndex = 0;

        // Overview Section
        if (project.overviewStory) {
          sections.push(
            <OverviewSection 
              key="overview" 
              data={project} 
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
        } else if ((project as any).service) {
          sections.push(
            <ServiceSection 
              key="service" 
              data={(project as any).service} 
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
            data={project as any} 
            language={language} 
            backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
          />
        );
        sectionIndex++;

        // Preview Section
        console.log('Checking preview_screenshots:', {
          danggocho: (project as any).danggocho?.preview_screenshots,
          direct: (project as any).preview_screenshots,
          projectId
        });
        
        if ((project as any).danggocho?.preview_screenshots) {
          console.log('Using danggocho preview_screenshots:', (project as any).danggocho.preview_screenshots);
          sections.push(
            <PreviewSection 
              key="preview" 
              data={(project as any).danggocho.preview_screenshots} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        } else if ((project as any).preview_screenshots) {
          console.log('Using direct preview_screenshots:', (project as any).preview_screenshots);
          sections.push(
            <PreviewSection 
              key="preview" 
              data={(project as any).preview_screenshots} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // TechStack Section
        if ((project as any).stackAndArchitecture?.techStack) {
          sections.push(
            <TechStackSection 
              key="techstack" 
              data={(project as any).stackAndArchitecture} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        // Responsibilities Section
        if ((project as any).responsibilities) {
          sections.push(
            <ResponsibilitiesSection 
              key="responsibilities" 
              data={project as any} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }


        // Results Section
        if ((project as any).metrics) {
          sections.push(
            <ResultsSection 
              key="results" 
              data={project as any} 
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
        } else if ((project as any).additional_links) {
          sections.push(
            <AdditionalSection 
              key="additional" 
              data={(project as any).additional_links} 
              language={language} 
              backgroundColor={sectionIndex % 2 === 0 ? 'bg-bg' : 'bg-surface'}
            />
          );
          sectionIndex++;
        }

        console.log('Rendered sections count:', sections.length);
        console.log('Section keys:', sections.map(s => s.key));
        return sections;
      })()}

      {/* Other Projects Section */}
      <OtherProjectsSection
        projects={Object.entries(projectData).map(([id, data]) => ({
          id,
          name: data.name,
          summary: data.summary,
          tags: data.tags,
        }))}
        currentProjectId={projectId}
        language={language}
        onProjectClick={onProjectClick}
      />
    </div>
  );
}
