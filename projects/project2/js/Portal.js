class Portal {

  constructor(x,y) {
    this.size = 70;

    this.x = x;
    this.y = y;
  }

  display() {
    push();
    fill(40);
    noStroke();

    //body
    ellipse(this.x, this.y, this.size);

    pop();

  }

}
