import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DarkIcon, LightIcon, Button, ButtonTheme,
} from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.Clear}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
