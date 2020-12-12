
class Flower {

  constructor(x, y, size){

          this.x = 20;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 4;
        }
      ;


     display( ){
      push();
      noStroke();

// pistil
      fill(250,250,250);
      ellipse(this.x, this.y, this.size, this.size);

      pop();
    }


}
