import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
};
