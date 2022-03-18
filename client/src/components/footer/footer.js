import React, { useState } from 'react';
import { useFooterNav } from '../../context/UtilityContext';
import { useThemeStyles } from '../../context/ThemeContext';
import FooterPlayer from './FooterPlayer';
import FooterControls from './FooterControls';
import FooterPlayhead from './FooterPlayhead';
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/footer.scss';
import '../../scss/components/footer-mobile.scss';


const Footer = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  
  function expandFooter() {
    setIsExpanded(!isExpanded);
  }
  
  const { bg1, text1, btn } = useThemeStyles();
  
  const { footerMenuActive, setFooterMenuActive } = useFooterNav();

  return (
    <div className='footer' style={{background:bg1}}>
      <FooterPlayhead/>

      <div className='footer-top'>

        {/* footer player controls 30% width */}

        <FooterControls/>

        {/* navigation 60% width */}
      
        <div className={isExpanded ? 'footer-nav' : 'footer-nav hide'}>
          <button
            onClick={() => setFooterMenuActive('audio')} 
            style={{background:bg1, color:text1}}
            activeClassName="active"
            className={footerMenuActive === 'audio' ? "footer-button-active" : 'footer-button'}
          >
            Audio
          </button>
          <button 
            onClick={() => setFooterMenuActive('video')} 
            style={{background:bg1, color:text1}}
            activeClassName="active"
            className={footerMenuActive === 'video' ? "footer-button-active" : 'footer-button'}
          >
            Video
          </button>
          <button 
            onClick={() => setFooterMenuActive('recent')} 
            style={{background:bg1, color:text1}}
            activeClassName="active"
            className={footerMenuActive === 'recent' ? "footer-button-active" : 'footer-button'}
          >
            Recent
          </button>
          <button 
            onClick={() => setFooterMenuActive('collection')} 
            style={{background:bg1, color:text1}}
            activeClassName="active"
            className={footerMenuActive === 'collection' ? "footer-button-active" : 'footer-button'}
          >
            Collection
          </button>
          <button className="footer-button-mobile">
            <FaIcons.FaMusic/>
          </button>
          <button className="footer-button-mobile">
            <FaIcons.FaVideo/>
          </button>
          <button className="footer-button-mobile">
            <FaIcons.FaNewspaper/>
          </button>
          <button className="footer-button-mobile">
            <FaIcons.FaStar/>
          </button>
        </div>

        {/* expander 10% width */}

        <div className="col10 center">
          <button 
            onClick={expandFooter} 
            className="btn-icon-round"
            style={{background:btn, color:text1}}
          >
            <FaIcons.FaBars className="footer-icon"/>
          </button> 
        </div>

      </div>

      {/* footer menu contents */}

      <div style={{background:bg1, color:text1}} className={isExpanded ? 'footer-player' : 'footer-player hide'}>
        <FooterPlayer/>
      </div>
    </div>
  );
}

export default Footer;
