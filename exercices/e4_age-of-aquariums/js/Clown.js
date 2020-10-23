class Clown {

  constructor(x, y, size){

    //createclown
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 9;
        };

    //displayclown(clown)
    //display the provided clown on the canvas

     display(clown){
      push();
      noStroke();

      //head
      fill(250,250,250);
      ellipse(this.x, this.y, 4*(this.size/5), this.size);

      //mouth
      fill(0,0,0);
      ellipse(this.x, this.y+10, 2*(this.size/3));

      //mask
      fill(250,250,250);
      ellipse(this.x, this.y+1, 2*(this.size/3));

      //makeup
      fill(0,70,0);
      ellipse(this.x+this.size/5, this.y-5, this.size/4, this.size/2);
      ellipse(this.x-this.size/5, this.y-5, this.size/4, this.size/2);

      //eye
      fill(245, 147, 66);
      ellipse(this.x+this.size/5, this.y-5, this.size/6, this.size/6);
      ellipse(this.x-this.size/5, this.y-5, this.size/6, this.size/6);

      //pupil
      fill(0, 0, 0);
      ellipse(this.x+this.size/5, this.y-5, this.size/8, this.size/8);
      ellipse(this.x-this.size/5, this.y-5, this.size/8, this.size/8);

      //nose
      fill(184, 26, 63);
      ellipse(this.x, this.y+5, 2*(this.size/8));

      pop();
    }

    //moveclown(clown)
     move(clown){
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
      this.x = constrain (this.x, 0, width);
      this.y = constrain(this.y, 160, height-160);

    }

   checkForClown(clown){
    let d = dist(this.x, this.y, user.x, user.y);
     if (d < this.size / 2 + user.size / 2) {
       state === `gameover`
       }
     }

}
