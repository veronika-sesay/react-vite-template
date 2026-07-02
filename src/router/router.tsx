import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
