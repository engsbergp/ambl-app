import React from 'react'
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';

export default function audioTest() {

  const preLoad = p5 => {

  }

  //using constructors like mic.AudioIn() add mic.constructor.AudioIn()

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.ellipse(p5.windowWidth/2, p5.windowHeight/2, x,y );
  }

  //using onClick functions, pass in the event object to the function.
  // const mousePressed = (p5, e: MouseEvent) => {
  // }

  const draw = p5 => {
    p5.line
  }

//add p5 functions as props in the returned component
//for a list of functions https://www.npmjs.com/package/react-p5
  return ( <Sketch preLoad={preLoad}  setup={setup} draw={draw}/> )
}
