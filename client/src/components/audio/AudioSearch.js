import React from 'react';
import RecentAudioCard from './RecentAudioCard';
import RelatedAudioCard from './RelatedAudioCard';
import SpotifySearchResults from './SpotifySearchResults';
import { useSpotifySearch } from '../../context/AudioContext';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function AudioSearch() {

  //spotify search in audio context
  const { spotifySearch, setSpotifySearch, spotifySearchResults } = useSpotifySearch('');

  return (
    <div className='col70'> 
      <input 
        placeholder="song, artist, album" 
        type="text" 
        className="searchbar select-white ml1 mb1"
        onChange={e => setSpotifySearch(e.target.value)}
      />
      <div className="overflow-y">

      {/* search covers up the default audio homepage */}
      {
        spotifySearch ?
        <>
          {spotifySearchResults.map(track => (
            <SpotifySearchResults key={ track.uri } track={track}/>
          ))}
          <button className="btn-round-sm btn-grey" style={{margin:"auto"}}>
            Load More Songs
          </button>
          <div className="spacer1"/>
        </>

        :
        <>
        <RecentAudioCard/>
        <RelatedAudioCard/>        
        </>
      }

 
      </div>
    </div>
  )
}

export default AudioSearch
