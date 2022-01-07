import React from 'react';
import PlayControls from '../components/play/PlayControls';
import PlaySidebar from '../components/play/PlaySidebar';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import '../scss/utility/body.scss';
import '../scss/utility/typography.scss';
import '../scss/utility/colors.scss';
import '../scss/pages/play.scss';

function Play() {
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