//layout [A]

class MazeA {
  constructor() {

  }

  room1() {
    this.room1Display();
    this.simulation();

    // Room 1: Right Portal -> Room 2
    // Layout: A (Room1 rightPortal)

    if ((rightCollision) && (state = "room1A")) {
      rightCollision = false;

      state = "room2A";
      user.y = exitRightY
      user.x = exitRightX
    }
  }

  room2() {
    this.room2Display();
    this.simulation();

    //MiniGame #1:

        if(activatedG1){
          games.gameN1();
        }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room2 bottomPortal)

    if ((bottomCollision) && (state = "room2A")) {
      bottomCollision = false;

      state = "room5A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: A (Room2 leftPortal)

    if ((leftCollision) && (state = "room2A")) {
      leftCollision = false;

      state = "room1A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Right Portal to Room 3
    // Layout: A (Room2 rightPortal)

    if ((rightCollision) && (state = "room2A")) {
      rightCollision = false;

      state = "room3A";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    //MiniGame #2:

        if(activatedG2){
          games.gameN2();
        }

    // Room 3: Left Portal to Room 2
    // Layout: A (Room3 leftPortal)

    if ((leftCollision) && (state = "room3A")) {
      leftCollision = false;

      state = "room2A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room3 bottomPortal)

    if ((bottomCollision) && (state = "room3A")) {
      bottomCollision = false;

      state = "room6A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room4() {
    this.room4Display();
    this.simulation();


    //MiniGame #3:

        if(activatedG3){
          games.gameN3();
        }

    // Room 4: Bottom Portal to Room 7
    // Layout: A (Room3 bottomPortal)


    if ((bottomCollision) && (state = "room4A")) {
      bottomCollision = false;

      user.y = exitBottomY;
      user.x = exitBottomX;
      state = "room7A";

    }

    // Room 4: Right Portal to Room 5
    // Layout: A (Room3 rightPortal)

    if ((rightCollision) && (state = "room4A")) {
      rightCollision = false;

      user.y = exitRightY;
      user.x = exitRightX;
      state = "room5A";
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
    // Layout: A (Room5 rightPortal)

    if ((topCollision) && (state = "room5A")) {
      topCollision = false;
      user.y = exitTopY
      user.x = exitTopX
      state = "room2A";

    }

    // Room 5: Left Portal -> Room 4
    // Layout: A (Room5 leftPortal)

    if ((leftCollision) && (state = "room5A")) {
      leftCollision = false;
      user.y = exitLeftY
      user.x = exitLeftX
      state = "room4A";

    }

    // Room 5: Right Portal -> Room 6
    // Layout: A (Room5 rightPortal)

    if ((rightCollision) && (state = "room5A")) {
      rightCollision = false;

      state = "room6A";
      user.y = exitRightY
      user.x = exitRightX
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
    // Layout: A (Room5 rightPortal)

    if ((leftCollision) && (state = "room6A")) {
      leftCollision = false;

      state = "room5A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 6: Bottom Portal -> Room 9
    // Layout: A (Room6 bottomPortal)

    if ((bottomCollision) && (state = "room6A")) {
      bottomCollision = false;

      state = "room9A";
      user.y = exitBottomY
      user.x = exitBottomX
    }


    // Room 6: Top Portal -> Room 3
    // Layout: A (Room6 topPortal)

    if ((topCollision) && (state = "room6A")) {
      topCollision = false;

      state = "room3A";
      user.y = exitTopY
      user.x = exitTopX
    }


  }


  room7() {
    rooms.room7();
    this.room7Display();
    this.simulation();

    // Room 7: Top Portal -> Room 4
    // Layout: A (Room7 topPortal)

    if ((topCollision) && (state = "room7A")) {
      topCollision = false;
      state = "room4A";
      user.y = exitTopY
      user.x = exitTopX
    }

  }

  room8() {
    this.room8Display();
    this.simulation();

    // Room 8: Right Portal -> Room 9
    // Layout: A (Room8 rightPortal)

    if ((rightCollision) && (state = "room8C")) {
      rightCollision = false;

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

  room9() {
    this.room9Display();
    this.simulation();

    //MiniGame #6:

        if(activatedG6){
          games.gameN6();
        }

    // Room 9: Top Portal -> Room 6
    // Layout: A (Room9 topPortal)

    if ((topCollision) && (state = "room9A")) {
      topCollision = false;

      state = "room6A";
      user.y = exitTopY
      user.x = exitTopX
    }


    // Room 9: Left Portal -> Room 8
    // Layout: A (Room8 leftPortal)

    if ((leftCollision) && (state = "room9A")) {
      leftCollision = false;

      state = "room8A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  simulation() {
    user.move();
    user.handleInput();
    user.display();
  }

  room1Display() {
    rooms.room1();
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

    bottomPortal.display();
    rightPortal.display();


  }

  room5Display() {
    rooms.room5();

    topPortal.display();
    leftPortal.display();
    rightPortal.display();


  }

  room6Display() {
    rooms.room6();

    leftPortal.display();
    topPortal.display();
    bottomPortal.display();
  }

  room7Display() {
    rooms.roomEntrance();
    topPortal.display();

  }

  room8Display() {
    rooms.roomExit();
    rightPortal.display();
    exitPortal.display();

  }

  room9Display() {
    rooms.room9();

    topPortal.display();
    leftPortal.display();
  }


}
