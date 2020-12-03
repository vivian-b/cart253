//game description:
// Reach the switch to open the door and avoid the objects

class Game6 {
  constructor() {

    this.trap_x = 50;
    this.trap_y = 50;
    this.trapSize = 100;
    this.trapSpeed = 10;

    this.keySize = 20;
    this.key_x = 480;
    this.key_y = 480;

  }

  trapMove() {
    this.trap_y += this.trapSpeed;

    if (this.trap_y > height + this.trapSize / 2) {
      this.trap_y = 0;
      this.trap_x = random(5, 350);
      this.trapSize = random(100, 200);
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
    ellipse(this.key_x, this.key_y, this.keySize);

    let d = dist(user.x, user.y, this.key_x, this.key_y);
    if (d < this.keySize / 2 + user.size / 2) {
      leftActive = true;
      bottomActive = true;
      topActive = true;
      rightActive = true;
            activatedG6 = false;
    }

  }

  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
