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
    game5.checkAphids();
 game5.all();
 game5.gameSetup();
 game5.createAphids();
 game5.displayAphids();
 game5.aphidSpawn();
 game5.checkCounter();

    }

  gameN6() {
    game6.trapMove();
    game6.trapCheck();
    game6.key();
    game6.noLives();
  }


}
