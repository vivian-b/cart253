/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";

//Player
let user;

//Portals
let topPortal;
let rightPortal;
let bottomPortal;
let leftPortal;


// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(750, 750);


user = new Player(375, 375);

topPortal = new Portal(375,0);
leftPortal = new Portal(0,375);
rightPortal = new Portal(750,375);
bottomPortal = new Portal(375,750);



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
  topPortal.display();
  leftPortal.display();
  rightPortal.display();
  bottomPortal.display();


  user.display();


}
