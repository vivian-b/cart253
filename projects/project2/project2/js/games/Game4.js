//game description:
// Reach the switch to open the door and avoid the objects

let clouds = {
  poison: [],
  numPoison: 5,
};

class Game4 {
  constructor() {

    this.poison_x = 600;
    this.poison_y = 600;
    this.poisonSize = 20;

    this.bugSize = 20;
    this.bug_x = 250;
    this.bug_y = 250;

  }

  poisonSpawn(){
    for (let j = 0; j < clouds.numPoison; j++) {
    clouds.numPoison = 5;
    let x =   random(200, 500);
    let y =   random(200, 500);
    let size = this.poisonSize;

    let poisonOOP = new Poison(x,y,size);

    clouds.poison.push(poisonOOP)

    }

  }


  poisonSetUp(){
    for (let j = 0; j < clouds.poison.length; j++) {
    let poisonOOP = clouds.poison[j];

  if (clouds.poison.length = 5){
    clouds.poison.length = 5
  }
      poisonOOP.display(clouds[j]);
      poisonOOP.grow(clouds[j]);

  }
  }

  poisonCheck() {

    let i;
      for(i = 0; i < clouds.poison.length ; i++){
         let currCloud = clouds.poison[i];
        let d = dist(currCloud.x, currCloud.y, user.x, user.y);
         if (d < currCloud.size / 2 + user.size / 2) {
           score -= 1;
           user.x = exitRightX
           user.y = exitRightY
       }
    }
  }

  bugs() {

    fill(0, 100, 100);
    ellipse(this.bug_x, this.bug_y, this.bugSize);

    let d = dist(user.x, user.y, this.bug_x, this.bug_y);
    if (d < this.bugSize / 2 + user.size / 2) {
      activatedG4 = false;
    }

  }

  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
