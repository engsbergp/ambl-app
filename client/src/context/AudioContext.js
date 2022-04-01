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
const SpotifyRecommendedArtistsContext = React.createContext();
const SpotifyRecommendedGenresContext = React.createContext();
const SpotifyRecentlyPlayedContext = React.createContext();
const SpotifyUserDataContext = React.createContext();
const SpotifyFunctionContext = React.createContext();


export function useSpotifyFunctions() {
  return useContext(SpotifyFunctionContext);
}

export function useSpotifyUserData() {
  return useContext(SpotifyUserDataContext);
}

export function useSpotifyRecentlyPlayed() {
  return useContext(SpotifyRecentlyPlayedContext);
}

export function useSpotifyRecommendedGenres() {
  return useContext(SpotifyRecommendedGenresContext);
}

export function useSpotifyRecommendedArtists() {
  return useContext(SpotifyRecommendedArtistsContext);
}

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

  //USER PROFILE
  const [ selectedPlaylist, setSelectedPlaylist ] = useState('');
  const [ selectedPlaylistTracks, setSelectedPlaylistTracks ] = useState([]);
  const [ spotifyPlaylists, setSpotifyPlaylists ] = useState([]);
  const [ userId, setUserId ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ recommendedArtist, setRecommendedArtist] = useState('');
  const [ recommendedArtists, setRecommendedArtists ] = useState([]);
  const [ recentlyPlayed, setRecentlyPlayed ] = useState([]);
  const [ featuredPlaylists, setFeaturedPlaylists ] = useState([]);

  //SEAERCH
  const [ spotifySearchResults, setSpotifySearchResults ] = useState([]);
  const [ spotifySearch, setSpotifySearch ] = useState('');
  
  //TRACK URI
  const [ trackUri, setTrackUri ] = useState('');
  const [ recentUri, setRecentUri ] = useState('');
  const [ searchUri, setSearchUri ] = useState('');

  //PLAYER
  const [ trackPlaying, setTrackPlaying ] = useState('');

  // FUNCTIONS
  // const [ selectedTrackId, setSelectedTrackId ] = useState('');
  // const [ selectedArtistId, setSelectedArtistId ] = useState('');
  // const [ selectedAlbumId, setSelectedAlbumId ] = useState('');
  // const [ selectedPlaylistId, setSelectedPlaylistId ] = useState('');
  // const [ recommendedGenres, setRecommendedGenres ] = useState([]);

  const { accessToken } = useSpotifyTokens();

  //set access token to spotify-web-api-node
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken])


  // GET ACTIVE USER DATA
  useEffect(() => {
    if (!accessToken) return;

    (async () => {
      const userData = await spotifyApi.getMe();
      // console.log(userData); 
      setUserId(userData.body.id); 
      setUserName(userData.body.display_name);
    })().catch(e => {
      console.error(e);
    }) 
  }, [accessToken])


  //SEARCH FOR TRACKS, ARTISTS, PLAYLISTS
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


  // GET USERS PLAYLISTS
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
        // console.log(res)
      })().catch(e => {
        console.error(e);
      }) 
    }, [userId, accessToken])


  //RETURN TRACKS FROM SELECTED PLAYLIST
  //used in audio/AudioQueue
  useEffect(() => {
    if (!accessToken) return;
      axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylist}/tracks`, {
        headers: { 'Authorization' : 'Bearer ' + accessToken,
                    'Content-Type': 'application/json' }
      }).then(res => {
        setSelectedPlaylistTracks(res.data.items)
        // console.log(res.data.items)
      }).catch(e => {
        console.error(e);
      }) 
  }, [selectedPlaylist, accessToken])


  //GET RECENTLY PLAYED
  useEffect(() => {
    if (!accessToken) return;
      axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        setRecentlyPlayed(res.data.items);
        setRecommendedArtist(res.data.items[0].track.artists[0].id);
        // console.log(recommendedArtist)
        // console.log(res.data.items)
      }).catch(e => {
        console.error(e);
      }) 
  }, [userId, accessToken])


  //GET RECOMMENDED ARTISTS
  //based off first artist in the user's recently played
  useEffect(() => {
    if (!accessToken) return;
      axios.get(`https://api.spotify.com/v1/artists/${recommendedArtist}/related-artists`, {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        // setRecommendedArtists(res.data.artists)
        // console.log(res)
      }).catch(e => {
        console.error(e);
      }) 
  }, [recommendedArtist, accessToken])


  //GET FEATURED PLAYLISTS
  useEffect(() => {
    if (!accessToken) return;
      axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        setFeaturedPlaylists(res.data.playlists.items)
        // console.log(res)
      }).catch(e => {
        console.error(e);
      }) 
  }, [userId, accessToken])


  //GET RECOMMENDED GENRES
  useEffect(() => {
    if (!accessToken) return;
      axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
        headers: { 'Authorization' : 'Bearer ' + accessToken }
      }).then(res => {
        // setRecentlyPlayed(res.data.items)
        // console.log(res)
      }).catch(e => {
        console.error(e);
      }) 
  }, [userId, accessToken])

  //GO TO ARTISTS PAGE
    //selected artist
  
  //GO TO ALBUM PAGE
    //selected album

  return(
    <SpotifyUserDataContext.Provider
      value={{ userName, userId 
    }}>
      <SpotifyPlayerContext.Provider 
        value={{ 
          trackPlaying, setTrackPlaying,
          recentUri, setRecentUri,
          searchUri, setSearchUri,
          trackUri, setTrackUri 
      }}>
        <SpotifySearchContext.Provider 
          value={{ 
            spotifySearch, setSpotifySearch, 
            spotifySearchResults 
        }}>
          <SpotifyPlaylistContext.Provider 
            value={{ spotifyPlaylists,
                    featuredPlaylists 
          }}>
            <SelectedPlaylistContext.Provider 
              value={{ 
                selectedPlaylist, setSelectedPlaylist,
                selectedPlaylistTracks, setSelectedPlaylistTracks 
            }}>
              <SpotifyRecommendedArtistsContext.Provider
                value={{recommendedArtists, setRecommendedArtists,
                        recommendedArtist, setRecommendedArtist
              }}>
                {/* <SpotifyRecommendedGenresContext.Provider 
                  value={{recommendedGenres, setRecommendedGenres
                }}> */}
                  <SpotifyRecentlyPlayedContext.Provider
                    value={{recentlyPlayed, setRecentlyPlayed
                  }}>

                    {/* <SpotifyFunctionContext.Provider
                      value={{ handlePlay 
                    }}> */}

                    { children }

                    {/* </SpotifyFunctionContext.Provider> */}
                  </SpotifyRecentlyPlayedContext.Provider>
                {/* </SpotifyRecommendedGenresContext.Provider> */}
              </SpotifyRecommendedArtistsContext.Provider> 
            </SelectedPlaylistContext.Provider>
          </SpotifyPlaylistContext.Provider>
        </SpotifySearchContext.Provider>
      </SpotifyPlayerContext.Provider>
    </SpotifyUserDataContext.Provider>
  )
};