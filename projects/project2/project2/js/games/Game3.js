//game description:
// Reach the switch to open the door and avoid the objects

class Game3 {
  constructor() {

    this.flower_x = 375;
    this.flower_y = 375;
    this.flowerSize = 100;
    this.flowerSpeed = 10;

  }

  flowerPosition() {
    this.flower_x =   this.flower_x
    this.flower_y =   this.flower_y

  }

  flowerCheck() {
    let d = dist(user.x, user.y, this.flower_x, this.flower_y);
    if (d < this.flowerSize / 2 + user.size / 2) {
this.flowerSize += 3;
    }
    fill(100, 100, 0);
    ellipse(this.flower_x, this.flower_y, this.flowerSize);
  }

flowerClear(){
  // if (this.flowerSize > 500){
  if (this.flowerSize > 110){
    activatedG3 = false;
}
}

}
