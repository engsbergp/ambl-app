import React from 'react';
import { useSpotifyRecommendedArtists } from '../../context/AudioContext'; 
import { useThemeStyles } from '../../context/ThemeContext'

export default function AudioRecommendedArtists() {
  
  const { card, text1 } = useThemeStyles();
  const { recommendedArtists } = useSpotifyRecommendedArtists();
  
  return (
    <>
      <p style={{color:text1}}>Recommended Artists</p>
      <div className="card-container gap-sm">
        {recommendedArtists.map(recommended => 
          <div style={{background:card, color:text1}} className="card-md text-sm p1 pointer" key={recommended.id}>
            <img src={recommended.images[0].url} alt={ recommended.name } className="width-100"/>
            <p className="ellipsis width-100">{recommended.name}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
