import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import './header-footer.scss';
import * as BsIcons from 'react-icons/bs';
// import axios from 'axios';


function Header() {

  // const [token, setToken] = useState('');
  const [spotifyConnected, setSpotifyConnected] = useState(false);

  // useEffect(() => {
  //   axios('https://accounts.spotify.com/api/token',{
  //     'method': 'POST',
  //     'headers': {
  //         'Content-Type':'application/x-www-form-urlencoded',
  //         'Authorization': 'Basic' + (new Buffer('7a3d7b5b794244a58b1ee120f9fc3989' + ':' + 'ba6a496b14ca4adf94ea310ce7e3610d').toString('base64'))
  //     },
  //     data: 'grant_type=client_credentials'
  //   }).then(tokenresponse => {
  //     console.log(tokenresponse.data.access_token);
  //     setToken(tokenresponse.data.access_token);
  //   }).catch(error => console.log(error))
  // }, [])
  
  const history = useHistory();

  function connectSpotify() {

    setSpotifyConnected(true)
  };

  function goAbout() {
    history.push('/about')
  }

  return (
    <div className="header">
      
      <BsIcons.BsFillTreeFill className="tree-icon" onClick={goAbout}/>
      <div className="header-buttons">
        <button className="header-connect-wallet">
          connect wallet
        </button>

        {
         spotifyConnected ? 
          <div className="header-connect-wallet">
            <p>spotify connected!</p>
          </div>
          : 
          <button onClick={connectSpotify} className="header-connect-music">
            connect music
          </button>
         }

        <div className="header-ambl-tokens">
          100 AMBL
        </div>
      </div>
    </div>
  )
}

export default Header
