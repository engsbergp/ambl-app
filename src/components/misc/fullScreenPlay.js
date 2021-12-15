import React from 'react';
import './misc.scss';
import * as AiIcons from 'react-icons/ai';

const fullScreenPlay = () => {

  function getFullscreenElement() {
    // const browserEl = getElementByClass('play-browser'); 

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
    <div className="full-screen-play">
      <AiIcons.AiOutlineFullscreen
        onClick={toggleFullscreen}
      />
    </div>
  )
}

export default fullScreenPlay
