import React from 'react'
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Pixel from '../assets/Pixel_NES.otf'

export default function audioTest() {

  let pixel;

  let fade;
  let fadeAmount = 1;
  let text;
  let text2;
  let activeText = text;
  let activeFontSize;
  let cursorText = "click for music"
  // activeText = text;
  
  
  const preLoad = p5 => {
    
    pixel = p5.loadFont(Pixel)
    
  }
  
  const setup = (p5, canvasParentRef) => {
    
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.textAlign(p5.CENTER);
    p5.frameRate(60);
    fade = 0
    
    // setInterval(setActiveText, 3500)
    
    
    // function setActiveText() {
      //   if (activeText === text){
        //     activeText = text2;
        //   } else {
          //     activeText = text;
    //   }
    // };

  }
  
  const draw = p5 => {
    let text = "Welcome to Ambient Landscapes. Please make yourself at home";
  
    let text2 = "Connect Spotify for audio. Connect wallet to view NFTs";
    
    //draw re-renders at the frame rate
    //each re-render will contain these attributes

    //set bg
    p5.background(0);
    
    //define colors
    let r = p5.map(p5.sin(p5.frameCount/75), -1, 1, 0, 200);
    let g = p5.map(p5.sin(p5.frameCount/100),-1,1,100, 200);

    //define cursor
    let cursorFontSize = p5.width / 25;

    p5.textSize(cursorFontSize);
    p5.fill(r, g, 200);
    p5.text(cursorText, p5.mouseX, p5.mouseY);
    
    //define text that will change
    activeFontSize = p5.width / 12;
    p5.textSize(activeFontSize);

    p5.fill(r, g, 200, fade);
    p5.textLeading(p5.height / 5);
    p5.text(activeText, 0, p5.height / 5, p5.width);

    if (fade<-1) fadeAmount=1;  
    if (fade>240) fadeAmount=-1; 
    fade += fadeAmount; 

    if (fade === 0 && activeText === text) { 
      activeText = text2;
    } else {
      activeText = text;
    }
    console.log(fade)

  }

  return ( <Sketch preLoad={preLoad} setup={setup} draw={draw}/> )
}
