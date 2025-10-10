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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/project/:projectId',
    element: <ProjectDetailPage />,
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
