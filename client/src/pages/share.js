import React from 'react';
// import ShareContact from '../components/share/ShareContact';
// import ShareTwitter from '../components/share/ShareTwitter';
// import ShareInstagram from '../components/share/ShareInstagram';
import { useAuthData } from '../context/AuthContext';
import { useThemeStyles } from '../context/ThemeContext'
import { useSpotifyTokens } from '../context/SpotifyContext';
import '../scss/pages/share.scss';
import * as FaIcons from 'react-icons/fa';

function Share() {

  const { bg1, text1, btn } = useThemeStyles();

  const { isFooter } = useSpotifyTokens();

  const { user } = useAuthData();

  return (
    <div className={isFooter? "page-footer" : "page"} style={{background:bg1, color:text1}}>
            { 
        user ? 
          <div style={{fontSize:'1.5rem'}} className="col100 center gap2">
            <p>Philip Engsberg | ambl.eth</p>
            <div className="row center gap2">
              <a style={{fontSize:'3rem', color:text1}} href="https://instagram.com/phil_engsberg">
                <FaIcons.FaInstagram style={{background:btn, padding:"5px", borderRadius:"10px", cursor:"pointer"}}/>
              </a>
              
              <a style={{fontSize:'3rem', color:text1}} href="https://twitter.com/philengsberg">
                <FaIcons.FaTwitter style={{background:btn, padding:"5px", borderRadius:"10px", cursor:"pointer"}}/>
              </a>
              <a style={{fontSize:'3rem', color:text1}} href="https://linktr.ee/ambientlandscapes">
                <FaIcons.FaTree style={{background:btn, padding:"5px", borderRadius:"10px", cursor:"pointer"}}/>
              </a>
              <a style={{fontSize:'3rem', color:text1}} href="mailto:philengsberg@gmail.com">
                <FaIcons.FaEnvelope style={{background:btn, padding:"5px", borderRadius:"10px", cursor:"pointer"}}/>
              </a>
            </div>
          </div>    
        :
          <div style={{fontSize:"1.5rem", padding:"3rem", textAlignLast:"center"}}className="col100">
            <p className="pt3"> Please connect wallet to connect with the team </p>
          </div>

      }




        {/* <ShareInstagram/>
        <ShareTwitter/>
        <ShareContact/> */}
    </div>
  )
}

export default Share
