import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useToggleModal } from './ModalContext';
import { auth } from '../context/FirebaseConfig';

const RegisterContext = React.createContext();
const LoginContext = React.createContext();
const AuthFunctionContext = React.createContext();
const UserContext = React.createContext();

export function useRegister() {
  return useContext(RegisterContext);
}

export function useLogin() {
  return useContext(LoginContext);
}

export function useAuthFunctions() {
  return useContext(AuthFunctionContext);
}

export function useUserInfo() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  const { toggleSignUpModal, toggleUserModal } = useToggleModal();



  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  //sign up modal functions

  const register = async (e) => {
    e.preventDefault();
    try{
      //create new firebase user with name and password 
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      alert("created successfully with credentials\nEmail - " + registerEmail + "\nPassword - " + registerPassword)
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (error) {
      //close sign-up modal and report errors
      toggleSignUpModal();
      console.log(error.message)
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      //retrieve user based on firebase email and password
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      
    } catch(err) {
      //close sign-up modal and report errors
      toggleSignUpModal();
      console.log(err.message);
    }
  };


  //user modal functions

  const logout = async () => {
    await signOut(auth);
    toggleUserModal();
  };


  return (
      <AuthFunctionContext.Provider value={{register, login, logout}}>
        <UserContext.Provider value={{user, setUser}}>
          <RegisterContext.Provider value={{registerEmail, setRegisterEmail, registerPassword, setRegisterPassword}}>
              <LoginContext.Provider value={{loginEmail, setLoginEmail, loginPassword, setLoginPassword}}>
                  { children }
              </LoginContext.Provider>
          </RegisterContext.Provider>
        </UserContext.Provider>
      </AuthFunctionContext.Provider> 
    )
}