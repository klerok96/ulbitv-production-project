import { useTheme, Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { DarkIcon, LightIcon, Button, ThemeButton } from "shared/ui";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.Clear}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
