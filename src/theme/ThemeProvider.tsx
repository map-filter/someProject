import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  const deafultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={deafultProps}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;