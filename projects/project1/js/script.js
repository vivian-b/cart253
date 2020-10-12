/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

var score = 0;

let user = {
  x: 250,
  y: 400,
  size: 65,
  fill: 100,
  vx: 0,
  vy: 0,
  speed: 4
};

  let daggerTop ={
    x:0,
    y:250,
    height: 50,
    width: 20,
    vx: 2,
    vy: 2,
    speed: 6,
    fill: 100,
    totalSegments: 10,
    segmentSize: 50,
    segmentSpacing:40,
}

let daggerLeft ={
  x:0,
  y:250,
  height: 20,
  width: 50,
  vx: 0,
  vy: 0,
  speed: 6,
  fill: 100,
  totalSegments: 10,
  segmentSize: 50,
  segmentSpacing:40,
}

let daggerRight ={
  x:0,
  y:250,
  height: 20,
  width: 50,
  vx: 0,
  vy: 0,
  speed: 6,
  fill: 200,
  totalSegments: 10,
  segmentSize: 50,
  segmentSpacing:40,
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

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {

if (state === `title`) {
  text(titleString, width/2, height/2)
}
else if (state ===`twolives`){
  push();
  background(50);
  simulation();
  display();
  pop();
  objectMove();
}
}

if(state ===`onelife`){
  push();
  background(100);
  simulation();
  display();
  pop();
  objectMove();
}

function mousePressed(){
  if (state ===`title`){
    state = `twolives`
  }
}

function simulation(){
  text ("score = "+score,20,height-40)
  handleInput();
  move();
  setupSimulation();
  checkForDagger();
  checkForCarrot();

}

function setupSimulation(){
  fill(daggerTop.fill)
  ellipse(daggerTop.x,daggerTop.y,daggerTop.width,daggerTop.height)

  fill(daggerLeft.fill)
  ellipse(daggerLeft.x,daggerLeft.y,daggerLeft.width,daggerLeft.height)

  fill(daggerRight.fill)
  ellipse(daggerRight.x,daggerRight.y,daggerRight.width,daggerRight.height)

  fill(carrot.fill)
  ellipse(carrot.x,carrot.y,carrot.width,carrot.height)

  user.x = constrain (user.x,100,350)
  user.y = constrain (user.y,100,350)

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
  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <22) {
    daggerTop.y = 0;
    daggerTop.x = random(0,100);
    daggerTop.vx = 0;
    daggerTop.vy = 0
}

if (dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <22) {
  daggerLeft.x = 0;
  daggerLeft.y = random(0,100)
}

if (dist(user.x,user.y,daggerRight.x,daggerRight.y) <22) {
  daggerRight.x = width
  daggerRight.y = random(0,100)
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

function display(){
  ellipse(user.x,user.y,user.size);
}


function handleInput(){
  //   if (keyIsDown(65)) { //left
  //     user.vx = -user.speed*2;
  //   }

  //   else if (keyIsDown(68)){ //right
  //     user.vx = user.speed*2;
  //   }

  //   else {
  //     user.vx = 0;
  //   }

  //   if (keyIsDown(87)) { //top
  //     user.vy = -user.speed;
  //   }

  //   else if (keyIsDown(83)){ //bottom
  //     user.vy = user.speed;
  //   }
  //   else {
  //     user.vy = 0;
  // }

  if (keyIsDown(LEFT_ARROW)) { //left
    user.vx = -user.speed*2;
  }

  else if (keyIsDown(RIGHT_ARROW)){ //right
    user.vx = user.speed*2;
  }

  else {
    user.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) { //top
    user.vy = -user.speed;
  }


  else if (keyIsDown(DOWN_ARROW)){ //bottom
    user.vy = user.speed;
  }
  else {
    user.vy = 0;
  }
}
