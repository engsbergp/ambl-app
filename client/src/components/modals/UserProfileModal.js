import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { useThemeStyles } from '../../context/ThemeContext';
import { useToggleModal } from '../../context/ModalContext';
import { useAuthData } from '../../context/AuthContext';
import * as FaIcons from 'react-icons/fa';

export default function UserProfileModal() {

  const { toggleUserProfileModal, toggleThemeModal } = useToggleModal();

  //theme states
  const { bg2, text1, btn, text1Active } = useThemeStyles();

  //auth states
  const { currentUser, currentEmail, currentAvatar, currentEthAddress, currentEthAddressTruncated, setUser } = useAuthData();


  const [ copyModal, setCopyModal ] = useState(false);

  function Logout(){
    setUser(false);
    toggleUserProfileModal();
  }

  function close() {
    toggleUserProfileModal();
  }

  function themes() {
    toggleUserProfileModal();
    toggleThemeModal();
  }

  function copy() {
    navigator.clipboard.writeText(currentEthAddress);
    setCopyModal(true);
    console.log('copied')
    setTimeout(() => {console.log('uncopied'); setCopyModal(false)}, 1500);
  }

  return ReactDom.createPortal (
    <div className='modal center' style={{background:bg2, color:text1}}>

        <p className="mb1"> User: {currentUser}</p>
        <p className="mb1"> Email: {currentEmail}</p>
        <div className="col100">
          {
            
            copyModal &&
            <div className="flex center" style={{height:"20px", width:"100%"}}>
              <p>address copied!</p>
            </div>
          }
          <div className="row center">
            <p className="mr1"> Address: {currentEthAddressTruncated}</p>
            <FaIcons.FaCopy className="confirm-copy" style={{cursor:"pointer", color:text1Active}} onClick={copy}/>
          </div>
        </div>


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

          <button className="btn-round-sm" style={{background:btn, color:text1}} onClick={ close }>
            close
          </button>

          <button className="btn-round-sm" style={{background:btn, color:text1}} onClick={ Logout }>
            logout
          </button>
        </div>

        <button style={{color:text1Active}} onClick={toggleUserProfileModal} className="btn-icon-circle close-button">
          <FaIcons.FaPlus className="rotate90"/>
        </button>
    </div>,
    document.getElementById('portal')
  )
}
