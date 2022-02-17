import React from 'react';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function ExploreVisualSearch() {
  return (
    <div className="col100">
      <input 
        placeholder="Search Visuals" 
        type="text" 
        className="searchbar select-white ml1 mb1"
        // onChange={e => setExploreSearchResults(e.target.value)}
      />
      <div className="overflow-y">

        <div className="spacer-grey">
          <h2> VISUAL GENRES </h2>

        </div>

        <div className="spacer-white">
          <h2> VISUAL PLAYLISTS </h2>

        </div>
        <div className="spacer-grey">
          <h2> VISUAL ARTISTS </h2>

        </div>

        <div className="spacer-white">
          <h2> VISUAL MOODS </h2>

        </div>
      </div>
    </div>
  )
}

export default ExploreVisualSearch
