import React, { useEffect } from 'react'
import { useActiveTheme, useThemeStyles } from '../../context/ThemeContext';
import { themes } from '../../scss/colors/themes.json';

export default function Themes(props) {

  const { activeTheme, setActiveTheme } = useActiveTheme();
  const { setBg1, 
          setBg2, 
          setBtn, 
          setBtnHover,
          setText1,
          setText1Active,
          setText2,
          setText2Active,
          setScrollbar,
          setScrollbarHover,
          setCard,
          setThemeName 
        
        } = useThemeStyles();
  
  useEffect( () => {
    setBg1( activeTheme.bg1 );
    setBg2( activeTheme.bg2 );
    setBtn ( activeTheme.btn );
    setBtnHover ( activeTheme.btnHover );
    setText1 ( activeTheme.text1 );
    setText1Active ( activeTheme.text1Active );
    setText2 ( activeTheme.text2 );
    setText2Active ( activeTheme.text2Active );
    setScrollbar ( activeTheme.scrollbar );
    setScrollbarHover ( activeTheme.scrollbarHover );
    setCard ( activeTheme.card );
    setThemeName ( activeTheme.name );
  }, [  activeTheme, 
        setBg1, 
        setBg2, 
        setBtn, 
        setBtnHover,
        setText1,
        setText1Active,
        setText2,
        setText2Active,
        setScrollbar,
        setScrollbarHover,
        setCard,
        setThemeName  
      ])

  return (
    <>
      {themes.map((themes, index) =>
          <button 
            style={{ width:"50px", height:"50px", borderRadius:"100vw", border:"none", background:themes.styles.bg1, margin:'5px' }}
            key={index}
            onClick={() => setActiveTheme( themes.styles )} 
          >
            <p key={index} style={{color:themes.styles.text1}}> {themes.name} </p>  
          </button>           
      )}
    </>
  )
}


