var song;
var fft;
var bandWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("like-the-second-half.mp3");
  colorMode(HSB);
  angleMode(DEGREES);
  fft = new p5.FFT(0.85, 128);
  fftAvg = new p5.FFT(0.85, 128);
  bandWidth = width / 64;
} 

function draw() {
  background(0);
  var spectrum = fft.analyze();
  var spectrumAvg = fftAvg.analyze();
  noStroke()
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(118, 72, 98);
    rect(i * bandWidth, y, bandWidth - 2, height-y);
  }

  for (var i = 0; i < spectrumAvg.length; i++) {
    var ampAvg = spectrumAvg[i];
    var yAvg = map(ampAvg, 0, 256, height, 0)
    fill(52, 81, 85)
    rect(i * bandWidth, yAvg, bandWidth - 2, 4);
  }
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
