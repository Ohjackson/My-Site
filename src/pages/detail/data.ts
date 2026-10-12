import type { ProjectDetailData } from './types';

import tangochoData from '../main/sections/projects/data/Tangocho/project.json';
import loventureData from '../main/sections/projects/data/Loventure/project.json';
import routiqData from '../main/sections/projects/data/Routiq/project.json';
import aconData from '../main/sections/projects/data/Acon/project.json';
import popcoData from '../main/sections/projects/data/POPCO/project.json';
import daonData from '../main/sections/projects/data/Daon/project.json';
import wiroData from '../main/sections/projects/data/Wiro/project.json';
import mySiteData from '../main/sections/projects/data/MySite/project.json';
import healthfinbotData from '../main/sections/projects/data/healthFinBot/project.json';
import ideaverifyprogramData from '../main/sections/projects/data/IdeaVerifyProgram/project.json';
import cocoData from '../main/sections/projects/data/coco/project.json';
import fedstockData from '../main/sections/projects/data/FedStock/project.json';
import uritomoData from '../main/sections/projects/data/Uritomo/project.json';
import sururiData from '../main/sections/projects/data/Sururi/project.json';
// import inkdueData from '../main/sections/projects/data/InkDue/project.json';

// JSON import 타입은 프로젝트마다 모양이 달라서 공통 타입으로 맞춘다
export const projectDetails = {
  tangocho: tangochoData,
  loventure: loventureData,
  routiq: routiqData,
  acon: aconData,
  popco: popcoData,
  daon: daonData,
  wiro: wiroData,
  mysite: mySiteData,
  healthfinbot: healthfinbotData,
  ideaverifyprogram: ideaverifyprogramData,
  coco: cocoData,
  fedstock: fedstockData,
  uritomo: uritomoData,
  sururi: sururiData,
  // inkdue: inkdueData,
} as unknown as Record<string, ProjectDetailData>;

export const getProjectDetail = (projectId: string) =>
  projectDetails[projectId] ?? projectDetails.tangocho;
