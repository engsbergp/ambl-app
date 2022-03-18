import React, { useState, useContext, useEffect } from "react";

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
  const [ text1, setText1 ] = useState('');
  const [ text1Active, setText1Active ] = useState('');
  const [ text2, setText2 ] = useState('');
  const [ text2Active, setText2Active ] = useState('');
  const [ scrollbar, setScrollbar ] = useState('');
  const [ scrollbarHover, setScrollbarHover ] = useState('');
  const [ card, setCard ] = useState('');

  useEffect( () => {
    setThemeName('light mode');
    setBg1('#E1E5F2');
    setBg2('#555');
    setBtn('#BFDBF7');
    setBtnHover('#8EAECE');
    setText1('#011118');
    setText1Active('#02202A');
    setText2('#FFF');
    setText2Active('#AAA');
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