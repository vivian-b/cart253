//game description:
// Reach the switch to open the door and avoid the objects
let garden = [];
let numFlowers = 5;


class Game5 {
  constructor() {

    this.flower_x = 600;
    this.flower_y = 600;
    this.flowerSize = 20;

  }

    flowerSpawn(){
      for (let j = 0; j < numFlowers; j++) {
garden[j] = this.createFlowers(random(0, width), random(0, height));
      garden.push(flowerOOP)

      }
    }

 createFlowers(x, y) {
  let flower = {
    x: x,
    y: y,
    size: 50,
  };
  return flower;
}


    flowerSetUp(){
      for (let i = 0; i < garden.length; i++) {
        flowerOOP.display(garden[i]);

    }
    }

    flowerCheck() {


        for(let i = 0; i < garden.length ; i++){
          let currHerd = numFlowers[i];
          let d = dist(currHerd.x, currHerd.y, user.x, user.y);
           if (d < currHerd.size / 6 + user.size / 4) {
             score -= 1;
             user.x = exitTopX
             user.y = exitTopY
         }
      }
    }


  noLives() {
    if (score <= 0) {
      state = "defeat";
    }
  }

}
