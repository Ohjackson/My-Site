import { Calendar, User, Smartphone, CalendarDays, Users, Clock, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { ArrowUpRightIcon } from '@/shared/components/icons';
import { Button } from './Button';
import type { Language, Localized, ProjectDetailData } from '../types';

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
    contribution: "기여율",
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
    contribution: "Contribution",
    hashtags: "Hashtags",
    additionalFeatures: "Additional Features"
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
    contribution: "貢献度",
    hashtags: "ハッシュタグ",
    additionalFeatures: "その他の特徴"
  }
};

interface ProjectHeaderProps {
  project: ProjectDetailData;
  projectIcon?: string;
  language: Language;
  onBack: () => void;
}

export function ProjectHeader({ project, projectIcon, language, onBack }: ProjectHeaderProps) {
  const labels = content[language];

  const details: Array<{ icon: LucideIcon; label: string; value?: Localized; always?: boolean }> = [
    { icon: Clock, label: labels.workPeriod, value: project.workPeriod, always: true },
    { icon: User, label: labels.role, value: project.role, always: true },
    { icon: Calendar, label: labels.releaseDate, value: project.releaseDate },
    { icon: Users, label: labels.teamSize, value: project.teamSize },
    { icon: UserCheck, label: labels.contribution, value: project.contribution },
    { icon: CalendarDays, label: labels.serviceStatus, value: project.serviceStatus },
    { icon: Smartphone, label: labels.platform, value: project.platform },
  ];

  const additionalFeatures = project.additionalFeatures?.[language];

  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-link hover:text-linkHover transition-colors mb-12"
        >
          <ArrowUpRightIcon className="h-4 w-4 rotate-180" />
          <span>{labels.back}</span>
        </button>

        <div className="flex items-center gap-8 mb-8">
          {projectIcon ? (
            <img
              src={projectIcon}
              alt={project.name[language]}
              className="w-20 h-20 rounded-2xl object-cover shadow-2xl border border-gray-200/50"
            />
          ) : (
            <div
              aria-hidden
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-primary-300/40 bg-gradient-to-br from-primary-500 to-primary-800 text-2xl font-bold text-white shadow-2xl"
            >
              {project.name[language].charAt(0)}
            </div>
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.name[language]}</h1>
            <p className="text-lg text-muted">{project.summary[language]}</p>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {details
            .filter(({ value, always }) => always || value)
            .map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 text-text/90">
                <Icon className="h-4 w-4 text-primary-500" />
                <span><strong>{label}:</strong> {value?.[language]}</span>
              </div>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-stretch mb-8">
          {project.links?.appStore && (
            <Button
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              onClick={() => window.open(project.links?.appStore, '_blank')}
            >
              {labels.appStore}
            </Button>
          )}
          {project.links?.github && (
            <Button
              variant="secondary"
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              onClick={() => window.open(project.links?.github, '_blank')}
            >
              {labels.github}
            </Button>
          )}
          {project.links?.website && (
            <Button
              variant="outline"
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              onClick={() => window.open(project.links?.website, '_blank')}
            >
              {labels.website}
            </Button>
          )}
        </div>

        {/* Tags Section */}
        {project.tags && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-text/70 mb-3">{labels.hashtags}</h3>
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
        {additionalFeatures && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-text/70 mb-3">{labels.additionalFeatures}</h3>
            <div className="text-text/80 leading-relaxed">
              {additionalFeatures.split('\n').map((line, index) => {
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
  );
}
