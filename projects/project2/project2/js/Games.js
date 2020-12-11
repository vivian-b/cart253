//minigame library

class Games {

  constructor(x,y) {

  }

  gameN1() {
    game1.trapMove();
    game1.trapCheck();
    game1.key();
    game1.noLives();
  }

  gameN2() {
    game2.trapMove();
    game2.trapCheck();
    game2.key();
    game2.noLives();
  }

  gameN3() {
    game3.flowerPosition();
    game3.flowerCheck();
    game3.flowerClear();
  }

  gameN4() {
    game4.bugSpawn();
    game4.bugCheck();
    game4.bugSetUp();

    game4.flower();
    game4.noLives();
  }

  gameN5() {
    game5.checkPetals();
 game5.all();
 game5.gameSetup();
 game5.createPetals();
 game5.displayPetals();
 game5.checkCounter();


    }

  gameN6() {
    game6.beeSpawn();
    game6.beeCheck();
    game6.beeSetUp();

    game6.honey();

    game6.noLives();
  }


}
