import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import '../../scss/utility/typography.scss';
import '../../scss/utility/body.scss';


function FooterControls() {

  const [isPlaying, setIsPlaying] = useState(false);

  function pauseMusic() {
    setIsPlaying(!isPlaying);
  }

  function playMusic() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className='footer-playback gap1'>
        <div className="footer-controls">
          <FaIcons.FaAngleLeft className="icon-md"/>
          {
            isPlaying ? 
              <button 
                onClick={pauseMusic} 
                className="btn-icon-circle btn-grey"
              >
                <FaIcons.FaPause/>
              </button>
             :
              <button 
                onClick={playMusic} 
                className="btn-icon-circle btn-grey"
              >
                <FaIcons.FaPlay/>
              </button>
          }
          <FaIcons.FaAngleRight className="icon-md"/>
        </div>
        <div className="footer-info gap1">
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

export default FooterControls
