import { React, useState } from 'react';
import ExploreAudioSearch from '../components/explore/ExploreAudioSearch';
import ExploreAudioResults from '../components/explore/ExploreAudioResults';
import ExploreVisualSearch from '../components/explore/ExploreVisualSearch';
import ExploreVisualResults from '../components/explore/ExploreVisualResults';
import '../scss/pages/explore.scss';
import '../scss/utility/body.scss';
import '../scss/utility/colors.scss';

function Explore() {

  const [ explore, setExplore ] = useState('audio');

  return (
  <div className="page flex-row">
  
  <div className="col30">
    <div 
      className="btn-round-sm btn-grey"
      onClick={() => setExplore('audio')}
    >
      audio
    </div>
    <div className="btn-round-sm btn-grey"
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
