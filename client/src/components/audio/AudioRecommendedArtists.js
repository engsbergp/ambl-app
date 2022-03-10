import React from 'react';
import { useSpotifyRecommendedArtists } from '../../context/AudioContext'; 
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';
import '../../scss/utility/actions.scss';

export default function AudioRecommendedArtists() {
  
  const { recommendedArtists } = useSpotifyRecommendedArtists();
  
  return (
    <>
      <p>Recommended Artists</p>
      <div className="card-container gap-sm">
        {recommendedArtists.map(recommended => 
          <div className="card-md text-sm p1 pointer" key={recommended.id}>
            <img src={recommended.images[0].url} alt={ recommended.name } className="width-100"/>
            <p className="ellipsis width-100">{recommended.name}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
