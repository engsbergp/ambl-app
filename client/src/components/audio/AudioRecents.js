import React from 'react';
import { useSpotifyRecentlyPlayed, useSpotifyPlayer } from '../../context/AudioContext'; 
import { useThemeStyles } from '../../context/ThemeContext'

export default function AudioRecents() {
  
  const { setTrackUri } = useSpotifyPlayer();
  const { recentlyPlayed } = useSpotifyRecentlyPlayed();
  const { card, text1 } = useThemeStyles();

  return (
    <>
      <p style={{color:text1}} className="mt1">Recently Played</p>
      <div className="card-container gap-sm width-100">
        {recentlyPlayed.map((recents, index) =>   
          <div 
            style={{background:card, color:text1}} 
            className="card-md text-sm p1 pointer" 
            key={index}
            onClick={() => setTrackUri(recents.track.uri)}
          >
            <img src={recents.track.album.images[1].url} alt={recents.track.name} className="width-100"/>
            <p className="ellipsis width-100">{recents.track.name}</p>
            <p className="ellipsis width-100">{recents.track.artists[0].name}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
