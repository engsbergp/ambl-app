import React from 'react';
import { NavLink } from 'react-router-dom';
import { useThemeStyles } from '../../context/ThemeContext'

function HeaderExpanded() {

  const { btn, text1Active } = useThemeStyles();


  return (
      <div className="mobile-links">
        <NavLink exact className="mobile-link" activeClassName="mobile-active" to="/">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            Home
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/explore">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            Explore 
          </button>
        </NavLink>        
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/mint">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            Mint
          </button>
        </NavLink>

        <NavLink className="mobile-link" activeClassName="mobile-active" to="/play">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            Play
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/share">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            Share
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/about">
          <button style={{ background:btn, color:text1Active }} className="mobile-button">
            About
          </button>
        </NavLink>
    </div>
  )
}

export default HeaderExpanded
