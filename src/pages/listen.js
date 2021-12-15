import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ListenControls from '../components/listen/ListenControls';
import ListenPlaylists from '../components/listen/ListenPlaylists';
import ListenBrowser from '../components/listen/ListenBrowser';
import './listen.scss';

function Listen() {
  return (
    <div className="listen">
      <Header/>
        <ListenControls/>
        <div className="listen-body">
          <ListenPlaylists/>
          <ListenBrowser/>
        </div>
      <Footer/>
    </div>
  )
}

export default Listen
