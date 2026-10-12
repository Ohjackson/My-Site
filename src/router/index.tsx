import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '@/pages/main/MainPage';
import { ProjectDetailPage } from '@/pages/detail/ProjectDetailPage';

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
