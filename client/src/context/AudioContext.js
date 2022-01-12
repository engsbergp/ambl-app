import React, { useContext, useState, useEffect } from "react";
import { useSpotifyTokens } from "./SpotifyContext";
import SpotifyWebApi from 'spotify-web-api-node';
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
})

const SpotifyPlaylistContext = React.createContext();
const SelectedPlaylistContext = React.createContext();
const SpotifySearchContext = React.createContext();
const SpotifyPlayerContext = React.createContext();

export function useSpotifyPlayer() {
  return useContext(SpotifyPlayerContext);
}

export function useSpotifyPlaylists() {
  return useContext(SpotifyPlaylistContext);
}

export function useSelectedPlaylist() {
  return useContext(SelectedPlaylistContext);
}

export function useSpotifySearch() {
  return useContext(SpotifySearchContext)
}


export function AudioProvider({ children }) {

  const [ selectedPlaylist, setSelectedPlaylist ] = useState('');
  const [ selectedPlaylistTracks, setSelectedPlaylistTracks ] = useState([]);
  const [ spotifySearch, setSpotifySearch ] = useState('');
  const [ spotifySearchResults, setSpotifySearchResults ] = useState([]);
  const [ trackPlaying, setTrackPlaying ] = useState('');
  const [ spotifyPlaylists, setSpotifyPlaylists ] = useState([]);
  const [ userId, setUserId ] = useState('');

  const { accessToken } = useSpotifyTokens();

  //set access token to spotify-web-api-node
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken])



  // Get active user data
  useEffect(() => {
    if (!accessToken) return;

    (async () => {
      const userData = await spotifyApi.getMe();
      // console.log(userData.body.id); 
      setUserId(userData.body.id); 
    })().catch(e => {
      console.error(e);
    }) 
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



  // Get a user's playlists
    useEffect(() => {
      if (!accessToken) return;
      (async () => {
        // user ID set above
        const playlists = await spotifyApi.getUserPlaylists({userId});
        // console.log('Retrieved playlists', playlists.body.items);
        // this is an array of all the user's playlists
        // sent to audio queue, where a selected playlist is determined
        // selected playlist is mapped again to display tracks, artist, and images
        setSpotifyPlaylists(playlists.body.items);
      })().catch(e => {
        console.error(e);
      }) 
    }, [userId])


  //return tracks from selected playlist
  useEffect(() => {
    if (!accessToken) return;
      axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylist}/tracks`, {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        setSelectedPlaylistTracks(res.data.items)
        // console.log(selectedPlaylistTracks)
      }).catch(e => {
        console.error(e);
      }) 
  }, [selectedPlaylist])



  useEffect(() => {
    if (!accessToken) return;
      axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        // setSelectedPlaylistTracks(res.data.items)
        console.log(res)
      }).catch(e => {
        console.error(e);
      }) 
  }, [accessToken])


  


    //get recently played artists
    // useEffect(() => {
    //   (async () => {
    //     const recentArtists = await spotifyApi.getMyRecentlyPlayedTracks({ limit : 5 });
    //     // Output items
    //     console.log("Your 20 most recently played tracks are:");
    //     recentArtists.body.items.forEach(item => console.log(item.track));
    //   })().catch(e => {
    //     console.error(e);
    //   })
    // }, [accessToken])


  // Get a List of Categories
  // spotifyApi.getCategories({
  //   limit : 5,
  //   offset: 0,
  //   country: 'SE',
  //   locale: 'sv_SE'
  // })
  // .then(function(data) {
  // console.log(data.body);
  // }, function(err) {
  // console.log("Something went wrong!", err);
  // });


  // Start/Resume a User's Playback 
  // spotifyApi.play()
  //   .then(function() {
  //     console.log('Playback started');
  //   }, function(err) {
  //     console.log('Something went wrong!', err);
  //   });



  return(
    <SpotifyPlayerContext.Provider 
      value={{ 
        trackPlaying, setTrackPlaying 
    }}>
      <SpotifySearchContext.Provider 
        value={{ 
          spotifySearch, setSpotifySearch, 
          spotifySearchResults 
      }}>
        <SpotifyPlaylistContext.Provider 
          value={{ spotifyPlaylists 
        }}>
          <SelectedPlaylistContext.Provider 
            value={{ 
              selectedPlaylist, setSelectedPlaylist,
              selectedPlaylistTracks, setSelectedPlaylistTracks 
          }}>
            { children }
          </SelectedPlaylistContext.Provider>
        </SpotifyPlaylistContext.Provider>
      </SpotifySearchContext.Provider>
    </SpotifyPlayerContext.Provider>
  )
};