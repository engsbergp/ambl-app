import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';

function ThemePicker() {

  const [theme, setTheme] = useState(3);
  
  return (
    <div className='header-themewrapper'>
      <button onClick={() => setTheme(1)} className="btn-icon-md">
        <FaIcons.FaSun/>
      </button>
      <button onClick={() => setTheme(2)} className="btn-icon-md btn-gre">
        <FaIcons.FaMoon/>
      </button>
      <button onClick={() => setTheme(3)} className="btn-icon-md">
        <FaIcons.FaMoon/>
      </button>
    </div>
  )
}

export default ThemePicker
