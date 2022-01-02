import React from 'react';
import ShareLatest from '../components/share/ShareLatest';
import ShareTrending from '../components/share/ShareTrending';
import ShareConnections from '../components/share/ShareConnections';
import '../scss/pages/share.scss';

function Share() {
  return (
    <div className="share">
        <ShareLatest/>
        <ShareTrending/>
        <ShareConnections/>
    </div>
  )
}

export default Share
