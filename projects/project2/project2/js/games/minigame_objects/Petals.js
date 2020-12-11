
class Petals {

  constructor(x, y, size){

    //createclown
          this.x = 20;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 4;
        }
      ;

    //displayclown(clown)
    //display the provided clown on the canvas

     display( ){
      push();
      noStroke();

      //head
      fill(250,250,250);
      ellipse(this.x, this.y, this.size, this.size);

      pop();
    }


}
