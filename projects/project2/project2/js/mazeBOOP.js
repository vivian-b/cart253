//layout [B]

class MazeB {
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
    // Layout: B (Room1 bottomPortal)

    if ((bottomCollision) && (state = "room1B")) {
      bottomCollision = false;

      state = "room4B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 1: Right Portal -> Room 2
    // Layout: B (Room1 rightPortal)

    if ((rightCollision) && (state = "room1B")) {
      rightCollision = false;

      state = "room2B";
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
    // Layout: B (Room2 leftPortal)

    if ((leftCollision) && (state = "room2B")) {
      leftCollision = false;

      state = "room1B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: B (Room2 rightPortal)

    if ((rightCollision) && (state = "room2B")) {
      rightCollision = false;

      state = "room3B";
      user.y = exitRightY
      user.x = exitRightX
    }

    // Room 2: Bottom Portal -> Room 5
    // Layout: B (Room2 bottomPortal)

    if ((bottomCollision) && (state = "room2B")) {
      bottomCollision = false;

      state = "room5B";
      user.y = exitBottomY
      user.x = exitBottomX
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
    // Layout: B (Room3 bottomPortal)

    if ((bottomCollision) && (state = "room3B")) {
      bottomCollision = false;

      state = "room6B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 3: Left Portal to Room 2
    // Layout: B (Room3 leftPortal)

    if ((leftCollision) && (state = "room3B")) {
      leftCollision = false;

      state = "room2B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room4() {

    this.room4Display();
    this.simulation();

    //MiniGame #4:

        if(activatedG4){
          games.gameN4();
        }

    // Room 4: Top Portal to Room 1
    // Layout: B (Room4 topPortal)

    if ((topCollision) && (state = "room4B")) {
      topCollision = false;

      state = "room1B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 4: Bottom Portal to Room 7
    // Layout: B (Room3 bottomPortal)

    if ((bottomCollision) && (state = "room4B")) {
      bottomCollision = false;

      state = "room7B";
      user.y = exitBottomY
      user.x = exitBottomX
    }


    // Room 4: Right Portal to Room 5
    // Layout: B (Room3 rightPortal)

    if ((rightCollision) && (state = "room4B")) {
      rightCollision = false;

      state = "room5B";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room5() {
    this.room5Display();
    this.simulation();

    //MiniGame #5:

        if(activatedG5){
          games.gameN5();
        }

    // Room 5: Top Portal -> Room 2
    // Layout: B (Room5 topPortal)

    if ((topCollision) && (state = "room5B")) {
      topCollision = false;

      state = "room2B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 5: Left Portal -> Room 4
    // Layout: B (Room5 leftPortal)
    if ((leftCollision) && (state = "room5B")) {
      leftCollision = false;

      state = "room4B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 5: Bottom Portal -> Room 8
    // Layout: B (Room5 bottomPortal)
    if ((bottomCollision) && (state = "room5B")) {
      bottomCollision = false;

      state = "room8B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room6() {
    this.room6Display();
    this.simulation();

    //MiniGame 61:

        if(activatedG6){
          games.gameN6();
        }

    // Room 6: Left Portal -> Room 5

    // Layout: B (Room6 bottomPortal)
    if ((bottomCollision) && (state = "room6B")) {
      bottomCollision = false;

      state = "room9B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Layout: B (Room6 topPortal)
    if ((topCollision) && (state = "room6B")) {
      topCollision = false;

      state = "room3B";
      user.y = exitTopY
      user.x = exitTopX
    }

  }


  room7() {
    this.room7Display();
    this.simulation();

    // Room 7: Top Portal -> Room 4
    // Layout: B (Room7 topPortal)

    if ((topCollision) && (state = "room7B")) {
      topCollision = false;

      state = "room4B";
      user.y = exitTopY
      user.x = exitTopX
    }

  }

  room8() {
    this.room8Display();
    this.simulation();


    // Room 8: Top Portal -> Room 5
    // Layout: B (Room8 topPortal)

    if ((topCollision) && (state = "room8B")) {
      topCollision = false;

      state = "room5B";
      user.y = exitTopY
      user.x = exitTopX
    }

  }

  room9() {
    this.room9Display();
    this.simulation();


    // Room 9: Top Portal -> Room 6
    // Layout: A (Room9 topPortal)

    if ((topCollision) && (state = "room9B")) {
      topCollision = false;

      state = "room6B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 9: Left Portal -> Room 8
    // Layout: A (Room8 leftPortal)

    if ((leftCollision) && (state = "room9B")) {
      leftCollision = false;

      state = "room8B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    //Exit Portal: Layout B
    let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
    if (ed < exitPortal.size / 2 + user.size / 2 && (state = "room9B")) {
      state = "clear";
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

    leftPortal.display();
    bottomPortal.display();
  }

  room4Display() {
    rooms.room4();
    topPortal.display();
    bottomPortal.display();
    rightPortal.display();
  }

  room5Display() {
    rooms.room5();

    topPortal.display();
    bottomPortal.display();
    leftPortal.display();

  }

  room6Display() {
    rooms.room6();

    topPortal.display();
    bottomPortal.display();
  }

  room7Display() {
    rooms.room7();

    topPortal.display();
  }

  room8Display() {
    rooms.room8();

    topPortal.display();
    topActive = true;

  }

  room9Display() {
    rooms.room9();

    topPortal.display();
    exitPortal.display();

  }


}
