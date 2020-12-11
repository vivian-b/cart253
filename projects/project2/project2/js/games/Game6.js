
let buzz = {
   flies: [],
   numFlies :10,
}

let  caught= false;


let  amount;  //determines the state

class Game6 {
  constructor() {}

 setup() {

   amount = buzz.numFlies;


  for (let i = 0; i < buzz.numFlies; i++) {
    // buzz.flies[i] = flyOOP.createFlies(random(0, width), random(0, height));
    buzz.numFlies = 5;
    let x =   random(200, 250);
    let y =   random(200, 250);
    let size = flyOOP.size;

    let fliesOOP = new Flies(29,29);

    buzz.flies.push(flyOOP)

  }
}


  draw() {

  for (let i = 0; i < buzz.flies.length; i++) {

    if (buzz.flies.length = 5){
      buzz.flies.length = 5
    }
      push();
      this.checkFlies(buzz.flies[i]);
      flyOOP.moveFlies(buzz.flies[i]);
      this.displayFlies(buzz.flies[i]);
      pop();
    }

    this.checkAmount(); //to see if too many flies or if no flies
}


//flower animation for greenthumb state
// code adapted from https://editor.p5js.org/hosken/sketches/yFz4VpSPr


  checkFlies(fly) {
  if (!caught) {
    for(let i = 0; i < buzz.flies.length ; i++){
       let currBuzz = buzz.flies[i];
    let d = dist(user.x, user.y, currBuzz.x, currBuzz.y);
    if (d < user.size / 2 + currBuzz.size/2) {
      caught = true;
       amount += -1;

       console.log(amount);

    }
  }
}
}


  displayFlies(fly) {

  if (!caught) {

    for(let i = 0; i < buzz.flies.length ; i++){
       let currBuzz = buzz.flies[i];
    push();
    fill(0, 255, 0);
    noStroke();
    ellipse(currBuzz.x, currBuzz.y, random(13, 15), random(15, 18));
    pop();
  }}
}


  checkAmount() {
  if ( amount <= 0) {
    activatedG6 = false;
  }
}
}
