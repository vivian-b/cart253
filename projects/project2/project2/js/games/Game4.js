// Game description:
// Avoid the bugs and reach for the flower

let herd = {
  bug: [],
  numBug: 5,
};

class Game4 {
  constructor() {

    this.bug_x = 600;
    this.bug_y = 600;
    this.bugSize = 20;

    this.flowerSize = 50;
    this.flowerImgSize = 100
    this.flower_x = 375;
    this.flower_y = 375;

    this.min = 200;
    this.max = 500;

  }

  bugSpawn() {
    for (let j = 0; j < herd.numBug; j++) {
      herd.numBug = 5;
      let x = random(this.min, this.max);
      let y = random(this.min, this.max);
      let size = this.bugSize;

      let bugOOP = new Bug(x, y, size);

      herd.bug.push(bugOOP)

    }
  }


  bugSetUp() {
    for (let j = 0; j < herd.bug.length; j++) {
      let bugOOP = herd.bug[j];

      if (herd.bug.length = herd.numBug) {
        herd.bug.length = herd.numBug
      }
      bugOOP.display(herd[j]);
      bugOOP.move(herd[j]);

    }
  }

  bugCheck() {

    let i;
    for (i = 0; i < herd.bug.length; i++) {
      let currHerd = herd.bug[i];
      let d = dist(currHerd.x, currHerd.y, user.x, user.y);
      if ((d < currHerd.size / 2 + user.size / 10) && (state === "room5A")) {
        score -= 1;
        user.x = exitRightX;
        user.y = exitRightY;
      }

      if ((d < currHerd.size / 2 + user.size / 10) && (state === "room4B")) {
        score -= 1;
        user.x = exitLeftX;
        user.y = exitLeftY;
      }

      if ((d < currHerd.size / 2 + user.size / 10) && (state === "room5C")) {
        score -= 1;
        user.x = exitLeftX;
        user.y = exitLeftY;
      }

    }
  }

  flower() {
    let d = dist(user.x, user.y, this.flower_x, this.flower_y);
    if (d < this.flowerSize / 2 + user.size / 2) {
      activatedG4 = false;
    }

  }

  flowerDisplay() {
    image(img_flower, this.flower_x, this.flower_y, this.flowerImgSize, this.flowerImgSize);

  }

}
