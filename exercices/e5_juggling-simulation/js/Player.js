class Player {

  constructor(x,y) {
    this.width = 70;
    this.height = 50;

    this.x = x;
    this.y = height;
    this.vx = 0;
    this.vy = 2;
    this.speed = 5;
  }


  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);



    //body
    fill(255);
    rect(this.x, this.y, this.width, this.height);


    //head
    rect(this.x, this.y - 65, this.width - 10, this.height + 5);

    this.x = constrain(this.x, 110, width+20);
    this.y = constrain(this.y, height-5, width);

    pop();

  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

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
