import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    // This effect will run when the 'theme' state changes
    localStorage.setItem('theme', theme);
  }, [theme]); // Only re-run the effect if theme changes

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark') 
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
