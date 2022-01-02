import React from 'react';
import {useHistory} from 'react-router-dom';
import * as GrIcons from 'react-icons/gr';
import '../scss/pages/about.scss';

function About() {

  const history = useHistory();

  function goAbout2() {
    history.push('/about2');
  }

  return (
    <div className="about">
        <div className="about-text">
          <h1>Ambient Landscapes (AMBL)</h1>
          <p className="about-about">
            An ecosystem for collectors, curators, enjoyers, and artists;  
            to integrate blockchain art into daily lives through accessible 
            aesthetics and multimedia experiences. A cross-blockchain NFT webframe 
            and creation suite.
          </p>
          <p className="about-about">
            <b>COLLECTORS</b> can connect their wallets from multiple blockchains 
            (Tezos, Ethereum, Solana, Near), and showcase their NFTs with a huge 
            range of playback options. Collectors are rewarded for supplying assets
            to help build bridges between blockchains, and showcaseing your favorite 
            works from your favorite creators.
          </p>
          <p className="about-about">
            To connect with Spotify and other popular API's,
            the platform encourages responsive and generative art.  
            <b> ARTISTS</b> can mint an NFT to their blockchain of choice,
            and have their work added to the library of visualizations. Generative artists 
            will have support for widely used development languages, and more traditional
            artists will have straightforward access to sophisticated minting tools.
          </p>
        </div>
        <div className="next">
          <GrIcons.GrLinkNext onClick={goAbout2} className="next-icon"/>
        </div>
    </div>
  )
}

export default About
