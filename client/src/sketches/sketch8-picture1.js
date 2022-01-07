let img;
let cnv;


function preload() {
// img = loadImage('https://arweave.net/r7Sl8iHAYaSja22M77zYDTWu0x387fsWxiWpIe7fa9s');
img = loadImage('assets/IR-211026-7-min.jpg')
}

function setup() {
  img.resize(windowWidth, windowHeight)
  cnv = createCanvas(img.width, img.height);

  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  createimg();
  
} 

function createimg() {
  for (let col = 0; col < img.width; col+=10) {
    for (let row = 0; row < img.height; row+=10) {
      let c = img.get(col, row);
      stroke(color(c));
      strokeWeight(10);
      point(col, row)
    }
  }
}

function draw() {
  

}

function windowResized() {
  img.resize(windowWidth, windowHeight)
  resizeCanvas(img.width, img.height);
  createimg();
}
