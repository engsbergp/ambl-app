import React from 'react'
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import img from '../assets/spacetime-reduced.gif'

export default function pxlSteam() {
  
  let cnv;
  let img;
  let width = window.innerWidth;
  let height = window.innerHeight;

  const preLoad = p5 => {
    img = p5.loadImage('../assets/spacetimeGif.gif');
  }

  const setup = (p5, canvasParentRef) => {
    
    // p5.ellipse(p5.windowWidth/2, p5.windowHeight/2, x,y );
    // img.resize(p5.windowWidth, p5.windowHeight)

    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.image(img)
    // let newCanvasX = (p5.windowWidth - img.p5.width) / 2;
    // let newCanvasY = (p5.windowHeight - img.p5.height) / 2;
    // cnv.p5.position(newCanvasX, newCanvasY);
  } 

  const draw = p5 => {
    // for (let col = 0; col < p5.width; col+=5) {
    //   for (let row = 0; row < p5.height; row+=5) {
    //     let xPos = col;
    //     let yPos = row;
    //     let c = img.get(xPos, yPos);
    //     p5.noFill()
    //     p5.push()
    //     p5.translate(xPos, yPos);
    //     p5.strokeWeight(p5.random(10));
    //     p5.stroke(p5.color(c))
    //     curve(xPos, yPos, sin(xPos), sin(yPos), 0, 0,0,0)
    //     p5.curve(xPos, yPos, p5.sin(xPos), p5.cos(yPos) * p5.random(50) * p5.sin(yPos), p5.cos(50) * p5.sin(xPos), p5.cos(-50), yPos*-1, xPos*-1)
    //     p5.pop()
      // }
    // }
  }


  return ( <Sketch preLoad={preLoad} setup={setup} draw={draw}/> )
}
