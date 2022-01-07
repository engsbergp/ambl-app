

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  song = loadSound("like-the-second-half.mp3");


} 

function draw() {
  background(0);

  translate(0, 65,-400)
  rotateX(79)

  var w = 25;
  
  
  for (var x = -width; x < width; x += w) {
    for (var y = -height * 5; y < height; y += w) {
      push();
        fill(175);
        translate(x, y, 0);
        box(w);
        var yoff = 1;
        translate(0,yoff,0);
      pop();

 
    }
  }



}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
background(0);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
}
