class Portal {

  constructor(x,y,size,fill) {
    this.size = 75;

    this.x = x;
    this.y = y;

    this.fill = {
      r: 4,
      g: 128,
      b: 111,
    }
  }

  display() {
    push();
    noStroke();

    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);

    pop();

  }


}
