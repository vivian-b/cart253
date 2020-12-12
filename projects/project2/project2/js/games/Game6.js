//game description:
// Reach the switch to open the door and avoid the objects

let swarm = {
  bee: [],
  numBee: 20,
  caught: false,
};


class Game6 {
  constructor() {

    this.honeySize = 50;
    this.honey_x = 650;
    this.honey_y = 375;
  }

  beeSpawn(){

    for (let j = 0; j < swarm.numBee; j++) {
    swarm.numBee = 20;
    let x =   0;
    let y =   0;
    let size = this.beeSize;

    let beeOOP = new Bees(x,y,size);

    swarm.bee.push(beeOOP)

    }
  }

  beeSetUp(){

    for (let j = 0; j < swarm.bee.length; j++) {
    let beeOOP = swarm.bee[j];
  //
  if (swarm.bee.length = swarm.numBee){
    swarm.bee.length = swarm.numBee;

  push();
      beeOOP.moveBees(swarm[j]);
      this.beeCheck(swarm[j])
      beeOOP.display(swarm[j]);

  pop();
}
  }
  }

  beeCheck() {

    let i;
      for(i = 0; i < swarm.bee.length ; i++){
         let currHerd = swarm.bee[i];
        let d = dist(currHerd.x, currHerd.y, user.x, user.y);
         if (d < currHerd.size/2 + user.size / 2) {
      score -= 1;
user.x = user.x+40

  }

}}

honey() {

  fill(0, 100, 100);
  ellipse(this.honey_x, this.honey_y, this.honeySize);

  let d = dist(user.x, user.y, this.honey_x, this.honey_y);
  if (d < this.honeySize/2  + user.size/2 ) {
    score += 1;
    activatedG6 = false;
  }

}

  noLives() {
    if (score <= 0) {
      state = "defeat";

    }
  }

}
