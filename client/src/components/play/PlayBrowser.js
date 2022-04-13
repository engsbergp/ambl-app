import React, { useState } from 'react';
import { useVisualData } from '../../context/VisualContext';
import PlayControls from './PlayControls';
import ReactPlayer from 'react-player'

const PlayBrowser = () => {

  const [isMuted, setIsMuted] = useState(true);

  const { playVideoActive } = useVisualData();

  const handleFullScreen = () => {
    document.getElementById("player").requestFullscreen().catch(console.log)
  }

  return (
    <div className="play-browser">
      <ReactPlayer
        url={playVideoActive}
        playing={true} 
        loop={true} 
        muted={isMuted}
        id="player" 
        className="play-active-video" 
        style={{maxHeight:"400px"}} 
      />
      <PlayControls isMuted={isMuted} setIsMuted={setIsMuted} handleFullScreen={handleFullScreen} />
    </div>
    
  )
}

export default PlayBrowser
