
class Flies {

  constructor(x, y, size){

    this.x= 20;
    this.y= 20;
    this.size= 30;
    this.vx= .1;
    this.vy= .25;
    this.speed= .25;
        }
        // createFlies(x, y) {
        // let fly = {
        //   x: x,
        //   y: y,
        //   size: 30,
        //   vx: .1,
        //   vy: .25,
        //   speed: .25,
        // }
        // return fly;
        // }

      moveFlies() {
      let change = random(0, 1);
      if (change < .05) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }

      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      this.x = constrain(this.x, 0, width/3*2);
      this.y = constrain(this.y, 100, height);
    }

}
