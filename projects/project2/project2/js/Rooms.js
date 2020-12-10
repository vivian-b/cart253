//Rooms

class Rooms {
  constructor() {

  }

  room1() {
    this.collision();
    background(10, 120, 120);
  }

  room2() {
    this.collision();
    background(20, 20, 120);
  }

  room3() {
    this.collision();
    background(30, 20, 120);
  }

  room4() {
    this.collision();
    background(40, 20, 120);
  }

  room5() {
    this.collision();
    background(50, 20, 120);
  }

  room6() {
    this.collision();
    background(60, 20, 120);
  }

  room7() {
    this.collision();
    background(45, 145, 84);
  }

  room8() {
    this.collision();
    background(80, 20, 120);
  }

  room9() {
    this.collision();
    background(90, 20, 120);
  }

  roomEntrance() {
    this.collision();
    background(45, 145, 84);
  }

  roomExit() {
    this.collision();
    background(20, 20, 0);
  }

  collision() {
    let bd = dist(user.x, user.y, bottomPortal.x, bottomPortal.y);
    let td = dist(user.x, user.y, topPortal.x, topPortal.y);
    let ld = dist(user.x, user.y, leftPortal.x, leftPortal.y);
    let rd = dist(user.x, user.y, rightPortal.x, rightPortal.y);

    if ((bd < bottomPortal.size / 2 + user.size / 2 ) && (bottomActive)) {
      bottomCollision = true;
    }
     if ((td < topPortal.size / 2 + user.size / 2) && (topActive)){
      topCollision = true;
    }
     if ((ld < leftPortal.size / 2 + user.size / 2)&& (leftActive)) {
      leftCollision = true;
    }
     if ((rd < rightPortal.size / 2 + user.size / 2) && (rightActive)) {
      rightCollision = true;
    }
  }
}
