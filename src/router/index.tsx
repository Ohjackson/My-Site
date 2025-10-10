import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '@/pages/main/MainPage';
import { ProjectDetailPage } from '@/pages/detail/ProjectDetailPage';

// 프로젝트 ID 목록
const PROJECT_IDS = [
  'acon',
  'daon', 
  'wiro',
  'mysite',
  'routiq',
  'popco',
  'tangocho',
  'loventure',
  'ideaverifyprogram',
  'healthfinbot'
];

// 동적 라우트 생성
const projectRoutes = PROJECT_IDS.map(projectId => ({
  path: `/project/${projectId}`,
  element: <ProjectDetailPage />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  ...projectRoutes,
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
