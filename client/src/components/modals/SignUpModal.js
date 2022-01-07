import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useRegisterEmail, useRegisterPassword, useLoginEmail, useLoginPassword, useAuthFunctions } from '../../context/AuthContext';
import { useToggleModal } from '../../context/ModalContext';
import * as FaIcons from 'react-icons/fa';
import "firebase/auth";
import '../../scss/components/modals.scss';
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';


function SignUpModal() {

  //local modal states, change screens, check passwork confirm
  const [registerScreen, setRegisterScreen] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  //modal context states
  const { toggleSignUpModal }= useToggleModal();

  //auth context states
  const { registerEmail, setRegisterEmail } = useRegisterEmail();
  const { registerPassword, setRegisterPassword } = useRegisterPassword();
  const { loginEmail, setLoginEmail } = useLoginEmail();
  const { loginPassword, setLoginPassword } = useLoginPassword();
  const { register, login } = useAuthFunctions();

  return ReactDom.createPortal(

    // grey background
    <div className='modal-bg'>
      <div className="modal modal-primary align-top active">
          
          {/* login or register for a new account */}

          {
            registerScreen ? 
                  // REGISTER
            <div className='container'>
              <form 
                className="container"
                onSubmit={register}
              >
                <label className="pb1">NEW ACCOUNT WITH EMAIL</label>
                <input 
                  className="searchbar mt1" 
                  type="email"
                  placeholder="new email"
                  value={registerEmail}
                  onChange={(event) => setRegisterEmail(event.target.value)}
                />
                <input 
                  className="searchbar mt1" 
                  type="password"
                  placeholder="new password"
                  value={registerPassword}
                  onChange={(event) => setRegisterPassword(event.target.value)}
                />
                <input 
                  className={repeatPassword === registerPassword ? "searchbar-repeat mt1 password-green" : "searchbar-repeat mt1 password-red"} 
                  type="password"
                  placeholder="confirm password"
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
                <button className="btn-round-sm mt1 p1 btn-grey" type="submit">SIGN UP</button>
              </form>
              <button className="button-link pt1" onClick={() => setRegisterScreen(false)}>
                Have an Account? Login Instead
              </button>
            </div>
            :
                  // LOGIN
            <div className='container'>
              <form 
                className="container"
                onSubmit={login}
              >
                <label className="pb1">LOGIN WITH EMAIL</label>
                <input 
                  className="searchbar mt1" 
                  type="email"
                  placeholder="login email"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
                <input 
                  className="searchbar mt1" 
                  type="password"
                  placeholder="login password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
                <button className="btn-round-sm mt1 p1 btn-grey" type="submit">LOGIN</button>
              </form>
              <button className="button-link pt1" onClick={() => setRegisterScreen(true)}>
                Create a New Account
              </button>
            </div>  
          }

        <button onClick={toggleSignUpModal} className="btn-icon-circle close-button">
          <FaIcons.FaPlus className="rotate90"/>
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default SignUpModal






