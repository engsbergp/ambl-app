import React from 'react';
import { useSpotifyPlaylists, useSelectedPlaylist, useSpotifyPlayer } from '../../context/AudioContext';

function AudioQueue() {

  const { spotifyPlaylists } = useSpotifyPlaylists();
  const { setTrackUri } = useSpotifyPlayer();
  const { selectedPlaylist, setSelectedPlaylist, selectedPlaylistTracks } = useSelectedPlaylist();
  

  return (
        <div className="col30">

          {/* DISPLAY USERS PLAYLISTS IN DROPDOWN MENU */}

            <select 
              className='select-md select-white'
              value={selectedPlaylist} 
              onChange={e => setSelectedPlaylist(e.target.value)} 
              // selectedPlaylsit is the playlist ID
              // sent to AudioContext, run getPlaylist function  
            >
              {spotifyPlaylists.map(playlist => 
                <option key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </option>)
              }
            </select>
          <div className="overflow-y mt1 pb1">
            {selectedPlaylistTracks.map(item => {

              const smallestAlbumImage = item.track.album.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              }, item.track.album.images[0])

              return(
                <div 
                  key={item.track.id} 
                  className="row pr1 align-center pointer btn-transparent"
                  onClick={() => setTrackUri(item.track.uri)}
                >
                  <img src={smallestAlbumImage.url} alt={item.track.name} className="thumbnail"/>
                  <div className="flex column ml1">
                    <p className="active">{item.track.name}</p>
                    <p>{item.track.artists[0].name}</p>
                    {/* <p>{item.track.uri}</p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
  )
}

export default AudioQueue
