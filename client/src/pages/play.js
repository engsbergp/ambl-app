import React from 'react';
import PlayControls from '../components/play/PlayControls';
import PlaySidebar from '../components/play/PlaySidebar';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import '../scss/pages/play.scss';
import { useActiveTheme, useThemeStyles } from '../context/ThemeContext';

function Play() {

  const { activeTheme, setActiveTheme } = useActiveTheme();
  const { bg1, setBg1 } = useThemeStyles();

  return (
    <div className="play active">
      <PlayControls/>
      <div className="play-body">
        <PlayBrowser/>
        <PlayBin/>
        <PlaySidebar/>
      </div>
    </div>
  )
}

export default Play