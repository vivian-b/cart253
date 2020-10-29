/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let paddle;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600),

  paddle = new Paddle(300,20);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();
}
