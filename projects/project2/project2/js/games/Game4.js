//game description:
// Reach the switch to open the door and avoid the objects

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
    this.flower_x = 375;
    this.flower_y = 375;

  }

  bugSpawn(){
    for (let j = 0; j < herd.numBug; j++) {
    herd.numBug = 5;
    let x =   random(200, 500);
    let y =   random(200, 500);
    let size = this.bugSize;

    let bugOOP = new Bug(x,y,size);

    herd.bug.push(bugOOP)

    }

  }


  bugSetUp(){
    for (let j = 0; j < herd.bug.length; j++) {
    let bugOOP = herd.bug[j];

  if (herd.bug.length = 5){
    herd.bug.length = 5
  }
      bugOOP.display(herd[j]);
      bugOOP.move(herd[j]);

  }
  }

  bugCheck() {

    let i;
      for(i = 0; i < herd.bug.length ; i++){
         let currHerd = herd.bug[i];
        let d = dist(currHerd.x, currHerd.y, user.x, user.y);
         if (d < currHerd.size / 6 + user.size / 4) {
           score -= 1;
           user.x = exitTopX
           user.y = exitTopY
       }
    }
  }

  flower() {

    fill(0, 100, 100);
    ellipse(this.flower_x, this.flower_y, this.flowerSize);

    let d = dist(user.x, user.y, this.flower_x, this.flower_y);
    if (d < this.flowerSize/2  + user.size/2 ) {
      activatedG4 = false;
    }

  }

  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
