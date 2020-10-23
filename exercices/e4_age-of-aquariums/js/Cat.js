class Cat {

  constructor(x, y, size){

    //createcat
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 0;
          this.speed = 2;
        };

    //displaycat(cat)
    //display the provided cat on the canvas
     display(cat){
      push();
      fill(0,0,0);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
    }

    //movecat(cat)
     move(cat){

      //choose whether to change direction
      let change = random(0,1);
      if (change < 0.05){
        this.vx = random(-this.speed, this.speed)
        this.vy = random(-this.speed, this.speed)
      }

      // move the cat
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      //constrain
      this.x = constrain (this.x, 0, width);
      this.y = constrain(this.y, 0, height);

    }
  }
