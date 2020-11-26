//game description:
// Reach the switch to open the door and avoid the objects

class Game1 {
  constructor() {

    this.trap_x = 50;
    this.trap_y = 50;
    this.trapSize = 100;
    this.trapSpeed = 10;

    this.keySize = 20;
    this.key_x = 20;
    this.key_y = 20;

  }

  trapMove() {
    this.trap_x += this.trapSpeed;

    if (this.trap_x > width + this.trapSize / 2 && (open === false)) {
      this.trap_x = 0;
      this.trap_y = random(5, height - 100);
      this.trapSize = random(100, 200);
    }
    else if (open){
      this.trap_x = -100;
      this.trap_y = -100;
    }

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



  key() {

    fill(0, 100, 100);
    ellipse(20, 20, this.keySize);

    let d = dist(user.x, user.y, this.key_x, this.key_y);
    if (d < this.keySize / 2 + user.size / 2) {
      open = true;

    }

  }





  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
