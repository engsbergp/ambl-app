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
      <p>about3</p>
      <div className="next">
        <GrIcons.GrLinkNext onClick={goAbout2} className="next-icon-back"/>
      </div>
    </div>
  )
}

export default About3
