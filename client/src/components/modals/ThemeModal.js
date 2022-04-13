import React from 'react';
import ReactDom from 'react-dom';
import Themes from '../misc/Themes';
import { useThemeStyles } from '../../context/ThemeContext';
import { useToggleModal } from '../../context/ModalContext';
import * as FaIcons from 'react-icons/fa';

export default function ThemeModal() {

  //modal context states
  const { toggleThemeModal, toggleUserProfileModal } = useToggleModal();

  //theme states
  const { bg2, text1, btn, text1Active } = useThemeStyles();

  function cancel() {
    toggleThemeModal();
    toggleUserProfileModal();
  }

  function saveActiveTheme() {
    toggleThemeModal();
    toggleUserProfileModal();
  }

  return ReactDom.createPortal(

    <div className='modal centered' style={{background:bg2, color:text1}}>

      <p>Set your theme</p>
      <div className='row mt1'>
        <Themes/>
      </div>

          {/* SAVE OR CANCEL */}
          <div className="row center">
            <button onClick={ cancel } className="btn-round-sm mt1" style={{background:btn, color:text1}}>
              Done
            </button>
            <button onClick={ saveActiveTheme } className="btn-round-sm mt1" type="submit" style={{background:btn, color:text1}}>
              Create Theme
            </button>
          </div>

      <button style={{color:text1Active}} onClick={ toggleThemeModal } className="btn-icon-circle close-button">
        <FaIcons.FaPlus className="rotate90"/>
      </button>
    </div>,
    document.getElementById('portal')
  )
}







