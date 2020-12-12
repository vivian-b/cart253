//game description:
// Reach the switch to open the door and avoid the objects

let carry= false;

class Game2 {
  constructor() {

    this.baby_x = 50;
    this.baby_y = 50;
    this.babySize = 40;
    this.babySpeed = 10;

    this.holeSize = 20;
    this.hole_x = 600;
    this.hole_y = 600;

  }


  babyCheck() {

    let d = dist(user.x, user.y, this.baby_x, this.baby_y);
    if (d < this.babySize / 2 + user.size / 2) {
      carry = true;
      this.baby_x = user.x;
      this.baby_y = user.y - 20;
    }


    fill(100, 100, 0);
    ellipse(this.baby_x, this.baby_y, this.babySize);
  }



  hole() {

    fill(0, 100, 100);
    ellipse(this.hole_x, this.hole_y, this.holeSize);

    let d = dist(user.x, user.y, this.hole_x, this.hole_y);
    if ((d < this.holeSize / 2 + user.size / 2) && (carry)) {
            activatedG2 = false;
            carry = false;

    }

  }

  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
