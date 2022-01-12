import React, { useState } from 'react';
import {  useHistory, NavLink } from 'react-router-dom';
import { useUserInfo } from '../../context/AuthContext';
import { useSpotifyTokens } from '../../context/SpotifyContext';
import ConnectSpotify from './ConnectSpotify';
import * as ROUTES from '../../constants/routes'
import HeaderExpanded from './HeaderExpanded';
import ThemePicker from './ThemePicker';
import SignUpModal from '../modals/SignUpModal';
import UserModal from '../modals/UserModal';
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/header.scss';
import '../../scss/components/header-mobile.scss';
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';
import { useActiveModal, useToggleModal } from '../../context/ModalContext';


function Header() {

  //local header states
  const history = useHistory();
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ headerExpanded, setHeaderExpanded ] = useState(false);
  const [ themeExpanded, setThemeExpanded ] = useState(false);
  
  //modal states
  const { toggleSignUpModal, toggleUserModal }  = useToggleModal(); 
  const { signUpModalOpen, userModalOpen } = useActiveModal();
  
  //auth states
  const { user } = useUserInfo();

  //spotify states
  const { accessToken } = useSpotifyTokens();

  function connectWallet() {
    setWalletConnected(!walletConnected)
  };

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
    
    <div className="header">
      <FaIcons.FaTree className="icon-md tree-icon" onClick={goAbout}/>
      <FaIcons.FaTree className="icon-md tree-mobile" onClick={expandNav}/>
        <NavLink exact className="navlink header-desktop" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
        <NavLink className="navlink header-desktop" activeClassName="active" to={ROUTES.EXPLORE}>Explore</NavLink>
        <NavLink className="navlink header-desktop" activeClassName="active" to={ROUTES.MINT}>Mint</NavLink>
        <NavLink className="navlink header-desktop" activeClassName="active" to={ROUTES.PLAY}>Curate</NavLink>
        <NavLink className="navlink header-desktop" activeClassName="active" to={ROUTES.SHARE}>Share</NavLink>
      <div className="header-buttons">
        
      {/* modals */}
        {signUpModalOpen && <SignUpModal/>}
        {userModalOpen && <UserModal/>}

      {/* toggle sign up button */}
      {
        user ? 
        <button onClick={toggleUserModal} className="btn-circle-sm btn-grey">
          { user?.email }
        </button>
       :
        <button onClick={toggleSignUpModal} className="btn-circle-sm btn-grey">
          sign up
        </button>
      }
 
      {/* toggle wallet connect button */}
      {
        walletConnected ? 
        <button onClick={connectWallet} className="btn-circle-sm btn-grey">
          <p>wallet connected!</p>
        </button>
        : 
        <button onClick={connectWallet} className="btn-circle-sm btn-grey">
          <p>connect wallet</p>
        </button>
        }

        {/* toggle spotify connect button */}
        {
         accessToken ? 
          <button className="btn-circle-sm btn-grey">
            <p>spotify connected!</p>
          </button>
          : 
          <ConnectSpotify />
         }

        <button onClick={chooseTheme} className="btn-circle-sm btn-grey">
          100 AMBL
        </button>
      </div>
      
      {/* light mode, dark mode, greystyle */}
      <div className={themeExpanded ? "header-themes show" : "header-themes"}>
        <ThemePicker/>
      </div>

      {/* mobile menu, less than 560 px */}
      <div className={headerExpanded ? "header-mobile show" : "header-mobile"}>
        <HeaderExpanded/>
      </div>
    </div>
  )
}

export default Header
