import React from 'react';
import { useFooterNav } from '../../context/UtilityContext';
import AudioQueue from '../audio/AudioQueue';
import AudioSearch from '../audio/AudioSearch';

function FooterPlayer(props) {  

  const { footerMenuActive } = useFooterNav();
  return (
    <>
      {/* FOOTER AUDIO */}
      <div className={footerMenuActive === 'audio' ? "footer-pages" : "footer-pages remove"}>
        <AudioQueue />
        <AudioSearch />
      </div>
      
      {/* FOOTER VIDEO */}
      <div className={footerMenuActive === 'video' ? "footer-pages" : "footer-pages remove"}>
        <h1>FOOTER VIDEO</h1>
      </div>
      
      {/* FOOTER RECENT */}
      <div className={footerMenuActive === 'recent' ? "footer-pages" : "footer-pages remove"}>
        <h1>FOOTER RECENT</h1>
      </div>
      
      {/* FOOTER COLLECTION */}
      <div className={footerMenuActive === 'collection' ? "footer-pages" : "footer-pages remove"}>
        <h1>FOOTER COLLECTION</h1>
      </div>

    </>
  )
}

export default FooterPlayer
