class Hoop {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0 + h;
    this.y = height/2;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height)
    pop();
  }



}
