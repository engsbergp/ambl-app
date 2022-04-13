import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const StyleContext = React.createContext();

export function useActiveTheme() {
  return useContext(ThemeContext);
}

export function useThemeStyles() {
  return useContext(StyleContext)
}

export function ThemeProvider({ children }) {
  
  const [ activeTheme, setActiveTheme ] = useState(
    {
      bg1: "#1B264F",
      bg2: "#274690",
      btn: "#576CA8",
      btnHover: "#485987",
      card: "#111831",
      name: "dark mode",
      scrollbar: "#F9F9F9",
      scrollbarHover: "#F5F3F5",
      text1: "#F5F3F5",
      text1Active: "#fff",
      text2: "#141210",
      text2Active: "#302B27"
    }
    );
  
  const [ themeName, setThemeName ] = useState('dark mode');
  const [ bg1, setBg1 ] = useState('#1B264F');
  const [ bg2, setBg2 ] = useState('#274690');
  const [ btn, setBtn ] = useState('#576CA8');
  const [ btnHover, setBtnHover ] = useState('#485987');
  const [ text1, setText1 ] = useState('#F5F3F5');
  const [ text1Active, setText1Active ] = useState('#fff');
  const [ text2, setText2 ] = useState('#141210');
  const [ text2Active, setText2Active ] = useState('#302B27');
  const [ scrollbar, setScrollbar ] = useState('#F9F9F9');
  const [ scrollbarHover, setScrollbarHover ] = useState('#F5F3F5');
  const [ card, setCard ] = useState('#111831');

  return(
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      <StyleContext.Provider value={{ bg1, setBg1, 
                                      bg2, setBg2,
                                      btn, setBtn, 
                                      themeName, setThemeName,
                                      btnHover, setBtnHover,
                                      text1, setText1,
                                      text1Active, setText1Active,
                                      text2, setText2,
                                      text2Active, setText2Active,
                                      scrollbar, setScrollbar,
                                      scrollbarHover, setScrollbarHover,
                                      card, setCard
                                    }}>
        {children}
      </StyleContext.Provider>
    </ThemeContext.Provider>
  )
}