/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";

//Player
let user;

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(750, 750);


user = new Player(350, 350);

}

let state = 'title'

// draw()
//
// Description of draw() goes here.
function draw() {
  background(60,60,60);

  if (state === `title`) {
   simulation();
   gameDisplay();
 }

}

function simulation() {
  user.move();
  user.handleInput();
}

function gameDisplay() {
  user.display();
}
