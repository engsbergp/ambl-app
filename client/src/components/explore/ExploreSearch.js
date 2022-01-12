import React from 'react';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function ExploreSearch() {
  return (
    <div className="col30">
      <input 
        placeholder="Search NFT artists, playlists, titles" 
        type="text" 
        className="searchbar select-white ml1 mb1"
        // onChange={e => setExploreSearchResults(e.target.value)}
      />
      <div className="overflow-y">

        <div className="spacer-grey">
          <h2> GENRES </h2>

        </div>

        <div className="spacer-white">
          <h2> COLLECTIONS </h2>

        </div>
        <div className="spacer-grey">
          <h2> ARTISTS </h2>

        </div>

        <div className="spacer-white">
          <h2> MOODS </h2>

        </div>
      </div>
    </div>
  )
}

export default ExploreSearch
