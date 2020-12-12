//Rooms Background Change when game has Cleared

class RoomsClear {
  constructor() {
  }

// Game 1 clear
  roomG1() {
    rooms.collision();
    background(16, 145, 87);
  }

  // Game 2 clear
  roomG2() {
    rooms.collision();
    background(217, 87, 176);
  }

  // Game 3 clear
  roomG3() {
    rooms.collision();
    background(240, 197, 67);
  }

  // Game 4 clear
  roomG4() {
    rooms.collision();
    background(176, 58, 137);
  }

  // Game 5 clear
  roomG5() {
    rooms.collision();
    background(21, 191, 183);
  }

  // Game 6 clear
  roomG6() {
    rooms.collision();
    background(139, 222, 133);
  }

}
