//game description:
// Reach the switch to open the door and avoid the objects


class Game5 {
  constructor() {


  this.petal_x = 50;
  this.petal_y = 50;
  this.petal_vx = 20;
  this.petal_vy = 20;
  this.petal_speed = 10;
  this.petal_size = 20;
  }


  checkPetals() {

      let d = dist(user.x, user.y, this.petal_x, this.petal_y);
      if (d < user.size / 2 + this.petal_size /2) {
        // activatedG5 = false;
    }
  }


// gameSetup(){
//   for (let i = 0; i < numPetals; i++) {
//       petals[i] = this.createPetals(random(0, 50), random(0, 50));
//     }
//   }

   movePetals() {
     let change = random(0, 10);
     if (change < .05) {
       this.petal_vx = random(2,10);
       this.petal_vy = random(2,10);
     }
  this.petal_x =   this.petal_x + random(-this.petal_speed, this.petal_speed);
  this.petal_y =   this.petal_y + random(-this.petal_speed, this.petal_speed);

  this.petal_x = constrain(this.petal_x, 0, width);
  this.petal_y = constrain(this.petal_y, 0, height);
}


   displayPetals() {
      push();
      fill(0, 255, 0);
      noStroke();
      ellipse(this.petal_x, this.petal_y, this.petal_size);
      pop();
  }



}
