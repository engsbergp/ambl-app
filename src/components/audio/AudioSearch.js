import React from 'react'
import '../../scss/utility/body.scss';
import '../../scss/utility/colors.scss';

function AudioSearch() {
  return (
    <div className='col70'> 
      <input placeholder="song, artist, album" type="text" className="searchbar select-white ml1"/>
      <div className="overflow-y">

        {/* RECENT CARDS */}
        <div className="row">
          <p className="active m1">Recently Played</p>
          <div className="card-container gap1">
            <div className="card-md">

            </div>
            <div className="card-md">

            </div>
            <div className="card-md">

            </div>
            <div className="card-md">

            </div>
          </div>
        </div>
        

        {/* RELATED CARDS */}
        <div className="row">
          <p className="active m1">Related Artists</p>
          <div className="card-container gap1">
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
            <div className="card-sm">
              <p>card</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default AudioSearch
