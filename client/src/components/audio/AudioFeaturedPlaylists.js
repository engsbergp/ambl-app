import React from 'react';
import { useSpotifyPlaylists } from '../../context/AudioContext'; 
import { useThemeStyles } from '../../context/ThemeContext'

export default function AudioFeaturedPlaylists() {
  
  const { featuredPlaylists } = useSpotifyPlaylists();
  const { card, text1 } = useThemeStyles();
  
  return (
    <>
      <p className="ml4 mt1 mb1" style={{color:text1}}>Featured Playlists</p>
      <div className="card-container gap-sm">
        {featuredPlaylists.map(featured => 
          <div style={{background:card, color:text1}} className="card-md text-sm p1 pointer" key={featured.id}>
            <img src={featured.images[0].url} alt={featured.name} className="width-100"/>
            <p className="ellipsis width-100">{featured.name}</p>
            <p className="ellipsis width-100">{featured.description}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
