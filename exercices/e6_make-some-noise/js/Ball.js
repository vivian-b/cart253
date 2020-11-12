class Ball {

  constructor (x,y){
    this.x = x;
    this.y = y;
    this.size = random(50, 70),
    this.fill = {
      r: random(180,255),
      g: random(180,255),
      b: random(180,255),
    };
    this.speed = 3;
    this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce(){
    if (this.x - this.size/2 < 0|| this.x + this.size/2 > width){
      this.vx = -this.vx;
    }

    if (this.y  - this.size/2 < 0 || this.y + this.size/2 > height){
      this.vy = -this.vy;
    }
  }

  display(){
    push();
noStroke();
fill(this.fill.r, this.fill.g, this.fill.b);
ellipse(this.x,this.y,this.size)
    pop();
  }
}
