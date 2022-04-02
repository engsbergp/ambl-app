import { React, useState } from 'react';
import ExploreAudioResults from '../components/explore/ExploreAudioResults';
import ExploreVisualResults from '../components/explore/ExploreVisualResults';
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/explore.scss';

function Explore() {

  const { bg1, btn, text1 } = useThemeStyles();

  const [ explore, setExplore ] = useState("video");

  return (
  <div className="page" style={{background:bg1}}>
  
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
        <ExploreVisualResults/>
      }
    </div>
  </div>
  )
}

export default Explore
