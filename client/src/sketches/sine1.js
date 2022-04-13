import React from 'react'
import Sketch from 'react-p5';

export default function Sine1() {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
  }

  const draw = p5 => {
    p5.background(10,20,30);
    p5.noFill();
    p5.stroke(255);

    p5.translate(p5.windowWidth / 2, p5.windowWidth / 2);

    for (let i = 0; i < 200; i++) {

      p5.push();

      p5.rotate(p5.sin(p5.frameCount + i) * 100);

      let r = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 255);
      let g = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 50, 255);
      let b = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 50, 255);

      p5.stroke(r,g,b)

      p5.rect(0,0, 600 - i * 3, 600 - i * 3, 200 - i );

      p5.pop();
    }

  }

  return ( <Sketch setup={setup} draw={draw}/> )
}
