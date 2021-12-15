import React from 'react';
import './misc.scss';
import * as AiIcons from 'react-icons/ai';

const fullScreenButton = () => {

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
    <div className="full-screen-button">
      <AiIcons.AiOutlineFullscreen
        onClick={toggleFullscreen}
      >

      </AiIcons.AiOutlineFullscreen>
    </div>
  )
}

export default fullScreenButton
