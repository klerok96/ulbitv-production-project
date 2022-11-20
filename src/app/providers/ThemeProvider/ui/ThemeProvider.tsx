import { PropsWithChildren, useMemo, useState } from 'react';
import { defaultTheme, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps extends PropsWithChildren {
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
