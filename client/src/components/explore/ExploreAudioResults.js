import React from 'react';
import AudioRecents from '../audio/AudioRecents';
import AudioRecommendedArtists  from '../audio/AudioRecommendedArtists';
import AudioFeaturedPlaylists from '../audio/AudioFeaturedPlaylists';
import '../../scss/utility/body.scss';
import '../../scss/utility/typography.scss';


function ExploreAudioResults() {
  
  return (
      <div className="overflow-y">
        <AudioRecents/>
        <AudioRecommendedArtists/>
        <AudioFeaturedPlaylists/>
      </div>
  )
}

export default ExploreAudioResults
