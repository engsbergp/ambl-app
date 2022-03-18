import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useThemeStyles } from '../../context/ThemeContext';
import { useSpotifyTokens } from '../../context/SpotifyContext'
import { useSpotifyPlayer } from '../../context/AudioContext'

function FooterControls() {

  const { trackUri } = useSpotifyPlayer();
  const { accessToken } = useSpotifyTokens();

  const { bg1, text1 } = useThemeStyles();

  const [play, setPlay] = useState();

  useEffect(() => setPlay(true), [trackUri])

  if (!trackUri) return null;
  return (
    <div className='col30 gap1'>

      <SpotifyPlayer 
        token={ accessToken }
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={ trackUri ? [trackUri] : [] }
        styles={{ bgColor:bg1, color:text1, trackNameColor:text1, trackArtistColor:text1 }}
      />

    </div>
  )
}

export default FooterControls
