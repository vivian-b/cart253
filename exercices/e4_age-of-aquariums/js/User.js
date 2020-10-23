class User {

  constructor(x, y, size){

    //createclown
          this.x = x;
          this.y = y;
          this.size = size;
          this.vx = 0;
          this.vy = 2;
          this.speed = 4;
        };

        display(user){
          push();
        fill(0,0,0);
        ellipse(this.x,this.y, this.width, this.height);
        pop();

        this.x = constrain (this.x, 0, width);
        this.y = constrain(this.y, 0, height);
        }

        move(){

          //user movements
          this.x = this.x + this.vx;
          this.y = this.y + this.vy;
        }



       handleInput(){

        if (keyIsDown(LEFT_ARROW)) {
          this.vx = -this.speed*2;
        }

        else if (keyIsDown(RIGHT_ARROW)){
          this.vx = this.speed*2;

        }

        else {
          this.vx = 0;

        }

        if (keyIsDown(UP_ARROW)) {
          this.vy = -this.speed;
          }

        else if (keyIsDown(DOWN_ARROW)){
          this.vy = this.speed;
          }

        else {
          this.vy = 0;
          }
        }
