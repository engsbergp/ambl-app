import React from 'react';
import PlayControls from '../components/play/PlayControls';
import PlaySidebar from '../components/play/PlaySidebar';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import { useThemeStyles } from '../context/ThemeContext';
import '../scss/pages/play.scss';

function Play() {

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="page" style={{background:bg1, color:text1}}>
      <PlayControls/>
      <div>
        <PlayBrowser/>
        <PlayBin/>
        <PlaySidebar/>
      </div>
    </div>
  )
}

export default Play