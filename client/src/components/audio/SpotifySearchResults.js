import React from 'react'
import { useSpotifyPlayer } from '../../context/AudioContext'


export default function SpotifySearchResults({ track }) {

  const { setTrackUri } = useSpotifyPlayer();

  return (
    <div 
      className="row m1 pl1 pr1 align-center pointer btn-transparent" 
      style={{ overflowY: 'auto'}}
      onClick={() => setTrackUri(track.uri)}
    >
      <img src={track.albumUrl} alt={track.album} className="thumbnail" />
      <div className="flex column ml1">
        <p className="active">{track.title}</p>
        <p>{track.artist}</p>
      </div>
    </div>
  )
}
