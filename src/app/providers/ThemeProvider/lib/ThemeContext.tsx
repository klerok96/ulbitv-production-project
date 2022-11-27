import { createContext } from 'react';

export enum Theme {
  Light = 'app-light-theme',
  Dark = 'app-dark-theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.Light;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});
