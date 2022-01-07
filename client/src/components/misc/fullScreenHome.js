import React from 'react';
import './misc.scss';
import * as AiIcons from 'react-icons/ai';

const fullScreenHome = () => {

  function getFullscreenElement() {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
      }

  function toggleFullscreen() {
    if (getFullscreenElement()) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    }
    } 

  return (
    <div className="full-screen-home">
      <AiIcons.AiOutlineFullscreen
        onClick={toggleFullscreen}
      />
    </div>
  )
}

export default fullScreenHome
