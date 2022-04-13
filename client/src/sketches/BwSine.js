import React from 'react'
import Sketch from 'react-p5';
// import 'p5/lib/addons/p5.sound';

export default function BwSine() {

  let angles = [];
  let bgAngles = [];
  let angleV = 0.01;
  let r = 5;
  let p = 5;
  let total;
  let bgTotal;
  let f2;

  //using constructors like mic.AudioIn() add mic.constructor.AudioIn()

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    
    total = p5.floor(p5.windowWidth / (r*2));
    for (let i = 0; i < total; i++) {
      angles[i] = p5.map(i, 0, total - 1, 0, p5.TWO_PI);
    }
    
    bgTotal = p5.floor(p5.windowWidth / (p*2));
    for (let b = 0; b < bgTotal; b++) {
      bgAngles[b] = p5.map(b, 0, bgTotal - 1, 0, p5.TWO_PI *2 );
    }
  }


  const draw = p5 => {
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);

    for (let b = 0; b < bgAngles.length; b++) {
      let bg = p5.map(p5.sin(bgAngles[b]), -1, 1, 50, 175);
      f2 = p5.map(p5.sin(bgAngles[b]), -1, 1, 175, 50);
      p5.background(bg);
      bgAngles[b] += 0.01;
    }
  
    for (let i = 0; i < angles.length; i++) {
      let y = p5.map(p5.sin(angles[i]), -1, 1, (-p5.windowHeight / 2) + 100, (p5.windowHeight / 2) - 100);
      let x = p5.map(i, 0, angles.length, -p5.windowWidth / 2, p5.windowWidth/2);
      let f1 = p5.map(p5.sin(angles[i]), -1, 1, 10, 100); 
      let s1 = p5.map(p5.sin(angles[i]), -1, 1, 100, 10);
      p5.fill(f1);
      p5.stroke(s1);
      p5.rect(x, p5.windowHeight / 2, total, y - (p5.windowWidth / 2.5));
      
      p5.fill(f2)
      p5.noStroke();
      p5.rect(x, y - 20, total - 10, 10);
      
      angles[i] += 0.02;
    }
  }

  return ( <Sketch setup={setup} draw={draw}/> )
}
