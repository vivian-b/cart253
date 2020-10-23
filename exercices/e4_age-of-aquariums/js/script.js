/**************************************************
Exercise 04: Age of aquariums

Here is a description of this template p5 project.
**************************************************/

"use strict";

let aquarium = {
  foods: [],
  numFoods: 9,
};

let pond = {
  cats: [],
  numCats: 5,

};


// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(700,700);

for (let i = 0; i < aquarium.numFoods; i++) {

let x = random(0,width);
let y = random(0,height);
let size = random(25,30);


let food = new Food(x,y,size);
aquarium.foods.push(food)

  }

  for (let j = 0; j < pond.numCats; j++) {
  let x = random(0,width);
  let y = random(0,height);
  let size = random(70,100);

  let cat = new Cat(x,y,size);
  pond.cats.push(cat)
}
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(155, 223, 250);


  for (let i = 0; i < aquarium.foods.length; i++) {
    let food = aquarium.foods[i];
  food.display(aquarium[i]);
  food.move(aquarium[i]);

}

for (let j = 0; j < pond.cats.length; j++) {
  let cat = pond.cats[j];
cat.display(pond[j]);
cat.move(pond[j]);
}
}
