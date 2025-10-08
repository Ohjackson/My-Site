export interface ProjectChallenge {
  problem: string;
  solution: string;
  result: string;
}

export interface ProjectDetailContent {
  subtitle: string;
  overview: {
    purpose: string;
    target: string;
    value: string;
  };
  responsibilities: string[];
  highlights: string[];
  challenge: ProjectChallenge;
  metrics: string[];
}

export interface ProjectTranslation {
  name: string;
  summary: string;
  period: string;
  role: string;
  tags: string[];
  features: string[];
  detail: ProjectDetailContent;
}

export interface ProjectsContent {
  title: string;
  labels: {
    period: string;
    role: string;
    coreFeatures: string;
  };
  viewDetails: string;
  items: Record<string, ProjectTranslation>;
}

export type ProjectId = keyof ProjectsContent['items'];
