//Player


class MazeB {
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
    // Layout: B (Room1 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room1B")) {
      state = "room4B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 1: Right Portal -> Room 2
    // Layout: B (Room1 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room1B")) {
      state = "room2B";
      user.y = exitRightY
      user.x = exitRightX
    }

  }


  room2() {
    this.room2Display();
    this.simulation();

    // Room 2: Bottom Portal -> Room 5
    // Layout: B (Room2 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room2B")) {
      state = "room1B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

    // Room 2: Left Portal -> Room 1
    // Layout: B (Room2 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room2B")) {
      state = "room3B";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room3() {
    this.room3Display();
    this.simulation();

    // Room 3: Bottom Portal to Room 6
    // Layout: B (Room3 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room3B")) {
      state = "room6B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Room 3: Left Portal to Room 2
    // Layout: B (Room3 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room3B")) {
      state = "room2B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room4() {

    this.room4Display();
    this.simulation();

    // Room 4: Top Portal to Room 1
    // Layout: B (Room4 topPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room4B")) {
      state = "room1B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 4: Bottom Portal to Room 7
    // Layout: B (Room3 bottomPortal)

    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room4B")) {
      state = "room7B";
      user.y = exitBottomY
      user.x = exitBottomX
    }


    // Room 4: Right Portal to Room 5
    // Layout: B (Room3 rightPortal)

    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);
    if (rd < rightPortal.size / 2 + user.size / 2 && (state = "room4B")) {
      state = "room5B";
      user.y = exitRightY
      user.x = exitRightX
    }

  }

  room5() {
    this.room5Display();
    this.simulation();

    // Room 5: Top Portal -> Room 2
    // Layout: B (Room5 topPortal)

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room5B")) {
      state = "room2B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 5: Left Portal -> Room 4
    // Layout: B (Room5 leftPortal)
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room5B")) {
      state = "room4B";
      user.y = exitLeftY
      user.x = exitLeftX
    }

  }

  room6() {
    this.room6Display();
    this.simulation();

    // Room 6: Left Portal -> Room 5

    // Layout: B (Room6 bottomPortal)
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    if (bd < bottomPortal.size / 2 + user.size / 2 && (state = "room6B")) {
      state = "room9B";
      user.y = exitBottomY
      user.x = exitBottomX
    }

    // Layout: B (Room6 topPortal)
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room6B")) {
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

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room7B")) {
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

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room8B")) {
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

    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    if (td < topPortal.size / 2 + user.size / 2 && (state = "room9B")) {
      state = "room6B";
      user.y = exitTopY
      user.x = exitTopX
    }

    // Room 9: Left Portal -> Room 8
    // Layout: A (Room8 leftPortal)

    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    if (ld < leftPortal.size / 2 + user.size / 2 && (state = "room9B")) {
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

    leftPortal.display();
    bottomPortal.display();
  }

  room4Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN4, width / 2, height / 2);

    topPortal.display();
    bottomPortal.display();
    rightPortal.display();
  }

  room5Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN5, width / 2, height / 2);

    topPortal.display();
    bottomPortal.display();
    leftPortal.display();

  }

  room6Display() {
    background(87, 87, 87);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN6, width / 2, height / 2);

    topPortal.display();
    bottomPortal.display();
  }

  room7Display() {
    background(69, 69, 69);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN7, width / 2, height / 2);

    topPortal.display();
  }

  room8Display() {
    background(69, 69, 69);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN8, width / 2, height / 2);

    topPortal.display();

  }

  room9Display() {
    background(69, 69, 69);
    textSize(40);
    textAlign(CENTER);
    fill(252);
    text(roomN9, width / 2, height / 2);

    topPortal.display();
    exitPortal.display();

  }


}
