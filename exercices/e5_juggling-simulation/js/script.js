/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let gravityForce = 0.0025;
let paddle1;
let paddle2;
let balls = [];
let numBalls = 5;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    paddle1 = new PaddleBot(50, 30);
    paddle2 = new PaddleTop(90, 40);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle1.display();
  paddle1.move();

  paddle2.display();


  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle1);
      ball.bounce(paddle2);

      ball.display();
    }
  }
}
