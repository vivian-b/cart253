//game description:
// Reach the switch to open the door and avoid the objects

class Game3 {
  constructor() {

    this.light_x = 50;
    this.light_y = 50;
    this.lightSize = 100;
    this.lightSpeed = 10;

  }

  lightMove() {
    this.light_x += this.lightSpeed;

    if (this.light_x > width + this.lightSize / 2) {
      this.light_x = 0;
      this.light_y = random(5, 350);
      this.lightSize = random(100, 200);
    }
  }

  lightCheck() {

    let d = dist(user.x, user.y, this.light_x, this.light_y);
    if (d < this.lightSize / 2 + user.size / 2) {
lightSize += 1;
    }


    fill(100, 100, 0);
    ellipse(this.light_x, this.light_y, this.lightSize);
  }


}
