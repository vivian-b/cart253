//layout [A]

class MazeA {
  constructor() {

  }

  room1() {
    this.room1Display();
    this.simulation();

rightActive = true;
    // Room 1: Right Portal -> Room 2
    // Layout: A (Room1 rightPortal)

    if ((rightCollision) && (state = "room1A")) {
      portalFalse();

      state = "room2A";
      user.y = exitRightY
      user.x = exitRightX
    }
  }

  room2() {
    this.room2Display();
    this.simulation();

    //MiniGame #1:
    if (activatedG1) {
      games.gameN1();
    }
    else if(!activatedG1){
      portalTrue();
    }

    // Entry from  Room3 + Game2 = clear
      if(!activatedG2){
        rightActive = true;
      }

    // Entry from  Room5 + Game4 = clear
      if(!activatedG4){
        bottomActive = true;

      }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room2 bottomPortal)

    if ((bottomCollision) && (state = "room2A")) {
      portalFalse();

      state = "room5A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: A (Room2 leftPortal)

    if ((leftCollision) && (state = "room2A")) {
      portalFalse();

      state = "room1A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Right Portal to Room 3
    // Layout: A (Room2 rightPortal)

    if ((rightCollision) && (state = "room2A")) {
      portalFalse();

      state = "room3A";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    //MiniGame #2:
    if (activatedG2) {
      games.gameN2();
    }
    else if(!activatedG2){
      portalTrue();
    }

    // Entry from  Room2 + Game1 = clear
      if(!activatedG1){
        leftActive = true;
      }

    // Entry from  Room6 + Game5 = clear
      if(!activatedG5){
        bottomActive = true;
      }



    // Room 3: Left Portal to Room 2
    // Layout: A (Room3 leftPortal)

    if ((leftCollision) && (state = "room3A")) {
      portalFalse();

      state = "room2A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room3 bottomPortal)

    if ((bottomCollision) && (state = "room3A")) {
      portalFalse();

      state = "room6A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room4() {
    this.room4Display();

    bottomActive = true;

    //MiniGame #3:
    if (activatedG3) {
      games.gameN3();
    }
    else if(!activatedG3){
      portalTrue();
    }

    this.simulation();



    // Room 4: Bottom Portal to Room 7
    // Layout: A (Room3 bottomPortal)


    if ((bottomCollision) && (state = "room4A")) {
      portalFalse();

      user.y = exitBottomY;
      user.x = exitBottomX;
      state = "room7A";

    }

    // Room 4: Right Portal to Room 5
    // Layout: A (Room3 rightPortal)

    if ((rightCollision) && (state = "room4A")) {
      portalFalse();

      user.y = exitRightY;
      user.x = exitRightX;
      state = "room5A";
    }
  }

  room5() {
    this.room5Display();
    this.simulation();

leftActive = true;

//MiniGame #4:
if (activatedG4) {
  games.gameN4();
}
else if(!activatedG4){
  portalTrue();
}

    // Room 5: Top Portal -> Room 2
    // Layout: A (Room5 rightPortal)

    if ((topCollision) && (state = "room5A")) {
      portalFalse();
      user.y = exitTopY
      user.x = exitTopX
      state = "room2A";

    }

    // Room 5: Left Portal -> Room 4
    // Layout: A (Room5 leftPortal)

    if ((leftCollision) && (state = "room5A")) {
      portalFalse();
      user.y = exitLeftY
      user.x = exitLeftX
      state = "room4A";

    }

    // Room 5: Right Portal -> Room 6
    // Layout: A (Room5 rightPortal)

    if ((rightCollision) && (state = "room5A")) {
      portalFalse();

      state = "room6A";
      user.y = exitRightY
      user.x = exitRightX
    }


  }

  room6() {
    this.room6Display();
    this.simulation();

    //MiniGame #5:
    if (activatedG5) {
      games.gameN5();
    }
    else if(!activatedG5){
      portalTrue();
    }

  // Entry from  Room3 + Game2 = clear
    if(!activatedG2){
      topActive = true;
    }

  // Entry from  Room5 + Game4 = clear
    if(!activatedG4){
      leftActive = true;
    }

    // Room 6: Left Portal -> Room 5
    // Layout: A (Room5 rightPortal)

    if ((leftCollision) && (state = "room6A")) {
      portalFalse();

      state = "room5A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 6: Bottom Portal -> Room 9
    // Layout: A (Room6 bottomPortal)

    if ((bottomCollision) && (state = "room6A")) {
      portalFalse();

      state = "room9A";
      user.y = exitBottomY
      user.x = exitBottomX
    }


    // Room 6: Top Portal -> Room 3
    // Layout: A (Room6 topPortal)

    if ((topCollision) && (state = "room6A")) {
      portalFalse();

      state = "room3A";
      user.y = exitTopY
      user.x = exitTopX
    }


  }


  room7() {
    rooms.room7();
    this.room7Display();
    this.simulation();

topActive = true;
    // Room 7: Top Portal -> Room 4
    // Layout: A (Room7 topPortal)

    if ((topCollision) && (state = "room7A")) {
      portalFalse();
      state = "room4A";
      user.y = exitTopY
      user.x = exitTopX
    }

  }

  room8() {
    this.room8Display();
    this.simulation();

rightActive = true;
    // Room 8: Right Portal -> Room 9
    // Layout: A (Room8 rightPortal)

    if ((rightCollision) && (state = "room8C")) {
      portalFalse();

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

topActive = true;
    //MiniGame #6:
    if (activatedG6) {
      games.gameN6();
    }
    else if(!activatedG6){
      portalTrue();
    }

    // Room 9: Top Portal -> Room 6
    // Layout: A (Room9 topPortal)

    if ((topCollision) && (state = "room9A")) {
      portalFalse();

      state = "room6A";
      user.y = exitTopY
      user.x = exitTopX
    }


    // Room 9: Left Portal -> Room 8
    // Layout: A (Room8 leftPortal)

    if ((leftCollision) && (state = "room9A")) {
      portalFalse();

      state = "room8A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  simulation() {
    user.move();
    user.handleInput();
    user.handleDisplay();
    user.display();
  }

  room1Display() {
    rooms.roomRest();
    rightPortal.display();
  }

  room2Display() {
    rooms.room2();

    if(!activatedG1){
      roomsC.roomG1()
      }

    bottomPortal.display();
    leftPortal.display();
    rightPortal.display();
  }

  room3Display() {
    rooms.room3();

    if(!activatedG2){
      roomsC.roomG2()
      }

    leftPortal.display();
    bottomPortal.display();
  }

  room4Display() {
    rooms.room4();

if(!activatedG3){
  roomsC.roomG3()
  }

    bottomPortal.display();
    rightPortal.display();


  }

  room5Display() {
    rooms.room5();

    if(!activatedG4){
      roomsC.roomG4()
      }

    topPortal.display();
    leftPortal.display();
    rightPortal.display();

  }

  room6Display() {
    rooms.room6();

    if(!activatedG5){
      roomsC.roomG5()
      }

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

    if(!activatedG6){
      roomsC.roomG6()
      }

    topPortal.display();
    leftPortal.display();
  }



}
