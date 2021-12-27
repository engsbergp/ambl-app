import React from 'react'
import * as FaIcons from 'react-icons/fa';

function FooterNav() {
  return (
    <div>
        <button className="footer-button">
          Audio
        </button>
        <button className="footer-button">
          Video
        </button>
        <button className="footer-button">
          Recent
        </button>
        <button className="footer-button">
          Featured
        </button>
        <button className="footer-button-mobile">
          <FaIcons.FaMusic/>
        </button>
        <button className="footer-button-mobile">
          <FaIcons.FaVideo/>
        </button>
        <button className="footer-button-mobile">
          <FaIcons.FaNewspaper/>
        </button>
        <button className="footer-button-mobile">
          <FaIcons.FaStar/>
        </button>
    </div>
  )
}

export default FooterNav
