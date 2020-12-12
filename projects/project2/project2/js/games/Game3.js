//Game description:
//Stay on top of the circle until expands through the whole room

class Game3 {
  constructor() {

    this.x = 375;
    this.y = 375;
    this.size = 20;

    this.fill = {
      r: 240,
      g: 197,
      b: 67,
    }
  }

  lightPosition() {
    this.x = this.x
    this.y = this.y
  }

  lightDisplay() {
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
  }

  lightCheck() {
    let d = dist(user.x, user.y, this.x, this.y);
    if (d < this.size / 2 + user.size / 2) {
      this.size += 5;
    }
  }

  lightClear() {
    if (this.size > 550) {
      activatedG3 = false;
    }
  }

}
