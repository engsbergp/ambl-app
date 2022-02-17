import React from 'react';
import { useSpotifyPlaylists } from '../../context/AudioContext'; 
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';

export default function AudioFeaturedPlaylists() {
  
  const { featuredPlaylists } = useSpotifyPlaylists();
  
  return (
    <>
      <p>Featured Playlists</p>
      <div className="card-container gap-sm">
        {featuredPlaylists.map(featured => 
          <div className="card-md text-sm p1 pointer" key={featured.id}>
            <img src={featured.images[0].url} className="width-100"/>
            <p>{featured.name}</p>
            <p>{featured.description}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
