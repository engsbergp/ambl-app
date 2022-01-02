import React, {useState} from 'react';
import FooterPlayer from './FooterPlayer';
import FooterControls from './FooterControls';
import FooterPlayhead from './FooterPlayhead';
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/footer.scss';
import '../../scss/components/footer-mobile.scss';
import '../../scss/utility/actions.scss';
import '../../scss/utility/body.scss';



const Footer = () => {

  const [isExpanded, setIsExpanded] = useState(false);


  function expandFooter() {
    setIsExpanded(!isExpanded);
  }



  return (
    <div className='footer'>
      <FooterPlayhead/>

      <div className='footer-top'>
        <FooterControls/>

        {/* navigation 60% width */}
        <div className={isExpanded ? 'footer-nav' : 'footer-nav hide'}>
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
            Collection
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

        {/* expander 10% width */}
        <div className="col10 center">
          <button 
            onClick={expandFooter} 
            className="btn-icon-round"
          >
            <FaIcons.FaBars className="footer-icon"/>
          </button> 
        </div>

      </div>

      {/* footer menu contents */}
      <div className={isExpanded ? 'footer-player' : 'footer-player hide'}>
        <FooterPlayer/>
      </div>
    </div>
  );
}

export default Footer;
