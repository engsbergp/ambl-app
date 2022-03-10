import React from 'react'
import * as FaIcons from 'react-icons/fa';

export default function ConnectSpotify() {


  // production build change this link, and server file.
  // const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7a3d7b5b794244a58b1ee120f9fc3989&response_type=code&redirect_uri=https://ambl.io&scope=streaming%20user-read-email%20user-read-private&user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
  const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f95d203d997545f18e89491cb629f748&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20playlist-read-private%20user-top-read%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-private%20user-read-playback-position"
  
  return (
    <>
      <a href={ SPOTIFY_AUTH_URL } className="btn-circle-sm btn-grey gap-sm navlink">
        Connect Spotify 
        <FaIcons.FaSpotify/>
      </a>
    </>
  )
}
