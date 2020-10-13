/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

var score = 0;

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
    height: 25,
    width: 10,
    vx: 2,
    vy: 2,
    speed: 1,
    fill: 255
}

let daggerLeft ={
  x:0,
  y:250,
  height: 10,
  width: 25,
  vx: 0,
  vy: 0,
  speed: 6,
  fill: 100,
}

let daggerRight ={
  x:0,
  y:250,
  height: 10,
  width: 25,
  vx: 0,
  vy: 0,
  speed: 6,
  fill: 200,
}

let carrot ={
  x:0,
  y:250,
  height: 50,
  width: 20,
  vx: 0,
  vy: 0,
  speed: 7,
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
  createCanvas(500,500);
  noStroke();
  imageMode(CENTER);

}

function draw() {
angleMode(DEGREES)

if (state === `title`) {
  text(titleString, width/2, height/2)

}

else if (state ===`gameplay`){
  background(20);
  simulation();
  objectMove();
}

if (state ===`almostgameover`){
  background(50);
  simulation2();
  objectMove();
}


if (state ===`gameover`){
  background(50,50,10);
  setupSimulation();
  image(img2hit, user.x, user.y,50,70);

}
}

function mousePressed(){
  if (state ===`title`)
    state = `gameplay`
  }

function simulation(){
  fill(200)
  text ("score = "+score,20,height-40)
  handleInput();
  move();
  setupSimulation();
  checkForCarrot();
  checkForDagger();

}

function simulation2(){
  fill(200)
  text ("score = "+score,20,height-40);
  handleInput();
  move();
  setupSimulation();
  checkForDagger2();
  checkForCarrot();

}

function setupSimulation(){

  push();
  translate(daggerRight.x, daggerRight.y);
    rotate(90);
    image(imgdagger, 0, 0,25,55);
    pop();
    push();
    translate(daggerLeft.x, daggerLeft.y);
      rotate(-90);
      image(imgdagger, 0, 0,25,55);
      pop();

  fill(daggerTop.fill)
  ellipse(daggerTop.x,daggerTop.y+10,daggerTop.width,daggerTop.height)

  fill(daggerLeft.fill)
  ellipse(daggerLeft.x,daggerLeft.y,daggerLeft.width,daggerLeft.height)

  fill(daggerRight.fill)
  ellipse(daggerRight.x,daggerRight.y,daggerRight.width,daggerRight.height)

  fill(carrot.fill)
  ellipse(carrot.x,carrot.y,carrot.width,carrot.height)

  noFill();
  ellipse(user.x,user.y+19, user.size+5, user.size-6);

  image(imgcarrot, carrot.x, carrot.y,25,55);

    image(imgdagger, daggerTop.x, daggerTop.y,25,55);

  user.x = constrain (user.x,65,width-65)
  user.y = constrain (user.y,65,height-65)

}

function objectMove(){

//daggerTop's movement (vertical drop)
daggerTop.y += daggerTop.vy + daggerTop.speed;
daggerTop.x = daggerTop.x

//daggerTop's spawn reset (comes back to the top once it reaches the bottom)
  if (daggerTop.y > height) {
      daggerTop.y = 0;
      daggerTop.x = random(0,width);
    }

  //daggerLeft's movement (vertical drop)
  daggerLeft.x += daggerLeft.vx + daggerLeft.speed
  daggerLeft.y = daggerLeft.y

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

  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <25) {
  state =  `almostgameover`;
  daggerTop.x = random(0,500)
  daggerTop.y = 0
}

 if (dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <25) {
  state =  `almostgameover`
  daggerLeft.x = random(0,500)
  daggerLeft.y = 0
}

 if (dist(user.x,user.y,daggerRight.x,daggerRight.y) <25) {
  state =  `almostgameover`
  daggerRight.x = random(0,500)
  daggerRight.y = 0
}
}

function checkForDagger2(){

  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <25) {
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

function move(){
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
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
