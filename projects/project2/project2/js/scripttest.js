/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";
//
//
// //temporary Room Markers
// let roomN1 = 'A'
// let roomN2 = 'B'
// let roomN3 = 'C'
// let roomN4 = 'D'
// let roomN5 = 'E'
// let roomN6 = 'F'
// let roomN7 = 'G'
// let roomN8 = 'H'
// let roomN9 = 'I'

let mazeL1;
//states
let state = 'title'

// setup()
//Adding User & Portals class
function setup() {
  createCanvas(500, 500);

 mazeL1 = new MazeA();
 // mazeL2 = new maze2OOp(room1,room2,room3,room4,room5,room6,room7,room8,room9)
 // mazeL3 = new maze3OOp(room1,room2,room3,room4,room5,room6,room7,room8,room9)
  user = new Player(width / 2, height / 2);

  topPortal = new Portal(width / 2, 0);
  leftPortal = new Portal(0, height / 2);
  rightPortal = new Portal(width, height / 2);
  bottomPortal = new Portal(width / 2, height);
  exitPortal = new Portal(width / 2, height / 2)

}

// draw()
function draw() {

  if (state === `title`) {
    mazeSelection();
}

else if (state ===`mazeLayoutA`){
playMaze1();
}

//
// else if (state ===`mazeLayoutB`){
// playMaze2();
// }
//
// else if (state ===`mazeLayoutC`){
// playMaze3();

  //gameclear
  else if (state === `clear`) {
    gameclear();
  }

}

function mazeSelection(){
if (keyIsDown(49)){
  state = "mazeLayoutA"
}

else if (keyIsDown(50)){
  state = "mazeLayoutB"
}

else if (keyIsDown(51)) {
  state = "mazeLayoutC"
}

}

function playMaze1(){
  // mazeL1.room1();
  // mazeL1.room2();
  // mazeL1.room3();
  // mazeL1.room4();
  // mazeL1.room5();
  // mazeL1.room6();
  mazeL1.room7();
  mazeL1.room8();
  // mazeL1.room9();
}


function gameclear() {
 background(200, 200, 200);
 textSize(40);
 textAlign(CENTER);
 fill(10);
 text(cleared, width / 2, height / 2);
}
