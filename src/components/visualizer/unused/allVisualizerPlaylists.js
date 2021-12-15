import React from 'react';
import playlists from './visualizerPlaylistData.json';
import * as AiIcons from 'react-icons/ai';

const allVisualizerPlaylists = () => {
  return (
    <div className="vis-ctrl-plst">
      <div className="vis-ctrl-plst-topbar">
        <p className="vis-ctrl-plst-label">YOUR PLAYLISTS</p>
        <input className="vis-ctrl-plst-search" label="search playlists"/>
        <AiIcons.AiOutlineSearch className="vis-ctrl-plst-search-icon"/>
      </div>
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
  )
}

export default allVisualizerPlaylists
