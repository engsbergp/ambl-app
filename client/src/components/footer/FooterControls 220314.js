import React, { useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useSpotifyTokens } from '../../context/SpotifyContext'
import { useThemeStyles } from '../../context/ThemeContext';
import * as FaIcons from 'react-icons/fa';


function FooterControls() {

  // const [isPlaying, setIsPlaying] = useState(false);

  // function pauseMusic() {
  //   setIsPlaying(!isPlaying);
  // }

  // function playMusic() {
  //   setIsPlaying(!isPlaying);
  // }
  const { trackUri } = useSpotifyPlayer();
  const { accessToken } = useSpotifyTokens();
  const { text1 } = useThemeStyles();

  if (!accessToken) return null
  
  return (
    <div className='col30 gap1'>


      <SpotifyPlayer 
        token={ accessToken }
        showSaveIcon
        uris={ trackUri ? [ trackUri ] : [] }
      />












      {/* OLD PLAYER. MAYBE THERES A WAY TO PLAY TRACKS BASED OFF THE SPOTIFY URI */}


        {/* <div className="footer-controls">
          <FaIcons.FaAngleLeft className="icon-md"/>
          {
            isPlaying ? 
              <button 
                onClick={pauseMusic} 
                className="btn-icon-circle btn-grey"
              >
                <FaIcons.FaPause/>
              </button>
             :
              <button 
                onClick={playMusic} 
                className="btn-icon-circle btn-grey"
              >
                <FaIcons.FaPlay/>
              </button>
          }
          <FaIcons.FaAngleRight className="icon-md"/>
        </div>
        <div className="footer-info gap1" >
          <div className="footer-artwork"></div>
          <div className='footer-metadata' style={{color:text1}}>
            <p>0:00 / 0:00</p>
            <p>artist - track</p>
          </div>
          <div className="footer-metadata-mobile" style={{color:text1}}>
            <p>artist</p>
            <p>song</p>
          </div>  
        </div> */}
    </div>
  )
}

export default FooterControls
