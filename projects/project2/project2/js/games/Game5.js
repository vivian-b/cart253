//game description:
// Reach the switch to open the door and avoid the objects

let aphids = [];

let numAphids = 20;
let counter;
let eaten = true;
class Game5 {
  constructor() {


  this.aphid_x = 600;
  this.aphid_y = 600;
  this.aphid_size = 20;

  }

  createAphids(x, y) {
    for (let i = 0; i < numAphids; i++) {
    herd.numBug = 5;

  }
}
  checkAphids(aphid) {
    if (!eaten) {
      let d = dist(user.x, user.y, this.aphid.x, this.aphid.y);
      if (d < user.size / 2 + this.aphid.size /2) {
        this.aphid.eaten = true;
        counter += -1;
      }
    }
  }

 all() {

    for (let i = 0; i < aphids.length; i++) {
        push();
          this.checkAphids(aphids[i]);
          this.displayAphids(aphids[i]);
        pop();
      }


    //console.log(counter);

    this.checkCounter();
  }

gameSetup(){
  counter = numAphids;
  for (let i = 0; i < numAphids; i++) {
      aphids[i] = this.createAphids(random(0, width), random(0, height));
    }
  }


   displayAphids(aphid) {
    if (!eaten) {
      push();
      fill(0, 255, 0);
      noStroke();
      ellipse(this.aphid.x, this.aphid.y, random(13, 15), random(15, 18));
      pop();
    }
  }

aphidSpawn() {
  let aphid = this.createAphids(random(0, width), random(0, height));
  aphids.push(aphid);
  counter += 1;
}

 checkCounter() {
  if (counter <= 0) {
    state = `greenthumb`;
  }
}

}
