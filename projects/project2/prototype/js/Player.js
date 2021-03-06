class Player {

  constructor(x,y) {
    this.size = 40;

    this.x = x;
    this.y = y;
    this.vx = 2;
    this.vy = 2;
    this.speed = 5;
  }


  display() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size);

    pop();

  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  this.x = constrain(this.x, 0, width);
this.y = constrain(this.y, 0 , height);

  }

  handleInput() {

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed * 2;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed * 2;

    } else {
      this.vx = 0;

    }

    if (keyIsDown(UP_ARROW)) {
          this.vy = -this.speed;
          }

        else if (keyIsDown(DOWN_ARROW)){
          this.vy = this.speed;
          }

        else {
          this.vy = 0;
          }

}

}
