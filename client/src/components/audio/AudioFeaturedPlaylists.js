import React from 'react';
import { useSpotifyPlaylists } from '../../context/AudioContext'; 
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';
import '../../scss/utility/actions.scss';

export default function AudioFeaturedPlaylists() {
  
  const { featuredPlaylists } = useSpotifyPlaylists();
  
  return (
    <>
      <p>Featured Playlists</p>
      <div className="card-container gap-sm">
        {featuredPlaylists.map(featured => 
          <div className="card-md text-sm p1 pointer" key={featured.id}>
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
