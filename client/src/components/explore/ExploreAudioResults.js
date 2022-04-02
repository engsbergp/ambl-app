import React from 'react';
import AudioRecents from '../audio/AudioRecents';
import AudioRecommendedArtists  from '../audio/AudioRecommendedArtists';
import AudioFeaturedPlaylists from '../audio/AudioFeaturedPlaylists';
import ExploreLogIntoSpotify from './ExploreLogIntoSpotify';
import { useSpotifyUserData } from '../../context/AudioContext';


function ExploreAudioResults() {
  const { userName } = useSpotifyUserData();
  return (
      <div className="overflow-y pl3 pr3">
        { 
          userName? 
          <>
          <AudioRecents/>
          <AudioRecommendedArtists/>
          <AudioFeaturedPlaylists/>
          </>
          :
          <ExploreLogIntoSpotify/>
        }

      </div>
  )
}

export default ExploreAudioResults
