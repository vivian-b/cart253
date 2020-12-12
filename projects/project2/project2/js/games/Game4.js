// Game description:
// Avoid the bugs and reach for the flower

// Array of Bugs
let herd = {
  bug: [],
  numBug: 5,
};

class Game4 {
  constructor() {

    // Flower Image + Hitbox size
    this.flowerSize = 50;
    this.flowerImgSize = 100

    // Flower Position
    this.flowerX = 375;
    this.flowerY = 375;

    // Bug Position
    this.bugX = 600;
    this.bugY = 600;

    // Bug Size
    this.bugSize = 20;

    // Constraint for bug movements
    this.min = 200;
    this.max = 500;

  }

  // Create Group of bugs
  bugSpawn() {
    for (let j = 0; j < herd.numBug; j++) {
      herd.numBug = herd.numBug;

      // different SpawnPoint
      let x = random(this.min, this.max);
      let y = random(this.min, this.max);

      let size = this.bugSize;

      let bugOOP = new Bug(x, y, size);

      herd.bug.push(bugOOP)
    }
  }

  // / Display group of bugs
  bugSetUp() {

    for (let j = 0; j < herd.bug.length; j++) {
      let bugOOP = herd.bug[j];

      if (herd.bug.length = herd.numBug) {
        herd.bug.length = herd.numBug
      }

      push();
      bugOOP.display(herd[j]);
      bugOOP.move(herd[j]);

      pop();
    }
  }

  // Contact between any Bugs + User
  // + User reposition depending on maze layout
  bugCheck() {

    for (let i = 0; i < herd.bug.length; i++) {
      let currHerd = herd.bug[i];

      let d = dist(currHerd.x, currHerd.y, user.x, user.y); //touchpoint

      // If User is in Maze Layout [A] = Entrance from left = Repositon on Left
      if ((d < currHerd.size / 2 + user.size / 20) && (state === "room5A")) {
        score -= 1;
        user.x = exitRightX;
        user.y = exitRightY;
        squeakSFX.play();

      }

      // If User is in Maze Layout [B] = Entrance from the right = Repositon on Right
      if ((d < currHerd.size / 2 + user.size / 20) && (state === "room4B")) {
        score -= 1;
        user.x = exitLeftX;
        user.y = exitLeftY;
        squeakSFX.play();

      }

      // If User is in Maze Layout [C] = Entrance from the right = Repositon on Right
      if ((d < currHerd.size / 2 + user.size / 20) && (state === "room5C")) {
        score -= 1;
        user.x = exitLeftX;
        user.y = exitLeftY;
        squeakSFX.play();

      }

    }
  }

  // Contact between Flower + User
  flowerCheck() {
    let d = dist(user.x, user.y, this.flowerX, this.flowerY);
    if (d < this.flowerSize / 2 + user.size / 2) {
      activatedG4 = false;
      nomSFX.play();
    }
  }

  //Flower display
  flowerDisplay() {
    image(img_flower, this.flowerX, this.flowerY, this.flowerImgSize, this.flowerImgSize);
  }

}
