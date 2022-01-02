import React from 'react';
import {useHistory} from 'react-router-dom';
import * as GrIcons from 'react-icons/gr';
import '../scss/pages/about.scss';

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
      <div className="about-text">
        <p className="about-about">
          As the library of content begins to grow, <b>CURATORS</b> will be able to 
          access an enormous collection of NFT's submitted by artists and collectors.  
          Curators will have the opportunity to create playlists, and establish 
          relationships with artists, viewers, and collectors. Curators will have the
          creative freedom to reorganize and relayer existing content to suit their
          own style and fanbase.
        </p>
        <p className="about-about">
          All users will have access to the comprehensice library of visualizations 
          and the power to connect them to your favorite audio player. <b>ENJOYERS </b>
          will have an experience catered by an ever-growing community of artists,
          collectors, and curators.
        </p>
        <p className="about-about">Building a community is essential and part of 
        the fun! Each user can enjoy the environment to their own level of dedication,
        and this cooperation will pave the way for volumes of content,
        and long-form advertising opportunities </p>
      </div>

        <div className="next">
          <GrIcons.GrLinkNext onClick={goAbout} className="next-icon-back"/>
          <GrIcons.GrLinkNext onClick={goAbout3} className="next-icon"/>
        </div>
    </div>
  )
}

export default About2
