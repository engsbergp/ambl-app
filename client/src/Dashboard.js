import React from 'react'
import { useSpotifyTokens } from './context/SpotifyContext'

export default function Dashboard() {

  const { code } = useSpotifyTokens();

  return <div>{code}</div>
}
