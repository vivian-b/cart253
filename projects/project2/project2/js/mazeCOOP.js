class MazeC {
  constructor(room1, room2, room3, room4, room5, room6, room7, room8, room9) {


    user = new Player(width / 2, height / 2);

    topPortal = new Portal(width / 2, 0);
    leftPortal = new Portal(0, height / 2);
    rightPortal = new Portal(width, height / 2);
    bottomPortal = new Portal(width / 2, height);
    exitPortal = new Portal(width / 2, height / 2);

  }


  room1() {
    this.room1Display();
    this.simulation();

    // Room 1: Bottom Portal -> Room 4
    // Layouts: B C


    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);

    // Layout: C (Room1 bottomPortal)
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room1C")) {
      state = "room4C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1C")) {
      state = "room2C";
      user.y = exitRightY
      user.x = exitRightX
    }


  }


  room2() {
    this.room2Display();
    this.simulation();



    // Layout: A (Room2 bottomPortal)
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room2C")) {
      state = "room5C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Layout: C (Room2 leftPortal)
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2C")) {
      state = "room1C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Layout: C (Room2 rightPortal)
    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2C")) {
      state = "room3C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    // Room 3: Bottom Portal to Room 6
    // Layouts: A B C


    // Layout: C (Room3 bottomPortal)
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3C")) {
      state = "room6C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 3: Bottom Portal to Room 2
    // Layouts: A B C

    // Layout: C (Room3 leftPortal)
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3C")) {
      state = "room2C";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room4() {

    this.room4Display();
    this.simulation();


    // Room 4: Top Portal to Room 1
    // Layouts: B C


    // Layout: C (Room4 topPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room4C")) {
      state = "room1C";
      user.y = exitTopY
      user.x = exitTopX
    }

    //Exit Portal: Layout B
    let ed = dist(user.x, user.y, exitPortal.x, exitPortal.y);
    if (ed < exitPortal.size / 2 + user.size / 2 && (state = "room9B")) {
      state = "clear";
    }

  }

  room5() {
    this.room5Display();
    this.simulation();


    // Layout: C (Room5 rightPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
      state = "room2C";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Layout: A (Room5 rightPortal)
    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room5C")) {
      state = "room6C";
      user.y = exitRightY
      user.x = exitRightX
    }

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < rightPortal.size / 2 + user.size / 2 && (state = "room5C")) {
      state = "room8C";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room6() {
    this.room6Display();
    this.simulation();


    // Room 6: Left Portal -> Room 5
    // Layouts: A C


    // Layout: C (Room5 rightPortal)
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room6C")) {
      state = "room5C";
      user.y = exitLeftY
      user.x = exitLeftX

    }

    // Room 6: Bottom Portal -> Room 9
    // Layouts: A B C

    // Layout: C (Room6 bottomPortal)
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6C")) {
      state = "room9C";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 6: Top Portal -> Room 3
    // Layouts: A B C

    // Layout: C (Room6 topPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room6C")) {
      state = "room3C";
      user.y = exitTopY
      user.x = exitTopX
    }

  }


  room7() {
    this.room7Display();
    this.simulation();

    // Room 7: Top Portal -> Room 4
    // Layouts: A B


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

  room8() {
    this.room8Display();
    this.simulation();

    // Room 8: Top Portal -> Room 5
    // Layouts: C

    // Layout: B (Room8 topPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room8C")) {
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

  room9() {
    this.room9Display();
    this.simulation();


    // Room 9: Top Portal -> Room 6
    // Layouts: A B C

    // Layout: C (Room9 topPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room9C")) {
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

  }


  simulation() {
    user.move();
    user.handleInput();
    user.display();
  }

  room1Display() {
    background(130, 130, 130);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN1, width / 2, height / 2);


    bottomPortal.display();
    rightPortal.display();

  }

  room2Display() {
    background(130, 130, 130);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN2, width / 2, height / 2);

    bottomPortal.display();
    leftPortal.display();
    rightPortal.display();
  }

  room3Display() {
    background(130, 130, 130);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN3, width / 2, height / 2);

    bottomPortal.display();
    leftPortal.display();
  }

  room4Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN4, width / 2, height / 2);

    topPortal.display();
    exitPortal.display();

  }

  room5Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN5, width / 2, height / 2);

    topPortal.display();
    bottomPortal.display();
    rightPortal.display();

  }

  room6Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN6, width / 2, height / 2);

    topPortal.display();
    bottomPortal.display();
    leftPortal.display();
  }

  room7Display() {
    background(69, 69, 69);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN7, width / 2, height / 2);

    rightPortal.display();

  }

  room8Display() {
    background(69, 69, 69);
    exitPortal.display();

    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN8, width / 2, height / 2);

    topPortal.display();
    leftPortal.display();
  }

  room9Display() {
    background(69, 69, 69);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN9, width / 2, height / 2);

    topPortal.display();
  }
}
