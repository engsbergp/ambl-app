import React from 'react';
import Sketch from 'react-p5';
import { useThemeStyles } from '../context/ThemeContext';
import { useSpotifyPlayer } from '../context/AudioContext';
import 'p5/lib/addons/p5.sound.min';
import song from '../assets/like-the-second-half.mp3';

export default function AudioTest() {

  const { bg1, btn } = useThemeStyles();
  const { playerId } = useSpotifyPlayer();

  let x = 400;
  let y = 2000;
  let mySound;
  let ell;
  let amp;
  const source = new AudioBufferSourceNode.start();
  const actx = new AudioContext();
  const destination = new MediaStreamAudioDestinationNode(actx);
  const mediaRecorder = new MediaRecorder(destination.stream);
  // const out = navigator.mediaDevices.getUserMedia(actx)

  const preload = p5 => {
    p5.soundFormats('mp3', 'ogg');
    mySound = p5.loadSound(song);
  };
  
  const logAudio = () => {
    console.log(destination)
  }
  
  const setup = (p5, canvasParentRef,) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(bg1);
    // amp = new p5.constructor.Amplitude();
  };
  
  const draw = (p5) => {
    p5.background(bg1);
    // let vol = amp.getLevel();
    p5.noStroke();
    p5.fill(btn)
    ell = p5.ellipse(p5.windowWidth/2, p5.windowHeight/2, x, y);
  };

  const resizeCanvas = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  return ( 
  <>
    <Sketch preload={preload} setup={setup} draw={draw} resizeCanvas={resizeCanvas} />
    <button onClick={logAudio} style={{width:"500px", height:"300px"}}>click me button</button>
  </>
    )
}
