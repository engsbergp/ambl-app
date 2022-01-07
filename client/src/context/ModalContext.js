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
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  function toggleSignUpModal() {
    setSignUpModalOpen(!signUpModalOpen);
  }

  function toggleUserModal() {
    setUserModalOpen(!userModalOpen);
  }

  return(
    <ActiveModalContext.Provider value={{ signUpModalOpen, setSignUpModalOpen, userModalOpen, setUserModalOpen}}>
      <ToggleModalContext.Provider value={{ toggleSignUpModal, toggleUserModal }}>
        {children}
      </ToggleModalContext.Provider>
    </ActiveModalContext.Provider>
  )
}