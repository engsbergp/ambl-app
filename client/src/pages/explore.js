import { React, useState } from 'react';
import ExploreAudioSearch from '../components/explore/ExploreAudioSearch';
import ExploreAudioResults from '../components/explore/ExploreAudioResults';
import ExploreVisualSearch from '../components/explore/ExploreVisualSearch';
import ExploreVisualResults from '../components/explore/ExploreVisualResults';
import { useThemeStyles } from '../context/ThemeContext'
import '../scss/pages/explore.scss';

function Explore() {

  const { bg1, btn, text1 } = useThemeStyles();

  const [ explore, setExplore ] = useState('audio');

  return (
  <div className="page flex-row" style={{background:bg1}}>
  
  <div className="col30">
    <div 
      className="btn-round-sm"
      style={{background:btn, color:text1}}
      onClick={() => setExplore('audio')}
    >
      audio
    </div>
    <div className="btn-round-sm"
      style={{background:btn, color:text1}}
      onClick={() => setExplore('visual')}
     >
      visual
    </div>
      {
        explore==='audio' ?
        <ExploreAudioSearch/>
        :
        <ExploreVisualSearch/>
      }
    </div>
    <div className="col70">
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
