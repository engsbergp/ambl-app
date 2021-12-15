import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import * as GrIcons from 'react-icons/gr';
import './about.scss';

function About() {

  const history = useHistory();

  function goAbout2() {
    history.push('/about2');
  }

  return (
    <div className="about">
      <Header/>
        <div className="about-text">
          <h1>Ambient Landscapes (AMBL)</h1>
          <p>The ambient landscape platform is an ecosystem for collectors, curators, enjoyers, and artists to integrate blockchain art into their daily lives</p>
          <p>Users can connect their wallets from multiple blockchains (Tezos, Ethereum, Solana, Near), and display them in a variety of webframes, with a huge range of playback options</p>
          <p>The AMBL app connects with the Spotify API, and enables artist and viewers with an interactive experience like nothing before. Digital artist have the opportunity to create generative and responsive art, available for sale directly on the AMBL platform.</p>

        </div>
        <div className="next">
          <GrIcons.GrLinkNext onClick={goAbout2} className="next-icon"/>
        </div>
      <Footer/>
    </div>
  )
}

export default About
