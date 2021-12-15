import React from 'react'

function PlaySidebar() {
  return (
    <div className="play-sidebar">
      <div className="play-collection">
        <p>collection</p>
        <p>select tokens to add</p>
      </div>
      <div className="play-add">
        <button className="play-add-button">
          add to playlist
        </button>
      </div>
    </div>
  )
}

export default PlaySidebar
