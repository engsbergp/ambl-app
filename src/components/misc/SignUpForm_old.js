import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
import '../../scss/utility/body.scss';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const auth = useAuth;

  return (
    <div className='container p2 border-grey'>
      <form 
        className="container"
        onSubmit={(event) => {
          event.preventDefault();
          auth.signin({email, password, callback: () => {} })
          setEmail('');
          setPassword('');
        }}  
      >
        <label className="pb1">EMAIL</label>
        <input 
          className="searchbar p1" 
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="p1">PASSWORD</label>
        <input 
          className="searchbar p1" 
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="mt2 p1" type="submit">SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUpForm
