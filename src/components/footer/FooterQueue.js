import React from 'react';
import songData from './songData.json';

function FooterQueue() {

  return (
    <div className="queue">
      <div className="queue-header">
        <select name="playlists" className='queue-select'>
          <option value="player queue">Player Queue</option>
          <option value="discover weekly">Discover Weekly</option>
          <option value="dance forever">Dance Forever</option>
          <option value="positively smooth">Positively Smooth</option>
        </select>
      </div>
      <div className="queued">
        {songData.songs.map((item, index) => {
            return(
              <button key={index} className="queued-button">
                <div className="queued-img"></div>
                <p key={index} className="queued-name">{item.name}</p>
                <p key={index} className="queued-artist">{item.artist}</p>
                <p key={index} className="queued-length">{item.length}</p>
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default FooterQueue
