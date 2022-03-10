import React, { useEffect } from 'react'
import { useActiveTheme, useThemeStyles } from '../../context/ThemeContext';
import { themes } from '../../scss/colors/themes.json';

function ThemePicker() {

  const { activeTheme, setActiveTheme } = useActiveTheme();
  const { setBg1, setBtn, setThemeName } = useThemeStyles();
  
  useEffect( () => {
    setBg1( activeTheme.bg );
    setBtn ( activeTheme.btn );
    setThemeName ( activeTheme.name );
  }, [ activeTheme ])

  return (
    <div className='header-themewrapper no-gap'>

        {themes.map(themes =>  
          <button 
            style={{ background:themes.styles.bg, margin:'10px' }}
            onClick={() => setActiveTheme( themes.styles )} 
            className="btn-icon-circle no-margin p1"
          />               
          )
        }
    </div>
  )
}

export default ThemePicker
