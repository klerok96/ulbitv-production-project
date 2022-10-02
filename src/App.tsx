import React, { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

const AboutPage = React.lazy(() => import("./pages/AboutPage/AboutPage"));
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
