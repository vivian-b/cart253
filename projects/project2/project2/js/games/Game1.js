//Game description:
//Avoid the trap and reach the flower

class Game1 {
  constructor() {

    this.trap_x = 50;
    this.trap_y = 50;

    this.trapMinY = 200;
    this.trapMaxY = 350;

    this.trapSize = 100;

    this.trapMinSize = 100;
    this.trapMaxSize = 200;

    this.trapSpeed = 20;

    this.fill= {
      r: 77,
      g: 63,
      b: 224,
    }

    this.flowerSize = 20;
    this.flowerImgSize = 100;
    this.flower_x = 375;
    this.flower_y = 50;

    this.repositionX = 375
    this.repositionY = 525

  }

  trapMove() {
    this.trap_x += this.trapSpeed;

    if (this.trap_x > width + this.trapSize / 2) {
      this.trap_x = 0;
      this.trap_y = random(this.trapMinY, this.trapMaxY);
      this.trapSize = random(this.trapMinSize, this.trapMaxSize);
    }
  }

  trapCheck() {

    let d = dist(user.x, user.y, this.trap_x, this.trap_y);
    if (d < this.trapSize / 2 + user.size / 2) {
      score -= 1;
      user.x = this.repositionX;
      user.y = this.repositionY;
    }

  }

  trapDisplay(){
    fill(this.fill.r, this.fill.g, this.fill.b);
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


}
