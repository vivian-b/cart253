//game description:
// Catch the fly

let fly;

class Game6 {
  constructor() {

  this.fly_x = 50;
  this.fly_y = 50;
  this.fly_vx = 50;
  this.fly_vy = 50;
  this.fly_speed = 50;
  this.fly_size = 20;
  }

  checkFly() {
      let d = dist(user.x, user.y, this.fly_x, this.fly_x);
      if (d < user.size / 2 + this.fly_size /2) {
        activatedG6 = false;
    }
  }

   moveFly() {
     let change = random(0, 2.5);
     if (change < .05) {
       this.fly_vx = random(-this.fly_speed, this.fly_speed);
       this.fly_vy = random(-this.fly_speed, this.fly_speed);
     }
  this.fly_x = this.fly_x + this.fly_vx;
  this.fly_y = this.fly_y + this.fly_vy;

  this.fly_x = constrain(this.fly_x, 0, width);
  this.fly_y = constrain(this.fly_y, 0, height);
}


   displayFly() {
      push();
      fill(0, 255, 0);
      noStroke();
      ellipse(this.fly_x, this.fly_y, this.fly_size);
      pop();

  }



}
