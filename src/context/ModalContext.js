import React, { useState, useContext } from "react";

const SignUpModalContext = React.createContext();
const ToggleSignUpModalContext = React.createContext();

export function useSignUpModal() {
  return useContext(SignUpModalContext);
}

export function useToggleSignUpModal() {
  return useContext(ToggleSignUpModalContext);
}

export function ModalProvider({ children }) {

  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  function toggleSignUpModal() {
    setSignUpModalOpen(!signUpModalOpen);
  }

  return(
    <SignUpModalContext.Provider value={{signUpModalOpen, setSignUpModalOpen}}>
      <ToggleSignUpModalContext.Provider value={{toggleSignUpModal}}>
        {children}
      </ToggleSignUpModalContext.Provider>
    </SignUpModalContext.Provider>
  )
}