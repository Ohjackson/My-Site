interface AchievementListProps {
  title: string;
  items: string[];
}

export const AchievementList = ({ title, items }: AchievementListProps) => (
  <div className="space-y-4 rounded-2xl border border-border bg-surface/90 p-6 shadow-sm">
    <div className="text-xs font-semibold uppercase tracking-widest text-primary-500/80">{title}</div>
    <ul className="space-y-3 text-sm leading-6 text-muted">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span aria-hidden className="text-primary-500">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
