import React from 'react'
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';

let img;
let cnv;


function preload() {
img = loadImage('../assets/spacetime-reduced.gif')
}

function setup() {
  img.resize(windowWidth, windowHeight)

  cnv = createCanvas(img.width, img.height);

  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  
} 

function draw() {
  for (let col = 0; col < img.width; col+=5) {
    for (let row = 0; row < img.height; row+=5) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      noFill()
      push()
      translate(xPos, yPos);
      strokeWeight(random(10));
      stroke(color(c))
      // curve(xPos, yPos, sin(xPos), sin(yPos), 0, 0,0,0)
      curve(xPos, yPos, sin(xPos), cos(yPos) * random(50) * sin(yPos), cos(50) *sin(xPos), cos(-50),yPos*-1,xPos*-1)
      pop()
    }
  }
}

function windowResized() {
  img.resize(windowWidth, windowHeight)
  resizeCanvas(img.width, img.height);
  createimg();
}
