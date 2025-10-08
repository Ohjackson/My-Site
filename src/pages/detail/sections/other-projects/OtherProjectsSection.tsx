import { ArrowUpRightIcon } from '@/shared/components/icons';

interface Project {
  id: string;
  name: {
    ko: string;
    en: string;
    ja: string;
  };
  summary: {
    ko: string;
    en: string;
    ja: string;
  };
  tags: {
    ko: string[];
    en: string[];
    ja: string[];
  };
}

interface OtherProjectsSectionProps {
  projects: Project[];
  currentProjectId: string;
  language: 'ko' | 'en' | 'ja';
  onProjectClick: (projectId: string) => void;
}

export function OtherProjectsSection({ 
  projects, 
  currentProjectId, 
  language, 
  onProjectClick 
}: OtherProjectsSectionProps) {
  // 현재 프로젝트를 제외한 다른 프로젝트들만 필터링
  const otherProjects = projects.filter(project => project.id !== currentProjectId);

  if (otherProjects.length === 0) return null;

  const content = {
    ko: { title: "다른 프로젝트" },
    en: { title: "Other Projects" },
    ja: { title: "他のプロジェクト" }
  };

  const handleProjectClick = (projectId: string) => {
    // 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // 프로젝트 클릭 핸들러 호출
    onProjectClick(projectId);
  };

  return (
    <section className="py-16 pb-24 bg-bg">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        
        <div className="overflow-x-auto px-8">
          <div className="flex gap-6 py-4" style={{ width: 'max-content' }}>
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer flex-shrink-0 w-80 bg-surface rounded-2xl border border-border p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-400/80 hover:shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Project Icon */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-gray-200/50 flex-shrink-0">
                    <img 
                      src={`./src/pages/main/sections/projects/data/${project.id}/icon.png`}
                      alt={`${project.name[language]} icon`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className = 'w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg border border-gray-200/50 flex-shrink-0';
                          parent.innerHTML = `<span class="text-lg font-bold text-white">${project.name[language].charAt(0)}</span>`;
                        }
                      }}
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-text transition group-hover:text-primary-500 mb-2">
                      {project.name[language]}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {project.summary[language]}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags[language].slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags[language].length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted/20 text-muted">
                        +{project.tags[language].length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Button */}
                  <div className="flex items-center gap-2 text-primary-500 group-hover:text-primary-600 transition-colors">
                    <span className="text-sm font-medium">
                      {language === 'ko' ? '자세히 보기' : 
                       language === 'en' ? 'View Details' : 
                       '詳細を見る'}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
