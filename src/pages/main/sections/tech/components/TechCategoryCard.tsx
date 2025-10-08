import { TechCategory } from '../data/categories';

interface TechCategoryCardProps {
  category: TechCategory;
  label: string;
}

export const TechCategoryCard = ({ category, label }: TechCategoryCardProps) => {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/70">
      <div className="text-xs font-semibold uppercase tracking-widest text-blue-500/80">{label}</div>
      <div className="flex flex-wrap gap-2">
        {category.badges.map((badge, index) => (
          <img key={index} src={badge} alt="tech badge" className="h-7" loading="lazy" />
        ))}
      </div>
    </div>
  );
};
