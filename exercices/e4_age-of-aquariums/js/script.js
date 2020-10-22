/**************************************************
Exercise 04: Age of aquariums

Here is a description of this template p5 project.
**************************************************/

"use strict";

let aquarium = {
  fishes: [],
  numFishes: 10,

};


// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(700,700);

for (let i = 0; i < aquarium.numFishes; i++) {

let x = random(0,width);
let y = random(0,height);
let size = random(20,40);

let fish = new Fish(x,y,size);
aquarium.fishes.push(fish)

  }
}



// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  for (let i = 0; i < aquarium.fishes.length; i++) {
    let fish = aquarium.fishes[i];
  fish.display(aquarium[i]);
  fish.move(aquarium[i]);

}
}
