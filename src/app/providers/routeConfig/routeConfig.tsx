import React from 'react';
import { RouteProps } from 'react-router-dom';

const AboutPage = React.lazy(() => import('pages/AboutPage'));
const MainPage = React.lazy(() => import('pages/MainPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));

export enum AppRoutes {
  Main = 'main',
  About = 'about',
  NotFound = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NotFound]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
