
class Bug {

  constructor(x, y, size){

          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 4;

          this.fill= {
            r: 250,
            g: 250,
            b: 250,
          }

          }





     display( ){
      push();
      noStroke();

      fill(this.fill.r, this.fill.g, this.fill.b);
      ellipse(this.x, this.y, this.size, this.size);

      pop();
    }

     move( ){
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
