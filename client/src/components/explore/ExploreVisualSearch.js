import React from 'react';
import { useThemeStyles } from '../../context/ThemeContext'

function ExploreVisualSearch() {
  
  const { bg1, bg2, text2 } = useThemeStyles();

  return (
    <div className="col100">
      <input 
        placeholder="Search Visuals" 
        type="text" 
        className="searchbar select-white ml1 mb1"
        // onChange={e => setExploreSearchResults(e.target.value)}
      />
      <div className="overflow-y">

        <div className="spacer-grey" style={{background:bg1, color:text2}}>
          <h2> VISUAL GENRES </h2>

        </div>

        <div className="spacer-white" style={{background:bg2, color:text2}}>
          <h2> VISUAL PLAYLISTS </h2>

        </div>
        <div className="spacer-grey" style={{background:bg1, color:text2}}>
          <h2> VISUAL ARTISTS </h2>

        </div>

        <div className="spacer-white" style={{background:bg2, color:text2}}>
          <h2> VISUAL MOODS </h2>

        </div>
      </div>
    </div>
  )
}

export default ExploreVisualSearch
