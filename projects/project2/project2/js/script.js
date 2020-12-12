/**************************************************
Project 02: Amaze
Vivian Bui

Simulation of a maze with mini-game rooms.
**************************************************/


"use strict";

var score = 5; //lifecount

let state = 'title'; //starting state

let user; //player

let oscillator; //oscilattor sound


//Portals
let topPortal;
let rightPortal;
let bottomPortal;
let leftPortal;
let exitPortal;

//Value
let exitTopX = 375; //half of the canvas
let exitRightX = 70; //slightly from min
let exitLeftX = 670; //slightly from max
let exitBottomX = 375; //half of the canvas

let exitTopY = 670; //slightly from max
let exitRightY = 375; //half of the canvas
let exitLeftY = 375; //half of the canvas
let exitBottomY = 70; //slightly from min

// Group of Rooms (OOP)
let rooms; //normal rooms
let roomsC; //cleared rooms

//Minigame objects (OOP)
let bugOOP;
let beeOOP;

// Group of Games (OOP)
let games;

// Individual Games (OOP)
let game1;
let game2;
let game3;
let game4;
let game5;
let game6;

// Games (Running) / Cleared
let activatedG1 = true;
let activatedG2 = true;
let activatedG3 = true;
let activatedG4 = true;
let activatedG5 = true;
let activatedG6 = true;

// Portal (Closed) / Open
let topActive = false;
let bottomActive = false;
let leftActive = false;
let rightActive = false;

// Portal (No Interaction) / Interactable
let topCollision = false;
let bottomCollision = false;
let leftCollision = false;
let rightCollision = false;

//Text Strings
let titleText = 'Blob Escape'
let startText = 'press 1, 2 or 3 to start!'

let instructionText = 'Use arrow keys to move around'
let instructionText2 = 'Clear the minigame to interact with the exits'

let cleared = 'Clear!'
let textDefeated = 'Oh No!'

let textRestart = 'press spacebar to try again'

//Maze Layouts
let mazeL1; //maze layout A
let mazeL2; //maze layout B
let mazeL3; //maze layout C

// Assets
let img_flower;

// Sounds
let nomSFX; //SFX when interacting with flower
let squeakSFX; //SFX when hit by enemy

//Assets Preload
function preload() {

  //Sound assets
  nomSFX = loadSound(`assets/sounds/nom.mp3`)
  squeakSFX = loadSound(`assets/sounds/squeak.mp3`)

  // Image assets
  player_still = loadImage("assets/images/blob_still.png")
  player_moveRight = loadImage("assets/images/blob_right.png")
  player_moveLeft = loadImage("assets/images/blob_left.png")
  player_moveUp = loadImage("assets/images/blob_up.png")
  player_moveDown = loadImage("assets/images/blob_down.png")
  img_flower = loadImage("assets/images/flower.png")
}

// Setup()
//  User / Mazes / Games / Assets / OOP elements / Portals
function setup() {
  createCanvas(750, 750);
  imageMode(CENTER);

  // Player/User
    user = new Player(width / 2, height / 2);

// Maze Layouts
  mazeL1 = new MazeA();
  mazeL2 = new MazeB();
  mazeL3 = new MazeC();

// Rooms Set up
  rooms = new Rooms();
  roomsC = new RoomsClear();

// Games Library
  games = new Games();
  runGames();

// Game Elements OOP
  bugOOP = new Bug();
  beeOOP = new Bees();

// Portals
  topPortal = new Portal(width / 2, 0);
  leftPortal = new Portal(0, height / 2);
  rightPortal = new Portal(width, height / 2);
  bottomPortal = new Portal(width / 2, height);
  exitPortal = new Portal(width / 2, height / 2)

// oscillator sound
  oscillator = new p5.TriOsc;

}

// draw()
//Map out all maze rooms for each layout
function draw() {
  textFont(`Chewy`);

// Start Game
  if (state === `title`) {
    titleScreen();

  //First Layout [A]
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

  //gameClear (reach exit)
  else if (state === `clear`) {
    gameClear();
  }

  //gameDefeat (noLives left)
  else if (state === `defeat`) {
    gameDefeat();
  }

liveCount(); //liveCount Display
}

// Start screen (title text + instruction)
function titleScreen() {
  mazeSelection();

  background(21, 171, 96);

  push();
  fill(207, 252, 73);
  textSize(150);
  text(titleText, 45, height / 2);

  textSize(30);
  text(startText, 60, 700);
  pop();
}

// Loading/Restarting Game functions
function runGames() {

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

// End Screen (Good)
function gameClear() {
  runGames();
  background(170, 219, 35);

  push();
  textAlign(CENTER);
  fill(214, 43, 126);

  textSize(150);
  text(cleared, width / 2, height / 2);

  textSize(30);
  text(textRestart, width / 2, height / 4 * 3);
  pop();

  mazeRestart();
}

// End Screen (Bad)
function gameDefeat() {
  runGames();

  push();
  textAlign(CENTER);

  background(29, 27, 135)
  fill(207, 252, 73);

  textSize(150);
  text(textDefeated, width / 2, height / 2);

  textSize(30);
  text(textRestart, width / 2, height / 5 * 3);
  pop();

  mazeRestart();
  }

// Maze Selection with key presses
//  MazeA = 1 / Maze B = 2 / Maze C =3
function mazeSelection() {

  if (keyIsDown(49)) {
    state = "room7A" //layout A: start bottom left
  } else if (keyIsDown(50)) {
    state = "room8B" //layout B: start bottom center
  } else if (keyIsDown(51)) {
    state = "room9C" //layout C: start bottom right
  }
}

// Restart Full Game  after Clear/Defeat with spacebar
function mazeRestart(){

  if (keyIsDown(32))
    textSize(20);
    background(0);

    state = "title";
    score = 5;
}

// Live count Display
function liveCount(){
    fill(21, 171, 96)
    textSize(22);
    text("Lives = " + score, 20, height - 30);
}

// General User functions (movement + display)
function simulation() {
  user.move();
  user.handleInput();
  user.handleDisplay();
}

// Portal Locked: Game Running
function portalFalse() {

  // relocking portals when entering the next room
  rightActive = false;
  leftActive = false;
  topActive = false;
  bottomActive = false;

  // reseting user's access upon entering a room with a locked portal
  leftCollision = false;
  topCollision = false;
  rightCollision = false;
  bottomCollision = false;

}

// Portal Unlocked: game clear
function portalTrue() {

  //Opened portals
  rightActive = true;
  leftActive = true;
  topActive = true;
  bottomActive = true;
}
