import { ArrowUpRightIcon } from '@/shared/components/icons';
import { projectIcons } from '@/assets/icons';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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

const TAG_GAP_PX = 8;

interface OtherProjectCardProps {
  project: Project;
  language: 'ko' | 'en' | 'ja';
  onClick: () => void;
}

function measureOverflowWidth(hiddenCount: number) {
  const badge = document.createElement('span');
  badge.className = 'absolute invisible whitespace-nowrap rounded-full px-2 py-1 text-xs';
  badge.textContent = `+${hiddenCount}`;
  document.body.appendChild(badge);
  const width = badge.offsetWidth;
  badge.remove();
  return width;
}

function getVisibleTagCount(tagWidths: number[], containerWidth: number) {
  if (!containerWidth || tagWidths.length === 0) return tagWidths.length;

  let usedWidth = 0;
  let visibleCount = 0;

  for (const width of tagWidths) {
    const nextWidth = visibleCount === 0 ? width : usedWidth + TAG_GAP_PX + width;

    if (nextWidth > containerWidth) break;

    usedWidth = nextWidth;
    visibleCount += 1;
  }

  while (visibleCount < tagWidths.length && visibleCount > 0) {
    const hiddenCount = tagWidths.length - visibleCount;
    const overflowWidth = measureOverflowWidth(hiddenCount);
    const widthWithOverflow = usedWidth + TAG_GAP_PX + overflowWidth;

    if (widthWithOverflow <= containerWidth) break;

    visibleCount -= 1;
    usedWidth = tagWidths
      .slice(0, visibleCount)
      .reduce((total, width, index) => total + width + (index > 0 ? TAG_GAP_PX : 0), 0);
  }

  return visibleCount;
}

function OtherProjectCard({ project, language, onClick }: OtherProjectCardProps) {
  const tags = project.tags[language];
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const tagMeasureRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [visibleTagCount, setVisibleTagCount] = useState(tags.length);

  useLayoutEffect(() => {
    const updateVisibleTags = () => {
      const containerWidth = tagsContainerRef.current?.clientWidth ?? 0;
      const tagWidths = tags.map((_, index) => tagMeasureRefs.current[index]?.offsetWidth ?? 0);
      setVisibleTagCount(getVisibleTagCount(tagWidths, containerWidth));
    };

    updateVisibleTags();

    const container = tagsContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(updateVisibleTags);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [tags]);

  const hiddenTagCount = Math.max(tags.length - visibleTagCount, 0);

  return (
    <div
      onClick={onClick}
      className="group relative flex w-80 flex-shrink-0 self-stretch cursor-pointer rounded-2xl border border-border bg-surface p-6 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/80 hover:shadow-[0_16px_40px_rgba(37,99,235,0.20)]"
    >
      <div className="flex h-full w-full flex-col">
        <div className="mb-4 h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200/50 shadow-lg">
          <img
            src={projectIcons[project.id as keyof typeof projectIcons]}
            alt={`${project.name[language]} icon`}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.className = 'mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200/50 bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg';
                parent.innerHTML = `<span class="text-lg font-bold text-white">${project.name[language].charAt(0)}</span>`;
              }
            }}
          />
        </div>

        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold text-text transition group-hover:text-primary-500">
            {project.name[language]}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {project.summary[language]}
          </p>
        </div>

        <div className="pt-6">
          <div
            ref={tagsContainerRef}
            className="flex h-7 items-center gap-2 overflow-hidden"
          >
            {tags.slice(0, visibleTagCount).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-xs text-primary-700"
              >
                {tag}
              </span>
            ))}
            {hiddenTagCount > 0 && (
              <span className="whitespace-nowrap rounded-full bg-muted/20 px-2 py-1 text-xs text-muted">
                +{hiddenTagCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pt-4 text-primary-500 transition-colors group-hover:text-primary-600">
            <span className="text-sm font-medium">
              {language === 'ko' ? '자세히 보기' :
               language === 'en' ? 'View Details' :
               '詳細を見る'}
            </span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute opacity-0">
        {tags.map((tag, index) => (
          <span
            key={`measure-${tag}-${index}`}
            ref={(element) => {
              tagMeasureRefs.current[index] = element;
            }}
            className="whitespace-nowrap rounded-full px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
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
    <section className="py-16 pb-20 bg-bg">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        
        <div className="overflow-x-auto px-8 pb-8 scrollbar-hide" ref={scrollContainerRef}>
          <div className="flex items-stretch gap-6 py-4 pb-8" style={{ width: 'max-content' }}>
            {duplicatedProjects.map((project, index) => (
              <OtherProjectCard
                key={`${project.id}-${index}`}
                project={project}
                language={language}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
