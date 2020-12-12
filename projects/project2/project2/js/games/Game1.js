//Game description:
//Avoid the trap and reach the flower

class Game1 {
  constructor() {

    // trap Position
    this.trapX = 50;
    this.trapY = 50;

    // trap Constraint on canvas
    this.trapMinY = 200;
    this.trapMaxY = 350;

    // trap size
    this.trapSize = 100;

    // trap constraint on size
    this.trapMinSize = 100;
    this.trapMaxSize = 200;

    // trap speed
    this.trapSpeed = 20;

    // trap color
    this.fill = {
      r: 77,
      g: 63,
      b: 224,
    }

    // flower img + hitbox size
    this.flowerSize = 20;
    this.flowerImgSize = 100;

    // flower position
    this.flowerX = 375;
    this.flowerY = 50;

    //  User's reposition when hit
    this.repositionX = 375
    this.repositionY = 525

  }

  // trap movements (randomized when reachinh max canvas)
  trapMove() {
    this.trapX += this.trapSpeed;

    if (this.trapX > width + this.trapSize / 2) {
      this.trapX = 0;
      this.trapY = random(this.trapMinY, this.trapMaxY);
      this.trapSize = random(this.trapMinSize, this.trapMaxSize);
    }
  }

  // contact between Trap + User
  trapCheck() {

    let d = dist(user.x, user.y, this.trapX, this.trapY);
    if (d < this.trapSize / 2 + user.size / 2) {

      score -= 1;
      user.x = this.repositionX;
      user.y = this.repositionY;
      squeakSFX.play();

    }
  }

  // display Trap
  trapDisplay() {
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.trapX, this.trapY, this.trapSize);
  }

  // contact between flower + user
  flowerCheck() {
    let d = dist(user.x, user.y, this.flowerX, this.flowerY);
    if (d < this.flowerSize / 2 + user.size / 2) {
      activatedG1 = false;
      nomSFX.play();

    }
  }

  // display flower
  flowerDisplay() {
    image(img_flower, this.flowerX, this.flowerY, this.flowerImgSize, this.flowerImgSize);
  }


}
