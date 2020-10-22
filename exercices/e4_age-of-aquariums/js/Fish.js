class Fish {

  constructor(x, y, size){

    //createfish
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 2;
        };

    //displayfish(fish)
    //display the provided fish on the canvas
     display(fish){
      push();
      fill(140,100,100);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
    }

    //moveFish(fish)
     move(fish){

      //choose whether to change direction
      let change = random(0,1);
      if (change < 0.05){
        this.vx = random(-this.speed, this.speed)
        this.vy = random(-this.speed, this.speed)
      }

      // move the fish
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      //constrain
      this.x = constrain (this.x, 0, width);
      this.y = constrain(this.y, 0, height);

    }
  }
