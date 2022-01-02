import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../context/FirebaseConfig'

const RegisterEmailContext = React.createContext();
const RegisterPasswordContext = React.createContext();
const LoginEmailContext = React.createContext();
const LoginPasswordContext = React.createContext();
const AuthFunctionContext = React.createContext();

export function useRegisterEmail() {
  return useContext(RegisterEmailContext);
}

export function useRegisterPassword() {
  return useContext(RegisterPasswordContext);
}

export function useLoginEmail() {
  return useContext(LoginEmailContext);
}

export function useLoginPassword() {
  return useContext(LoginPasswordContext);
}

export function useAuthFunctions() {
  return useContext(AuthFunctionContext);
}

export function AuthProvider({ children }) {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const register = async (e) => {
    e.preventDefault();
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      alert("created successfully with credentials\nEmail - " + registerEmail + "\nPassword - " + registerPassword)
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (error) {
      console.log(error.message)
    }
  };
  const login = async () => {};
  const logout = async () => {};


  return (
      <AuthFunctionContext.Provider value={{register, login, logout}}>
        <RegisterEmailContext.Provider value={{registerEmail, setRegisterEmail}}>
          <RegisterPasswordContext.Provider value={{registerPassword, setRegisterPassword}}>
            <LoginEmailContext.Provider value={{loginEmail, setLoginEmail}}>
              <LoginPasswordContext.Provider value={{loginPassword, setLoginPassword}}>
                { children }
              </LoginPasswordContext.Provider>
            </LoginEmailContext.Provider>
          </RegisterPasswordContext.Provider>
        </RegisterEmailContext.Provider>
      </AuthFunctionContext.Provider> 
    )
}