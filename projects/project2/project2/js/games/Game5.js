//game description:
// Reach the switch to open the door and avoid the objects

let petals = [];
let petal  ;
let numPetals = 20;
let counter = 20;
let eaten = false;
class Game5 {
  constructor() {


  this.petal_x = 50;
  this.petal_y = 50;
  this.petal_vx = 2;
  this.petal_vy = 2;
  this.petal_speed = 2;
  this.petal_size = 20;
this.petal_eaten = false;
  }

  createPetals(x, y) {
    for (let i = 0; i < numPetals; i++) {
    numPetals = 20;

  }
}

  checkPetals(petal) {
    if (!this.petal_eaten){
      let d = dist(user.x, user.y, this.petal_x, this.petal_y);
      if (d < user.size / 2 + this.petal_size /2) {
        this.petal_eaten = true;
        counter += -1;
        // console.log(counter);
    }}
  }

 all() {

    for (let i = 0; i < petals.length; i++) {
          this.checkPetals(petals[i]);
          this.displayPetals(petals[i]);
          this.movePetals(petals[i]);
      }

  }

gameSetup(){
  for (let i = 0; i < numPetals; i++) {
      petals[i] = this.createPetals(random(0, 50), random(0, 50));
    }
  }

   movePetals(petal) {
     let change = random(0, 4);
     if (change < .05) {
       this.petal_vx = random(-this.petal_speed, this.petal_speed);
       this.petal_vy = random(-this.petal_speed, this.petal_speed);
     }
  this.petal_x = this.petal_x + this.petal_vx;
  this.petal_y = this.petal_y + this.petal_vy;

  this.petal_x = constrain(this.petal_x, 0, width);
  this.petal_y = constrain(this.petal_y, 0, height);
}


   displayPetals(petal) {
    if (!this.petal_eaten) {
      push();
      fill(0, 255, 0);
      noStroke();
      ellipse(this.petal_x, this.petal_y, this.petal_size);
      pop();
    }
  }

 checkCounter() {
  if (counter <= 19) {
    activatedG5 = false;
  }
}



}
