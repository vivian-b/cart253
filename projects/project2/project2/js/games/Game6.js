//game description:
// Reach the switch to open the door and avoid the objects

let swarm = {
  bee: [],
  numBee: 20,
  caught: false,
};

class Game6 {
  constructor() {

    this.flowerImgSize = 100;
    this.flowerSize = 50;
    this.flower_x = 375;
    this.flower_y = 700;

    this.min = 550;
    this.max = 700;

    this.repositionX = 375;
    this.repositionY = 300;
  }

  beeSpawn() {

    for (let j = 0; j < swarm.numBee; j++) {
      swarm.numBee = 20;
      let x =   0;
      let y =   0;
      let size = this.beeSize;

      let beeOOP = new Bees(x, y, size);

      swarm.bee.push(beeOOP)

    }
  }

  beeSetUp() {

    for (let j = 0; j < swarm.bee.length; j++) {
      let beeOOP = swarm.bee[j];
      if (swarm.bee.length = swarm.numBee) {
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
    for (i = 0; i < swarm.bee.length; i++) {
      let currHerd = swarm.bee[i];
      let d = dist(currHerd.x, currHerd.y, user.x, user.y);
      if (d < currHerd.size / 2 + user.size / 2) {
        score -= 1;
        user.x = this.repositionX
        user.y = this.repositionY

      }
    }
  }

  flower() {

    let d = dist(user.x, user.y, this.flower_x, this.flower_y);
    if (d < this.flowerSize / 2 + user.size / 2) {
      activatedG6 = false;
    }

  }

  flowerDisplay() {
    image(img_flower, this.flower_x, this.flower_y, this.flowerImgSize, this.flowerImgSize);

  }




}
