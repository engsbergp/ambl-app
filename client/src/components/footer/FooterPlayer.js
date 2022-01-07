import React from 'react';
import AudioQueue from '../audio/AudioQueue';
import AudioSearch from '../audio/AudioSearch';

function FooterPlayer(props) {  
  return (
    <>
      {/* FOOTER AUDIO */}
      <div className="footer-pages">
        <AudioQueue />
        <AudioSearch />
      </div>
      {/* FOOTER VISUAL */}
      {/* FOOTER RECENT */}
      {/* FOOTER COLLECTION */}
    </>
  )
}

export default FooterPlayer
