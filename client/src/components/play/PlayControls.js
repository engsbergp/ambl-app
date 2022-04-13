import React from 'react';
import {useThemeStyles} from '../../context/ThemeContext'
import {useVisualData} from '../../context/VisualContext'
import { BsFullscreen } from 'react-icons/bs';

function PlayControls({ handleFullScreen, isMuted, setIsMuted }) {

  const { btn, text1Active } = useThemeStyles();

  //visual states
  const {loopLength} = useVisualData();

  return (
    <div style={{ background:btn, color:text1Active }} className="play-active-video center">
      <BsFullscreen 
        className="hover-larger"
        onClick={ handleFullScreen } 
        style={{ margin:".5rem 1rem", fontSize:"1.5rem", cursor:"pointer" }}
      />
        <input className="ml1 mr-sm" id="fade" type="checkbox" checked={isMuted} onChange={() => setIsMuted(!isMuted)}/>
        <label htmlFor="fade">muted</label>
        <p>{loopLength}</p>
    </div>
  )
}

export default PlayControls
