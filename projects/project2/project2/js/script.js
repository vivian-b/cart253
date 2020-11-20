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
let roomN1 = 'A'
let roomN2 = 'B'
let roomN3 = 'C'
let roomN4 = 'D'
let roomN5 = 'E'
let roomN6 = 'F'
let roomN7 = 'G'
let roomN8 = 'H'
let roomN9 = 'I'

//text
let cleared = 'YAY!'

//states
let state = 'title'

//randomize
var mazeStart = [
  "room7A",
  "room8B",
  "room9C"
];

// setup()
//Adding User & Portals class
function setup() {
  createCanvas(500, 500);

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
  } else if (state === `mazeLayoutA`) {
    room7();
  } else if (state === `mazeLayoutB`) {
    room8();
  } else if (state === `mazeLayoutC`) {
    room9();


    // Layout A: States
  } else if (state === `room1A`) {
    room1();
  } else if (state === `room2A`) {
    room2();
  } else if (state === `room3A`) {
    room3();
  } else if (state === `room4A`) {
    room4();
  } else if (state === `room5A`) {
    room5();
  } else if (state === `room6A`) {
    room6();
  } else if (state === `room7A`) {
    room7();
  } else if (state === `room8A`) {
    room8();
  } else if (state === `room9A`) {
    room9();
  }

  // Layout B: States
  else if (state === `room1B`) {
    room1();
  } else if (state === `room2B`) {
    room2();
  } else if (state === `room3B`) {
    room3();
  } else if (state === `room4B`) {
    room4();
  } else if (state === `room5B`) {
    room5();
  } else if (state === `room6B`) {
    room6();
  } else if (state === `room7B`) {
    room7();
  } else if (state === `room8B`) {
    room8();
  } else if (state === `room9B`) {
    exitRoom9();
  }

  // Layout C: States
  else if (state === `room1C`) {
    room1();
  } else if (state === `room2C`) {
    room2();
  } else if (state === `room3C`) {
    room3();
  } else if (state === `room4C`) {
    exitRoom4();
  } else if (state === `room5C`) {
    room5();
  } else if (state === `room6C`) {
    room6();
  } else if (state === `room7C`) {
    room7();
  } else if (state === `room8C`) {
    room8();
  } else if (state === `room9C`) {
    room9();
  }

  //gameclear
  else if (state === `clear`) {
    gameclear();
  }

}

function mazeSelection() {
  if (keyIsDown(49)) {
    state = "mazeLayoutA"
  } else if (keyIsDown(50)) {
    state = "mazeLayoutB"
  } else if (keyIsDown(51)) {
    state = "mazeLayoutC"
  }

}

function room1() {
  room1Display();
  simulation();

  // Room 1: Bottom Portal -> Room 4
  // Layouts: B C


  // Layout: B (Room1 bottomPortal)
  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room1B")) {
    state = "room4B";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: C (Room1 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room1C")) {
    state = "room4C";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Room 1: Right Portal -> Room 2
  // Layouts: A B C

  // Layout: A (Room1 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1A")) {
    state = "room2A";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: B (Room1 rightPortal)
  else if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1B")) {
    state = "room2B";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: C (Room1 rightPortal)
  else if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1C")) {
    state = "room2C";
    user.y = exitRightY
    user.x = exitRightX
  }

}


function room2() {
  room2Display();
  simulation();

  // Room 2: Bottom Portal -> Room 5
  // Layouts: A B C

  // Layout: A (Room2 bottomPortal)
  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room2A")) {
    state = "room5A";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: A (Room2 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room2B")) {
    state = "room5B";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: A (Room2 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room2C")) {
    state = "room5C";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Room 2: Left Portal -> Room 1
  // Layouts: A B C

  // Layout: A (Room2 leftPortal)
  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2A")) {
    state = "room1A";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Layout: B (Room2 leftPortal)
  else if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2B")) {
    state = "room1B";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Layout: C (Room2 leftPortal)
  else if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2C")) {
    state = "room1C";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Room 2: Right Portal to Room 3
  // Layouts: A B C

  // Layout: A (Room2 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2A")) {
    state = "room3A";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: B (Room2 rightPortal)
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2B")) {
    state = "room3B";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: C (Room2 rightPortal)
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2C")) {
    state = "room3C";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room3() {
  room3Display();
  simulation();

  // Room 3: Bottom Portal to Room 6
  // Layouts: A B C

  // Layout: A (Room3 bottomPortal)
  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3A")) {
    state = "room6A";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: B (Room3 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3B")) {
    state = "room6B";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: C (Room3 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3C")) {
    state = "room6C";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Room 3: Bottom Portal to Room 2
  // Layouts: A B C

  // Layout: A (Room3 leftPortal)
  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3C")) {
    state = "room2C";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Layout: B (Room3 leftPortal)
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3B")) {
    state = "room2B";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Layout: C (Room3 leftPortal)
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3C")) {
    state = "room2C";
    user.y = exitLeftY
    user.x = exitLeftX
  }

}

function room4() {

  room4Display();
  simulation();


  // Room 4: Top Portal to Room 1
  // Layouts: B C

  // Layout: B (Room4 topPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room4B")) {
    state = "room1B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: C (Room4 topPortal)
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room4C")) {
    state = "room1C";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Room 4: Bottom Portal to Room 7
  // Layouts: A B

  // Layout: A (Room3 bottomPortal)
  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room4A")) {
    state = "room7A";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: B (Room3 bottomPortal)
  else if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room4B")) {
    state = "room7B";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Room 4: Right Portal to Room 5
  // Layouts: A B

  // Layout: A (Room3 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room4A")) {
    state = "room5A";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: B (Room3 rightPortal)
  else if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room4B")) {
    state = "room5B";
    user.y = exitRightY
    user.x = exitRightX
  }

  //Exit Portal: Layout C
  let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
  if (ed < exitPortal.size / 2 + user.size / 2 && (state = "room4C")) {
    state = "clear";
  }

}

function room5() {
  room5Display();
  simulation();

  // Room 5: Top Portal -> Room 2
  // Layouts: A B C

  // Layout: A (Room5 rightPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
    state = "room2A";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: B (Room5 rightPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
    state = "room2B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: C (Room5 rightPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
    state = "room2C";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Room 5: Left Portal -> Room 4
  // Layouts: A B

  // Layout: A (Room5 leftPortal)

  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room5A")) {
    state = "room4A";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Layout: B (Room5 leftPortal)
  else if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room5B")) {
    state = "room4B";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  // Room 5: Right Portal -> Room 6
  // Layouts: A B

  // Layout: A (Room5 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room5A")) {
    state = "room6A";
    user.y = exitRightY
    user.x = exitRightX
  }

  // Layout: A (Room5 rightPortal)
  else if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room5C")) {
    state = "room6C";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room6() {
  room6Display();
  simulation();


  // Room 6: Left Portal -> Room 5
  // Layouts: A C

  // Layout: A (Room5 rightPortal)
  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room6A")) {
    state = "room5A";
    user.y = exitLeftY
    user.x = exitLeftX

  }

  // Layout: C (Room5 rightPortal)
  else if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room6C")) {
    state = "room5C";
    user.y = exitLeftY
    user.x = exitLeftX

  }

  // Room 6: Bottom Portal -> Room 9
  // Layouts: A B C

  // Layout: A (Room6 bottomPortal)
  let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6A")) {
    state = "room9A";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: B (Room6 bottomPortal)
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6B")) {
    state = "room9B";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Layout: C (Room6 bottomPortal)
  if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6C")) {
    state = "room9C";
    user.y = exitBottomY
    user.x = exitBottomX
  }

  // Room 6: Top Portal -> Room 3
  // Layouts: A B C

  // Layout: A (Room6 topPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room6A")) {
    state = "room3A";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: B (Room6 topPortal)
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room6B")) {
    state = "room3B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: C (Room6 topPortal)
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room6C")) {
    state = "room3C";
    user.y = exitTopY
    user.x = exitTopX
  }

}


function room7() {
  room7Display();
  simulation();

  // Room 7: Top Portal -> Room 4
  // Layouts: A B

  // Layout: A (Room7 topPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room7A")) {
    state = "room4A";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: B (Room7 topPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room7B")) {
    state = "room4B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Room 7: Right Portal -> Room 8
  // Layouts: C

  // Layout: C (Room7 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room7B")) {
    state = "room8C";
    user.y = exitRightY
    user.x = exitRightX
  }

}

function room8() {
  room8Display();
  simulation();

  // Room 8: Top Portal -> Room 5
  // Layouts: C

  // Layout: B (Room8 topPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room8B")) {
    state = "room5B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: C (Room8 topPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room8C")) {
    state = "room5C";
    user.y = exitTopY
    user.x = exitTopX
  }


  // Room 8: Left Portal -> Room 7
  // Layouts: A C

  // Layout: A (Room8 leftPortal)
  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room8C")) {
    state = "room7C";
    user.y = exitLeftY
    user.x = exitLeftX
  }


  // Room 8: Right Portal -> Room 9
  // Layouts: A

  // Layout: A (Room8 rightPortal)
  let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
  if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room8C")) {
    state = "room9A";
    user.y = exitRightY
    user.x = exitRightX
  }

  //Exit Portal: Layout A
  let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
  if (ed < exitPortal.size / 2 + user.size / 2 && (state === "room8A")) {
    state = "clear";
  }
}

function room9() {
  room9Display();
  simulation();


  // Room 9: Top Portal -> Room 6
  // Layouts: A B C

  // Layout: A (Room9 topPortal)
  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room9A")) {
    state = "room6A";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: B (Room9 topPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room9B")) {
    state = "room6B";
    user.y = exitTopY
    user.x = exitTopX
  }

  // Layout: C (Room9 topPortal)
  else if (td < topPortal.size / 2 + user.size / 2 && (state = "room9C")) {
    state = "room6C";
    user.y = exitTopY
    user.x = exitTopX
  }


  // Room 9: Left Portal -> Room 8
  // Layouts: A

  // Layout: A (Room8 leftPortal)
  let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
  if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room9A")) {
    state = "room8A";
    user.y = exitLeftY
    user.x = exitLeftX
  }

  //Exit Portal: Layout B
  let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
  if (ed < exitPortal.size / 2 + user.size / 2 && (state = "room9B")) {
    state = "clear";
  }
}

function exitRoom9() {
  room9Display();
  simulation();

  let td = dist(user.x, user.y, topPortal.x, topPortal.y);
  if (td < topPortal.size / 2 + user.size / 2 && (state = "room9C")) {
    state = "room6C";
    user.y = exitTopY
    user.x = exitTopX
  }
}

function simulation() {
  user.move();
  user.handleInput();
  user.display();
}

function room1Display() {
  background(130, 130, 130);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN1, width / 2, height / 2);
  // bottomPortal.display();
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
  // topPortal.display();
  bottomPortal.display();
  rightPortal.display();
}

function room5Display() {
  background(87, 87, 87);
  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN5, width / 2, height / 2);

  topPortal.display();
  leftPortal.display();
  rightPortal.display();
  // bottomPortal.display();

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
  // rightPortal.display();
}

function room8Display() {
  background(69, 69, 69);
  exitPortal.display();

  textSize(40);
  textAlign(CENTER);
  fill(252);
  text(roomN8, width / 2, height / 2);

  // topPortal.display();
  // leftPortal.display();
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

function gameclear() {
  background(200, 200, 200);
  textSize(40);
  textAlign(CENTER);
  fill(10);
  text(cleared, width / 2, height / 2);
}
