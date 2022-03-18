import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useUserInfo } from '../../context/AuthContext';
import { useSpotifyTokens } from '../../context/SpotifyContext';
import { useSpotifyUserData } from '../../context/AudioContext';
import { useThemeStyles } from '../../context/ThemeContext'
import { useWeb3Context } from '../../context/Web3Context';
import { useWeb3Functions } from '../../context/Web3Context';
import { useActiveModal, useToggleModal } from '../../context/ModalContext';
import HeaderExpanded from './HeaderExpanded';
import ThemePicker from './ThemePicker';
import SignUpModal from '../modals/SignUpModal';
import UserModal from '../modals/UserModal';
import * as ROUTES from '../../constants/routes'
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/header.scss'


function Header() {

  //local header states
  const history = useHistory();
  const [ headerExpanded, setHeaderExpanded ] = useState(false);
  const [ themeExpanded, setThemeExpanded ] = useState(false);

  //modal states
  const { toggleSignUpModal, toggleUserModal }  = useToggleModal(); 
  const { signUpModalOpen, userModalOpen } = useActiveModal();
  
  //auth states
  const { user } = useUserInfo();

  //web3 states
  const { walletAddress, walletConnected } = useWeb3Context();
  const { connectWallet } = useWeb3Functions();

  //spotify states
  const { accessToken } = useSpotifyTokens();
  const { userName } = useSpotifyUserData();
  const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f95d203d997545f18e89491cb629f748&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20playlist-read-private%20user-top-read%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-private%20user-read-playback-position"

  //theme states
  const { themeName, bg1, text1, text1Active, btn } = useThemeStyles();

  function goAbout() {
    history.push('/about')
  }

  function expandNav() {
    setHeaderExpanded(!headerExpanded);
  }

  function chooseTheme() {
    setThemeExpanded(!themeExpanded);
  }

  return (
    
    <div className="header" style={{background:bg1}}>
      <FaIcons.FaTree style={{color:text1Active}} className="icon-md tree-icon" onClick={goAbout}/>
      <FaIcons.FaTree style={{color:text1Active}} className="icon-md tree-mobile" onClick={expandNav}/>
        <NavLink exact style={{color:text1}} className="navlink header-desktop" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
        <NavLink style={{color:text1}} className="navlink header-desktop" activeClassName="active" to={ROUTES.EXPLORE}>Explore</NavLink>
        <NavLink style={{color:text1}} className="navlink header-desktop" activeClassName="active" to={ROUTES.MINT}>Mint</NavLink>
        <NavLink style={{color:text1}} className="navlink header-desktop" activeClassName="active" to={ROUTES.PLAY}>Play</NavLink>
        <NavLink style={{color:text1}} className="navlink header-desktop" activeClassName="active" to={ROUTES.SHARE}>Share</NavLink>
    
      <div className="header-buttons">
        
        {/* MODALS */}
          {signUpModalOpen && <SignUpModal/>}
          {userModalOpen && <UserModal/>}

        {/* SIGN IN BUTTON */}
        {
          user ? 
          <button onClick={toggleUserModal} className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            { user?.email }
          </button>
        :
          <button onClick={toggleSignUpModal} style={{background:btn, color:text1Active}} className="btn-circle-sm">
            sign up
          </button>
        }
  
        {/* CONNECT WALLET */}
        {
          walletConnected ? 
          <button className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            <p>{ walletAddress }</p>
          </button>
        : 
          <button onClick={ connectWallet } className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            <p>connect wallet</p>
          </button>
        }

        {/* CONNECT SPOTIFY */}
        {
          accessToken ? 
          <div className="btn-circle-sm gap-sm" style={{background:btn, color:text1Active}}>
            {userName} 
            <FaIcons.FaSpotify/>
          </div>
        : 
          <a href={ SPOTIFY_AUTH_URL } className="btn-circle-sm gap-sm navlink" style={{background:btn, color:text1Active}}>
            Connect Spotify 
            <FaIcons.FaSpotify/>
          </a>
        }
        {/* THEME PICKER */}
        <div onClick={ chooseTheme } className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            { themeName }
        </div>

          {/* theme dropdown */}
          <div className={themeExpanded ? "header-themes show" : "header-themes remove"} style={{background:btn, color:text1Active}}>
            <ThemePicker themeExpanded={themeExpanded}/>
          </div>
      
      </div>
      

      {/* mobile menu, less than 560 px */}
      <div className={headerExpanded ? "header-mobile show" : "header-mobile remove"} style={{background:btn, color:text1Active}}>
        <HeaderExpanded/>
      </div>
    </div>
  )
}

export default Header
