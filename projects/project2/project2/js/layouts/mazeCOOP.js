//layout [C]

class MazeC {
  constructor() {
  }

  room1() {
    this.room1Display();
    simulation();

    rightActive = true;

    //MiniGame #1:
    if (activatedG1) {
      games.gameN1();
    } else if (!activatedG1) {
      portalTrue();
    }

    // Room 1: Bottom Portal -> Room 4
    // Layout: C (Room1 bottomPortal)
    if ((bottomCollision) && (state = "room1C")) {
      portalFalse();

      state = "room4C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 1: Right Portal -> Room 2
    // Layout: C (Room1 rightPortal)
    if ((rightCollision) && (state = "room1C")) {
      portalFalse();

      state = "room2C";
      user.y = exitRightY
      user.x = exitRightX
    }
  }

  room2() {
    this.room2Display();
    simulation();

    //MiniGame #2:
    if (activatedG2) {
      games.gameN2();
    } else if (!activatedG2) {
      portalTrue();
    }

    // Entry from  Room3 + Game3 = clear
    if (!activatedG3) {
      rightActive = true;
    }
    // Entry from  Room5 + Game4 = clear
    if (!activatedG4) {
      bottomActive = true;
    }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room2 bottomPortal)
    if ((bottomCollision) && (state = "room2C")) {
      portalFalse();

      state = "room5C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: C (Room2 leftPortal)
    if ((leftCollision) && (state = "room2C")) {
      portalFalse();

      state = "room1C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Right Portal to Room 3
    // Layout: C (Room2 rightPortal)
    if ((rightCollision) && (state = "room2C")) {
      portalFalse();

      state = "room3C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();

    //MiniGame #3:
    if (activatedG3) {
      games.gameN3();
    } else if (!activatedG3) {
      portalTrue();
    }
    simulation();

    // Entry from  Room2 + Game2 = clear
    if (!activatedG2) {
      leftActive = true;
    }

    // Entry from  Room6 + Game5 = clear
    if (!activatedG5) {
      bottomActive = true;
    }

    // Room 3: Bottom Portal to Room 6
    // Layout: C (Room3 bottomPortal)
    if ((bottomCollision) && (state = "room3C")) {
      portalFalse();

      state = "room6C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 3: Left Portal to Room 2
    // Layout: C (Room3 leftPortal)
    if ((leftCollision) && (state = "room3C")) {
      portalFalse();

      state = "room2C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room4() {

    this.room4Display();
    simulation();

    topActive = true;

    // Room 4: Top Portal to Room 1
    // Layout: C (Room4 topPortal)
    if ((topCollision) && (state = "room4C")) {
      portalFalse();

      state = "room1C";
      user.y = exitTopY
      user.x = exitTopX
    }

    //Exit Portal: Layout C
    let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
    if (ed < exitPortal.size / 2 + user.size / 2 && (state = "room9C")) {
      state = "clear";
    }
  }

  room5() {
    this.room5Display();
    simulation();

    //MiniGame #4:
    if (activatedG4) {
      games.gameN4();
    } else if (!activatedG4) {
      portalTrue();
    }

    // Entry from  Room2 + Game2 = clear
    if (!activatedG2) {
      topActive = true;
    }

    // Entry from  Room6 + Game5 = clear
    if (!activatedG5) {
      rightActive = true;
    }

    // Room 5: Top Portal -> Room 2
    // Layout: C (Room5 rightPortal)
    if ((topCollision) && (state = "room5C")) {
      portalFalse();

      state = "room2C";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 5: Right Portal -> Room 6
    // Layout: C (Room5 rightPortal)
    if ((rightCollision) && (state = "room5C")) {
      portalFalse();

      state = "room6C";
      user.y = exitRightY
      user.x = exitRightX
    }

    // Room 5: Bottom Portal -> Room 8
    // Layout: C (Room5 bottomPortal)
    if ((bottomCollision) && (state = "room5C")) {
      portalFalse();

      state = "room8C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room6() {
    this.room6Display();
    simulation();

    bottomActive = true;

    //MiniGame #5:
    if (activatedG5) {
      games.gameN5();
    } else if (!activatedG5) {
      portalTrue();
    }


    // Room 6: Left Portal -> Room 5
    // Layout: C (Room5 rightPortal)
    if ((leftCollision) && (state = "room6C") && (open)) {
      portalFalse();

      state = "room5C";
      user.y = exitLeftY
      user.x = exitLeftX

    }

    // Room 6: Bottom Portal -> Room 9
    // Layout: C (Room6 bottomPortal)
    if ((bottomCollision) && (state = "room6C") && (open)) {
      portalFalse();

      state = "room9C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 6: Top Portal -> Room 3
    // Layout: C (Room6 topPortal)
    if ((topCollision) && (state = "room6C") && (open)) {
      portalFalse();

      state = "room3C";
      user.y = exitTopY
      user.x = exitTopX
    }

  }


  room7() {
    this.room7Display();
    simulation();

    rightActive = true;
    // Room 7: Right Portal -> Room 8
    // Layout: C (Room7 rightPortal)
    if ((rightCollision) && (state = "room7C")) {
      portalFalse();

      state = "room8C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room8() {
    this.room8Display();
    simulation();

    //MiniGame #6:
    if (activatedG6) {
      games.gameN6();
    } else if (!activatedG6) {
      portalTrue();
    }

    // Entry from  Room5 + Game4 = clear
    if (!activatedG4) {
      topActive = true;
    }

    // Room 8: Top Portal -> Room 5
    // Layout: C (Room8 topPortal)
    if ((topCollision) && (state = "room8C")) {
      portalFalse();

      state = "room5C";
      user.y = exitTopY
      user.x = exitTopX
    }


    // Room 8: Left Portal -> Room 7
    // Layout: C (Room8 leftPortal)
    if ((leftCollision) && (state = "room8C")) {
      portalFalse();

      state = "room7C";
      user.y = exitLeftY
      user.x = exitLeftX
    }
  }

  room9() {
    this.room9Display();
    simulation();

    topActive = true;

    // Room 9: Top Portal -> Room 6
    // Layout: C (Room9 topPortal)
    if ((topCollision) && (state = "room9C")) {
      portalFalse();

      state = "room6C";
      user.y = exitTopY
      user.x = exitTopX
    }
  }

  simulation() {
    user.move();
    user.handleInput();
    user.handleDisplay();
    user.display();
  }

  room1Display() {
    rooms.room1();

    if (!activatedG1) {
      roomsC.roomG1()
    }

    bottomPortal.display();
    rightPortal.display();

  }

  room2Display() {
    rooms.room2();

    if (!activatedG2) {
      roomsC.roomG2()
    }

    bottomPortal.display();
    leftPortal.display();
    rightPortal.display();
  }

  room3Display() {
    rooms.room3();

    if (!activatedG3) {
      roomsC.roomG3()
    }

    bottomPortal.display();
    leftPortal.display();
  }

  room4Display() {
    rooms.roomExit();

    topPortal.display();
    exitPortal.display();
  }

  room5Display() {
    rooms.room5();

    if (!activatedG4) {
      roomsC.roomG4()
    }

    topPortal.display();
    bottomPortal.display();
    rightPortal.display();
  }

  room6Display() {
    rooms.room6();

    if (!activatedG5) {
      roomsC.roomG5()
    }

    topPortal.display();
    bottomPortal.display();
    leftPortal.display();
  }

  room7Display() {
    rooms.roomRest();

    rightPortal.display();
  }

  room8Display() {
    rooms.room8();

    if (!activatedG6) {
      roomsC.roomG6()
    }

    topPortal.display();
    leftPortal.display();
  }

  room9Display() {
    rooms.roomEntrance();

    topPortal.display();

  }
}
