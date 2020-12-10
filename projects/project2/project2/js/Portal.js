class Portal {

  constructor(x,y) {
    this.size = 75;

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
