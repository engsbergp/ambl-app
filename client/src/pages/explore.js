import { React, useState } from 'react';
import ExploreAudioResults from '../components/explore/ExploreAudioResults';
import { useThemeStyles } from '../context/ThemeContext';
import { useSpotifyTokens } from '../context/SpotifyContext';
import VisualAllNfts from '../components/visual/VisualAllNfts'

function Explore() {

  const { bg1, btn, text1 } = useThemeStyles();

  const [ explore, setExplore ] = useState("video");

  const { isFooter } = useSpotifyTokens();

  return (
  <div className={isFooter? "page-footer" : "page"} style={{background:bg1}}>
  
    <div className="col100">
      <div className="row center mt-sm mb-sm">
      <div className="btn-round-sm"
        style={{width:"5rem", background:btn, color:text1}}
        onClick={() => setExplore("video")}
        >
        visual
      </div>
      <div 
        className="btn-round-sm"
        style={{width:"5rem", background:btn, color:text1}}
        onClick={() => setExplore("audio")}
        >
        audio
      </div>
    </div>

      { 
        explore==='audio' ?
        <ExploreAudioResults/>    
        :
        <div className="overflow-y center">
          <VisualAllNfts/>
        </div>
      }
    </div>
  </div>
  )
}

export default Explore
