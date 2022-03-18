import React, { useEffect } from 'react'
import { useActiveTheme, useThemeStyles } from '../../context/ThemeContext';
import { themes } from '../../scss/colors/themes.json';

function ThemePicker(props) {

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
    setBg1( activeTheme.bg );
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
  }, [ activeTheme ])

  return (
    <div className='header-themewrapper no-gap'>

        {themes.map(themes =>  
          <button 
            className={props.themeExpanded ? "btn-icon-circle no-margin p1 show" : "btn-icon-circle no-margin p1 remove"}
            style={{ background:themes.styles.bg, margin:'10px' }}
            onClick={() => setActiveTheme( themes.styles )} 
          />               
          )
        }
    </div>
  )
}

export default ThemePicker
