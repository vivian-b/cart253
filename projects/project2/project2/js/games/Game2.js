//Game description:
// Bring the baby to the hole

// contact between baby + user
let carry = false;

class Game2 {
  constructor() {

    // Baby Position
    this.babyX = 50;
    this.babyY = 780;

    // Baby Size
    this.babySize = 40;

    // Baby Width + Height
    this.babyW = 85;
    this.babyH = 80

    // Hole Size
    this.holeSize = 100;

    // Hole Position
    this.holeX = 750;
    this.holeY = 0;

    // Hole Fill
    this.fill = {
      r: 240,
      g: 197,
      b: 67,
    }
  }

  // Contact between Hole + User
  checkHole() {
    let d = dist(user.x, user.y, this.holeX, this.holeY);
    if ((d < this.holeSize / 2 + user.size / 2) && (carry)) {
      activatedG2 = false;
      carry = false;
    }
  }

  // Display Hole
  holeDisplay() {
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.holeX, this.holeY, this.holeSize);
  }

  // Contact between Baby + User
  babyCheck() {
    let d = dist(user.x, user.y, this.babyX, this.babyY);
    if (d < this.babySize / 2 + user.size / 2) {
      carry = true;
      this.babyX = user.x;
      this.babyY = user.y;
    }
  }

  // Diplay Baby
  babyDisplay() {
    image(player_still, this.babyX, this.babyY - 33, this.babyW, this.babyH);
  }

}
