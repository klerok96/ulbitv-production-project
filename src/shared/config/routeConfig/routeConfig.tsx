import React from "react";
import { RouteProps } from "react-router-dom";

const AboutPage = React.lazy(() => import("pages/AboutPage/ui/AboutPage"));
const MainPage = React.lazy(() => import("pages/MainPage/ui/MainPage"));

export enum AppRoutes {
  Main = "main",
  About = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
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
};
