interface AchievementListProps {
  title: string;
  items: string[];
}

export const AchievementList = ({ title, items }: AchievementListProps) => (
  <div className="space-y-4 p-6">
    <div className="text-lg font-semibold uppercase tracking-widest text-primary-500/80">{title}</div>
    <ul className="space-y-3 text-base leading-6 text-muted">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span aria-hidden className="text-primary-500">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
