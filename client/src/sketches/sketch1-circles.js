let circleX1 = 0;
let circleX2 = 50;
let circleX3 = 100;
let speed1 = 1;
let speed2 = 2;
let speed3 = 3;
let circleY1, circleY2, circleY3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleY1 = random(windowHeight);
  circleY2 = random(windowHeight);
  circleY3 = random(windowHeight);
} 

function draw() {

  background(0);
  circle(circleX1, circleY1, 50)
  circle(circleX2, circleY2, 50) 
  circle(circleX3, circleY3, 50)

  circleX1 += speed1;
  if (circleX1 > width || circleX1 < 0) {
    speed1 = speed1 * -1 ;
  };

  circleX2 += speed2;
  if (circleX2 > width || circleX2 < 0) {
    speed2 = speed2 * -1 ;
  };

  circleX3 += speed3;
  if (circleX3 > width || circleX3 < 0) {
    speed3 = speed3 * -1 ;
  };
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
background(0);
}
