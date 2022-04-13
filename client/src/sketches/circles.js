import React from 'react';
import Sketch from 'react-p5';

export default function circles() {

  let circleX1 = 0;
  let circleX2 = 50;
  let circleX3 = 100;
  let speed1 = 1;
  let speed2 = 2;
  let speed3 = 3;
  let circleY1, circleY2, circleY3;
  
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    circleY1 = p5.random(p5.windowHeight);
    circleY2 = p5.random(p5.windowHeight);
    circleY3 = p5.random(p5.windowHeight);
  } 
  
  const draw = p5 => {
  
    p5.background(0);
    p5.circle(circleX1, circleY1, 50)
    p5.circle(circleX2, circleY2, 50) 
    p5.circle(circleX3, circleY3, 50)
  
    circleX1 += speed1;
    if (circleX1 > p5.width || circleX1 < 0) {
      speed1 = speed1 * -1 ;
    };
  
    circleX2 += speed2;
    if (circleX2 > p5.width || circleX2 < 0) {
      speed2 = speed2 * -1 ;
    };
  
    circleX3 += speed3;
    if (circleX3 > p5.width || circleX3 < 0) {
      speed3 = speed3 * -1 ;
    };
  }

  return (
    <Sketch setup={setup} draw={draw}/>
  )
}



