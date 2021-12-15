import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import * as GrIcons from 'react-icons/gr';
import './about.scss';

function About2() {

  const history = useHistory();

  function goAbout() {
    history.push('/about');
  }

  function goAbout3() {
    history.push('/about3');
  }

  return (
    <div className="about">
      <Header/>
      <p>The platform's economy will be managed by the AMBL token. Users will be rewarded with the token for...</p>
          <ul className="about-list">
            <li>minting NFT's</li>
            <li>playing media through the platform</li>
            <li>ICO airdrop</li>
          </ul>
          <p>Users can spend their AMBL tokens on...</p>
            <ul className="about-list">
              <li>voting on popular content</li>
              <li>buying advertising space</li>
              <li>swapping on DEX</li>
            </ul>
            <p>tokens will be resupplied into the AMBL ecosystem on a weekly basis</p>
            <p>5% of the revinue reclaimed from advertising and voting will be donated to reforrestation programs</p>
          <h2></h2>
        <div className="next">
          <GrIcons.GrLinkNext onClick={goAbout} className="next-icon-back"/>
          <GrIcons.GrLinkNext onClick={goAbout3} className="next-icon"/>
        </div>

      <Footer/>
    </div>
  )
}

export default About2
