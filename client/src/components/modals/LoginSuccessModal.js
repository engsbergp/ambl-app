import React from 'react';
import ReactDom from 'react-dom';
import { useThemeStyles } from '../../context/ThemeContext';
import { useToggleModal } from '../../context/ModalContext';
import { useAuthData } from '../../context/AuthContext';
import * as FaIcons from 'react-icons/fa';

export default function LoginSuccessModal() {

  //modal context states
  const { toggleLoginSuccessModal } = useToggleModal();

  //theme states
  const { bg2, text1, btn } = useThemeStyles();

  const { currentAvatar } = useAuthData();

  function close() {
    toggleLoginSuccessModal();
  }

  return ReactDom.createPortal(

    <div className='modal center' style={{background:bg2, color:text1}}>

      <p>Successfully logged in as</p>
      <img 
          src={currentAvatar}
          alt="avatar"
          className="m1" 
          style={{height:"100px", width:"100px", borderRadius:"100vw"}}
        />
      <p>Ambient Landscapes</p>

          {/* SAVE OR CANCEL */}
          <div className="row center">
            <button onClick={ close } className="btn-round-md mt1" style={{background:btn, color:text1}}>
              Done
            </button>
          </div>

      {/* <button onClick={ toggleLoginSuccessModal } className="btn-icon-circle close-button">
        <FaIcons.FaPlus className="rotate90"/>
      </button> */}
    </div>,
    document.getElementById('portal')
  )
}







