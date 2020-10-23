/**************************************************
Exercise 04: Age of aquariums

Here is a description of this template p5 project.
**************************************************/

"use strict";


let pond = {
  clowns: [],
  numClowns: 7,

};


// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(700,700);

  for (let j = 0; j < pond.numClowns; j++) {
  let x = random(0,width);
  let y = random(0,height);
  let size = random(80,120);

  let clown = new Clown(x,y,size);
  pond.clowns.push(clown)
}
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(155, 223, 250);
  backgroundField();




for (let j = 0; j < pond.clowns.length; j++) {
  let clown = pond.clowns[j];
clown.display(pond[j]);
clown.move(pond[j]);
}


}

function backgroundField(){
  push();
  fill(255, 237, 212);
    rectMode(CENTER);
    rect(width/2, height/2, width, height-270);
  pop();
}
