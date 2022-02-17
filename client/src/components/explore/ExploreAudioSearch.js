import React from 'react';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function ExploreAudioSearch() {
  return (
    <div className="col100">
      <input 
        placeholder="Search Music" 
        type="text" 
        className="searchbar select-white ml1 mb1"
        // onChange={e => setExploreSearchResults(e.target.value)}
      />
      <div className="overflow-y">

        <div className="spacer-grey">
          <h2> AUDIO GENRES </h2>

        </div>

        <div className="spacer-white">
          <h2> AUDIO PLAYLISTS </h2>

        </div>
        <div className="spacer-grey">
          <h2> AUDIO ARTISTS </h2>

        </div>

        <div className="spacer-white">
          <h2> AUDIO MOODS </h2>

        </div>
      </div>
    </div>
  )
}

export default ExploreAudioSearch
