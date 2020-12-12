//minigame library

class Games {

  constructor(x,y) {

  }

  gameN1() {
    if (activatedG1){

    game1.trapMove();
    game1.trapCheck();

    game1.keyCheck();
    game1.keyDisplay();


    game1.noLives();
  }}

  gameN2() {
    if (activatedG2){

    game2.hole();
    game2.holeDisplay();

    game2.babyCheck();
    game2.babyDisplay();

  }
}

  gameN3() {
    if (activatedG3){
    game3.flowerPosition();
    game3.flowerCheck();
    game3.flowerClear();
  }
  }

  gameN4() {
    if (activatedG4){
    game4.bugSpawn();
    game4.bugCheck();
    game4.bugSetUp();

    game4.flower();
    game4.noLives();
  }
}

  gameN5() {
    if (activatedG5){

    game5.checkFairy();
 game5.moveFairy();
 game5.displayFairy();
}

    }

  gameN6() {
    if (activatedG6){

    game6.beeSpawn();
    game6.beeCheck();
    game6.beeSetUp();

    game6.honey();

    game6.noLives();
  }
  }


}
