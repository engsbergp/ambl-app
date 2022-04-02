import React from 'react';
import ShareLatest from '../components/share/ShareLatest';
import ShareTrending from '../components/share/ShareTrending';
import ShareConnections from '../components/share/ShareConnections';
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/share.scss';

function Share() {

  const { bg1, text1 } = useThemeStyles();

  return (
    <div className="page" style={{background:bg1, color:text1}}>
        <ShareLatest/>
        <ShareTrending/>
        <ShareConnections/>
    </div>
  )
}

export default Share
