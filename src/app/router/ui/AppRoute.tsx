import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

const AboutPage = React.lazy(() => import("pages/AboutPage/ui/AboutPage"));
const MainPage = React.lazy(() => import("pages/MainPage/ui/MainPage"));

export const AppRouter: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(RouteConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
