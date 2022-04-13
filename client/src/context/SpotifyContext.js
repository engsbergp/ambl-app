import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const SpotifyTokenContext = React.createContext();

//send all spotify tokens to provider around application 
export function useSpotifyTokens() {
  return useContext(SpotifyTokenContext);
}

export function SpotifyProvider( {children} ) {

  //retrieves spotify auth token from URL
  const code = new URLSearchParams(window.location.search).get('code');

  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();


  const [ isFooter, setIsFooter ] = useState(false);


  //retrieves spotify code from URL
  //returns json file with token data
  //post to server port 8080
  //set global access to auth, refresh, and expiration
  useEffect(() => {
    axios.post(`http://192.168.1.12/login`, {
      code,
    }).then(res => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setExpiresIn(res.data.expiresIn);
      
      //removes token from URL
      window.history.pushState({}, null, "/")
    }).catch(() => {
    })
  }, [code])
  
  useEffect(() => {
    if (!code) return;
    setIsFooter(true);
  },[code])


  //uses refresh token to reset the expiration timer
  useEffect(() => { 
    if (!refreshToken || !expiresIn) return 

    //reset access token every 59 minutes
    const interval = setInterval(() => {
      axios.post(`http://192.168.1.12/refresh`, {
        refreshToken,
      }).then(res => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
        // console.log(res.data)
      }).catch(() => {
        // window.location = '/'
      })
    }, (expiresIn - 60) * 1000)

    //clear timeout to prevent using an incorrect refresh token
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn])


  return(
    <SpotifyTokenContext.Provider value={{ code, accessToken, refreshToken, expiresIn, isFooter, setIsFooter }}>
      { children }
    </SpotifyTokenContext.Provider>
  )
} 