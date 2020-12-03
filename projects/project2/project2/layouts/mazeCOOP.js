//layout [C]

class MazeC {
  constructor() {

  }


  room1() {
    this.room1Display();
    this.simulation();

    //MiniGame #1:

        if(activatedG1){
          games.gameN1();
        }

    // Room 1: Bottom Portal -> Room 4
    // Layout: C (Room1 bottomPortal)

    if ((bottomCollision) && (state = "room1C")) {
      bottomCollision = false;

      state = "room4C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 1: Right Portal -> Room 2
    // Layout: C (Room1 rightPortal)

    if ((rightCollision) && (state = "room1C")) {
      rightCollision = false;

      state = "room2C";
      user.y = exitRightY
      user.x = exitRightX
    }


  }


  room2() {
    this.room2Display();
    this.simulation();

    //MiniGame #2:

        if(activatedG2){
          games.gameN2();
        }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room2 bottomPortal)

    if ((bottomCollision) && (state = "room2C")) {
      bottomCollision = false;

      state = "room5C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: C (Room2 leftPortal)

    if ((leftCollision) && (state = "room2C")) {
      leftCollision = false;

      state = "room1C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Right Portal to Room 3
    // Layout: C (Room2 rightPortal)

    if ((rightCollision) && (state = "room2C")) {
      rightCollision = false;

      state = "room3C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    //MiniGame #3:

        if(activatedG3){
          games.gameN3();
        }

    // Room 3: Bottom Portal to Room 6
    // Layout: C (Room3 bottomPortal)

    if ((bottomCollision) && (state = "room3C")) {
      bottomCollision = false;

      state = "room6C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 3: Left Portal to Room 2
    // Layout: C (Room3 leftPortal)

    if ((leftCollision) && (state = "room3C")) {
      leftCollision = false;

      state = "room2C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room4() {

    this.room4Display();
    this.simulation();


    // Room 4: Top Portal to Room 1
    // Layout: C (Room4 topPortal)

    if ((topCollision) && (state = "room4C")) {
      topCollision = false;

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
    this.simulation();

    //MiniGame #4:

        if(activatedG4){
          games.gameN4();
        }

    // Room 5: Top Portal -> Room 2
    // Layout: C (Room5 rightPortal)

    if ((topCollision) && (state = "room5C")) {
      topCollision = false;

      state = "room2C";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 5: Right Portal -> Room 6
    // Layout: C (Room5 rightPortal)

    if ((rightCollision) && (state = "room5C")) {
      rightCollision = false;

      state = "room6C";
      user.y = exitRightY
      user.x = exitRightX
    }

    // Room 5: Bottom Portal -> Room 8
    // Layout: C (Room5 bottomPortal)

    if ((bottomCollision) && (state = "room5C")) {
      bottomCollision = false;

      state = "room8C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room6() {
    this.room6Display();
    this.simulation();

    //MiniGame #5:

        if(activatedG5){
          games.gameN5();
        }

    // Room 6: Left Portal -> Room 5
    // Layout: C (Room5 rightPortal)

    if ((leftCollision) && (state = "room6C") && (open)) {
      leftCollision = false;

      state = "room5C";
      user.y = exitLeftY
      user.x = exitLeftX

    }

    // Room 6: Bottom Portal -> Room 9
    // Layout: C (Room6 bottomPortal)

    if ((bottomCollision) && (state = "room6C") && (open)) {
      bottomCollision = false;

      state = "room9C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 6: Top Portal -> Room 3
    // Layout: C (Room6 topPortal)

    if ((topCollision) && (state = "room6C") && (open)) {
      topCollision = false;

      state = "room3C";
      user.y = exitTopY
      user.x = exitTopX
    }

  }


  room7() {
    this.room7Display();
    this.simulation();

    //MiniGame #6:

        if(activatedG6){
          games.gameN6();
        }

    // Room 7: Right Portal -> Room 8
    // Layout: C (Room7 rightPortal)

    if ((rightCollision) && (state = "room7C")) {
      rightCollision = false;

      state = "room8C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room8() {
    this.room8Display();
    this.simulation();

    // Room 8: Top Portal -> Room 5
    // Layout: C (Room8 topPortal)

    if ((topCollision) && (state = "room8C")) {
      topCollision = false;

      state = "room5C";
      user.y = exitTopY
      user.x = exitTopX
    }


    // Room 8: Left Portal -> Room 7
    // Layout: C (Room8 leftPortal)

    if ((leftCollision) && (state = "room8C")) {
      leftCollision = false;

      state = "room7C";
      user.y = exitLeftY
      user.x = exitLeftX
    }
  }

  room9() {
    this.room9Display();
    this.simulation();


    // Room 9: Top Portal -> Room 6
    // Layout: C (Room9 topPortal)

    if ((topCollision) && (state = "room9C")) {
      topCollision = false;

      state = "room6C";
      user.y = exitTopY
      user.x = exitTopX
    }

  }

  simulation() {
    user.move();
    user.handleInput();
    user.display();
  }

  room1Display() {
    rooms.room1();


    bottomPortal.display();
    rightPortal.display();

  }

  room2Display() {
    rooms.room2();

    bottomPortal.display();
    leftPortal.display();
    rightPortal.display();
  }

  room3Display() {
    rooms.room3();


    bottomPortal.display();
    leftPortal.display();
  }

  room4Display() {
    rooms.room4();


    topPortal.display();
    exitPortal.display();

  }

  room5Display() {
    rooms.room5();


    topPortal.display();
    bottomPortal.display();
    rightPortal.display();

  }

  room6Display() {
    rooms.room6();


    topPortal.display();
    bottomPortal.display();
    leftPortal.display();
  }

  room7Display() {
    rooms.room7();


    rightPortal.display();

  }

  room8Display() {
    rooms.room8();


    topPortal.display();
    leftPortal.display();
  }

  room9Display() {
    rooms.room9();


    topPortal.display();

  }
}
