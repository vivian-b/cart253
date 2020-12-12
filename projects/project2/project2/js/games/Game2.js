//Game description:
// Bring the baby to the hole

let carry= false;

class Game2 {
  constructor() {

    this.baby_x = 50;
    this.baby_y = 780;
    this.babySize = 40;
    this.babyW = 85;
    this.babyH = 80

    this.holeSize = 100;
    this.hole_x = 750;
    this.hole_y = 0;
    this.fill={
      r: 240,
      g: 197,
      b: 67,
    }
  }


    hole() {

      let d = dist(user.x, user.y, this.hole_x, this.hole_y);
      if ((d < this.holeSize / 2 + user.size / 2) && (carry)) {
              activatedG2 = false;
              carry = false;
      }
    }

    holeDisplay(){
      fill(this.fill.r, this.fill.g, this.fill.b);
      ellipse(this.hole_x, this.hole_y, this.holeSize);
    }

  babyCheck() {

    let d = dist(user.x, user.y, this.baby_x, this.baby_y);
    if (d < this.babySize / 2 + user.size / 2) {
      carry = true;
      this.baby_x = user.x;
      this.baby_y = user.y;
    }

  }

  babyDisplay(){
        image(player_still, this.baby_x, this.baby_y-33,this.babyW,this.babyH);
  }

}
