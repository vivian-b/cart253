/**************************************************
activity p5 looking for love
Pippin Barr

Here is a description of this template p5 project.
**************************************************/


let circleA ={
  x: 100,
  y: 300,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let circleB ={
  x: 300,
  y: 200,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let state = `title`

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
setupCircles();
}

function setupCircles() {
// separate circle positions
circleA.x = width / 3;
circleB.x = 2 * width / 3

//random movement
circleA.vx = random(-circleA.speed,circleA.speed)
circleB.vx = random(-circleB.speed,circleB.speed)
circleA.vy = random(-circleA.speed,circleA.speed)
circleB.vy = random(-circleB.speed,circleB.speed)
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
simulation();

if (state === `title`) {
title();
}

else if (state === `simulation`){
  simulation();
}
else if (state === `love`){
 love();
}
else if (state === `sadness`){
  sadness();
}

function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE`,width/2, height/2);
  pop();
}

function simulation(){
  move();
  checkOffscreen();
  checkOverlap();
  display();
}}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`ILY`,width/2, height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`F`,width/2, height/2);
  pop();
}

function move() {

  //circleA movement
  circleA.x += circleA.vx;
  circleA.y += circleA.vy;
  //circleB movement
  circleB.x += circleB.vx;
  circleB.y += circleB.vy;
}

function checkOffscreen() {
  //check if the circles have offscreen
if (circleA.x < 0 || circleA.x > width || circleA.y < 0||circleA.y > height ||
  circleB.x < 0 || circleB.x > width || circleB.y < 0||circleB.y > height){
state=`sadness`}}

// if (isOffscreen(circleA) || isOffscreen(circleB); {
// state = `sadness`;}
// }
//
// function isOffscreen(circle) {
//   if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height){
//     return true;
//   }
//   else {
//     return false;
//   }
// }

function checkOverlap() {
  let d = dist(circleA.x,circleA.y,circleB.x,circleB.y);
  if (d < circleA.size/2 + circleB.size/2){
    state = `love`
  }
}
function display (){
  //sad ending

  ellipse(circleA.x,circleA.y,circleA.size)
  ellipse(circleB.x,circleB.y,circleB.size)
}

function mousePressed(){
  if (state ===`title`) {
    state = `stimulation`
  }
}
