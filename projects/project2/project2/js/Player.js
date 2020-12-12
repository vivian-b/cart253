// User blob avatar
let player_still;
let player_moveLeft;
let player_moveRight;
let player_moveUp;
let player_moveDown;

class Player {
  constructor(x, y) {

    this.size = 50;
    this.imgSize = 100;

    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 8;
  }

  // Player direction movements
  move() {

    // player movements
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // border constraints
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }


  // Player keyboard movements
  handleInput() {

    // Left Movement
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed * 1.5;

      // Right Movement
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed * 1.5;

    } else {
      this.vx = 0;
    }

    // Up Movement
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed * 1.5;

      // Down Movement
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed * 1.5;

      // Iddle
    } else {
      this.vy = 0;
    }
  }

  // Player Images
  handleDisplay() {

    // Left Movement
    if (keyIsDown(LEFT_ARROW)) {
      image(player_moveLeft, user.x, user.y, this.imgSize, this.imgSize);

      // Right Movement
    } else if (keyIsDown(RIGHT_ARROW)) {
      image(player_moveRight, user.x, user.y, this.imgSize, this.imgSize);

      // Up Movement
    } else if (keyIsDown(UP_ARROW)) {
      image(player_moveUp, user.x, user.y, this.imgSize, this.imgSize);

      // Down Movement
    } else if (keyIsDown(DOWN_ARROW)) {
      image(player_moveDown, user.x, user.y, this.imgSize, this.imgSize);

      // Iddle Movement
    } else {
      image(player_still, user.x, user.y, this.imgSize, this.imgSize);
    }
  }

}
