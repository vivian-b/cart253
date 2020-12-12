//game description:
// Reach the switch to open the door and avoid the objects

class Game1 {
  constructor() {

    this.trap_x = 50;
    this.trap_y = 50;
    this.trapSize = 100;
    this.trapSpeed = 20;

    this.flowerSize = 20;
    this.flowerImgSize = 100;
    this.flower_x = 375;
    this.flower_y = 50;

  }

  trapMove() {
    this.trap_x += this.trapSpeed;

    if (this.trap_x > width + this.trapSize / 2) {
      this.trap_x = 0;
      this.trap_y = random(user.size, 350);
      this.trapSize = random(100, 200);
    }
  }

  trapCheck() {

    let d = dist(user.x, user.y, this.trap_x, this.trap_y);
    if (d < this.trapSize / 2 + user.size / 2) {
      score -= 1;
      user.x = 375;
      user.y = 525;
    }

    fill(77, 63, 224);
    ellipse(this.trap_x, this.trap_y, this.trapSize);
  }

  flowerCheck() {

    let d = dist(user.x, user.y, this.flower_x, this.flower_y);
    if (d < this.flowerSize / 2 + user.size / 2) {
      activatedG1 = false;
    }
  }

  flowerDisplay(){
    image(img_flower, this.flower_x, this.flower_y,this.flowerImgSize,this.flowerImgSize);

  }

  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
