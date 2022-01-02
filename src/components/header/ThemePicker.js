import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';

function ThemePicker() {

  const [theme, setTheme] = useState('greystyle');

  
  return (
    <div className='header-themewrapper'>
      <button onClick={() => setTheme('lightmode')} className="btn-icon-md">
        <FaIcons.FaSun/>
      </button>
      <button onClick={() => setTheme('darkmode')} className="btn-icon-md btn-gre">
        <FaIcons.FaMoon/>
      </button>
      {/* <button onClick={() => setTheme('greystyle')} className="btn-icon-md">
        <FaIcons.FaMoon/>
      </button> */}
    </div>
  )
}

export default ThemePicker
