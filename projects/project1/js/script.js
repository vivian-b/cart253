/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

var score = 0;
let bg = (137, 237, 119);
let user = {
  x: 250,
  y: 400,
  size: 40,
  fill: 0,
  vx: 0,
  vy: 0,
  speed: 4,
  image:undefined
};

  let daggerTop ={
    x:0,
    y:250,
    height: 40,
    width: 18,
    vx: 2,
    vy: 2,
    speed: 8,
    fill: 255
}

let daggerLeft ={
  x:0,
  y:250,
  height: 24,
  width: 40,
  vx: 2,
  vy: 0,
  speed: 6,
  fill: 100,
}

let daggerRight ={
  x:0,
  y:250,
  height: 24,
  width: 35,
  vx: 3,
  vy: 0,
  speed: 7,
  fill: 200,
}

let carrot ={
  x:0,
  y:250,
  height: 50,
  width: 20,
  vx: 0,
  vy: 4,
  speed: 5,
  fill: 300
}

let titleString = `RunBunRun`;
let state = `title`

let img;
function preload(){
  img1 = loadImage("assets/images/bun_iddle.png")
  img1hit = loadImage("assets/images/bun_hit.png")
  img2hit = loadImage("assets/images/bun_dead.png")

  img1L = loadImage("assets/images/bun_LDash.png")
  img2L = loadImage("assets/images/bun_LDashHit.png")
  img1R = loadImage("assets/images/bun_RDash.png")
  img2R = loadImage("assets/images/bun_RDashHit.png")

  imgcarrot = loadImage("assets/images/carrot.png")
  imgdagger = loadImage("assets/images/dagger.png")
}

function setup() {
  createCanvas(700,500);
  noStroke();
  imageMode(CENTER);
  background(96, 202, 247);
}

function draw() {
angleMode(DEGREES)

if (state === `title`) {
  text(titleString, width/2, height/2)

}

else if (state ===`gameplay`){
  background(137, 219, 110);
  backgroundField();
  simulation();
  move();

}

if (state ===`almostgameover`){
  background(137, 219, 110);
  backgroundField();
  simulation2();
  move();

}


if (state ===`gameover`){
  background(137, 219, 110);
  backgroundField();
  image(img2hit, user.x, user.y,50,70);

  setupSimulation();

    fill(55, 163, 41)
    text ("score = "+score,20,height-40);
}
}

function mousePressed(){
  if (state ===`title`)
    state = `gameplay`
  }

function simulation(){
  handleInput();
  setupSimulation();
  checkForCarrot();
  checkForDagger();

  fill(55, 163, 41)
  text ("score = "+score,20,height-40);
}

function simulation2(){
  handleInput();
  setupSimulation();
  checkForDagger2();
  checkForCarrot();

  fill(55, 163, 41)
  text ("score = "+score,20,height-40);
}

function setupSimulation(){

noFill();
  ellipse(daggerTop.x,daggerTop.y+10,daggerTop.width,daggerTop.height)

  ellipse(daggerLeft.x+10,daggerLeft.y,daggerLeft.width,daggerLeft.height)

  ellipse(daggerRight.x-10,daggerRight.y,daggerRight.width,daggerRight.height)

  ellipse(carrot.x,carrot.y,carrot.width,carrot.height)

  ellipse(user.x,user.y+19, user.size+5, user.size-6);

  push();
  translate(daggerRight.x, daggerRight.y);
    rotate(90);
    image(imgdagger, 0, 0,25,60);
    pop();

  push();
    translate(daggerLeft.x, daggerLeft.y);
      rotate(-90);
      image(imgdagger, 0, 0,25,60);
      pop();

      image(imgdagger, daggerTop.x, daggerTop.y,25,65);

  image(imgcarrot, carrot.x, carrot.y,25,60);


  user.x = constrain (user.x,65,width-65)
  user.y = constrain (user.y,65,height-65)


}


function handleInput(){

  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed*2;

    if (state === `gameplay`){
    image(img1L, user.x, user.y,60,70);
}
    else if (state ===`almostgameover`){
    image(img2L, user.x, user.y,60,70);
    }
  }

  else if (keyIsDown(RIGHT_ARROW)){
    user.vx = user.speed*2;

  if (state === `gameplay`){
    image(img1R, user.x, user.y,60,70);
  }
    else if (state ===`almostgameover`){
    image(img2R, user.x, user.y,60,70);
    }
  }

  else {
    user.vx = 0;

    if (state === `gameplay`){
    image(img1, user.x, user.y,50,70);
}
    else if (state ===`almostgameover`){
    image(img1hit, user.x, user.y,50,70);
    }
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

//daggerTop's movement (vertical drop)
daggerTop.y += daggerTop.vy + daggerTop.speed;
daggerTop.x = daggerTop.x

//daggerTop's spawn reset (comes back to the top once it reaches the bottom)
  if (daggerTop.y > height) {
      daggerTop.y = 0;
      daggerTop.x = random(0,width);
    }

//daggerLeft's movement (horizontal swing)
  daggerLeft.x += daggerLeft.vx + daggerLeft.speed

  //daggerLeft's spawn reset (comes back to the top once it reaches the bottom)
    if (daggerLeft.x > width) {
        daggerLeft.x = 0;
        daggerLeft.y = random(0,height);
      }

      daggerRight.x -= daggerRight.vx + daggerRight.speed
      daggerRight.y = daggerRight.y


      //daggerLeft's spawn reset (comes back to the top once it reaches the bottom)
        if (daggerRight.x < 0) {
            daggerRight.x = width;
            daggerRight.y = random(0,height);
          }

  //daggerTop's movement (vertical drop)
  carrot.y += carrot.vy + carrot.speed
  carrot.x = carrot.x

  //daggerTop's spawn reset (comes back to the top once it reaches the bottom)
    if (carrot.y > height) {
        carrot.y = 0;
        carrot.x = random(30,width-30);
      }
}


function checkForDagger(){
  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <20) {
  state =  `almostgameover`;
  daggerTop.x = random(0,500)
  daggerTop.y = 0
}

 if (dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <28) {
  state =  `almostgameover`
  daggerLeft.x = random(0,500)
  daggerLeft.y = 0
}

 if (dist(user.x,user.y,daggerRight.x,daggerRight.y) <28) {
  state =  `almostgameover`
  daggerRight.x = random(0,500)
  daggerRight.y = 0
}
}

function checkForDagger2(){

  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <20 || dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <28 || dist(user.x,user.y,daggerRight.x,daggerRight.y) <28){
  state =  `gameover`;
}
}

function checkForCarrot(){
if (dist(user.x,user.y,carrot.x,carrot.y) <22) {
  score+= 1
  carrot.y = 0
  carrot.x = random(200,width-50)
}
}

function backgroundField(){
  push();
  fill(255, 228, 191);
  strokeWeight(7);
  stroke(255, 217, 145);
  rectMode(CENTER);
    rect(width/2, height/2, 560, 350, 20);
  pop();
}
