import type { ProjectId, ProjectTranslation } from '../types';
import { ArrowUpRightIcon } from '@/shared/components/icons';
import { projectIcons } from '@/assets/icons';

interface ProjectCardProps {
  project: ProjectTranslation & { id: ProjectId };
  labels: {
    period: string;
    role: string;
    coreFeatures: string;
  };
  viewLabel: string;
  onSelect: (id: ProjectId) => void;
}

export const ProjectCard = ({ project, labels, viewLabel, onSelect }: ProjectCardProps) => {
  const handleCardClick = () => {
    console.log('ProjectCard clicked:', project.id);
    onSelect(project.id);
  };

  return (
    <article 
      onClick={handleCardClick}
      className="group flex flex-col rounded-3xl border border-border bg-surface p-8 text-text shadow-sm transition hover:-translate-y-1 hover:border-primary-400/80 hover:shadow-2xl cursor-pointer"
    >
      <div className="flex-1 space-y-6">
        {/* Project Icon */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 flex-shrink-0">
            <img 
              src={projectIcons[project.id as keyof typeof projectIcons]}
              alt={`${project.name} icon`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.className = 'w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-2xl border border-gray-200/50 flex-shrink-0';
                  parent.innerHTML = `<span class="text-xl font-bold text-white">${project.name.charAt(0)}</span>`;
                }
              }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-text transition group-hover:text-primary-500">
              {project.name}
            </h3>
            <p className="mt-2 text-base text-muted">{project.summary}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-primary-500/80">
          {project.tags.map((tag, index) => (
            <span key={index} className="rounded-full border border-primary-200/60 px-3 py-1">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
              {labels.period}
            </div>
            <div className="mt-1 text-sm text-text/90">{project.period}</div>
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
              {labels.role}
            </div>
            <div className={`mt-1 text-sm ${
              project.role.toLowerCase().includes('full-cycle solo project') || 
              project.role.toLowerCase().includes('full cycle solo project') ||
              project.role.toLowerCase().includes('풀사이클 솔로 프로젝트') ||
              project.role.toLowerCase().includes('フルサイクルソロプロジェクト')
                ? 'text-emerald-600 font-semibold' 
                : 'text-text/90'
            }`}>
              {project.role}
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
            {labels.coreFeatures}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-text">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span aria-hidden className="text-primary-500">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // 부모 카드 클릭 이벤트 방지
          console.log('ProjectCard button clicked:', project.id);
          onSelect(project.id);
        }}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-primary-400 hover:text-primary-500 sm:w-auto"
      >
        {viewLabel}
        <ArrowUpRightIcon className="h-4 w-4" />
      </button>
    </article>
  );
};
