import React from 'react'
import { useActiveTheme, useThemeStyles } from '../../context/ThemeContext';

function PlaySidebar() {

  const { bg1, setBg1 } = useThemeStyles();

  return (
    <div style={{ background:bg1 }} className="play-sidebar">
      <div className="play-collection">
        <p>NFT collection</p>
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
