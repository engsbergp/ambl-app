import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PlayControls from '../components/play/PlayControls';
import PlaySidebar from '../components/play/PlaySidebar';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import './play.scss';

function Play() {
  return (
    <div className="play">
      <Header/>
        <PlayControls/>
        <div className="play-body">
          <PlayBrowser/>
          <PlayBin/>
          <PlaySidebar/>
        </div>
      <Footer/>
    </div>
  )
}

export default Play