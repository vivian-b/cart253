/**************************************************
Exercise 04: Age of aquariums

Here is a description of this template p5 project.
**************************************************/

"use strict";


let group = {
  clowns: [],
  numClowns: 15,

};

let user = new User(x,y,size)

let state = `title`
let exit = `exit`

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(700,700);

  for (let j = 0; j < group.numClowns; j++) {
  let x = random(0,width);
  let y = random(0,height);
  let size = random(80,120);

  let clown = new Clown(x,y,size);
  group.clowns.push(clown)
  }

}

// Description of draw() goes here.
function draw() {
  background(155, 223, 250);
  backgroundField();

  //Game States
    if (state === `title`) {
      titleScreen();
    }

   if (state ===`gameplay`) {
      gameplay();
    }

   if (state ===`gameclear`) {
      gameclear();
    }

   if (state ===`gameover`) {
      gameover();
    }
}
    function titleScreen(){
      push();
        fill(255, 237, 212);
        strokeWeight(7);
        stroke(250, 213, 180);
        rectMode(CENTER);
        rect(width/2, height/2, 560, 350, 20);
      pop();
    }

      function gameplay(){
          simulation();
          move();
          checkForExit();
          clown.checkForClown();
        }

        function gameover(){
        reset();
}

      function gameclear(){
      reset();

}

  //Game States transition
function mousePressed(){
  if (state ===`title`)
    state = `gameplay`
}

function simulation(){
  handleInput();
  setupSimulation();
  userDisplay();
}

function setupSimulation(){
  for (let j = 0; j < group.clowns.length; j++) {
    let clown = group.clowns[j];
  clown.display(group[j]);
  clown.move(group[j]);
  }
}


function backgroundField(){
  push();
  noStroke();
  fill(255, 237, 212);
    rectMode(CENTER);
    rect(width/2, height/2, width, height-220);
  pop();
}

function userDisplay(){
fill(0,0,0);
ellipse(user.x,user.y, user.width, user.height);

user.x = constrain (user.x, 0, width);
user.y = constrain(user.y, 0, height);
}

function handleInput(){

if (keyIsDown(LEFT_ARROW)) {
  user.vx = -user.speed*2;
}

else if (keyIsDown(RIGHT_ARROW)){
  user.vx = user.speed*2;

}

else {
  user.vx = 0;

}

if (keyIsDown(UP_ARROW)) {
  user.vy = -user.speed;
  }

else if (keyIsDown(DOWN_ARROW)){
  user.vy = user.speed;
  }

else {
  user.vy = 0;
  }
}

function move(){

  //user movements
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}


function checkForExit(){
if (user.y >= height-85){
  state = `gameclear`
}
}

function reset(){
      if (keyIsDown(32)) {
      if ((state == `gameclear`) || (state ==`gameover`)){
      state = `gameplay`;
      user.y = 0
    }
  }
}
