import React from 'react'
import Sketch from 'react-p5';

export default function Sine1() {

  let roX;
  let roZ;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB);
  }

  const draw = p5 => {
    p5.background(10);
  
    roX = p5.map(p5.sin(p5.frameCount), -1, 1, 75, 80) 
    p5.rotateX(roX);
    
    roZ = p5.map(p5.sin(p5.frameCount), -1, 1, -80, -100)
    p5.translate(0,roZ,0)
    
    p5.noFill();
    p5.stroke(255);
    
    for (let i = 0; i < 40; i++) {

      let h = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 250, 300);
      let s = p5.map(i, 0, 20, 75, 50);
      let b = p5.map(p5.cos(p5.frameCount), -1, 1, 100, 250);
      
      p5.stroke(h,s,b);
      
      p5.rotate(p5.frameCount / 100)
      
      p5.beginShape()
      for (let j = 0; j < 360; j += 30) {
        let rad = i * 7;
        let x = rad * p5.cos(j);
        let y = rad * p5.sin(j);
        let z = p5.sin(p5.frameCount + i * 10) * 200;
        
        p5.vertex(x, y, z);
        
      }
      
      p5.endShape(p5.CLOSE);
      
      
    }

  }

  return ( <Sketch setup={setup} draw={draw}/> )
}
