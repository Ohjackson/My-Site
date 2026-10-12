import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';

import { MainPage } from '@/pages/main/MainPage';
import { ProjectDetailPage } from '@/pages/detail/ProjectDetailPage';

// 메인은 경로 기준으로 위치를 기억해서 상세에서 돌아오면 보던 위치로 복원하고,
// 상세는 방문마다 새 키를 써서 항상 맨 위에서 시작한다
const RootLayout = () => (
  <>
    <ScrollRestoration getKey={(location) => (location.pathname === '/' ? location.pathname : location.key)} />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
