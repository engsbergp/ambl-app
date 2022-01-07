import React from 'react';
import ReactDom from 'react-dom';
// import { } from '../../context/AuthContext';
import { useToggleModal } from '../../context/ModalContext';
import { useAuthFunctions, useUserInfo } from '../../context/AuthContext';
import * as FaIcons from 'react-icons/fa';
import "firebase/auth";
import '../../scss/components/modals.scss';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

export default function UserModal() {

  const { toggleUserModal }= useToggleModal();
  const { logout } = useAuthFunctions();
  const { user } = useUserInfo();

  return ReactDom.createPortal (
    <div className='modal-bg'>
      <div className="modal center modal-primary align-top active gap2">

        <p className="mt1"> Logged in as: {user?.email}</p>

        <button className="btn-round-sm" onClick={ logout }>
          logout
        </button>

        <button onClick={toggleUserModal} className="btn-icon-circle close-button">
          <FaIcons.FaPlus className="rotate90"/>
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}
