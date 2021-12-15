import React from 'react';
import PlayControls from '../components/play/PlayControls';
import PlaySidebar from '../components/play/PlaySidebar';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import './play.scss';

function Play() {
  return (
    <div className="play">
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