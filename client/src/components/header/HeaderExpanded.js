import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../scss/components/header-mobile.scss';
import '../../scss/utility/body.scss';

function HeaderExpanded() {
  return (
      <div className="mobile-links">
        <NavLink exact className="mobile-link" activeClassName="mobile-active" to="/">
          <button className="mobile-button">
            Home
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/listen">
          <button className="mobile-button">
            Listen 
          </button>
        </NavLink>        
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/create">
          <button className="mobile-button">
            Create
          </button>
        </NavLink>

        <NavLink className="mobile-link" activeClassName="mobile-active" to="/play">
          <button className="mobile-button">
            Play
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/share">
          <button className="mobile-button">
            Share
          </button>
        </NavLink>
        <NavLink className="mobile-link" activeClassName="mobile-active" to="/about">
          <button className="mobile-button">
            About
          </button>
        </NavLink>
    </div>
  )
}

export default HeaderExpanded
