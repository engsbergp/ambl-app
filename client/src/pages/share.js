import React from 'react';
import ShareLatest from '../components/share/ShareLatest';
import ShareTrending from '../components/share/ShareTrending';
import ShareConnections from '../components/share/ShareConnections';
import '../scss/utility/body.scss';
import '../scss/utility/typography.scss';
import '../scss/colors/colors.scss';
import '../scss/pages/share.scss';

function Share() {
  return (
    <div className="share active">
        <ShareLatest/>
        <ShareTrending/>
        <ShareConnections/>
    </div>
  )
}

export default Share
