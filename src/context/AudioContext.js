import React, { useContext, useState } from "react";
import songData from '../components/audio/songData.json';

const SpotifyPlaylistContext = React.createContext();
const SongDataContext = React.createContext();
const SelectedPlaylistContext = React.createContext();


export function useSpotifyPlaylists() {
  return useContext(SpotifyPlaylistContext);
}

export function useSongData() {
  return useContext(SongDataContext);
}

export function useSelectedPlaylist() {
  return useContext(SelectedPlaylistContext);
}


export function AudioProvider({ children }) {

  const [ selectedPlaylist, setSelectedPlaylist ] = useState('');

  const spotifyPlaylists = [
    {value:100, name:'Player Queue'},
    {value:101, name:'Discover Weekly'},
    {value:102, name:'Dance Forever'},
    {value:103, name:'Positively Smooth'}
  ];

  return(
    <SpotifyPlaylistContext.Provider value={{ spotifyPlaylists }}>
      <SongDataContext.Provider value={{ songData }}>
        <SelectedPlaylistContext.Provider value={{ selectedPlaylist, setSelectedPlaylist }}>
        { children }
        </SelectedPlaylistContext.Provider>
      </SongDataContext.Provider>
    </SpotifyPlaylistContext.Provider>
  )
};