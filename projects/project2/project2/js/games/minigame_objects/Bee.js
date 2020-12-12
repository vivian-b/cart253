
class Bees {

  constructor(x, y, size){

    this.x= 450;
    this.y= 370;
    this.size= 10;
    this.vx= 1;
    this.vy= 25;
    this.speed= 10;
    this.fill={
      r:250,
      g:220,
      b:47
    }
        }

//Bees moving around in a restricted space
      moveBees() {

        //jittering
      let change = random(0, 1);
      if (change < .05) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }

      //flying back when reaching edge (horizontal)
      if ((this.x <= 450) || (this.x >=650)) {
        this.vx = -this.vx
      }

      //flying back when reaching edge (vertical)
      if ((this.y <= 0) || (this.y >=height-user.size)) {
        this.vy = -this.vy
      }

      //bee movement
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }


    display( ){
     noStroke();
     fill(this.fill.r,this.fill.g,this.fill.b);
     ellipse(this.x, this.y, this.size, this.size);

   }

}
