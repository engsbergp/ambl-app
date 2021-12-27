import React from 'react'
import {useHistory} from 'react-router-dom';
import * as GrIcons from 'react-icons/gr';
import './about.scss';

function About3() {

  const history = useHistory();

  function goAbout2() {
    history.push('/about2');
  }

  return (
    <div className="about">
      <div className="about-text">
        <p>
          The Ambient Landscapes economy will be managed by the AMBL token. 
          Users will be rewarded with the token for...
        </p>
        <ul className="about-list about-about">
          <li>minting NFT's</li>
          <li>importing existing NFT's</li>
          <li>staking their NFTs</li>
          <li>playing media through the platform</li>
          <li>receiving views</li>
        </ul>
        <p className="about-about">Users can spend their AMBL tokens on...</p>
        <ul className="about-list about-about">
          <li>voting on popular content</li>
          <li>tipping creators and curators</li>
          <li>promotions and advertising</li>
          <li>swapping on DEX</li>
        </ul>
        <p className="about-about">Tokens will be resupplied into the AMBL economy on a weekly basis.</p>
        <p className="about-about">
          5% of the revinue reclaimed from advertising and voting will be donated 
          to reforestation programs.</p>
      </div>
      <div className="next">
        <GrIcons.GrLinkNext onClick={goAbout2} className="next-icon-back"/>
      </div>
    </div>
  )
}

export default About3
