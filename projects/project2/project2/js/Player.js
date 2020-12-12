
let player_still;
let player_moveLeft;
let player_moveRight;
let player_moveUp;
let player_moveDown;

class Player {

  constructor(x, y) {
    this.size = 50;

    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 8;
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

  handleInput() {

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed * 1.5;

    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed * 1.5;


    } else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed * 1.5;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed * 1.5;

    } else {
      this.vy = 0;
    }

  }

  handleDisplay(){
    if (keyIsDown(LEFT_ARROW)) {
      image(player_moveLeft, user.x, user.y,100,100);

    } else if (keyIsDown(RIGHT_ARROW)) {
      image(player_moveRight, user.x, user.y,100,100);
    }

    else if (keyIsDown(UP_ARROW)) {
      image(player_moveUp, user.x, user.y,100,100);

    } else if (keyIsDown(DOWN_ARROW)) {
      image(player_moveDown, user.x, user.y,100,100);
    }
    else {
      image(player_still, user.x, user.y,100,100);
    }
  }

}
