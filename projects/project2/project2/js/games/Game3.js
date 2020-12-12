//Game description:
//Stay on top of the circle until expands through the whole room

class Game3 {
  constructor() {

    // Light Position
    this.x = 375;
    this.y = 375;
    this.size = 20;

    // Light Color
    this.fill = {
      r: 240,
      g: 197,
      b: 67,
    }
  }


  lightDisplay() {

    // light position
    this.x = this.x
    this.y = this.y

    // light color + display
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
  }


  // contact Light + User
  lightCheck() {
    let d = dist(user.x, user.y, this.x, this.y);
    if (d < this.size / 2 + user.size / 2) {
      this.size += 5;
      oscillator.start();
    }
    // Sound when User =/= on Light
    else {
      oscillator.stop();
    }
  }

  // Game Clear when Light reaches x Size
  lightClear() {
    if (this.size > 550) {
      activatedG3 = false;
      oscillator.stop();
    }
  }

}
