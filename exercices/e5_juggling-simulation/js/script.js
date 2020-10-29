/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let basket = {
  balls: [],
  numBalls: 3,
};

let gravityForce = 0.0025;
let user;
let catcher;

let state = 'title'

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    user = new Player(50, 30);
  catcher = new Hoop(90, 20);

  for (let i = 0; i < basket.numBalls; i++) {
    let x = random(150, width);
    let y = random(-400, -100);

    let ball = new Ball(x, y);

    basket.balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(40);

  //Game States
  if (state === `title`) {
    gameplay();
  }

  if (state === `gameclear`) {
    gameclear();
  }

  if (state === `gameover`) {
    gameover();
  }
}

function gameplay() {

  simulation();
  gameDisplay();

}

function gameclear() {

  gameDisplay();

}

function gameover() {

  gameDisplay();

}

function mousePressed() {
  if ((state === `gameclear`) || (state === `gameover`)){
    state = `gameplay`}
}

function simulation() {
  user.move();
  user.handleInput();
  setupSimulation();

}

function gameDisplay(){
    user.display();
    catcher.display();
}

function setupSimulation(){
  let i;
  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(user);
      ball.display();
    }

    let d = dist(ball.x, ball.y, catcher.x, catcher.y);
    if (d < ball.size / 2 + catcher.height / 2) {
  state = 'gameclear'
    }
  }
}
