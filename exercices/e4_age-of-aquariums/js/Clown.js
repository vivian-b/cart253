class Clown {

  constructor(x, y, size){

    //createclown
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 4;
        };

    //displayclown(clown)
    //display the provided clown on the canvas
     display(clown){
      push();
      noStroke();

      //head
      fill(250,250,250);
      ellipse(this.x, this.y, 4*(this.size/5), this.size);

      fill(0,0,0);
      ellipse(this.x, this.y+10, 2*(this.size/3));

      fill(250,250,250);
      ellipse(this.x, this.y+3, 2*(this.size/3));

      //pupil
      fill(0,0,0);
      ellipse(this.x+this.size/5, this.y-5, this.size/4, this.size/2);
      ellipse(this.x-this.size/5, this.y-5, this.size/4, this.size/2);

      //pupil
      fill(245, 147, 66);
      ellipse(this.x+this.size/5, this.y-5, this.size/6, this.size/6);
      ellipse(this.x-this.size/5, this.y-5, this.size/6, this.size/6);

      //pupil
      fill(0, 0, 0);
      ellipse(this.x+this.size/5, this.y-5, this.size/8, this.size/8);
      ellipse(this.x-this.size/5, this.y-5, this.size/8, this.size/8);

      fill(184, 26, 63);
      ellipse(this.x, this.y+5, 2*(this.size/8));

      pop();
    }

    //moveclown(clown)
     move(clown){

      //choose whether to change direction
      let change = random(0,1);
      if (change < 0.05){
        this.vx = random(-this.speed, this.speed)
        this.vy = random(-this.speed, this.speed)
      }

      // move the clown
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      //constrain
      this.x = constrain (this.x, 0, width);
      this.y = constrain(this.y, 150, height-150);

    }
  }
