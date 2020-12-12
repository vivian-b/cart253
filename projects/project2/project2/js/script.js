/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";

var score = 5;

let activatedG1 = true;
let activatedG2 = true;
let activatedG3 = true;
let activatedG4 = true;
let activatedG5 = true;
let activatedG6 = true;

let miniGameClear = false;

let topActive = false;
let bottomActive = false;
let leftActive = false;
let rightActive = false;

let topCollision = false;
let bottomCollision = false;
let leftCollision = false;
let rightCollision = false;

let user;

//Portals
let topPortal;
let rightPortal;
let bottomPortal;
let leftPortal;
let exitPortal;

//Value
let exitTopX = 750 / 2;
let exitRightX = 70;
let exitLeftX = 670;
let exitBottomX = 750 / 2;

let exitTopY = 670;
let exitRightY = 750 / 2;
let exitLeftY = 750 / 2;
let exitBottomY = 70;

//temporary Room Markers
let rooms;
let roomsC;

//minigame objects
let bugOOP;
let beeOOP;


let games;

let game1;
let game2;
let game3;
let game4;
let game5;
let game6;

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

let img_idle;
let img_flower;

//assets
function preload(){
  player_still = loadImage("assets/images/blob_still.png")
  player_moveRight = loadImage("assets/images/blob_right.png")
  player_moveLeft = loadImage("assets/images/blob_left.png")
  player_moveUp = loadImage("assets/images/blob_up.png")
  player_moveDown = loadImage("assets/images/blob_down.png")
 img_flower = loadImage("assets/images/flower.png")

  }

// setup()
//Adding User & Portals class
//Three Maze Layouts
function setup() {
  createCanvas(750, 750);
  imageMode(CENTER);

  mazeL1 = new MazeA();
  mazeL2 = new MazeB();
  mazeL3 = new MazeC();

  rooms = new Rooms();
  roomsC = new RoomsClear();

resetGames();
  games = new Games();

bugOOP = new Bug();
beeOOP = new Bees();

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
  background(10, 10, 10);

  push();
  fill(200);
  text(tempLayout, width / 5, height / 2);
  pop();

  if (keyIsDown(49)) {
    state = "room7A"
  } else if (keyIsDown(50)) {
    state = "room8B"
  } else if (keyIsDown(51)) {
    state = "room9C"
  }
}

function gameClear() {
  resetGames();

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
    score = 5;
  }
}

function gameDefeat() {
  resetGames();

  push();
  background(200, 200, 200);
  textSize(40);
  textAlign(CENTER);
  fill(10);
  text(defeated, width / 2, height / 2);

  textSize(20);
  text(tempRestart, width / 2, height / 5 * 3);
  pop();

  if (keyIsDown(32)) {
    textSize(20);
    background(0);

    state = "title";
    score = 5;
  }
}

function simulation() {
    user.move();
    user.handleInput();
    user.handleDisplay();
  }

function portalFalse(){

  // relocking portals when entering the next room
  rightActive = false;
  leftActive = false;
  topActive = false;
  bottomActive = false;

  // reseting user entering a portal
  leftCollision = false;
  topCollision = false;
  rightCollision = false;
  bottomCollision = false;

}

function portalTrue(){

  //opening portals
  rightActive = true;
  leftActive = true;
  topActive = true;
  bottomActive = true;
}

function resetGames(){

  game1 = new Game1();
  game2 = new Game2();
  game3 = new Game3();
  game4 = new Game4();
  game5 = new Game5();
  game6 = new Game6();

   activatedG1 = true;
   activatedG2 = true;
   activatedG3 = true;
   activatedG4 = true;
   activatedG5 = true;
   activatedG6 = true;
}
