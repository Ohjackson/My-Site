import { ArrowUpRightIcon } from '@/shared/components/icons';
import { projectIcons } from '@/assets/icons';
import { useEffect, useRef } from 'react';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (otherProjects.length === 0) return null;

  // 무한 루프를 위해 프로젝트들을 3번 복제 (양방향 스크롤 지원)
  const duplicatedProjects = [...otherProjects, ...otherProjects, ...otherProjects];

  // 무한 스크롤 로직
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // 초기 위치를 중앙 세트의 시작으로 설정
    const singleSetWidth = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const singleSetWidth = scrollWidth / 3; // 원본 프로젝트들의 너비
      
      // 우측 끝에 도달했을 때 (세 번째 세트의 끝)
      if (scrollLeft >= singleSetWidth * 2) {
        // 두 번째 세트의 같은 위치로 순간이동
        scrollContainer.scrollTo({ left: scrollLeft - singleSetWidth, behavior: 'auto' });
      }
      // 좌측 끝에 도달했을 때 (첫 번째 세트의 시작)
      else if (scrollLeft <= 0) {
        // 두 번째 세트의 끝으로 순간이동
        scrollContainer.scrollTo({ left: singleSetWidth * 2 - 1, behavior: 'auto' });
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    ko: { title: "다른 프로젝트" },
    en: { title: "Other Projects" },
    ja: { title: "他のプロジェクト" }
  };

  const handleProjectClick = (projectId: string) => {
    // 프로젝트 클릭 핸들러 먼저 호출
    onProjectClick(projectId);
    // 약간의 지연 후 상단으로 스크롤 (페이지 전환 후)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-16 pb-24 bg-bg">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        
        <div className="overflow-x-auto px-8 scrollbar-hide" ref={scrollContainerRef}>
          <div className="flex gap-6 py-4" style={{ width: 'max-content' }}>
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer flex-shrink-0 w-80 bg-surface rounded-2xl border border-border p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-400/80 hover:shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Project Icon */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-gray-200/50 flex-shrink-0">
                    <img 
                      src={projectIcons[project.id as keyof typeof projectIcons]}
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
