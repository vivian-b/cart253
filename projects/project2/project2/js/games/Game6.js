//game description:
// Reach the switch to open the door and avoid the objects

// Array of Bees
let swarm = {
  bee: [],
  numBee: 20,
  caught: false,
};

class Game6 {
  constructor() {

    // Flower Size (Img + Hitbox)
    this.flowerImgSize = 100;
    this.flowerSize = 50;

    // Flower position
    this.flowerX = 375;
    this.flowerY = 700;

    // Bees Position Restraint
    this.min = 550;
    this.max = 700;

    //  User's reposition when hit
    this.repositionX = 375;
    this.repositionY = 300;
  }

  // Create Swarm of bees
  beeSpawn() {
    for (let j = 0; j < swarm.numBee; j++) {
      swarm.numBee = swarm.numBee;

      // same SpawnPoint
      let x = 0;
      let y = 0;

      let size = this.beeSize;

      let beeOOP = new Bees(x, y, size);

      swarm.bee.push(beeOOP)
    }
  }

  // / Display Swarm of bees
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

  // Contact between any Bee + User
  beeCheck() {

    // target any bee in the array
    for (let i = 0; i < swarm.bee.length; i++) {
      let currHerd = swarm.bee[i];
      let d = dist(currHerd.x, currHerd.y, user.x, user.y);
      if (d < currHerd.size / 2 + user.size / 2) {

        score -= 1;
        user.x = this.repositionX;
        user.y = this.repositionY;
        squeakSFX.play();
      }
    }
  }

  // Contact between Flower + User
  flowerCheck() {
  let d = dist(user.x, user.y, this.flowerX, this.flowerY);
  if (d < this.flowerSize / 2 + user.size / 2) {

    activatedG6 = false;
    nomSFX.play();
  }
}

// Flower Display
flowerDisplay() {
  image(img_flower, this.flowerX, this.flowerY, this.flowerImgSize, this.flowerImgSize);

}

}
