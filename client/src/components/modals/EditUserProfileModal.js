import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useThemeStyles } from '../../context/ThemeContext';
import { useMoralisFile } from "react-moralis";
import { useToggleModal } from '../../context/ModalContext';
import { useAuthData, useAuthFunctions } from '../../context/AuthContext'
import * as FaIcons from 'react-icons/fa';

export default function EditUserProfileModal() {

  //modal context states
  const { toggleEditUserProfileModal, toggleUserProfileModal } = useToggleModal();

  //theme states
  const { bg2, text1, btn } = useThemeStyles();

  //auth context states and functions
  const { setUserEmail, userEmail, setUserUsername, userUsername, setUserAvatar, currentUser, currentEmail, currentAvatar } = useAuthData();
  const { saveUserInfo } = useAuthFunctions();

  function cancel() {
    toggleEditUserProfileModal();
    toggleUserProfileModal();
  }

  function save() {
    saveUserInfo();
    toggleEditUserProfileModal();
    toggleUserProfileModal();
  }

    //profile photo upload
    const [ fileTarget, setFileTarget ] = useState("");
    const { saveFile } = useMoralisFile();  


    useEffect(() => {
      if (!fileTarget) return;
      saveFile("photo.jpg", fileTarget, {
        type: "image/png",
        onSuccess: (result) => setUserAvatar(result._url),
        onError: (error) => console.log(error),
    });
    }, [fileTarget, saveFile, setUserAvatar])

    const fileInput = (e) => setFileTarget(e.target.files[0]); 

  return ReactDom.createPortal(

    <div className='modal' style={{background:bg2, color:text1}}>
      <div className="container">
        <form>

        {/* Add profile photo */}

        <div 
          className="mb1" 
          style={{height:"100px", width:"100px"}}
          >
          <img src={currentAvatar} alt="avatar" style={{width:"100%", borderRadius:"100vw"}}/>
        </div>

          <div className="mb1">
              <input type="file" onChange={fileInput} />
              {/* <button onClick={uploadFile}>Call The Code</button> */}
          </div>

        {/* Edit Profile Fields */}

        <label className="pb1">Edit Profile Information</label>
        <input 
          className="searchbar mt1" 
          type="username"
          placeholder={currentUser ? currentUser : "Choose Username"}
          value={userUsername}
          onChange={(event) => setUserUsername(event.target.value)}
          />
        <input 
          className="searchbar mt1" 
          type="email"
          placeholder={currentEmail ? currentEmail : "Choose Email"}
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          />
        </form>
      </div>

        {/* SAVE OR CANCEL */}
        <div className="row center">
          <button onClick={ cancel } style={{background:btn, color:text1}} className="btn-round-sm mt1">
            Cancel
          </button>
          <button onClick={ save } style={{background:btn, color:text1}} className="btn-round-sm mt1" type="submit">
            Save
          </button>
        </div>

        <button onClick={ toggleEditUserProfileModal } className="btn-icon-circle close-button">
          <FaIcons.FaPlus className="rotate90"/>
        </button>
    </div>,
    document.getElementById('portal')
  )
}







