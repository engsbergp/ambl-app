import React from 'react'
import '../../pages/visualizer.scss';
import * as AiIcons from 'react-icons/ai';

const allVisualizations = (props) => {
  return (
    <div className="visualizer-controls-visualizations">
      <div className="visualizer-controls-visualizations-title">
        <p className="visualizer-controls-visualizations-label">VISUALIZATIONS</p>
        <input className="visualizer-controls-visualizations-search" label="search playlists"/>
        <AiIcons.AiOutlineSearch className="visualizer-controls-visualizations-search-icon"/>
      </div>
      <div className="visualizer-controls-visualizations-all">

      </div>
    </div>
  )
}

export default allVisualizations
