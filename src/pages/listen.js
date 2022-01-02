import React from 'react';
import ListenControls from '../components/listen/ListenControls';
import ListenPlaylists from '../components/listen/ListenPlaylists';
import ListenBrowser from '../components/listen/ListenBrowser';
import '../scss/pages/listen.scss';

function Listen() {
  return (
    <div className="listen">
      <ListenControls/>
      <div className="listen-body">
        <ListenPlaylists/>
        <ListenBrowser/>
      </div>
    </div>
  )
}

export default Listen
