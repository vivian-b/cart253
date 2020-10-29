class Ball {

constructor() {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.maxSpeed = 10;
  this.size = 40;
  this.active = true;

  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move(){
    //adding accelaration to the velocity
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    //limit the velocity
    this.vx = constrain(this.vx, -this.maxSpeed, -this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, -this.maxSpeed);

    //allow the object to move by combining the speed + movement
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  }

  bounce(){
    if (this.y + this.size/2 >= height){
      this.vy = -this.vy;
      this.ay = 0
    }
  }

  display(){
    push();
    fill(200,50,50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
