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

  if (!accessToken) return null;
  return (
    <div className='col80 gap1'>

      <SpotifyPlayer 
        id="spotifyPlayer"
        token={ accessToken }
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false);
          console.log(state);
        }}
        play={play}
        uris={ trackUri ? [trackUri] : [] }
        styles={{ height:"2.75rem", bgColor:bg1, color:text1, trackNameColor:text1, trackArtistColor:text1 }}
      />
    </div>
  )
}

export default FooterControls
