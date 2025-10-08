interface HistoryItemProps {
  period: string;
  activity: string;
  description: string;
}

export const HistoryItem = ({ period, activity, description }: HistoryItemProps) => (
  <div className="grid gap-6 border-b border-border py-6 last:border-0 md:grid-cols-[0.3fr,0.7fr]">
    <div className="text-sm font-medium text-text">{period}</div>
    <div>
      <div className="text-base font-semibold text-text">{activity}</div>
      {description ? <p className="mt-1 text-sm text-muted">{description}</p> : null}
    </div>
  </div>
);
