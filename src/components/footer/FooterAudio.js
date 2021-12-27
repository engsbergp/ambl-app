import React from 'react'
import './footerAudio.scss';

function FooterAudio() {
  return (
    <div className="footeraudio">

      <input placeholder="song, artist, album" type="text" className="footeraudio-searchbar"/>
      <div className="footeraudio-allcards">

        {/* RECENT CARDS */}
        <div className="footeraudio-allrecents">
          <div className="footeraudio-recenttext">
              <p>Recently Played</p>
          </div>
          <div className="footeraudio-recentcards">
            <div className="footeraudio-recentcard">

            </div>
            <div className="footeraudio-recentcard">

            </div>
            <div className="footeraudio-recentcard">

            </div>
            <div className="footeraudio-recentcard">

            </div>
          </div>
        </div>
        

        {/* RELATED CARDS */}
        <div className="footeraudio-allrelated">
          <div className="footeraudio-relatedtext">
            Related Artists
          </div>
          <div className="footeraudio-relatedcards">
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
            <div className="footeraudio-relatedcard">
              <p>card</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default FooterAudio
