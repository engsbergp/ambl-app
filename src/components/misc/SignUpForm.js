import React from 'react';
import { useRegisterEmail, useRegisterPassword, useLoginEmail, useLoginPassword, useAuthFunctions } from '../../context/AuthContext';
import "firebase/auth";
import '../../scss/utility/body.scss';

function SignUpForm() {

  const { registerEmail, setRegisterEmail } = useRegisterEmail();
  const { registerPassword, setRegisterPassword } = useRegisterPassword();
  const { loginEmail, setLoginEmail } = useLoginEmail();
  const { loginPassword, setLoginPassword } = useLoginPassword();
  const { register, login, logout } = useAuthFunctions();

  return (
    <div className='container p2 border-grey'>
      {/* REGISTER */}
      <form 
        className="container"
        onSubmit={register}
      >
        <label className="pb1">REGISTER EMAIL</label>
        <input 
          className="searchbar p1" 
          type="email"
          placeholder="email"
          value={registerEmail}
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <label className="p1">REGISTER PASSWORD</label>
        <input 
          className="searchbar p1" 
          type="password"
          placeholder="password"
          value={registerPassword}
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button className="mt2 p1" type="submit">SIGN UP</button>
      </form>

      {/* LOGIN */}
      <form 
        className="container"
      >
        <label className="pb1 mt1">LOGIN EMAIL</label>
        <input 
          className="searchbar p1" 
          type="email"
          placeholder="email"
          value={loginEmail}
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <label className="p1">LOGIN PASSWORD</label>
        <input 
          className="searchbar p1" 
          type="password"
          placeholder="password"
          value={loginPassword}
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button className="mt2 p1" type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default SignUpForm
