//Rooms

class Rooms {
  constructor() {}

  //Room 1 (1,1)
  room1() {
    this.collision();
    background(50, 41, 143);
  }

  //Room 2 (1,2)
  room2() {
    this.collision();
    background(20, 20, 120);
  }

  //Room 3 (1,3)
  room3() {
    this.collision();
    background(30, 20, 120);
  }

  //Room 4 (2,1)
  room4() {
    this.collision();
    background(24, 32, 140);
  }

  //Room 5 (2,2)
  room5() {
    this.collision();
    background(31, 42, 145);
  }

  //Room 6 (2,3)
  room6() {
    this.collision();
    background(60, 20, 120);
  }

  //Room 7 (3,1)
  room7() {
    this.collision();
    background(45, 145, 84);
  }

  //Room 8 (3,2)
  room8() {
    this.collision();
    background(80, 20, 120);
  }

  //Room 9 (3,3)
  room9() {
    this.collision();
    background(90, 20, 120);
  }

  // Starting Room
    // Maze A = Room 7
    // Maze B = Room 8
    // Maze C = Room 9
  roomEntrance() {
    this.collision();
    background(21, 171, 96);
  }

// Empty Room
  // Maze A = Room 1
  // Maze B = Room 7
  // Maze C = Room 7
  roomRest() {
    this.collision();
    background(153, 224, 9);
  }


  // Exit Room
    // Maze A = Room 8
    // Maze B = Room 9
    // Maze C = Room 4
  roomExit() {
    this.collision();
    background(21, 171, 96);
  }

  // Player interaction with portals
  collision() {

    // Player + Bottom Portal
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);

    if ((bd < bottomPortal.size / 2 + user.size / 2) && (bottomActive)) {
      bottomCollision = true;
    }

    // Player + Top Portal
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);

    if ((td < topPortal.size / 2 + user.size / 2) && (topActive)) {
      topCollision = true;
    }

    // Player + Left Portal
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);

    if ((ld < leftPortal.size / 2 + user.size / 2) && (leftActive)) {
      leftCollision = true;
    }

    // Player + Right Portal
    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);

    if ((rd < rightPortal.size / 2 + user.size / 2) && (rightActive)) {
      rightCollision = true;
    }
  }

}
