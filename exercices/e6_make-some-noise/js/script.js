/**************************************************
Exercise 6
Vivian Bui

Small sound test with a bunny making bouncing noises.
**************************************************/


//bunnies
let bunnies = [];

//squeak pitch every bounce
let noise = [1, 1, 4, 4, 2, 2, 3, 3]
let currentNote = 0;

//gravity fall
let gravityForce = 0.0025;

//SFX
let squeakSFX;
let eatSFX;


// Images and sound
function setup() {

  createCanvas(600, 600);

  squeakSFX = loadSound(`assets/sounds/squeak.mp3`)
  eatSFX = loadSound(`assets/sounds/nom.mp3`)
  bunnyImg = loadImage(`assets/images/bunny.png`)

  oscillator = new p5.Oscillator(440, `sine`)

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(207, 234, 255);

  imageMode(CENTER);

  for (let i = 0; i < bunnies.length; i++) {
    let bunny= bunnies[i];
    bunny.gravity(gravityForce);
    bunny.move();
    bunny.bounce();
    bunny.display();
  }

}

// on tap: create a bunny + sounds, + additional sfx
function mousePressed() {
  createBunny(mouseX, mouseY);
  oscillator.start();
  eatSFX.play();
}

//additionnal sfx pause on release
function mouseReleased() {
  oscillator.stop();
}

// creating new bunnies
function createBunny(x, y) {
  let bunny= new Bunny(x, y);
  bunnies.push(bunny);

}
