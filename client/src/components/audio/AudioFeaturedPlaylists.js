import React from 'react';
import { useSpotifyPlaylists } from '../../context/AudioContext'; 
import { useThemeStyles } from '../../context/ThemeContext'

export default function AudioFeaturedPlaylists() {
  
  const { featuredPlaylists } = useSpotifyPlaylists();
  const { card, text1 } = useThemeStyles();
  
  return (
    <>
      <p style={{color:text1}}>Featured Playlists</p>
      <div className="card-container gap-sm">
        {featuredPlaylists.map(featured => 
          <div style={{background:card, color:text1}} className="card-md text-sm p1 pointer" key={featured.id}>
            <img src={featured.images[0].url} className="width-100"/>
            <p className="ellipsis width-100">{featured.name}</p>
            <p className="ellipsis width-100">{featured.description}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
