//game description:
// Reach the switch to open the door and avoid the objects

class Game2 {
  constructor() {

    this.trap_x = 500;
    this.trap_y = 500;
    this.trapSize = 100;
    this.trapSpeed = 10;

    this.keySize = 20;
    this.key_x = 20;
    this.key_y = 20;

  }

  trapMove() {
    this.trap_x = this.trap_x;
    this.trap_y =   this.trap_y
    }


  trapCheck() {

    let d = dist(user.x, user.y, this.trap_x, this.trap_y);
    if (d < this.trapSize / 2 + user.size / 2) {
      score -= 1;
      user.x = exitTopX;
      user.y = exitTopY;
    }


    fill(100, 100, 0);
    ellipse(this.trap_x, this.trap_y, this.trapSize);
  }



  sesame() {

    fill(0, 100, 100);
    ellipse(20, 20, this.keySize);

    let d = dist(user.x, user.y, this.key_x, this.key_y);
    if (d < this.keySize / 2 + user.size / 2) {
      open = true;
      rightActive = true;
      miniClear = true;

    }

  }

  miniGameCleared(){
    if (miniClear){
      this.trap_x = 550;
      this.trap_y =   550;
    }
  }


  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
