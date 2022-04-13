import React from 'react';
import Sketch from 'react-p5';

export default function flowfield() {

  var points = [];
  var mult;
  var r1, r2, g1, g2, b1, b2;
  
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.noiseDetail(1);
    p5.angleMode(p5.DEGREES);
  
    var density = 25;
    var space = p5.width / density;
    
    for (var x = 0; x < p5.width; x += space) {
      for (var y = 0; y < p5.height; y += space) {
        var p = p5.createVector (x + p5.random(-10, 10), y + p5.random(-10, 10))
        points.push(p)
      }
    }
  
    r1 = p5.random(255);
    r2 = p5.random(255);
    g1 = p5.random(255);
    g2 = p5.random(255);
    b1 = p5.random(255);
    b2 = p5.random(255);
  
    mult = p5.random(0.005, 0.01);
    
    // setInterval(draw, 5000)

  } 
  
  const draw = p5 => {
    p5.noStroke();
    p5.fill(255);
  
    for (var i = 0; i < points.length; i++) {
  
      var r = p5.map(points[i].x, 0, p5.width, r1, r2);
      var g = p5.map(points[i].y, 0, p5.height, g1, g2);
      var b = p5.map(points[i].x, 0, p5.width, b1, b2);
  
      p5.fill(r, g, b);
  
      var angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
  
      points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));
      
      p5.ellipse(points[i].x, points[i].y, 1)
    }
  
  }
  

  return ( <Sketch setup={setup} draw={draw}/> )
}



