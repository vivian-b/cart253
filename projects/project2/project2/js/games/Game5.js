//game description:
// Reach the switch to open the door and avoid the objects


class Game5 {
  constructor() {


  this.fairy_x = 700;
  this.fairy_y = 350;
  this.fairy_vx = 0;
  this.fairy_vy = 0;
  this.fairy_speed = 20;
  this.fairy_size = 20;
  }


  checkFairy() {

      let d = dist(user.x, user.y, this.fairy_x, this.fairy_y);
      if (d < user.size / 2 + this.fairy_size /2) {
        activatedG5 = false;
    }
  }



   moveFairy() {

     let change = random(0, 1);
     if (change < .1) {

       this.fairy_vx = random(-this.fairy_speed ,this.fairy_speed);
       this.fairy_vy = random(-this.fairy_speed,this.fairy_speed);
     }

     this.fairy_x +=  this.fairy_vx;
     this.fairy_y += this.fairy_vy;


  this.fairy_x = constrain(this.fairy_x, 0, width);
  this.fairy_y = constrain(this.fairy_y, 0, height);
}


   displayFairy() {
      push();
      fill(82, 255, 232);
      noStroke();
      ellipse(this.fairy_x, this.fairy_y, this.fairy_size);
      pop();
  }



}
