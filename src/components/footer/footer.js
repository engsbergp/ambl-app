import React, {useState} from 'react';
import FooterPlayer from './FooterPlayer';
import FooterPlayback from './FooterPlayback';
import FooterPlayhead from './FooterPlayhead';
import FooterNav from './FooterNav';
import * as FaIcons from 'react-icons/fa';
import './footer-top.scss';


const Footer = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  function expandFooter() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className='footer'>
      <FooterPlayhead/>

      {/* playback controls 30% width */}
      <div className='footer-top'>
        <FooterPlayback/>

        {/* navigation 60% width */}
        <div className={isExpanded ? 'footer-nav show' : 'footer-nav'}>
          <FooterNav/>
        </div>

        {/* expander 10% width */}
        <div className="footer-expander">
          <button 
            onClick={expandFooter} 
            className="footer-bars"
          >
            <FaIcons.FaBars className="footer-icon"/>
          </button>
        </div>  
      </div>

      {/* footer menu contents */}
      <div className={isExpanded ? 'footer-player show' : 'footer-player'}>
        <FooterPlayer/>
      </div>
    </div>
  );
}

export default Footer;
