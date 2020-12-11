
class Bees {

  constructor(x, y, size){

    this.x= 200;
    this.y= 200;
    this.size= 10;
    this.vx= 1;
    this.vy= 25;
    this.speed= 25;
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



      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      this.x = constrain(this.x, user.size, width-user.size);
      this.y = constrain(this.y, user.size, height-user.size);
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
