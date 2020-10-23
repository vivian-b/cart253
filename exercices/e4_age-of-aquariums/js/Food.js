class Food {

  constructor(x, y, size){

    //createfood
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 6;
        };

    //displayfood(food)
    //display the provided food on the canvas
     display(food){
      push();
      fill(140,100,100);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
    }

    //movefood(food)
     move(food){

      //choose whether to change direction
      let change = random(0,1);
      if (change < 0.05){
        this.vx = random(-this.speed, this.speed)
        this.vy = random(-this.speed, this.speed)
      }

      // move the food
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      //constrain
      this.x = constrain (this.x, 0, width);
      this.y = constrain(this.y, 0, height);

    }
  }
