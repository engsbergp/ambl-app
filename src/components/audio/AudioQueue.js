import React from 'react';
import { useSpotifyPlaylists, useSongData, useSelectedPlaylist } from '../../context/AudioContext';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function AudioQueue() {

  const { songData } = useSongData();
  const { spotifyPlaylists } = useSpotifyPlaylists();
  const { selectedPlaylist, setSelectedPlaylist } = useSelectedPlaylist();
  
  const songId = (() => {
    let i = 0;
    return () => i++;
  })

  return (
        <div className="col30">
            <select 
              className='select-md select-white'
              value={selectedPlaylist} 
              onChange={e => setSelectedPlaylist(e.target.value)} 
            >
              {spotifyPlaylists.map((item, index) => 
                <option key={index} value={item.value}>{item.name}</option>)}
            </select>
            <p>{selectedPlaylist}</p>
          <div className="overflow-y mt1">
            {songData.songs.map((item, index) => {
                return(
                  <button key={item.name + songId} className="btn-list btn-transparent">
                    <div className="thumbnail bg-white"></div>
                    <p className="text-primary">{item.name}</p>
                    <p className="text-primary">{item.artist}</p>
                    <p className="text-primary">{item.length}</p>
                  </button>
                )
              })}
          </div>
        </div>
  )
}

export default AudioQueue
