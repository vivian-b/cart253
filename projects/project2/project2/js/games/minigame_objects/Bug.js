
class Bug {

  constructor(x, y, size){

    //createclown
          this.x = x;
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

    //moveclown(clown)
     move( ){
      //choose whether to change direction
      let change = random(0,2);
      if (change < 0.8){
        this.vx = random(-this.speed, this.speed)
        this.vy = random(-this.speed, this.speed)

      }

      // move the clown

      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      //constrain
      this.x = constrain (this.x, 250, 600);
      this.y = constrain(this.y, 250, 600);

    }


}