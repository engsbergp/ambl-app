import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';

function FooterPlayback() {

  const [isPlaying, setIsPlaying] = useState(false);

  function pauseMusic() {
    setIsPlaying(!isPlaying);
  }

  function playMusic() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className='footer-playback'>
        <div className="footer-controls">
          <button className="footer-arrows">
            <FaIcons.FaAngleLeft/>
          </button>
          {
            isPlaying ? 
              <button onClick={pauseMusic} className="footer-play">
                <FaIcons.FaPause/>
              </button>
              :
              <button onClick={playMusic} className="footer-play">
              <FaIcons.FaPlay/>
              </button>
          }
          <button className="footer-arrows">
            <FaIcons.FaAngleRight/>
          </button>
        </div>
        <div className="footer-info">
          <div className="footer-artwork"></div>
          <div className='footer-metadata'>
            <p>0:00 / 0:00</p>
            <p>artist - track</p>
          </div>
          <div className="footer-metadata-mobile">
            <p>artist</p>
            <p>song</p>
          </div>  
        </div>
    </div>
  )
}

export default FooterPlayback
