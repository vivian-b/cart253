class PaddleBot {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    //body
    rect(this.x,this.y,this.width,this.height);
    //head
    rect(this.x,this.y - 40,this.width -10,this.height);
    //eyes
    fill(0);
    ellipse(this.x,this.y,10)

    pop();
  }



}
