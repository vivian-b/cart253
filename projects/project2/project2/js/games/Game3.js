//game description:
// Reach the switch to open the door and avoid the objects

class Game3 {
  constructor(x,y,size) {

    this.x = 375;
    this.y = 375;
    this.size = 20;

  }

  lightPosition() {
    this.x =   this.x
    this.y =   this.y

    fill(240, 197, 67);
    ellipse(this.x, this.y, this.size);
  }

  lightCheck() {
    let d = dist(user.x, user.y, this.x, this.y);
    if (d < this.size / 2 + user.size / 2) {
this.size += 5;
    }
  }

lightClear(){
  if (this.size > 550){
    activatedG3 = false;
}
}

}
