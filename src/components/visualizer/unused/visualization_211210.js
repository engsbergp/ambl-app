import React from 'react'
import '../../pages/visualizer.scss';
import music from '../../assets/like-the-second-half.mp3';

const visualization = () => {

  //get audio element tag
  const audio = document.querySelector('audio');

  //create audio context
  const ctx = new AudioContext();

  //create audio source
  // const audioSource = ctx.createMediaElementSource(audio);

  //create an audio analyser
  // const analyser = audioContext.createAnalyser();

  // //connect the source to analyser, then back to the destination
  // audioSource.connect(analyser);
  // audioSource.connect(audioContext.destination);

  // audio.play();

  return (
    <div className="visualization">
      <div className="audio-player">
        <audio src={music} controls></audio>
      </div>
      

      <img src={''} alt={''} className='visualization-image'/>


    </div>
  )
}

export default visualization
