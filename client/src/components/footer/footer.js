import React, { useState } from 'react';
import { useThemeStyles } from '../../context/ThemeContext';
import { useSpotifyTokens } from '../../context/SpotifyContext';
import FooterPlayer from './FooterPlayer';
import FooterControls from './FooterControls';
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/footer.scss';
// import '../../scss/components/footer-mobile.scss';


const Footer = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  
  function expandFooter() {
    setIsExpanded(!isExpanded);
  }
  
  const { bg1, text1, btn } = useThemeStyles();
  
  
  const { isFooter } = useSpotifyTokens();


  return (

    <>
    { 
      isFooter &&

    <div className='footer' style={{background:bg1}}>

      <div className='footer-top center'>

        {/* footer player controls 30% width */}

        <FooterControls/>

        {/* navigation 60% width */}
      

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
    }
    </>
  );
}

export default Footer;
