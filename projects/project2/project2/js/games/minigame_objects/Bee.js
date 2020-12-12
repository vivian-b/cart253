
class Bees {

  constructor(x, y, size){

    this.x= 450;
    this.y= 350;
    this.size= 10;
    this.vx= 1;
    this.vy= 25;
    this.speed= 10;
        }
        // createBees(x, y) {
        // let bee = {
        //   x: x,
        //   y: y,
        //   size: 30,
        //   vx: .1,
        //   vy: .25,
        //   speed: .25,
        // }
        // return bee;
        // }

      moveBees() {
      let change = random(0, 1);
      if (change < .05) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }

      if ((this.x <= 450) || (this.x >=600)) {
        this.vx = -this.vx
      }

      if ((this.y <= 0) || (this.y >=height)) {
        this.vy = -this.vy
      }


      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }

    display( ){
     push();
     noStroke();

     //head
     fill(250,250,250);
     ellipse(this.x, this.y, this.size, this.size);

     pop();
   }

}
