import React from 'react';
import { useSpotifyRecentlyPlayed } from '../../context/AudioContext'; 
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';
import '../../scss/utility/actions.scss';

export default function AudioRecents() {

  const { recentlyPlayed } = useSpotifyRecentlyPlayed();
  
  return (
    <>
      <p className="mt1">Recently Played</p>
      <div className="card-container gap-sm width-100">
        {recentlyPlayed.map(recents =>   
          <div className="card-md text-sm p1 pointer" key={recents.track.id}>
            <img src={recents.track.album.images[1].url} className="width-100"/>
            <p className="ellipsis width-100">{recents.track.name}</p>
            <p className="ellipsis width-100">{recents.track.artists[0].name}</p>
          </div>                 
          )
        }
      </div>
    </>
  )
}
