/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";

var score = 3;

let open = false;

let user;

//Portals
let topPortal;
let rightPortal;
let bottomPortal;
let leftPortal;
let exitPortal;

//Value
let exitTopX = 500 / 2;
let exitRightX = 38;
let exitLeftX = 500 - 38;
let exitBottomX = 500 / 2;

let exitTopY = 500 - 38;
let exitRightY = 500 / 2;
let exitLeftY = 500 / 2;
let exitBottomY = 38;

//temporary Room Markers
let rooms;
let games;

// let roomN2;
// let roomN3;
// let roomN4;
// let roomN5;
// let roomN6;
// let roomN7;
// let roomN8;
// let roomN9;

//text
let cleared = 'YAY!'
let defeated = 'Oh No!'
let tempLayout = 'press 1, 2 or 3 for different layouts'
let tempRestart = 'press spacebar to restart'

//Maze Layouts
let mazeL1;
let mazeL2;
let mazeL3;

let state = 'title';


// setup()
//Adding User & Portals class
//Three Maze Layouts
function setup() {
  createCanvas(500, 500);

  mazeL1 = new MazeA();
  mazeL2 = new MazeB();
  mazeL3 = new MazeC();

  rooms = new Rooms();

  games = new Games();


  user = new Player(width / 2, height / 2);

  topPortal = new Portal(width / 2, 0);
  leftPortal = new Portal(0, height / 2);
  rightPortal = new Portal(width, height / 2);
  bottomPortal = new Portal(width / 2, height);
  exitPortal = new Portal(width / 2, height / 2)

}

// draw()
//Map out all maze rooms for each layout
function draw() {

  //First Layout [A]
  if (state === `title`) {
    mazeSelection();
  } else if (state === `room1A`) {
    mazeL1.room1();
  } else if (state === `room2A`) {
    mazeL1.room2();
  } else if (state === `room3A`) {
    mazeL1.room3();
  } else if (state === `room4A`) {
    mazeL1.room4();
  } else if (state === `room5A`) {
    mazeL1.room5();
  } else if (state === `room6A`) {
    mazeL1.room6();
  } else if (state === `room7A`) {
    mazeL1.room7();
  } else if (state === `room8A`) {
    mazeL1.room8();
  } else if (state === `room9A`) {
    mazeL1.room9();
  }

  //Second Layout[B]
  else if (state === `room1B`) {
    mazeL2.room1();
  } else if (state === `room2B`) {
    mazeL2.room2();
  } else if (state === `room3B`) {
    mazeL2.room3();
  } else if (state === `room4B`) {
    mazeL2.room4();
  } else if (state === `room5B`) {
    mazeL2.room5();
  } else if (state === `room6B`) {
    mazeL2.room6();
  } else if (state === `room7B`) {
    mazeL2.room7();
  } else if (state === `room8B`) {
    mazeL2.room8();
  } else if (state === `room9B`) {
    mazeL2.room9();
  }

  //Third Layout [C]
  else if (state === `room1C`) {
    mazeL3.room1();
  } else if (state === `room2C`) {
    mazeL3.room2();
  } else if (state === `room3C`) {
    mazeL3.room3();
  } else if (state === `room4C`) {
    mazeL3.room4();
  } else if (state === `room5C`) {
    mazeL3.room5();
  } else if (state === `room6C`) {
    mazeL3.room6();
  } else if (state === `room7C`) {
    mazeL3.room7();
  } else if (state === `room8C`) {
    mazeL3.room8();
  } else if (state === `room9C`) {
    mazeL3.room9();
  }

  //gameClear
  else if (state === `clear`) {
    gameClear();
  }

  //gameDefeat
  else if (state === `defeat`) {
    gameDefeat();
  }

  fill(55, 163, 41)
  textSize(22);

  text("score = " + score, 20, height - 30);

}

function mazeSelection() {
  //temporary intro text
  fill(200);
  text(tempLayout, width / 3, height / 2);

  if (keyIsDown(49)) {
    state = "room7A"
  } else if (keyIsDown(50)) {
    state = "room8B"
  } else if (keyIsDown(51)) {
    state = "room9C"
  }
}

function gameClear() {
  push();
  background(200, 200, 200);
  textSize(40);
  textAlign(CENTER);
  fill(10);
  text(cleared, width / 2, height / 2);
  textSize(20);
  text(tempRestart, width / 2, height / 4 * 3);
  pop();

  if (keyIsDown(32)) {
    textSize(20);
    background(0);
    state = "title";
    score = 3;

  }
}

function gameDefeat() {
  push();
  background(200, 200, 200);
  textSize(40);
  textAlign(CENTER);
  fill(10);
  text(defeated, width / 2, height / 2);

  textSize(20);
  text(tempRestart, width / 2, height / 4 * 3);
  pop();

  if (keyIsDown(32)) {
    textSize(20);
    background(0);
    state = "title";
    score = 3;
  }
}
