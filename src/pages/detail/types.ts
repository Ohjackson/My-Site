import type { OverviewData } from './sections/overview';
import type { ArchitectureData } from './sections/architecture';
import type { FeaturesData } from './sections/features';
import type { PreviewData } from './sections/preview';
import type { SecurityData } from './sections/security';
import type { TechStackData } from './sections/techstack';
import type { ResultsData } from './sections/results';
import type { MLOpsStoryData } from './sections/mlops-story';
import type { AdditionalData } from './sections/additional';

export type Language = 'ko' | 'en' | 'ja';

export type Localized<T = string> = Record<Language, T>;

// 프로젝트 JSON마다 들어 있는 섹션이 달라서 섹션 데이터는 모두 선택값이다
export interface ProjectDetailData
  extends ArchitectureData,
    FeaturesData,
    SecurityData,
    ResultsData {
  name: Localized;
  summary: Localized;
  role: Localized;
  workPeriod?: Localized;
  releaseDate?: Localized;
  teamSize?: Localized;
  contribution?: Localized;
  serviceStatus?: Localized;
  platform?: Localized;
  tags?: Localized<string[]>;
  additionalFeatures?: Partial<Localized>;
  links?: {
    github?: string;
    appStore?: string;
    website?: string;
  };
  overviewStory?: OverviewData['overviewStory'];
  mlopsStory?: MLOpsStoryData;
  preview_screenshots?: PreviewData;
  stackAndArchitecture?: ArchitectureData['stackAndArchitecture'] & Partial<TechStackData>;
  results?: ResultsData['results'];
  additional_links?: AdditionalData;
}
