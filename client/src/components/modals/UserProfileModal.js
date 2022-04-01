import React from 'react';
import ReactDom from 'react-dom';
import { useThemeStyles } from '../../context/ThemeContext';
import { useToggleModal } from '../../context/ModalContext';
import { useAuthData } from '../../context/AuthContext';
// import { useMoralis } from "react-moralis";
import * as FaIcons from 'react-icons/fa';

export default function UserProfileModal() {

  // const { logout } = useMoralis();
  const { toggleUserProfileModal, toggleEditUserProfileModal, toggleThemeModal } = useToggleModal();

  //theme states
  const { bg2, text1, btn } = useThemeStyles();

  //auth states
  const { currentUser, currentEmail, currentAvatar, currentEthAddress, setUser } = useAuthData();


  // function edit() {
  //   toggleUserProfileModal();
  //   toggleEditUserProfileModal();
  // }

  // const Logout = async () => {
  //   try {
  //     await logout();
  //   } catch(error){
  //     alert(error)
  //   }
  //   toggleUserProfileModal();
  // }

  function Logout(){
    setUser(false);
    toggleUserProfileModal();
  }

  function themes() {
    toggleUserProfileModal();
    toggleThemeModal();
  }

  return ReactDom.createPortal (
    <div className='modal center' style={{background:bg2, color:text1}}>

        <p className="mb1"> User: {currentUser}</p>
        <p className="mb1"> Email: {currentEmail}</p>
        <p> Address: {currentEthAddress}</p>

        <img 
          src={currentAvatar}
          alt="avatar"
          className="m2" 
          style={{height:"100px", width:"100px", borderRadius:"100vw"}}
        />

        <div className="row center">
          <button className="btn-round-sm" style={{background:btn, color:text1}} onClick={ themes }>
            change theme 
          </button>

          {/* <button className="btn-round-sm" style={{background:btn, color:text1}} onClick={ edit }>
            edit
          </button> */}

          <button className="btn-round-sm" style={{background:btn, color:text1}} onClick={ Logout }>
            logout
          </button>
        </div>

        <button onClick={toggleUserProfileModal} className="btn-icon-circle close-button">
          <FaIcons.FaPlus className="rotate90"/>
        </button>
    </div>,
    document.getElementById('portal')
  )
}
