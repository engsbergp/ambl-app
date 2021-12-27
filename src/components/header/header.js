import React, { useState } from 'react';
import HeaderExpanded from './HeaderExpanded';
import {useHistory, NavLink} from 'react-router-dom';
import './header.scss';
import * as FaIcons from 'react-icons/fa';
// import axios from 'axios';


function Header() {

  const history = useHistory();
  const [spotifyConnected, setSpotifyConnected] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [headerExpanded, setHeaderExpanded] = useState(false);

  function connectSpotify() {
    setSpotifyConnected(true)
  };

  function connectWallet() {
    setWalletConnected(true)
  };

  function goAbout() {
    history.push('/about')
  }

  function expandNav() {
    setHeaderExpanded(!headerExpanded);
  }

  return (
    <div className="header">
      
      <FaIcons.FaTree className="tree-icon" onClick={goAbout}/>
      <FaIcons.FaTree className="tree-mobile" onClick={expandNav}/>
  
      {/* <HeaderExpanded/> */}
      <div className="header-links">
        <NavLink exact className="header-link" activeClassName="header-active" to="/">Home</NavLink>
        <NavLink className="header-link" activeClassName="header-active" to="/listen">Listen</NavLink>
        <NavLink className="header-link" activeClassName="header-active" to="/create">Create</NavLink>
        <NavLink className="header-link" activeClassName="header-active" to="/play">Play</NavLink>
        <NavLink className="header-link" activeClassName="header-active" to="/share">Share</NavLink>
      </div>
      <div className="header-buttons">
        {
         walletConnected ? 
          <div className="header-connect-wallet">
            <p>wallet connected!</p>
          </div>
          : 
          <button onClick={connectWallet} className="header-connect-wallet">
            connect wallet
          </button>
         }
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
      <div className={headerExpanded ? "header-mobile show" : "header-mobile"}>
        <HeaderExpanded/>
      </div>
    </div>
  )
}

export default Header
