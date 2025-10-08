import { Card, CardHeader, CardTitle } from '../../components/Card';

interface OverviewData {
  purpose: {
    ko: string;
    en: string;
    ja: string;
  };
  target: {
    ko: string;
    en: string;
    ja: string;
  };
  value: {
    ko: string;
    en: string;
    ja: string;
  };
}

interface OverviewSectionProps {
  data: OverviewData;
  language: 'ko' | 'en' | 'ja';
}

export function OverviewSection({ data, language }: OverviewSectionProps) {
  if (!data) return null;

  const content = {
    ko: {
      title: "프로젝트 개요",
      purpose: "목적",
      target: "타겟",
      value: "가치"
    },
    en: {
      title: "Project Overview",
      purpose: "Purpose",
      target: "Target",
      value: "Value"
    },
    ja: {
      title: "プロジェクト概要",
      purpose: "目的",
      target: "ターゲット",
      value: "価値"
    }
  };

  return (
    <section className="py-20 px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">{content[language].title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{content[language].purpose}</CardTitle>
            </CardHeader>
            <p className="text-text/90">{data.purpose[language]}</p>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{content[language].target}</CardTitle>
            </CardHeader>
            <p className="text-text/90">{data.target[language]}</p>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{content[language].value}</CardTitle>
            </CardHeader>
            <p className="text-text/90">{data.value[language]}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}