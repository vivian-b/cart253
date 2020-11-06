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

//Value
let exitTopX = 500 / 2;
let exitRightX = 38;
let exitLeftX = 500 - 38;
let exitBottomX = 500 / 2;

let exitTopY = 500 - 38;
let exitRightY = 500 / 2;
let exitLeftY = 500 / 2;
let exitBottomY = 38;


let state = 'title'

let roomN1 = 'A'
let roomN2 = 'B'
let roomN3 = 'C'
let roomN4 = 'D'
let roomN5 = 'E'
let roomN6 = 'F'
let roomN7 = 'G'
let roomN8 = 'H'
let roomN9 = 'I'



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);


  user = new Player(width / 2, height / 2);

  topPortal = new Portal(width / 2, 0);
  leftPortal = new Portal(0, height / 2);
  rightPortal = new Portal(width, height / 2);
  bottomPortal = new Portal(width / 2, height);

}


// draw()
//
// Description of draw() goes here.
function draw() {

  if (state === `title`) {
    room7();
  } else if (state === `room1`) {
    room1();
  } else if (state === `room2`) {
    room2();
  } else if (state === `room3`) {
    room3();
  } else if (state === `room4`) {
    room4();
  } else if (state === `room5`) {
    room5();
  } else if (state === `room6`) {
    room6();
  } else if (state === `room7`) {
    room7();
  } else if (state === `room8`) {
    room8();
  } else if (state === `room9`) {
    room9();
  }

}

function room5() {
  entranceDisplay();
  simulation();



  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room2";
    user.y = exitTopY
    user.x = exitTopX
  }

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room4";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room6";
    user.y = exitRightY
    user.x = exitRightX
  }

  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room8";
    user.y = exitBottomY
    user.x = exitBottomX
  }

}

function room1() {
  room1Display();
  simulation();


  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room4";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room2";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room2() {
  room2Display();
  simulation();

  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room5";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room1";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room3";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room3() {
  room3Display();
  simulation();


  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room6";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room2";
    user.y = exitLeftY
    user.x = exitLeftX
  }

}

function room4() {

  room4Display();
  simulation();



  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room1";
    user.y = exitTopY
    user.x = exitTopX
  }

  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room7";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room5";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room6() {
  room6Display();
  simulation();


  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room5";
    user.y = exitLeftY
    user.x = exitLeftX

  }

  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2) {
    state = "room9";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room3";
    user.y = exitTopY
    user.x = exitTopX
  }

}

function room7() {
  room7Display();
  simulation();



  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room4";
    user.y = exitTopY
    user.x = exitTopX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room8";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room8() {
  room8Display();
  simulation();



  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room5";
    user.y = exitTopY
    user.x = exitTopX
  }

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room7";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2) {
    state = "room9";
    user.y = exitRightY
    user.x = exitRightX
  }
}

function room9() {
  room9Display();
  simulation();


  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2) {
    state = "room6";
    user.y = exitTopY
    user.x = exitTopX
  }

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2) {
    state = "room8";
    user.y = exitLeftY
    user.x = exitLeftX
  }
}

function simulation() {
  user.move();
  user.handleInput();
  user.display();
}

function entranceDisplay() {
  background(87, 87, 87);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN5, width / 2, height / 2);
  topPortal.display();
  leftPortal.display();
  rightPortal.display();
  bottomPortal.display();

}

function room1Display() {
  background(130, 130, 130);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN1, width / 2, height / 2);
  bottomPortal.display();
  rightPortal.display();
}

function room2Display() {
  background(130, 130, 130);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN2, width / 2, height / 2);
  bottomPortal.display();
  leftPortal.display();
  rightPortal.display();
}

function room3Display() {
  background(130, 130, 130);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN3, width / 2, height / 2);
  leftPortal.display();
  bottomPortal.display();
}

function room4Display() {
  background(87, 87, 87);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN4, width / 2, height / 2);
  topPortal.display();
  bottomPortal.display();
  rightPortal.display();
}

function room6Display() {
  background(87, 87, 87);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN6, width / 2, height / 2);
  leftPortal.display();
  topPortal.display();
  bottomPortal.display();
}

function room7Display() {
  background(69, 69, 69);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN7, width / 2, height / 2);
  topPortal.display();
  rightPortal.display();
}

function room8Display() {
  background(69, 69, 69);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN8, width / 2, height / 2);
  topPortal.display();
  leftPortal.display();
  rightPortal.display();
}

function room9Display() {
  background(69, 69, 69);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN9, width / 2, height / 2);

  topPortal.display();
  leftPortal.display();
}
