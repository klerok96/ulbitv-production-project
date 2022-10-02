import { PropsWithChildren, useMemo, useState } from "react";
import { defaultTheme, Theme, ThemeContext } from "./ThemeContext";

const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
