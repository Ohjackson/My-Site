import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, Calendar, User } from "lucide-react";
import { Button } from "./Button";
import { OverviewSection } from "../sections/overview";
import { ServiceSection } from "../sections/service";
import { FeaturesSection } from "../sections/features";
import { PreviewSection } from "../sections/preview";
import { ArchitectureSection } from "../sections/architecture";
import { TechStackSection } from "../sections/techstack";
import { ResponsibilitiesSection } from "../sections/responsibilities";
import { DeploymentSection } from "../sections/deployment";
import { ResultsSection } from "../sections/results";
import { AdditionalSection } from "../sections/additional";
import projectData from "../data/projects.json";

interface ProjectDetailProps {
  projectId: string;
  language: 'ko' | 'en' | 'ja';
  onBack: () => void;
}

export function ProjectDetail({ projectId, language, onBack }: ProjectDetailProps) {
  const project = projectData[projectId as keyof typeof projectData] || projectData.danggocho;

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
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-link hover:text-linkHover transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{content[language].back}</span>
          </motion.button>

          <div className="flex items-center gap-8 mb-8">
            <img 
              src="/assets/icon.png" 
                alt={project.title}
              className="w-20 h-20 rounded-2xl object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
              <div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-muted">{project.subtitle}</p>
            </div>
              </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text/90">
                  <Calendar className="h-4 w-4" />
                <span><strong>운영기간:</strong> {project.period}</span>
                </div>
                <div className="flex items-center gap-3 text-text/90">
                  <User className="h-4 w-4" />
                <span><strong>역할:</strong> {project.role}</span>
              </div>
              </div>
            <div className="flex gap-4">
              <Button
                icon={<ExternalLink className="h-4 w-4" />}
                className="px-6"
              >
                {content[language].appStore}
              </Button>
                <Button
                variant="secondary"
                  icon={<Github className="h-4 w-4" />}
                  className="px-6"
                >
                  {content[language].github}
                </Button>
              </div>
          </div>
        </div>
      </section>

      <OverviewSection data={project.overview} language={language} />
      <ServiceSection data={project.service} language={language} />
      <FeaturesSection data={project} language={language} />
      <PreviewSection data={project.preview} language={language} />
      <ArchitectureSection data={project.architecture} language={language} />
      <TechStackSection data={project.techStack} language={language} />
      <ResponsibilitiesSection data={project.responsibilities} language={language} />
      <DeploymentSection data={project.deployment} language={language} />
      <ResultsSection data={project.results} language={language} />
      <AdditionalSection data={project.additional} language={language} />
    </div>
  );
}
