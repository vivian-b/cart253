class Portal {

  constructor(x, y, size, fill) {
    // Portal size
    this.size = 75;

    // portal position
    this.x = x;
    this.y = y;

    // portal color
    this.fill = {
      r: 4,
      g: 128,
      b: 111,
    }
  }

  // portal display
  display() {
    push();
    noStroke();

    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);

    pop();

  }


}
