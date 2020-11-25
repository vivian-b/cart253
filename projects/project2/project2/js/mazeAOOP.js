//layout [A]

class MazeA {
  constructor() {

  }

  room1() {
    this.room1Display();
    this.simulation();

    // Room 1: Right Portal -> Room 2
    // Layout: A (Room1 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1A")) {
      state = "room2A";
      user.y = exitRightY
      user.x = exitRightX
    }
  }

  room2() {
    this.room2Display();
    this.simulation();

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room2 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room2A")) {
      state = "room5A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: A (Room2 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2A")) {
      state = "room1A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Right Portal to Room 3
    // Layout: A (Room2 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2A")) {
      state = "room3A";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    // Room 3: Left Portal to Room 2
    // Layout: A (Room3 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3A")) {
      state = "room2A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Bottom Portal -> Room 5
    // Layout: A (Room3 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3A")) {
      state = "room6A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

  }

  room4() {
    this.room4Display();
    games.catch();
    games.noLives();
    this.simulation();

    // Room 4: Bottom Portal to Room 7
    // Layout: A (Room3 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room4A")) {
      state = "room7A";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 4: Right Portal to Room 5
    // Layout: A (Room3 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room4A")) {
      state = "room5A";
      user.y = exitRightY
      user.x = exitRightX
    }
  }

  room5() {
    this.room5Display();
    this.simulation();

    // Room 5: Top Portal -> Room 2
    // Layout: A (Room5 rightPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
      state = "room2A";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 5: Left Portal -> Room 4
    // Layout: A (Room5 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room5A")) {
      state = "room4A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 5: Right Portal -> Room 6
    // Layout: A (Room5 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room5A")) {
      state = "room6A";
      user.y = exitRightY
      user.x = exitRightX
    }


  }

  room6() {
    this.room6Display();
    this.simulation();


    // Room 6: Left Portal -> Room 5
    // Layout: A (Room5 rightPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room6A")) {
      state = "room5A";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 6: Bottom Portal -> Room 9
    // Layout: A (Room6 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6A")) {
      state = "room9A";
      user.y = exitBottomY
      user.x = exitBottomX
    }


    // Room 6: Top Portal -> Room 3
    // Layout: A (Room6 topPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room6A")) {
      state = "room3A";
      user.y = exitTopY
      user.x = exitTopX
    }


  }


  room7() {
    this.room7Display();
    this.simulation();

    // Room 7: Top Portal -> Room 4
    // Layout: A (Room7 topPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room7A")) {
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

  room9() {
    this.room9Display();
    this.simulation();

    // Room 9: Top Portal -> Room 6
    // Layout: A (Room9 topPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room9A")) {
      state = "room6A";
      user.y = exitTopY
      user.x = exitTopX
    }


    // Room 9: Left Portal -> Room 8
    // Layout: A (Room8 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room9A")) {
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
