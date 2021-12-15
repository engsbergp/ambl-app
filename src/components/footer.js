import React from 'react';
import { useHistory } from "react-router-dom";
import './header-footer.scss';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';

const Footer = () => {

  const history = useHistory();

  function goHome() {
    history.push('/')
  }
  function goListen() {
    history.push('/listen')
  }
  function goCreate() {
    history.push('/create')
  }
  function goPlay() {
    history.push('/play')
  }
  function goShare() {
    history.push('/share')
  }

  return (
    <div className='footer'>
        <button onClick={goHome} className="footer-button">
          <FaIcons.FaCity className="footer-icon"/>
        </button>
        <button onClick={goListen} className="footer-button">
          <FaIcons.FaSpotify className="footer-icon"/>
        </button>
        <button onClick={goCreate} className="footer-button">
          <FaIcons.FaPlus className="footer-icon"/>
        </button>
        <button onClick={goPlay} className="footer-button">
          <FaIcons.FaDesktop className="footer-icon"/>
        </button>
        <button onClick={goShare} className="footer-button">
          <FaIcons.FaCommentDots className="footer-icon"/>
        </button>
    </div>
  );
}

export default Footer;
