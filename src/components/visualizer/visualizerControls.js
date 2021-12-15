import React from 'react'
import playlists from './visualizerPlaylistData.json';
import Arrows from '../misc/arrows';
import * as AiIcons from 'react-icons/ai';

const visualizerControls = (props) => {
  
  return (
    <div className="vis-ctrl">
      <Arrows />

    {/* ALL VISUALIZATIONS */}
      {/* TOPBAR */}
      <div className="vis-ctrl-vis">
        <div className="vis-ctrl-vis-topbar">
          <p className="vis-ctrl-vis-label">VISUALIZATIONS</p>
          <input className="vis-ctrl-vis-search" label="search playlists"/>
          <AiIcons.AiOutlineSearch className="vis-ctrl-vis-search-icon"/>
        </div>
        {/* ALL VISUALIZATIONS */}
        <div className="vis-ctrl-vis-all">
          {props.visData.map((item, index) => {
            return(
              <button onClick={() => props.changeVisualization(item.link)} className="vis-ctrl-vis-vis">
                <iframe className="vis-ctrl-vis-thumb" frameborder="0" scrolling="no" width="32" height="32" src={item.link}/>
                <p>{item.name}</p>
                <p>{item.curator}</p>
                <p>___ views</p>
              </button>
            )
          })}
        </div>
      </div>

    {/* ALL PLAYLISTS */}
      {/* TOPBAR */}
      <div className="vis-ctrl-plst">
        <div className="vis-ctrl-plst-topbar">
          <p className="vis-ctrl-plst-label">YOUR PLAYLISTS</p>
          <input className="vis-ctrl-plst-search" label="search playlists"/>
          <AiIcons.AiOutlineSearch className="vis-ctrl-plst-search-icon"/>
        </div>
        {/* ALL PLAYLISTS */}
        <div className="vis-ctrl-plst-all">
          {playlists.playlists.map((item, index) => {
            return(
              <button key={index} className="vis-ctrl-plst-play">
                <p>{item.name}</p>
                <p>{item.curator}</p>
              </button>
            )
          })}
        </div>
      </div>

    {/* CONTROL PALATE*/}
      {/* TOPBAR */}
      <div className="vis-ctrl-palate">
        <div className="vis-ctrl-palate-topbar">
          <p className="vis-ctrl-palate-label">CONTROLS PALATE</p>
        </div>
      {/* ALL CONTROLS */}
        <div className="vis-ctrl-all">
          
        </div>    
      </div>
    </div>
  )
}

export default visualizerControls
