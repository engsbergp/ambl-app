import React, { useState, useContext } from "react";

const ActiveModalContext = React.createContext();
const ToggleModalContext = React.createContext();

export function useActiveModal() {
  return useContext(ActiveModalContext);
}

export function useToggleModal() {
  return useContext(ToggleModalContext);
}

export function ModalProvider({ children }) {

  //individual contexts for each modal context
  //passed into a single, global 'modal provider'
  //organized into a 'modal function context' and a 'modal visibility context'
  const [editUserProfileModalOpen, setEditUserProfileModalOpen] = useState(false);
  const [userProfileModalOpen, setUserProfileModalOpen] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [loginSuccessModalOpen, setLoginSuccessModalOpen] = useState(false);

  function toggleLoginSuccessModal() {
    setLoginSuccessModalOpen(!loginSuccessModalOpen);
  }

  function toggleEditUserProfileModal() {
    setEditUserProfileModalOpen(!editUserProfileModalOpen);
  }

  function toggleUserProfileModal() {
    setUserProfileModalOpen(!userProfileModalOpen);
  }

  function toggleThemeModal() {
    setThemeModalOpen(!themeModalOpen);
  }

  return(
    <ActiveModalContext.Provider value={{ editUserProfileModalOpen, setEditUserProfileModalOpen, userProfileModalOpen, setUserProfileModalOpen, themeModalOpen, setThemeModalOpen, loginSuccessModalOpen }}>
      <ToggleModalContext.Provider value={{ toggleEditUserProfileModal, toggleUserProfileModal, toggleThemeModal, toggleLoginSuccessModal }}>
        {children}
      </ToggleModalContext.Provider>
    </ActiveModalContext.Provider>
  )
}