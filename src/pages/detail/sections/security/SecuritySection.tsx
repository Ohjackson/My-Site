interface SecurityItem {
  title: string;
  threat: string;
  decision: string;
  tradeoff: string;
}

interface SecurityData {
  securityDesign?: {
    ko: SecurityItem[];
    en: SecurityItem[];
    ja: SecurityItem[];
  };
}

interface SecuritySectionProps {
  data: SecurityData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function SecuritySection({ data, language, backgroundColor }: SecuritySectionProps) {
  const items = data.securityDesign?.[language];
  if (!items?.length) return null;

  const content = {
    ko: { title: '보안 설계', threat: '위협', decision: '선택', tradeoff: '트레이드오프' },
    en: { title: 'Security Design', threat: 'Threat', decision: 'Decision', tradeoff: 'Trade-off' },
    ja: { title: 'セキュリティ設計', threat: '脅威', decision: '判断', tradeoff: 'トレードオフ' }
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-lg text-text mb-4">{item.title}</h3>
              <div className="space-y-3 text-text/80 leading-relaxed">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                    {content[language].threat}
                  </div>
                  <p>{item.threat}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                    {content[language].decision}
                  </div>
                  <p>{item.decision}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                    {content[language].tradeoff}
                  </div>
                  <p>{item.tradeoff}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
