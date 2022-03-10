import React from 'react'
import { useSpotifyUserData } from '../../context/AudioContext';
import * as FaIcons from 'react-icons/fa';

export default function SpotifyConnected() {

  const { userName } = useSpotifyUserData();

  return (
    <>
      <div className="btn-circle-sm btn-grey gap-sm navlink">
        {userName} 
        <FaIcons.FaSpotify/>
      </div>
    </>
  )
}