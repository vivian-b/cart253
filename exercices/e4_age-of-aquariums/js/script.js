/**************************************************
Exercise 04: Age of aquariums

Here is a description of this template p5 project.
**************************************************/

"use strict";


let group = {
  clowns: [],
  numClowns: 13,

};

let user = {
    x: 350,
     y: 0,
     width: 30,
     height:40,
     vx: 0,
     vy: 2,
     speed: 4,
}

let state = `title`
let intro = `Use arrow keys to run away from the clowns and reach the exit!`
let intro2 = `click anywhere to start`
let exit = `exit`
let clear = `YOU RAN AWAY SUCCESSFULLY!`
let retry = `tap spacebar to retry`
let caught = `YOU GOT CAUGHT`

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
  background(0, 30, 0);
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
      textSize(22);
      textAlign(CENTER);
        fill(209, 153, 153);
        text(intro, width/2, height/2+110);
        text(intro2, width/2, height/2+200)
      }

      function gameplay(){
          simulation();
          move();
          checkForExit();
        }

        function gameover(){
        reset();
}

      function gameclear(){

        textSize(22);
        textAlign(CENTER);
          fill(209, 153, 153);
          text(clear, width/2, height/2+110);
          text(retry, width/2, height/2+200)

      reset();
}

  //Game States transition
function mousePressed(){
  if (state ===`title`)
    state = `gameplay`
}

function simulation(){

      textSize(100);
      textAlign(CENTER);
        fill(20, 60, 0);
        text(exit, width/2, 680);

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
  fill(20, 100, 20);
    rectMode(CENTER);
    rect(width/2, height/2, width, height-220);
  pop();
}

function userDisplay(){
fill(200,0,0);
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

function checkForClown(clown){
 if (dist(group.clown.x,group.clown.x,user.x,user.y) < 5) {
   state = `gameover`
   }
 }
