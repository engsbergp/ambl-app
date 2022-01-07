import React from 'react'
import * as FaIcons from 'react-icons/fa';
import '../../scss/utility/body.scss'

export default function ConnectSpotify() {

  const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7a3d7b5b794244a58b1ee120f9fc3989&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private&user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
  
  return (
    <>
      <a href={ SPOTIFY_AUTH_URL } className="btn-circle-sm btn-grey gap-sm navlink">
        Connect Spotify 
        <FaIcons.FaSpotify/>
      </a>
    </>
  )
}
