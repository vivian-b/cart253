//Game description:
// Catch the fairy

class Game5 {
  constructor() {

    // Fairy position
    this.fairyX = 700;
    this.fairyY = 350;

    // Fairy Movement
    this.fairyVX = 0;
    this.fairyVY = 0;

    // Other Fairy Traits
    this.fairySpeed = 20;
    this.fairySize = 20;

    // Fairy Color
    this.fill = {
      r: 82,
      g: 255,
      b: 232,
    }
  }

  // Contact between Fairy + User
  checkFairy() {
    let d = dist(user.x, user.y, this.fairyX, this.fairyY);
    if (d < user.size / 2 + this.fairySize / 2) {
      activatedG5 = false;
      nomSFX.play();

    }
  }

  // Fairy Movement
  moveFairy() {
    let change = random(0, 1);
    if (change < .1) {

      // Fairy Randomized Direction
      this.fairyVX = random(-this.fairySpeed, this.fairySpeed);
      this.fairyVY = random(-this.fairySpeed, this.fairySpeed);
    }

    // Fairy Movement
    this.fairyX += this.fairyVX;
    this.fairyY += this.fairyVY;

    //  Constraint movement within canvas
    this.fairyX = constrain(this.fairyX, 0, width);
    this.fairyY = constrain(this.fairyY, 0, height);
  }

  // Fairy Display
  displayFairy() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    noStroke();
    ellipse(this.fairyX, this.fairyY, this.fairySize);
    pop();
  }



}
