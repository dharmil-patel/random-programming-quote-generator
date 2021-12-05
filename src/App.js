import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js'

const StyledApp = styled.div`
  color : ${(props) => props.theme.fontColor}
`;

function App() {

  let themeName = localStorage.getItem('themeName');
  const [theme, setTheme] = useState(themeName);

  const themeToggler = () => {
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('themeName', 'dark');
    }
    else if(theme === 'dark'){
      setTheme('light');
      localStorage.setItem('themeName', 'light');
    }
    else{ //default mode is light so when toggle button click for first time local storage value is null,so set dark mode 
      setTheme('dark');
      localStorage.setItem('themeName', 'dark');
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
             <button onClick={() => themeToggler()}>Click here to change theme</button>
 </StyledApp>
    </ThemeProvider>


  );
}

export default App;