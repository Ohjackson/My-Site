import type { ProjectId, ProjectTranslation } from '../types';
import { ArrowUpRightIcon } from '@/shared/components/icons';

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
  return (
    <article className="group rounded-3xl border border-border bg-surface p-8 text-text shadow-sm transition hover:-translate-y-1 hover:border-primary-400/80 hover:shadow-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-text transition group-hover:text-primary-500">
            {project.name}
          </h3>
          <p className="mt-2 text-base text-muted">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-primary-500/80">
          {project.tags.map((tag, index) => (
            <span key={index} className="rounded-full border border-primary-200/60 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
              {labels.period}
            </div>
            <div className="mt-1 text-sm text-text/90">{project.period}</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
              {labels.role}
            </div>
            <div className="mt-1 text-sm text-text/90">{project.role}</div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted/80">
            {labels.coreFeatures}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span aria-hidden className="text-primary-500">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => onSelect(project.id)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-primary-400 hover:text-primary-500 sm:w-auto"
        >
          {viewLabel}
          <ArrowUpRightIcon className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
};
