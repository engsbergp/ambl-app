import React from 'react';
import { useActiveTheme, useThemeStyles } from '../../context/ThemeContext';

function PlayControls() {

  // const { activeTheme, setActiveTheme } = useActiveTheme();
  const { bg1, setBg1 } = useThemeStyles();

  return (
    <div style={{ background:bg1 }} className="play-controls">
      <p>play controls</p>
    </div>
  )
}

export default PlayControls
