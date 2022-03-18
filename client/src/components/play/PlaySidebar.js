import React from 'react'
import { useThemeStyles } from '../../context/ThemeContext';

function PlaySidebar() {

  const { text1Active, btn } = useThemeStyles();

  return (
    <div className="play-sidebar">
      <div className="play-collection">
        <p>NFT collection</p>
      </div>
      <div className="play-add">
        <button style={{ background:btn, color:text1Active }} className="btn-round-sm">
          add to playlist
        </button>
      </div>
    </div>
  )
}

export default PlaySidebar
