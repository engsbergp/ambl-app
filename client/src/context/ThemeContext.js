import React, { useState, useContext, useEffect } from "react";
import themes from '../scss/colors/themes.json';

const ThemeContext = React.createContext();
const StyleContext = React.createContext();

export function useActiveTheme() {
  return useContext(ThemeContext);
}

export function useThemeStyles() {
  return useContext(StyleContext)
}

export function ThemeProvider({ children }) {
  
  const [ activeTheme, setActiveTheme ] = useState(['']);
  const [ themeName, setThemeName ] = useState('');
  const [ bg1, setBg1 ] = useState('');
  const [ bg2, setBg2 ] = useState('');
  const [ btn, setBtn ] = useState('');
  const [ btnHover, setBtnHover ] = useState('');
  const [ textLight, setTextLight ] = useState('');
  const [ textLightActive, setTextLightActive ] = useState('');
  const [ textDark, setTextDark ] = useState('');
  const [ textDarkActive, setTextDarkActive ] = useState('');
  const [ scrollbar, setScrollbar ] = useState('');
  const [ scrollbarHover, setScrollbarHover ] = useState('');
  const [ card, setCard ] = useState('');

  useEffect( () => {
    setThemeName('light mode');
    setBg1('#E1E5F2');
    setBg2('#555');
    setBtn('#BFDBF7');
    setBtnHover('#8EAECE');
    setTextLight('#FFF');
    setTextLightActive('#AAA');
    setTextDark('#011118');
    setTextDarkActive('#02202A');
    setScrollbar('#CED1DD');
    setScrollbarHover('#DEDFE2');
    setCard('#C6E3FF');
  }, [])


  return(
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      <StyleContext.Provider value={{ bg1, setBg1, 
                                      bg2, setBg2,
                                      btn, setBtn, 
                                      themeName, setThemeName,
                                      btnHover, setBtnHover,
                                      textLight, setTextLight,
                                      textLightActive, setTextLightActive,
                                      textDark, setTextDark,
                                      textDarkActive, setTextDarkActive,
                                      scrollbar, setScrollbar,
                                      scrollbarHover, setScrollbarHover,
                                      card, setCard
                                    }}>
        {children}
      </StyleContext.Provider>
    </ThemeContext.Provider>
  )
}