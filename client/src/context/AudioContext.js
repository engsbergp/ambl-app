import React, { useContext, useState, useEffect } from "react";
import songData from '../components/audio/songData.json';
import { useSpotifyTokens } from "./SpotifyContext";
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
  clientId: "7a3d7b5b794244a58b1ee120f9fc3989",
})

const SpotifyPlaylistContext = React.createContext();
const SongDataContext = React.createContext();
const SelectedPlaylistContext = React.createContext();
const SpotifySearchContext = React.createContext();
const SpotifyPlayerContext = React.createContext();

export function useSpotifyPlayer() {
  return useContext(SpotifyPlayerContext);
}

export function useSpotifyPlaylists() {
  return useContext(SpotifyPlaylistContext);
}

export function useSongData() {
  return useContext(SongDataContext);
}

export function useSelectedPlaylist() {
  return useContext(SelectedPlaylistContext);
}

export function useSpotifySearch() {
  return useContext(SpotifySearchContext)
}


export function AudioProvider({ children }) {

  const [ selectedPlaylist, setSelectedPlaylist ] = useState('');
  const [ spotifySearch, setSpotifySearch ] = useState('');
  const [ spotifySearchResults, setSpotifySearchResults ] = useState([]);
  const [ trackPlaying, setTrackPlaying ] = useState('');
  const [ spotifyPlaylists, setSpotifyPlaylists ] = useState([]);

  const { accessToken } = useSpotifyTokens();

  //set access token to spotify-web-api-node
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken])


  //search for tracks, artists, playlists
  useEffect(() => {
    //display nothing in search if no search, or no access token
    if (!spotifySearch) return setSpotifySearchResults([]);
    if (!accessToken) return;

    let cancel = false; 

    //get selected parameters from return      
    spotifyApi.searchTracks(spotifySearch).then(res => {
      //only call effect if we are not typing
      if (cancel) return; 
      
      setSpotifySearchResults(
        res.body.tracks.items.map(track => {
          console.log(track)
          //choose smallest album image
          const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])

          return{
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
            album: track.album.name
          }
          
        })
        
      )
    })

    return () => cancel = true;
  }, [spotifySearch, accessToken])



  // function selectAudio() {

  // }

  // useEffect(() => {
  //   axios('https://api.spotify.com/v1/me/player/recently-played', {
  //     method: 'GET',
  //     headers: 
  //   })
  // })

  // const spotifyPlaylists = [
  //   {value:100, name:'Player Queue'},
  //   {value:101, name:'Discover Weekly'},
  //   {value:102, name:'Dance Forever'},
  //   {value:103, name:'Positively Smooth'}
  // ];

  return(
    <SpotifyPlayerContext.Provider value={{ trackPlaying, setTrackPlaying }}>
      <SpotifySearchContext.Provider value={{ spotifySearch, setSpotifySearch, spotifySearchResults }}>
        <SpotifyPlaylistContext.Provider value={{ spotifyPlaylists }}>
          <SongDataContext.Provider value={{ songData }}>
            <SelectedPlaylistContext.Provider value={{ selectedPlaylist, setSelectedPlaylist }}>
            { children }
            </SelectedPlaylistContext.Provider>
          </SongDataContext.Provider>
        </SpotifyPlaylistContext.Provider>
      </SpotifySearchContext.Provider>
    </SpotifyPlayerContext.Provider>
  )
};