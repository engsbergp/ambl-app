import React, { useState, useContext } from 'react';
import {useHistory, NavLink} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import HeaderExpanded from './HeaderExpanded';
import ThemePicker from './ThemePicker';
import SignUpModal from '../modals/SignUpModal';
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/header.scss';
import '../../scss/components/header-mobile.scss';
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';
import { useSignUpModal, useToggleSignUpModal } from '../../context/ModalContext';


function Header() {

  const history = useHistory();
  const [ spotifyConnected, setSpotifyConnected ] = useState(false);
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ headerExpanded, setHeaderExpanded ] = useState(false);
  const [ themeExpanded, setThemeExpanded ] = useState(false);
  const { toggleSignUpModal }  = useToggleSignUpModal(); 
  const { signUpModalOpen, setSignUpModalOpen } = useSignUpModal();

  function connectSpotify() {
    setSpotifyConnected(!spotifyConnected);
  };

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
        <NavLink exact className="navlink" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
        <NavLink className="navlink" activeClassName="active" to={ROUTES.LISTEN}>Listen</NavLink>
        <NavLink className="navlink" activeClassName="active" to={ROUTES.CREATE}>Create</NavLink>
        <NavLink className="navlink" activeClassName="active" to={ROUTES.PLAY}>Play</NavLink>
        <NavLink className="navlink" activeClassName="active" to={ROUTES.SHARE}>Share</NavLink>
      <div className="header-buttons">
        
        {signUpModalOpen && <SignUpModal/>}
        
        <button onClick={toggleSignUpModal} className="btn-circle-sm btn-grey">
          sign up
        </button>
        
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

        {
         spotifyConnected ? 
          <button onClick={connectSpotify} className="btn-circle-sm btn-grey">
            <p>spotify connected!</p>
          </button>
          : 
          <button onClick={connectSpotify} className="btn-circle-sm btn-grey">
            <p>connect spotify</p>
          </button>
         }

        <button onClick={chooseTheme} className="btn-circle-sm btn-grey">
          100 AMBL
        </button>
      </div>
      <div className={themeExpanded ? "header-themes show" : "header-themes"}>
        <ThemePicker/>
      </div>
      <div className={headerExpanded ? "header-mobile show" : "header-mobile"}>
        <HeaderExpanded/>
      </div>
    </div>
  )
}

export default Header
