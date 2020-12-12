//minigame library

class Games {
  constructor(x, y) {
  }

  gameN1() {
    if (activatedG1) {

      game1.flowerCheck();
      game1.flowerDisplay();

      game1.trapMove();
      game1.trapCheck();
      game1.trapDisplay();

      this.noLives();
    }
  }

  gameN2() {
    if (activatedG2) {

      game2.checkHole();
      game2.holeDisplay();

      game2.babyCheck();
      game2.babyDisplay();

    }
  }

  gameN3() {
    if (activatedG3) {

      game3.lightDisplay();

      game3.lightCheck();
      game3.lightClear();
    }
  }

  gameN4() {
    if (activatedG4) {

      game4.flowerDisplay();
      game4.flowerCheck();

      game4.bugSpawn();
      game4.bugCheck();
      game4.bugSetUp();

      this.noLives();
    }
  }

  gameN5() {
    if (activatedG5) {

      game5.checkFairy();
      game5.moveFairy();
      game5.displayFairy();
    }

  }

  gameN6() {
    if (activatedG6) {

      game6.flowerCheck();
      game6.flowerDisplay();

      game6.beeSpawn();
      game6.beeCheck();
      game6.beeSetUp();


      this.noLives();
    }
  }

// Check when no lives = Game Over
  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
