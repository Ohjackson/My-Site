interface MetricsRow {
  metric: string;
  definition: string;
  collection: string;
}

interface MetricsData {
  metricsPlan?: {
    ko: MetricsRow[];
    en: MetricsRow[];
    ja: MetricsRow[];
  };
}

interface MetricsSectionProps {
  data: MetricsData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function MetricsSection({ data, language, backgroundColor }: MetricsSectionProps) {
  const rows = data.metricsPlan?.[language];
  if (!rows?.length) return null;

  const content = {
    ko: { title: 'Metrics(측정 계획/수집 위치)', metric: '지표', definition: '정의', collection: '수집 위치(예)' },
    en: { title: 'Metrics (Plan & Collection)', metric: 'Metric', definition: 'Definition', collection: 'Collection (Example)' },
    ja: { title: 'Metrics（測定計画/収集箇所）', metric: '指標', definition: '定義', collection: '収集箇所（例）' }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted">
                  {content[language].metric}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted">
                  {content[language].definition}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted">
                  {content[language].collection}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-border/60 last:border-b-0">
                  <td className="px-4 py-4 align-top font-semibold text-text whitespace-nowrap">
                    {row.metric}
                  </td>
                  <td className="px-4 py-4 align-top text-text/80">{row.definition}</td>
                  <td className="px-4 py-4 align-top text-text/80">{row.collection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

