var song;
var fft;
var bandWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("like-the-second-half.mp3");
  fft = new p5.FFT(0, 64);
  fftLine = new p5.FFT();
  bandWidth = width / 64;
} 

function draw() {
  background(0);
  
  // dots in front
  var spectrum = fft.analyze();
  fill(255);
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    rect(i * bandWidth, y, i, bandWidth, height-y);
  }

  //lines in back
  var wave = fftLine.waveform();
  beginShape()
    for (var i = 0; i < width; i++) {
      var index = floor(map(i, 0, width, 0, wave.length))
      var waveX = i
      var waveY = wave[index] * 500 + height / 2
      stroke(255);
      noFill()
      vertex(waveX, waveY)
    }
  endShape()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  bandWidth = width / 64;
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
