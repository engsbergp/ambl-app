import React from 'react'
import {useHistory} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import * as GrIcons from 'react-icons/gr';
import './about.scss';

function About3() {

  const history = useHistory();

  function goAbout2() {
    history.push('/about2');
  }

  return (
    <div>
      <Header/>
        <p>about3</p>
        <div className="next">
          <GrIcons.GrLinkNext onClick={goAbout2} className="next-icon-back"/>
        </div>
      <Footer/>
    </div>
  )
}

export default About3
