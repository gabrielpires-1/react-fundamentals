import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  console.log('Stored theme:', theme);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);  

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <Layout 
        onToogleTheme={handleToogleTheme}
        selectedTheme={theme}  
      />
    </ThemeProvider>  
  );
};

export default App;
