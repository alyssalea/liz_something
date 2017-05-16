function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  textFont("Comic Sans MS");
  text("there was something cool here but i just wrote this in comic sans instead",random(0,width),random(0,height));
  noStroke();

  text("there was something cool here but i just wrote this in comic sans instead",random(0,width),random(0,height));

  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}