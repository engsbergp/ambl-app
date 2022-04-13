import React from 'react';
import PlayBrowser from '../components/play/PlayBrowser';
import PlayBin from '../components/play/PlayBin';
import { useThemeStyles } from '../context/ThemeContext';
import { useAuthData } from '../context/AuthContext';
import { useSpotifyTokens } from '../context/SpotifyContext';
import '../scss/pages/play.scss';

function Play() {

  const { bg1, text1 } = useThemeStyles();
  const { user } = useAuthData();

  const { isFooter } = useSpotifyTokens();

  return (
    <div className={isFooter? "page-footer" : "page"} style={{background:bg1, color:text1}}>
      { 
        user ? 
          <div>
            <PlayBrowser/>
            <PlayBin/>
          </div>    
        :
          <div style={{fontSize:"1.5rem", padding:"3rem", textAlignLast:"center"}}className="col100">
            <p className="pt3"> Please connect wallet to view your NFT collection</p>
          </div>

      }
    </div>
  )
}

export default Play