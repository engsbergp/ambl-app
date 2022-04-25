import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSpotifyTokens } from '../../context/SpotifyContext';
import { useSpotifyUserData } from '../../context/AudioContext';
import { useAuthData } from '../../context/AuthContext';
import { useThemeStyles } from '../../context/ThemeContext'
import { useActiveModal, useToggleModal } from '../../context/ModalContext';
import HeaderExpanded from './HeaderExpanded';
// import EditUserProfileModal from '../modals/EditUserProfileModal';
import UserProfileModal from '../modals/UserProfileModal';
import LoginSuccessModal from '../modals/LoginSuccessModal';
import ThemeModal from '../modals/ThemeModal';
import * as ROUTES from '../../constants/routes'
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/header.scss'


function Header() {

  //local header states
  const history = useHistory();
  const [ headerExpanded, setHeaderExpanded ] = useState(false);

  //modal states
  const { toggleUserProfileModal, toggleLoginSuccessModal } = useToggleModal(); 
  const { userProfileModalOpen, themeModalOpen, loginSuccessModalOpen } = useActiveModal();

  //auth states
  const { currentAvatar } = useAuthData();

  //local states

  const { user, setUser } = useAuthData();

  //spotify states
  const { accessToken } = useSpotifyTokens();
  const { userName } = useSpotifyUserData();
  const DEV_SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f95d203d997545f18e89491cb629f748&response_type=code&redirect_uri=http://ambl.io&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20playlist-read-private%20user-top-read%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-private%20user-read-playback-position"
  // const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7a3d7b5b794244a58b1ee120f9fc3989&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20playlist-read-private%20user-top-read%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-private%20user-read-playback-position"
  
  //theme states
  const { bg1, text1, text1Active, btn } = useThemeStyles();

  function goAbout() {
    history.push('/about')
  }

  function expandNav() {
   setHeaderExpanded(!headerExpanded);
  }

  function login() {
    setUser(true); 
    toggleLoginSuccessModal()
  }

  return (
    
    <div className="header" style={{background:bg1}}>
      <FaIcons.FaTree style={{color:text1Active}} className="icon-md tree-icon" onClick={goAbout}/>
      <FaIcons.FaTree style={{color:text1Active}} className="icon-md tree-mobile" onClick={expandNav}/>
        <NavLink exact style={{color:text1}} className="navlink ml2 mr1 header-desktop" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
        <NavLink style={{color:text1}} className="navlink ml1 mr1 header-desktop" activeClassName="active" to={ROUTES.EXPLORE}>Explore</NavLink>
        <NavLink style={{color:text1}} className="navlink ml1 mr1 header-desktop" activeClassName="active" to={ROUTES.MINT}>Mint</NavLink>
        <NavLink style={{color:text1}} className="navlink ml1 mr1 header-desktop" activeClassName="active" to={ROUTES.PLAY}>Play</NavLink>
        <NavLink style={{color:text1}} className="navlink ml1 mr1 header-desktop" activeClassName="active" to={ROUTES.SHARE}>Share</NavLink>
    
      <div className="header-buttons">
        
        {/* MODALS */}
          {/* {
          editUserProfileModalOpen && 
            <div className='modal-bg'>
              <EditUserProfileModal/>
            </div>
          } */}
          {
          userProfileModalOpen && 
            <div className='modal-bg'>
              <UserProfileModal/>
            </div>
           }
          { themeModalOpen && <ThemeModal/> }
          {
          loginSuccessModalOpen && 
            <div className="modal-bg">
              <LoginSuccessModal/>
            </div>
          }

        {/* CONNECT SPOTIFY */}
        {
          accessToken ? 
          <div className="btn-circle-sm gap-sm" style={{background:btn, color:text1Active}}>
            {userName} 
            <FaIcons.FaSpotify/>
          </div>
        : 
          <a href={ DEV_SPOTIFY_AUTH_URL } className="btn-circle-sm gap-sm navlink" style={{background:btn, color:text1Active}}>
            Log into Spotify 
            <FaIcons.FaSpotify/>
          </a>
        }

        {/* CONNECT WALLET */}
        {
          user === true ? 
          <button onClick={ toggleUserProfileModal } className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            <p> ambl </p>
            <img src={currentAvatar} alt="avatar" className="ml-sm" style={{width:"20px", height:"20px", borderRadius:"100vw"}}/>
          </button>
        : 
          <button onClick={ login } className="btn-circle-sm" style={{background:btn, color:text1Active}}>
            <p>Connect guest wallet</p>
          </button>
        }
      
      </div>
      

      {/* mobile menu, less than 560 px */}
      <div className={headerExpanded ? "header-mobile show" : "header-mobile remove"} style={{background:btn, color:text1Active}}>
        <HeaderExpanded />
      </div>
    </div>
  )
}

export default Header
