/**************************************************
Exercise 6
Vivian Bui

**************************************************/


//balls
let balls = [];

//
let noise = [1,1,2,2,3,3]
// let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

let currentNote = 0;

let gravityForce = 0.0025;


let squeakSFX;
let eatSFX;


// Description of setup() goes here.
function setup() {

  createCanvas(600, 600);

  squeakSFX = loadSound(`assets/sounds/squeak.mp3`)
  eatSFX = loadSound(`assets/sounds/nom.mp3`)
bunnyImg = loadImage(`assets/images/bunny.png`)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  imageMode(CENTER);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.gravity(gravityForce);
    ball.move();
    ball.bounce();
    ball.display();
  }

}

function mousePressed() {
  createBall(mouseX, mouseY);
}

function createBall(x, y) {
  let ball = new Ball(x, y);
  balls.push(ball);

}
